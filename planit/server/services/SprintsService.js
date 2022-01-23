import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SprintsService {
  async getById(id) {
    const foundSprint = await dbContext.Sprint.find({ projectId: id }).populate('creator')
    if (!foundSprint) {
      throw new BadRequest('null checking issue')
    }
    return foundSprint
  }

  async getBySprintId(id) {
    const foundSprint = await dbContext.Sprint.findById(id).populate('creator')
    if (!foundSprint) {
      throw new BadRequest('null checking issue')
    }
    return foundSprint
  }

  async create(body) {
    const newSprint = await dbContext.Sprint.create(body)
    return newSprint.populate('creator')
  }

  async remove(sprintId, userId) {
    const sprint = await this.getBySprintId(sprintId)
    if (sprint.creatorId.toString() !== userId) {
      throw new Forbidden('you cannot delete this sprint')
    }
    await dbContext.Sprint.findByIdAndDelete(sprintId)
  }
}

export const sprintsService = new SprintsService()

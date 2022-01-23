import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ProjectsService {
  async getAllProjects(query = {}) {
    return await dbContext.Project.find(query).populate('creator')
  }

  async getById(id) {
    const project = await dbContext.Project.findById(id).populate('creator')
    if (!project) {
      throw new BadRequest('Invalid id man!')
    }
    return project
  }

  async create(body) {
    const newProject = await dbContext.Project.create(body)
    return newProject.populate('creator')
  }

  async remove(projectId, userId) {
    const project = await this.getById(projectId)
    if (project.creatorId.toString() !== userId) {
      throw new Forbidden('you do not have the credentials to delete this project')
    }
    await dbContext.Project.findByIdAndDelete(projectId)
  }
}
export const projectsService = new ProjectsService()

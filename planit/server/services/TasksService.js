import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class TasksService {
  async getTasks(id) {
    const foundTask = await dbContext.Task.find({ projectId: id }).populate('creator')
    if (!foundTask) {
      throw new BadRequest('null checking issue')
    }
    return foundTask
  }

  async getTaskById(id) {
    const foundTask = await dbContext.Task.findById(id).populate('creator')
    if (!foundTask) {
      throw new BadRequest('null checking issue')
    }
    return foundTask
  }

  async create(body) {
    const newTask = await dbContext.Task.create(body)
    return newTask.populate('creator')
  }

  async edit(body) {
    const task = await this.getTaskById(body.id)
    if (task.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('you shall not pass')
    }
    const updatedTask = dbContext.Task.findOneAndUpdate({ _id: body.id, creatorId: body.creatorId }, body, { new: true })
    return updatedTask
  }

  async removeTask(taskId, userId) {
    const task = await this.getTaskById(taskId)
    if (task.creatorId.toString() !== userId) {
      throw new Forbidden('you cannot delete this task')
    }
    await dbContext.Task.findByIdAndDelete(taskId)
  }
}

export const tasksService = new TasksService()

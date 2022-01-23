import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'

export class TasksController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:projectId/tasks', this.getTasks)
      .post('/:projectId/tasks', this.create)
      .put('/:projectId/tasks/:taskId', this.edit)
      .delete('/:projectId/tasks/:taskId', this.removeTask)
  }

  async getTasks(req, res, next) {
    try {
      const tasks = await tasksService.getTasks(req.params.projectId)
      return res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const task = await tasksService.create(req.body)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      req.body.id = req.params.taskId
      const task = await tasksService.edit(req.body)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async removeTask(req, res, next) {
    try {
      const userId = req.userInfo.id
      const taskId = req.params.taskId
      res.send('you have deleted this task')
      await tasksService.removeTask(taskId, userId)
    } catch (error) {
      next(error)
    }
  }
}

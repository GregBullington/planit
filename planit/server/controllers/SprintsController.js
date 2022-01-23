import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintsService } from '../services/SprintsService'
import BaseController from '../utils/BaseController'

export class SprintsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:projectId/sprints', this.getbyId)
      .post('/:projectId/sprints', this.create)
      .delete('/:projectId/sprints/:id', this.remove)
  }

  async getbyId(req, res, next) {
    try {
      const sprint = await sprintsService.getById(req.params.projectId)
      return res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const sprint = await sprintsService.create(req.body)
      return res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const userId = req.userInfo.id
      const sprintId = req.params.id
      await sprintsService.remove(sprintId, userId)
      res.send('you have deleted this sprint')
    } catch (error) {
      next(error)
    }
  }
}

import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('/api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:projectId/notes', this.getNotes)
      .post('/:projectId/notes', this.createNote)
      .delete('/:projectId/notes/:noteId', this.removeNote)
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const note = await notesService.createNote(req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async getNotes(req, res, next) {
    try {
      const notes = await notesService.getNotes(req.params.projectId)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async removeNote(req, res, next) {
    try {
      const userId = req.userInfo.id
      const noteId = req.params.noteId
      res.send('you have deleted this note')
      await notesService.removeNote(noteId, userId)
    } catch (error) {
      next(error)
    }
  }
}

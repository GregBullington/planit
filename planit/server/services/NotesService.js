import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class NotesService {
  async createNote(body) {
    const newNote = await dbContext.Note.create(body)
    return newNote.populate('creator')
  }

  async getNoteById(id) {
    const foundNote = await dbContext.Note.findById(id).populate('creator')
    if (!foundNote) {
      throw new BadRequest('null checking issue')
    }
    return foundNote
  }

  async getNotes(id) {
    const foundNote = await dbContext.Note.find({ projectId: id }).populate('creator')
    if (!foundNote) {
      throw new BadRequest('null checking issue')
    }
    return foundNote
  }

  async removeNote(noteId, userId) {
    const note = await this.getNoteById(noteId)
    if (note.creatorId.toString() !== userId) {
      throw new Forbidden('you cannot delete this note')
    }
    await dbContext.Note.findByIdAndDelete(noteId)
  }
}

export const notesService = new NotesService()

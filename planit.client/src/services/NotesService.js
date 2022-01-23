import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

// NOTE NEED ROUTE FOR CREATE IN NOTESCOMPONENT and the whole note to send
class NotesService {
  async createNote(pId, note){
    const res = await api.post(`api/projects/${pId}/notes`, note)
    AppState.notes = [...AppState.notes, res.data]
  }
  // NOTE need a task id on the body like the task for the sprints
  async getNotesForProject(pId){
    const res = await api.get(`api/projects/${pId}/notes`)
    AppState.notes = res.data
  }
  async removeNote(note){
    await api.delete(`api/projects/${note.projectId}/notes/${note.id}`)
    AppState.notes = AppState.notes.filter(n => n.id !== AppState.notes.id)
    this.getNotesForProject(note.projectId)
    
  }


}

export const notesService = new NotesService()
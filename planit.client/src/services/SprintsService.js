import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintsService {
  async createSprint(id, sprint) {
    const res = await api.post(`api/projects/${id}/sprints`, sprint)
    AppState.sprints = [...AppState.sprints, res.data]
  }
  async getSprints(id) {
    const res = await api.get(`api/projects/${id}/sprints`)
    AppState.sprints = res.data
  }
  async removeSprint(pId, id) {
    await api.delete(`api/projects/${pId}/sprints/${id}`)
    AppState.sprints = AppState.sprints.filter(s => s.id !== id)
    this.getSprints(pId)
  }

}

export const sprintsService = new SprintsService()
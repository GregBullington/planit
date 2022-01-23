import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProjectsService {
  async createProject(newProject) {
    const res = await api.post('api/projects', newProject)
    AppState.projects = [...AppState.projects, res.data]
    // NOTE
    AppState.activeProject = res.data
  }

  async getAllProjects() {
    const res = await api.get('api/projects')
    AppState.projects = res.data
  }

  async getProjectById(id) {
    const res = await api.get('api/projects/' + id)
    AppState.activeProject = res.data
  }
  async removeProject(id){
     await api.delete('api/projects/' + id)
    AppState.projects = AppState.projects.filter(p => p.id !== AppState.projects.id)
    
   
  }
}

export const projectsService = new ProjectsService()
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { sprintsService } from "./SprintsService"


class TasksService {
  async createTask(task, pId) {
    const res = await api.post(`api/projects/${pId}/tasks`, task)
    AppState.tasks = [...AppState.tasks, res.data]
  }
  async getTasksByProjectId(pId) {
    const res = await api.get(`api/projects/${pId}/tasks`)
    AppState.tasks = res.data
  }
  async removeTask(task) {
    await api.delete(`api/projects/${task.projectId}/tasks/${task.id}`)
    AppState.tasks = AppState.tasks.filter(t => t.id !== task.id)
    this.getTasksByProjectId(task.projectId)
  }
  async toggleCheckbox(pId, task) {
    task.isComplete = !task.isComplete
    const res = await api.put(`api/projects/${pId}/tasks/${task.id}`, task)

  }
  async moveSprint(task, sprintId) {
    // NOTE edit task. re assign it to the new sprint id.
    task.sprintId = sprintId
    // NOTE send the edited task object to the api. 
    await api.put(`api/projects/${task.projectId}/tasks/${task.id}`, task)
    // NOTE re get the tasks to update the page 
    await this.getTasksByProjectId(task.projectId)


  }

}

export const tasksService = new TasksService()
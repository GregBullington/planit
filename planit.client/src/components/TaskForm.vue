<template>
  <form @submit.prevent="createTask()">
    <label>Task Name</label>
    <input
      type="text"
      placeholder="Task Name..."
      name="task"
      id="task"
      class="form-control"
      v-model="task.name"
    />
    <label>Task Weight</label>
    <input
      type="number"
      placeholder="Task Weight..."
      name="weight"
      id="weight"
      class="form-control"
      v-model="task.weight"
    />

    <button type="submit" title="Submit">Submit</button>
  </form>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { tasksService } from "../services/TasksService"
import { AppState } from "../AppState"
import { Modal } from "bootstrap"
import { useRoute } from "vue-router"
export default {

  setup(props) {
    let activeSprintId = computed(() => AppState.activeSprintId)
    let task = ref({ sprintId: activeSprintId, isComplete: false })


    const route = useRoute()
    return {
      task,
      route,
      async createTask() {
        try {
          await tasksService.createTask(task.value, route.params.id)
          Modal.getOrCreateInstance(
            document.getElementById("TaskForm")
          ).hide();
          task.value = { sprintId: activeSprintId, isComplete: false }
        } catch (error) {
          logger.error(error)
          Pop.toast('error')
        }
      },
      project: computed(() => AppState.activeProject),
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
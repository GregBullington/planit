<template>
  <div class="row m-2 border border-dark p-2 align-items-center">
    <div class="col d-flex justify-content-start align-items-center w-100">
      <input
        v-model="task.isComplete"
        class="form-check-input me-4 selectable"
        type="checkbox"
        name=""
        id="chkbx"
        @click="toggleCheckbox()"
        title="Click to Complete"
      />
      <h5 class="m-0">{{ task.name }}</h5>
      <i
        class="mdi mdi-trash-can-outline mdi-24px selectable ms-4 text-danger"
        v-if="account.id === task.creatorId"
        @click="removeTask(task)"
        title="Delete"
      ></i>
    </div>
    <div class="row justify-content-between">
      <div class="col-md-4 d-flex">
        <div class="m-2">
          <p>
            <i
              title="Open Task Notes"
              class="
                mdi mdi-comment-text-multiple-outline mdi-24px
                text-info
                selectable
              "
              data-bs-toggle="offcanvas"
              href="#notes-offcanvas"
              @click="setactiveTask()"
            ></i>
          </p>
        </div>
        <div class="m-2 d-flex">
          <p>
            {{ task.weight }}
          </p>
          <span>
            <i class="mdi mdi-weight mdi-24px text-info"></i>
          </span>
        </div>
      </div>

      <div class="dropdown col-md-5">
        <button
          title="Move Task"
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Move This Task
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li
            v-for="sprint in sprints"
            :key="sprint.id"
            class="selectable"
            title="Move to"
          >
            <a class="dropdown-item" @click="moveSprint(task, sprint.id)">{{
              sprint.name
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { tasksService } from "../services/TasksService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { notesService } from "../services/NotesService"
export default {
  props: {
    task: Object
  },
  setup(props) {
    const route = useRoute()
    return {
      async moveSprint(task, sprintId) {
        try {
          await tasksService.moveSprint(task, sprintId)
        } catch (error) {
          logger.error(error)
          Pop.toast('error')
        }
      },
      sprints: computed(() => AppState.sprints),
      account: computed(() => AppState.account),
      setactiveTask() {
        AppState.activeTaskId = props.task.id
      },
      route,
      project: computed(() => AppState.projects),
      async toggleCheckbox() {
        try {
          await tasksService.toggleCheckbox(route.params.id, props.task)
        } catch (error) {
          logger.error(error)
          Pop.toast("Somthing went wrong!", 'error')
        }
      },
      async removeTask(task) {
        try {
          if (await Pop.confirm('Are you sure you want to delete this task?')) {
            await tasksService.removeTask(task)
            Pop.toast('You have deleted this task!', 'success')
          }

        } catch (error) {
          logger.error(error)
          Pop.toast('error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
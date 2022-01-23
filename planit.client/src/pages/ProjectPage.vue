<template>
  <div class="row">
    <div class="col-2 mt-3 ms-0 p-0" id="edit-div">
      <button
        class="btn gradient text-light px-5"
        data-bs-toggle="offcanvas"
        href="#projects-offcanvas"
        style="font-size: 45px"
        title="Open All Projects"
      >
        P
      </button>
    </div>
    <div class="col-md-9 my-4">
      <div class="row align-items-center">
        <h1 style="font-size: 60px">{{ activeProject.name }}</h1>
      </div>
      <div class="row">
        <p>{{ activeProject.description }}</p>
      </div>
      <div class="row align-items-center">
        <div class="col-md-8 my-5">
          <h3 class="gradient-text">Sprints</h3>
          <p>
            Group your tasks into sprints for over-arching collections for
            better organization.
          </p>
        </div>
        <div class="col-md-4 text-end">
          <button
            style="font-size: 18px"
            class="
              btn btn-lg
              rounded
              btn-outline-custom
              gradient-text
              px-5
              mb-3
            "
            data-bs-toggle="modal"
            data-bs-target="#SprintsForm"
            title="create-sprint"
          >
            Add Sprint
          </button>
        </div>
      </div>
      <div
        class="row"
        v-for="(sprint, index) in sprints"
        :key="sprint.id"
        :index="index"
      >
        <SingleSprint :sprint="sprint" :index="index" />
      </div>
      <ProjectsComponent />
      <NotesComponent :note="notes" />
    </div>
  </div>
  <Modal id="ProjectForm">
    <template #modal-title> Create Project! </template>

    <template #modal-body> <ProjectForm /> </template>
  </Modal>
  <Modal id="SprintsForm">
    <template #modal-title> Create Sprint </template>

    <template #modal-body> <SprintsForm /> </template>
  </Modal>
  <Modal id="TaskForm">
    <template #modal-title> Create Task </template>

    <template #modal-body> <TaskForm /> </template>
  </Modal>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted, watchEffect } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { projectsService } from "../services/ProjectsService"
import { useRoute } from "vue-router"
import { tasksService } from "../services/TasksService"
import { notesService } from "../services/NotesService"
export default {
  setup() {
    const route = useRoute()
    watchEffect(async () => {
      try {
        if (route.params.id) {
          await projectsService.getProjectById(route.params.id)
          await tasksService.getTasksByProjectId(route.params.id)
          await notesService.getNotesForProject(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast("Something went wrong", 'error')
      }
    })
    return {
      projects: computed(() => AppState.projects),
      activeProject: computed(() => AppState.activeProject),
      account: computed(() => AppState.account),
      sprints: computed(() => AppState.sprints),
      notes: computed(() => AppState.notes)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
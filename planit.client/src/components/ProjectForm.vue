<template>
  <div class="row">
    <form @submit.prevent="createProject()">
      <div class="col">
        <div class="row">
          <div class="col mt-3">
            <p class="m-0"><b>Name</b></p>
            <input class="form-control mb-4 bg-lighter" type="text"
            name:="projectTitle" placeholder="Name..." v-model="project.name" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="m-0"><b>Description</b></p>
            <textarea
              style="resize: none"
              class="form-control mb-5 bg-lighter"
              name="project-body"
              rows="5"
              placeholder="Description..."
              v-model="project.description"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col text-end">
          <button
            title="Cancel"
            type="button"
            class="btn rounded bg-none ms-2 px-5"
          >
            Cancel
          </button>
          <button
            type="submit"
            title="Submit"
            class="btn rounded gradient ms-2 px-5 text-light"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { projectsService } from "../services/ProjectsService"
import { Modal } from "bootstrap";
import { useRoute } from "vue-router";
import { watchEffect } from "@vue/runtime-core";
import { router } from "../router";
import { AppState } from "../AppState";
export default {
  setup() {
    const route = useRoute()

    const project = ref({})
    return {
      activeProject: computed(() => AppState.activeProject),
      project,
      async createProject() {
        try {
          await projectsService.createProject(project.value)
          Modal.getOrCreateInstance(document.getElementById("ProjectForm")).hide();
          project.value = {}
          router.push({
            name: 'ProjectPage', params: { id: AppState.activeProject.id }
          })
        } catch (error) {
          logger.error(error)
          Pop.toast("Something is not right", 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
input:focus,
textarea:focus {
  box-shadow: none;
}
</style>
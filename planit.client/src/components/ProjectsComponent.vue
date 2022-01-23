<template>
  <div class="Projects">
    <form class="input-group" action="">
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="projects-offcanvas"
        aria-labelledby="create-project"
      >
        <div class="offcanvas-header">
          <h4 class="offcanvas-title" id="offcanvasWithBackdropLabel">
            Projects
          </h4>
          <button
            type="button"
            title="Close"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body container-fluid scrollbar-ripe-malinka">
          <div class="row align-items-center" v-for="p in projects" :key="p.id">
            <div class="me-auto col-8 selectable" title="Open Project">
              <router-link
                :to="{ name: 'ProjectPage', params: { id: p.id } }"
                @click="closeCanvas()"
              >
                {{ p.name }}
              </router-link>
            </div>
            <div class="col-2" v-if="account.id === p.creatorId" title="Delete">
              <i
                class="mdi mdi-trash-can-outline mdi-24px selectable"
                @click="removeProject(p.id)"
              ></i>
            </div>
          </div>
        </div>
        <div class="text-end">
          <!-- <button
            class="btn rounded mx-3 my-2 gradient"
            data-bs-toggle="modal"
            data-bs-target="#ProjectForm"
            title="Create Project"
            @click="closeCanvas()"
          >
            Create
          </button> -->
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import *as bootstrap from "bootstrap"
import { projectsService } from "../services/ProjectsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { Offcanvas } from "bootstrap"
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRouter } from "vue-router"
export default {
  // props: {projects: {type: Object, required: true}},
  setup() {
    const router = useRouter()
    return {
      closeCanvas() {
        const myOffcanvas = Offcanvas.getOrCreateInstance(document.getElementById('projects-offcanvas'))
        myOffcanvas.hide()
      },
      async removeProject(id) {
        try {
          if (await Pop.confirm("Are you sure you want to Delete your project?", 'confirm')) {
            await projectsService.removeProject(id)
            router.push({ name: 'Home' })
          }
        } catch (error) {
          logger.error(error)
          Pop.toast("Somthing went wrong", 'error')
        }
      },
      projects: computed(() => AppState.projects),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
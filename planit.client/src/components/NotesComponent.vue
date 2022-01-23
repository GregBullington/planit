<template>
  <div class="Notes">
    <form class="input-group" action="">
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="notes-offcanvas"
        aria-labelledby="create-note"
      >
        <div class="offcanvas-header">
          <button
            title="Close"
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <h4 class="offcanvas-title" id="offcanvasWithBackdropLabel">Notes</h4>
        </div>
        <div class="offcanvas-body container-fluid scrollbar-ripe-malinka">
          <div class="row align-items-center">
            <div class="col">
              <form class="" @submit.prevent="createNote()">
                <input
                  v-model="note.body"
                  class="form-control"
                  type="text"
                  id="note"
                  placeholder="Say something..."
                /><button type="submit" title="Submit" class="gradient rounded">
                  <i class="mdi mdi-send text-light"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="row" v-for="n in notes" :key="n.id">
            <div class="col m-2">
              <SingleNote :note="n" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { notesService } from "../services/NotesService"
import { AppState } from "../AppState"
import { Offcanvas } from "bootstrap"
import { watchEffect } from "@vue/runtime-core"
export default {
  props: {
    note: {
      type: Array
    }
  },

  setup(props) {
    const route = useRoute()
    const note = ref({})
    return {
      route,
      note,
      notes: computed(() => AppState.notes.filter(n => n.taskId == AppState.activeTaskId)),
      activeTaskId: computed(() => AppState.activeTaskId),
      async createNote() {
        try {
          note.value.taskId = AppState.activeTaskId
          await notesService.createNote(route.params.id, note.value)
          note.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast("Something went wrong!", 'error')
        }
      },
      closeCanvas() {
        const myOffcanvas = Offcanvas.getOrCreateInstance(document.getElementById('notes-offcanvas'))
        myOffcanvas.hide()
      },

    }
  }
}
</script>


<style lang="scss" scoped>
</style>
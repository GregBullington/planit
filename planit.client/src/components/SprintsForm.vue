<template>
  <div class="Sprint-form-component">
    <form @submit.prevent="createSprint()">
      <label>Sprint Name</label>
      <input
        type="text"
        placeholder="Sprint Name..."
        name="sprint"
        id="sprint"
        class="form-control mb-4"
        v-model="sprint.name"
      />
      <button
        class="btn rounded gradient ms-2 px-5 text-light"
        type="submit"
        title="Submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { watchEffect } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { sprintsService } from "../services/SprintsService"
import { useRoute } from "vue-router"
import { Modal } from "bootstrap"
export default {
  setup() {
    const sprint = ref({})
    const route = useRoute()
    watchEffect(async () => {
      try {
        if (route.params.id) {
          await sprintsService.getSprints(route.params.id)
        }
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      sprint,
      async createSprint() {
        try {
          await sprintsService.createSprint(route.params.id, sprint.value)
          Modal.getOrCreateInstance(
            document.getElementById("SprintsForm")
          ).hide();
          sprint.value = {}
        } catch (error) {
          logger.error(error)
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
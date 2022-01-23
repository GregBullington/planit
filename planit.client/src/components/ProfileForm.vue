<template>
  <div class="profile form component">
    <form @submit.prevent="edit(account)">
      <label for="">Profile Picture</label>
      <input
        type="url"
        placeholder="Profile Image Url..."
        name="picture"
        id="picture"
        class="form-control mb-2"
        required
        v-model="account.picture"
      />
      <label for="">Name</label>
      <input
        type="text"
        placeholder="Name Here..."
        name="name"
        id="name"
        class="form-control mb-2"
        required
        v-model="account.name"
      />
      <label for="">Title</label>
      <input
        type="text"
        placeholder="Title..."
        name="bio"
        id="bio"
        class="form-control mb-2"
        required
        v-model="account.title"
      />
      <button type="submit" class="btn btn-secondary">Update</button>
    </form>
  </div>
</template>


<script>
import { Modal } from "bootstrap"
import { accountService } from "../services/AccountService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      async edit(account) {
        try {
          await accountService.edit(account);
          Modal.getOrCreateInstance(document.getElementById('ProfileForm')).hide();
        } catch (error) {
          logger.error(error)
          Pop.toast('account issue')
        }
      },

      account: computed(() => AppState.account),
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
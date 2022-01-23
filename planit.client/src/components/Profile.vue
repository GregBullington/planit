<template>
  <div class="component">
    <div>
      <img class="mt-1 pic ms-2" :src="account.picture" />
    </div>
    <span
      ><h6 class="ms-2">Name: {{ account.name }}</h6></span
    >
    <p class="ms-2">Title: {{ account.title }}</p>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {

  setup() {
    return {

      account: computed(() => AppState.account),
    }
  }
}
</script>


<style lang="scss" scoped>
.pic {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
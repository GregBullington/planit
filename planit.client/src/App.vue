<template>
  <header>
    <Navbar />
  </header>
  <main class="site-font container-fluid">
    <router-view />
  </main>
  <footer class="bg-grey">

  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>

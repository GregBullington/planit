<template>
  <header>
    <Navbar />
  </header>
  <main class="site-font container-fluid">
    <router-view />
  </main>
  <footer class="bg-grey">
    <div class="gradient-text site-font text-center p-4">
      Made By Greg and Scott
    </div>
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

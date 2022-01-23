<template>
  <div class="row" v-if="!account.id">
    <div class="text-center mt-5">
      <h1>Please Login</h1>
    </div>
  </div>
  <!--Login End-->
  <Modal id="ProjectForm">
    <template #modal-title> Create Project! </template>

    <template #modal-body> <ProjectForm /> </template>
  </Modal>
  <div class="row justify-content-center" v-if="account.id">
    <div class="col-md-10 card elevation-2 my-5 p-5">
      <div class="row align-items-center">
        <div class="col-md-6 mb-5">
          <h3 class="gradient-text">Projects</h3>
          <p style="font-size: 18px">
            A list of all projects for - <b>{{ account.name }}</b>
          </p>
        </div>
        <div class="col-md-6 text-end mb-5">
          <button
            class="btn btn-lg rounded btn-outline-custom gradient-text px-5"
            data-bs-toggle="modal"
            data-bs-target="#ProjectForm"
            title="create-project"
          >
            Create Project
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-4 my-2">
          <h5 class="gradient-text2">
            Name
            <hr />
          </h5>
        </div>
        <div class="col-4 my-2">
          <h5 class="gradient-text2">
            Members
            <hr />
          </h5>
        </div>
        <div class="col-4 my-2">
          <h5 class="gradient-text2">
            Started
            <hr />
          </h5>
        </div>
      </div>
      <div class="row" v-for="p in projects" :key="p.id">
        <div class="col-4 my-2">
          <h2 title="Open Project">
            <router-link :to="{ name: 'ProjectPage', params: { id: p.id } }">
              {{ p.name }}
            </router-link>
          </h2>
        </div>
        <div class="col-4 my-2">
          <div>
            <img class="img-container" :src="p.creator.picture" alt="" />
          </div>
        </div>
        <div class="col-3 my-2">
          <div>
            {{ new Date(p.creator.updatedAt).toDateString() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState"
import { computed, onMounted } from "@vue/runtime-core"

export default {
  // NOTE onmounted for getting account info 
  name: 'Home',
  setup() {
    return {
      projects: computed(() => AppState.projects),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

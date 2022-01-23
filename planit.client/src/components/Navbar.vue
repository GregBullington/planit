<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light px-3 elevation-3">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div
        title="Go to Home"
        class="d-flex flex-row align-items-center text-dark site-font"
      >
        <img src="../assets/img/planit-logo.png" alt="" />
        <h1 class="gradient-text mt-3">PlanIt</h1>
      </div>
    </router-link>
    <button
      class="navbar-toggler black"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <span class="navbar-text ms-auto">
        <button
          class="
            btn
            selectable
            text-dark
            lighten-30
            text-uppercase
            my-2 my-lg-0
            site-font
          "
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown my-2 my-lg-0" v-else>
          <div
            class="dropdown-toggle selectable"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="authDropdown"
          >
            <span
              style="font-size: 23px"
              class="mx-3 text-dark lighten-30 site-font gradient-text"
              title="Manage Account / Logout"
              >{{ account.name }}</span
            >
            <img
              title="Edit Profile"
              :src="user.picture"
              alt="user photo"
              height="40"
              class="ms-3 img-container selectable"
              data-bs-toggle="modal"
              data-bs-target="#ProfileForm"
            />
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            aria-labelledby="authDropdown"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Manage Account
              </div>
            </router-link>
            <div
              class="
                list-group-item list-group-item-action
                hoverable
                text-danger
              "
              @click="logout"
            >
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
  <Modal id="ProfileForm">
    <template #modal-title> Edit your profile here! </template>

    <template #modal-body><Profile /> <ProfileForm /> </template>
  </Modal>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.black {
  background-color: #9a19dd;
}
</style>

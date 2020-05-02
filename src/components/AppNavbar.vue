<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <!-- <a class="nav-link active" href="">Home</a> -->
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="username">
          <router-link to="/editor" class="nav-link"
            ><i class="ion-compose"></i>&nbsp;New Post</router-link
          >
        </li>
        <li class="nav-item" v-if="username">
          <router-link to="/settings" class="nav-link"
            ><i class="ion-gear-a"></i>&nbsp;Settings</router-link
          >
        </li>
        <li class="nav-item" v-if="username">
          <router-link :to="'@'+ username" class="nav-link">{{
            username
          }}</router-link>
        </li>
        <li class="nav-item" v-if="!username">
          <router-link to="/login" class="nav-link">Sing In</router-link>
        </li>
        <li class="nav-item" v-if="!username">
          <router-link to="/register" class="nav-link">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import users from "@/store/modules/users";

@Component
export default class AppNavbar extends Vue {
  get username() {
    return users.getUserName;
  }
  created() {
    //console.log("username:", this.username);
  }
}
</script>

<style lang="css" scoped>
.navbar-light .navbar-nav .nav-link.router-link-exact-active {
  color: rgba(0, 0, 0, 0.8);
}
</style>

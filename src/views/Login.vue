<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <router-link to="/register">Not have an account?</router-link>
          </p>

          <ul class="error-messages" v-if="serverError">
            <li>{{ serverError }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              @click="login()"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import users from "@/store/modules/users";

@Component
export default class Login extends Vue {
  email = "";
  password = "";
  serverError = "";

  login() {
    users
      .login({
        email: this.email,
        password: this.password
      })
      .then(() => this.$router.push("/"))
      .catch(err => {
        console.error(err.message);
        this.serverError = err.message;
      });
  }
}
</script>

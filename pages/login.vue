<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h2>Login to your account</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div class="card-body">
        <div class="alert alert-danger" role="alert" v-if="message">
          {{ message }}
        </div>

        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" type="text" class="form-control" name="email" v-model="form.email" required autocomplete="email">
            <div v-if="errors?.email" class="text-danger">{{ errors.email.shift() }}</div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" name="password" v-model="form.password" required autocomplete="new-password">
            <div v-if="errors?.password" class="text-danger">{{ errors.password.shift() }}</div>
          </div>

          <div class="form-check form-checkbox">
            <input type="checkbox" class="form-check-input" id="keepLogin">
            <label class="form-check-label" for="keepLogin">Keep me logged in</label>
          </div>

          <div class="d-grid gap-2 btn-login">
            <button class="btn btn-primary" type="submit" :disabled="form.processing">
              Login
              <span class="material-symbols-rounded forward-icon">&#xe941;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <auth-firebase />
  </div>
</template>

<script>
export default {
  data: () => ({
    message: '',
    form: {
      processing: false,
    },
    errors: []
  }),
  method: {
    submit() { },
    vuefire(msg) {
      this.message = msg;
    }
  }
}
</script>
<style scoped>

.btn-primary {
  background: #ff6b00 !important;
}
</style>

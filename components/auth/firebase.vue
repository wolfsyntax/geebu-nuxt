<script setup></script>

<template>
  <div>
    <div class="row mb-0 text-center" :class="$route.name === 'login' ? 'select-login' : 'select-register'">
      <div class="col-md-12 continue-with">
        <p><span>Or Continue with</span></p>
      </div>
      <button @click="login('google')" class="google btn"><img src="~/assets/sign-in-with-google.svg" width="20" height="20" alt="Sign up with Google">Sign up with Google</button>
      <button @click="login('facebook')" class="facebook"><img src="~/assets/sign-in-with-facebook.svg" width="20" height="20" alt="Sign up with Facebook">Sign up with Facebook</button>
      <div class="forgot-password" v-if="$route.name === 'login'">
        <a href="/forgot">I Forgot my Password</a>
      </div>
      <div class="no-account" v-if="$route.name === 'login'">
        <p>Don’t have an account? <a href="/register">Sign up</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  mounted()
  {
    
  },
  methods: {
    login(type)
    {
      
    }
  }
}
</script>
<style scoped></style>

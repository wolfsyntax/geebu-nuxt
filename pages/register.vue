<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div>
    <section class="register">
      <div class="container-fluid" v-if="!$route.query.id">
        <div id="registerCarouselBanner" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#registerCarouselBanner" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#registerCarouselBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#registerCarouselBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
            </div>
            <div class="carousel-item">
            </div>
            <div class="carousel-item">
            </div>
          </div>
        </div>

        <div class="register-form">
          <div class="logo">
            <a href="/"><img src="/assets/geebu-logo.svg" width="175" height="46" alt="Logo"></a>
          </div>
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submit">
                                                 <!-- Choose account type -->
             <div v-if="showRadioButtons">                                  
                <div class="row row-checkbox">
                  <div class="col-md-12">
                    <h3 class="account-type">Account Type</h3>
                    <p class="account-description">Please choose your Account Type to create an account.</p>
                  </div>

                  <div class="col-md-12">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="accountType" id="accountType" v-model="form.account_type" value="customers" >
                      <label :class="{ 'selected': form.account_type === 'customers' }" class="form-check-label" for="accountType">
                      I'm a Customer
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="accountType" id="accountType" v-model="form.account_type" value="artists" >
                      <label :class="{ 'selected': form.account_type === 'artists' }" class="form-check-label" for="accountType">
                      I'm an Artist
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="accountType" id="accountType" v-model="form.account_type" value="organizer">
                      <label :class="{ 'selected': form.account_type === 'organizer' }" class="form-check-label" for="accountType">
                      I'm an Organizer
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="accountType" id="accountType" v-model="form.account_type" value="service-provider" >
                      <label :class="{ 'selected': form.account_type === 'service-provider' }" class="form-check-label" for="accountType">
                      Offers Services
                      </label>
                    </div>
                    <div v-for="error in errors?.account_type" :key="error" class="text-danger">{{ error }}</div>
                    <div class="d-grid gap-2 btn-account-type">
                      <button class="btn btn-primary"
                       @click.prevent="submitAccountType" 
                      :disabled="!isAccountTypeSelected">
                        Next
                        <span class="material-symbols-rounded forward-icon">
                        &#xe941;
                      </span>
                      </button>
                    </div>
                    <div class="have-account">
                        <p class="text-center">Already have an Account?</p><a href="/login">Log In</a>
                    </div>
                  </div>
                </div>
                </div>

              <div v-if="!showRadioButtons">
                <div class="card-header">
                <h2>Create your account</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div class="alert alert-danger" role="alert" v-if="message">
                {{ message }}
              </div>
                                   <!-- User inputs -->
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input id="email" :type="form.login_type" class="form-control" name="email" v-model="form.email" required autocomplete="email" autofocus>
                  <div v-for="error in errors?.email" :key="error" class="text-danger">{{ error }}</div>
                </div>

                <div class="form-group">
                  <label for="name">First Name</label>
                  <input id="name" type="text" class="form-control " name="name" v-model="form.first_name" required autocomplete="first-name">
                  <div v-for="error in errors?.first_name" :key="error" class="text-danger">{{ error }}</div>
                </div>

                <div class="form-group">
                  <label for="name">Last Name</label>
                  <input id="name" type="text" class="form-control " name="name" v-model="form.last_name" required autocomplete="last-name" autofocus>
                  <div v-for="error in errors?.last_name" :key="error" class="text-danger">{{ error }}</div>
                </div>

                <div class="form-group">
                  <label for="username">Username</label>
                  <input id="username" type="text" class="form-control" name="username" v-model="form.username" required autocomplete="username">
                  <div v-for="error in errors?.username" :key="error" class="text-danger">{{ error }}</div>
                </div>

                <div class="form-group">
                  <label for="phone">Mobile number</label>
                  <input id="phone" type="text" class="form-control" name="phone" v-model="form.phone" required autocomplete="phone" placeholder="+63">
                  <div v-for="error in errors?.phone" :key="error" class="text-danger">{{ error }}</div>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" type="password" class="form-control" name="password" v-model="form.password" required autocomplete="new-password">
                  <div v-for="error in errors?.password" :key="error" class="text-danger">{{ error }}</div>
                </div>

                <div class="form-group">
                  <label for="password-confirm">Confirm Password</label>
                  <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="form.password_confirmation" required autocomplete="new-password">
                  <!-- <div v-if="errors?.password_confirmation" class="text-danger">{{ errors.password_confirmation.shift() }}</div> -->
                </div>

                <div class="form-check form-checkbox">
                  <input type="checkbox" class="form-check-input" v-model="agree_term" id="agreed_id"/>
                  <label class="form-check-label" for="agreed_id">
                  &nbsp; I agree to all the <a href="/terms">Terms</a> and <a href="/policy">Privacy policy</a></label>
                </div>

                <div class="d-grid gap-2 btn-sign-up">
                  <button class="btn btn-primary" type="submit"
                  :disabled="!agree_term && !isDisabled">
                    Create Account
                    <span class="material-symbols-rounded forward-icon">
                        &#xe941;
                      </span>
                  </button>
                </div>

                <social-button :account_type="form.account_type" @request="setMessage"/>

                </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
      <verify-card v-else/>
      <!-- <div class="container-fluid" v-else>
      <form @submit.prevent="confirm">
        <div class="">
          <div class="row">
            <div class="col">
              <label for="username">Verification Code</label>
                <input id="verifyCode" max="6" type="text" class="form-control" name="verifyCode" v-model="verifyCode" required autocomplete="off">  
                <span v-if="verifyMessage" class="text-danger">{{ verifyMessage }}</span>
            </div>
            
            <button @click.prevent="resendCode">Resend Code {{ $filters.timer(countdown) }}</button>
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div> -->
    </section>
  </div>
</template>

<style scoped></style>

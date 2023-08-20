<script lang="ts" setup></script>

<template>
  <section class="home-slider">
    <div class="container">
      <div id="home-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="~/assets/home/home-slider-1.webp" class="d-block w-100" 
            alt="Book your Events/Artist, Create your song now let's make magic in music!">

            <div class="carousel-caption d-none d-md-block">
              <h1>Book your Events/Artist, Create your song now let's make magic in music!</h1>
              <p>Custom tunes for any mood, and booking the best artists just got easier with our website!</p>

              <div v-if="isLoggedIn"><a href="/create-song" class="btn btn-primary btn-lg">Create your song</a></div>
              <div v-else>
                <a href="#" class="btn btn-primary btn-lg" @click="openSignupModal" data-bs-toggle="modal" data-bs-target="#mustSignUp">
                  Create your song
                </a>
              </div>

            </div>
          </div>

          <div class="carousel-item">
            <img src="~/assets/home/home-slider-2.webp" class="d-block w-100" 
              alt="Find a perfect artists to make a custom song and create amazing memories to your event">
          
            <div class="carousel-caption d-none d-md-block">
              <h3>Find a perfect artists to make a custom song and create amazing memories to your event</h3>
              <p>Custom tunes for any mood, and booking the best artists just got easier with our website!</p>

              <div v-if="isLoggedIn"><a href="/artist" class="btn btn-primary btn-lg">Find your artist</a></div>

              <div v-else>
                <a href="#" class="btn btn-primary btn-lg"
                  @click="openSignupModal" data-bs-toggle="modal" data-bs-target="#mustSignUp">
                  Find your artist
                </a>
              </div>
            </div>

            <div class="animate-section">
              <div class="animate-left">
                <img src="~/assets/home/slider-2-animation-1.webp" class="d-block w-100" alt="Playing guitar">
                <img src="~/assets/home/slider-2-animation-2.webp" class="d-block w-100" alt="Playing guitar">
                <img src="~/assets/home/slider-2-animation-3.webp" class="d-block w-100" alt="Singing">
                <img src="~/assets/home/slider-2-animation-4.webp" class="d-block w-100" alt="Playing guitar">
                <img src="~/assets/home/slider-2-animation-5.webp" class="d-block w-100" alt="Singing">
                <img src="~/assets/home/slider-2-animation-6.webp" class="d-block w-100" alt="Playing guitar">
              </div>

              <div class="animate-right">
                <img src="~/assets/home/slider-2-animation-7.webp" class="d-block w-100" alt="Playing guitar">
                <img src="~/assets/home/slider-2-animation-8.webp" class="d-block w-100" alt="Playing guitar">
                <img src="~/assets/home/slider-2-animation-9.webp" class="d-block w-100" alt="Singing">
                <img src="~/assets/home/slider-2-animation-10.webp" class="d-block w-100" alt="Playing guitar">
                <img src="~/assets/home/slider-2-animation-11.webp" class="d-block w-100" alt="Singing">
                <img src="~/assets/home/slider-2-animation-12.webp" class="d-block w-100" alt="Playing guitar">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="~/assets/home/home-slider-3.webp" class="d-block w-100" 
              alt="Need a Professional Equipment for your Event?">

            <div class="carousel-caption d-none d-md-block">
              <h3>Need a Professional Equipment for your Event?</h3>
              <p>We offer a wide range of equipment rental options, including sound systems, lighting, staging, and more.</p>

              <div v-if="isLoggedIn"><a href="/services" class="btn btn-primary btn-lg">Our Services</a></div>
            
              <div v-else>
                <a href="#" class="btn btn-primary btn-lg" @click="openSignupModal" data-bs-toggle="modal" data-bs-target="#mustSignUp">
                  Our Services
                </a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="~/assets/home/home-slider-4.webp" class="d-block w-100" 
              alt="Noo worries if you're unsure how to create an event - we've got you covered! Come and easily create your own event with us today.">
          
            <div class="carousel-caption d-none d-md-block content-4">
              <h3>No worries if you're unsure how to create an event - we've got you covered! Come and easily create your own event with us today.</h3>
              <p>We offer a wide range of equipment rental options, including sound systems, lighting, staging, and more.</p>

              <div v-if="isLoggedIn"><a href="/partners" class="btn btn-primary btn-lg">Get Started</a></div>

              <div v-else>
                <a href="#" class="btn btn-primary btn-lg" @click="openSignupModal" data-bs-toggle="modal" data-bs-target="#mustSignUp">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      
        <button class="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
          <i class="material-icons"><span class="material-symbols-outlined prev">&#xE5CB;</span></i>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
          <i class="material-icons"><span class="material-symbols-outlined next">&#xE5CC;</span></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    isLoggedIn: false,
  }),
  methods: {
    openSignupModal() {
      
    },
    togglePresentationVideo()
    {
      
    },
    toggleTestimonialVideo()
    {
      
    }
  }
}
</script>
<style scoped></style>

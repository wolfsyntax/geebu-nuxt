<script setup></script>

<template>
  <div>
    <section class="auth">
      <div class="container-fluid">

        <div id="authCarouselBanner" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#authCarouselBanner" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#authCarouselBanner" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#authCarouselBanner" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
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

        <div class="auth-form">
          <div class="logo">
            <a href="/"><img src="~/assets/geebu-logo.svg" width="175" height="46" alt="Logo"></a>
          </div>
          <slot />
          
        </div>
      </div> <!-- end of container -->
    </section>
  </div>
</template>

<style scoped></style>

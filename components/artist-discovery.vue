<script lang="ts" setup></script>

<template>
  <section class="discover-artist">
    <div class="container">
      <h2>Discover the Easy Way to Book Your Dream Artist </h2>
      <p class="sub-heading">Lorem ipsum dolor sit amet consectetur. Hac vulputate ut adipiscing diam malesuada ultrices id.</p>

      <div class="wrapper">
        <div class="row available-artist">
          <div class="col-lg-6 col-xl-6 col-xxl-6">
            <div class="content">
              <h3>Choose available artist to perform in your event</h3>
              <p>Our platform allows you to choose from a wide selection of available artists who are ready to make your event unforgettable.</p>
            
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>

              <a href="/artist" class="btn btn-primary btn-lg">Find your artist</a>
            </div>
          </div>

          <div class="col-lg-6 col-xl-6 col-xxl-6">
            <div id="availableArtist" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#availableArtist" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              
                <button type="button" data-bs-target="#availableArtist" data-bs-slide-to="1" aria-label="Slide 2"></button>
              
                <button type="button" data-bs-target="#availableArtist" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="~/assets/home/available-artist-slider-1.webp" class="d-block w-100" loading="lazy" alt="Choose available artist">
                </div>

                <div class="carousel-item">
                  <img src="~/assets/home/available-artist-slider-2.webp" class="d-block w-100" loading="lazy" alt="Choose available artist">
                </div>

                <div class="carousel-item">
                  <img src="~/assets/home/available-artist-slider-3.webp" class="d-block w-100" loading="lazy" alt="Choose available artist">
                </div>
              </div>
            </div>
          </div>
        </div> <!-- end of row -->

        <div class="row book-your-event">
          <div class="col-lg-6 col-xl-6 col-xxl-6">
            <div id="bookYourEvent" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#bookYourEvent" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#bookYourEvent" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#bookYourEvent" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="~/assets/home/book-event-slider-1.webp" class="d-block w-100" loading="lazy" alt="Choose available artist" >
                </div>

                <div class="carousel-item">
                  <img src="~/assets/home/book-event-slider-2.webp" class="d-block w-100" loading="lazy" alt="Choose available artist">
                </div>

                <div class="carousel-item">
                  <img src="~/assets/home/book-event-slider-3.webp" class="d-block w-100" loading="lazy" alt="Choose available artist">
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-xl-6 col-xxl-6">
            <div class="content">
              <h3>Set and book your event</h3>
              <p>With our platform, you can easily set and book your event, ensuring that everything runs smoothly from start to finish.</p>

              <ul>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>

              <a href="/events" class="btn btn-primary btn-lg">Book Now</a>
            </div>
          </div>
        </div> <!-- end of row -->
      </div>
    </div>
  </section>
</template>

<style scoped></style>

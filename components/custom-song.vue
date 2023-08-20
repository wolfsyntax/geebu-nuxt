<script lang="ts" setup></script>

<template>
  <section class="custom-song" ref="customSongSection">
    <div class="container">
      <h2 class="title">A Custom Song in 3 Simple Steps</h2>

      <div class="row">
        <div id="custom-song-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#custom-song-carousel" data-bs-slide-to="0" class="active" 
              aria-current="true" aria-label="Slide 1">
                <span class="number1">1</span>
            </button>
          
            <button type="button" data-bs-target="#custom-song-carousel" data-bs-slide-to="1" aria-label="Slide 2">
              <span class="number2">2</span>
            </button>

            <button type="button" data-bs-target="#custom-song-carousel" data-bs-slide-to="2" aria-label="Slide 3">
              <span class="number3">3</span>
            </button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-ride="carousel" data-bs-interval="3500">
              <div class="row">
                <div class="col-lg-6 col-xl-5 col-xxl-5">
                  <div class="carousel-caption d-none d-md-block step1">
                    <h3>Share your Story</h3>
                    <p>
                      Tell us who the song is for or what it’s all about. Artist just need a little inspiration to make it trully custom and unique.
                    </p>

                    <a href="/create-song" class="btn btn-primary btn-lg">Create your song</a>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-7 col-xxl-7">
                  <div class="customg-song-img">
                    <img src="~/assets/home/your-song.webp" class="d-block w-100" loading="lazy" alt="Custom song">
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="3500">
              <div class="row">
                <div class="col-lg-6 col-xl-5 col-xxl-5">
                  <div class="carousel-caption d-none d-md-block step2">
                    <h3>Find an artist. Create your song</h3>
                    <p>Select the artist you want. Then pick your preffered genre, tempo, and mood so that they can get started.</p>
                    <a href="/create-song" class="btn btn-primary btn-lg">Create your song</a>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-7 col-xxl-7">
                  <div class="customg-song-img">
                    <img src="~/assets/home/your-song.webp" class="d-block w-100" loading="lazy" alt="Custom song">
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="3500">
              <div class="row">
                <div class="col-lg-6 col-xl-5 col-xxl-5">
                  <div class="carousel-caption d-none d-md-block step3">
                    <h3>Make your music</h3>
                    <p>Any story can inspire a song. Let us guide you through the creation process and make a song.</p>
                    <a href="/create-song" class="btn btn-primary btn-lg">Create your song</a>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-7 col-xxl-7">
                  <div class="customg-song-img">
                    <img src="~/assets/home/your-song.webp" class="d-block w-100" loading="lazy" alt="Custom song">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end of row -->
    </div>
  </section>

</template>

<style scoped></style>

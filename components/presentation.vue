<script lang="ts" setup></script>

<template>
  <section class="geebu-presentation">
    <div class="container">
      <div class="row">
        <h2 class="text-center title">Unlock the Rhythm of Your Celebrations!</h2>

        <div class="col-6">
          <p class="content">
            Experience the Ultimate Fusion of Creativity and Entertainment with Geebu Create Your Custom Song, Tailored Exclusively 
            for Your Special Event or Party. Connect with Talented Artists Ready to Elevate Your Celebrations to Unforgettable Heights. 
            Get Started Today and Let the Music Speak the Language of Your Joy!"
          </p>

          <ul>
            <li v-for="feature in geebuFeatures" :key="feature">{{ feature }}</li>
          </ul>

          <a href="/login" class="btn btn-primary btn-lg learn-more">Learn more</a>
        </div>

        <div class="col-6">
          <div class="video-container">
            <video width="778" height="440.693" ref="videoPlayer" @click="togglePresentationVideo" :poster=videoThumbnail>
              <source :src="presentationVideo" type="video/mp4">
            </video>

            <div class="play-button" v-if="!isPlaying" @click="togglePresentationVideo">
              <img src="~/assets/video-play-icon.svg" alt="Click to play the video">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    presentationVideo: '~/assets/videos/geebu-presentation.mp4',
    videoThumbnail: '~/assets/home/presentation-thumbnail-image.webp',
    geebuFeatures: [
      'Create a Song', 'Booked Artist for Special Occasions and Events', 'Post Events', 'Hire Artist for your Events',
      'Post your Original and Cover Songs', 'Listen to Artist songs'
    ],
    isPlaying: false,
  }),
  methods: {
    togglePresentationVideo()
    {

    },
  }
}
</script>
<style scoped></style>

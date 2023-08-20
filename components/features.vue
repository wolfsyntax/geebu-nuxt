<script setup></script>

<template>
  <div>
    <slider />
    <presentation />
    <custom-song />
    <ArtistDiscovery />
    <occasion-list />


    <section class="testimonials">
      <div class="container">
        <h2>Customer’s Reviews & Reactions</h2>
        <p class="sub-heading">Lorem ipsum dolor sit amet consectetur. Hac vulputate ut adipiscing diam malesuada ultrices id.</p>

        <div id="testimonialsSlider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="500000">
          <ol class="carousel-indicators">
            <li v-for="(review, index) in reviews" :key="index" data-bs-target="#testimonialsSlider" :data-bs-slide-to="index" :class="{ 'active': index === activeIndex }" @click="changeVideo(index)"></li>
          </ol>

          <div class="carousel-inner">
            <div v-for="(review, index) in reviews" :key="index" :class="['carousel-item', { 'active': index === activeIndex }]" data-bs-interval="500000">
              <div class="row">
                <div class="col-6">
                  <div class="video-container">
                    <div class="video">
                      <video :src="review.video" ref="videos" @click="toggleTestimonialVideo(index)"></video>
                      <div class="play-button" v-if="!review.playing" @click="toggleTestimonialVideo(index)">
                        <i class="material-icons"><span class="material-symbols-outlined">play_arrow</span></i>
                      </div>
                    </div>
                  </div>
                </div> <!-- end of col-6-->

                <div class="col-6">
                  <div class="carousel-caption d-none d-md-block">
                    <p>{{ review.testimonial }}</p>
                    <h6>{{ review.user }}</h6>
                  </div>
                </div>
              </div> <!-- end of row -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoggedIn: false,
    geebuFeatures: [
      'Create a Song', 'Booked Artist for Special Occasions and Events', 'Post Events', 'Hire Artist for your Events',
      'Post your Original and Cover Songs', 'Listen to Artist songs'
    ],
    videoThumbnail: null,
    
    reviews: [
      {
        video: 'https://video.wixstatic.com/video/8fd47a_61de9ebf0ad64f0fa93d72e4279551f7/1080p/mp4/file.mp4',
        testimonial: '“Pellentesque maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.”',
        user: 'Courtney Henry - Our Client'
      },
      {
        video: 'https://repitsocial.com/wp-content/uploads/2023/04/repitsocial-featured-video.mp4',
        testimonial: '“Pellentesque maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.”',
        user: 'Courtney Henry - Our Client'
      },
      {
        video: 'https://res.cloudinary.com/daorvtlls/video/upload/v1686648918/Figma_in_5__Auto_Layout_hddmey.mp4',
        testimonial: '“Figma in Five: Auto-Layout”',
        user: 'Roger'
      }
    ],
    presentationVideo: '/assets/videos/geebu-presentation.mp4',
    isPlaying: false,
    videoThumbnail: '/assets/home/presentation-thumbnail-image.webp',
    observer: null,
    activeIndex: 0,
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

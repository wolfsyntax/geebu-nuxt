<script lang="ts" setup></script>

<template>
  <section class="songs-for-occasion">
    <div class="container">
      <h2>Songs for every Occasion</h2>
      <p class="sub-heading">Lorem ipsum dolor sit amet consectetur. Hac vulputate ut adipiscing diam malesuada ultrices id.</p>
    
      <div class="row">
        <div class="col-4" v-for="occasion in occasions" :key="occasion.typeOfOccasion">
          <OccasionCard :occasion="occasion" />
        </div>
      </div>

      <div class="button-wrapper">
        <a href="/events" class="btn btn-primary btn-lg">See All Occasion</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    occasions: [
      {
        image: '/assets/home/birthdays.webp',
        altText: 'birthdays',
        typeOfOccasion: 'Birthdays',
        numberOfSong: 100
      },
      {
        image: '/assets/home/weddings.webp',
        altText: 'weddings',
        typeOfOccasion: 'Weddings',
        numberOfSong: 100
      },
      {
        image: '/assets/home/valentines.webp',
        altText: 'valentines',
        typeOfOccasion: 'Valentines',
        numberOfSong: 100
      }
    ],
  })
}
</script>
<style scoped></style>

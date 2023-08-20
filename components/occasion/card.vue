<script lang="ts" setup></script>

<template>
  <div>
    <img :src="occasion.image" class="img-fluid" loading="lazy" :alt="occasion.altText">

    <div class="content">
      <h5>{{ occasion.typeOfOccasion }}</h5>
      <p>{{ occasion.numberOfSong }} Playlists</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    occasion: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped></style>

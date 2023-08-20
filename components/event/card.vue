<script lang="ts" setup></script>

<template>
  <div class="card">
    <div class="bg-wrapper">
      <img :src="event.image" class="img-fluid card-bg" loading="lazy" alt="Event image">
    
      <div class="organized-by">
        <img :src="event.organizerImage" class="float-start" alt="Organized by logo">
      
        <div>
          <h5>{{ event.organizer }}</h5>
          <p>Organized by</p>
        </div>
      </div>
    </div> <!-- end of bg-wrapper -->

    <div class="card-body">
      <h5 class="card-title">{{ event.name }} 
        <span v-if="event.cost" class="badge free">Free</span>
        <span v-else class="badge paid">Paid</span>
      </h5>
      <p class="card-text">{{ event.description }}</p>
      <p class="location">
        <i class="material-icons"><span class="material-symbols-outlined">location_on</span></i>
        <span class="text">{{ event.location }}</span>
      </p>

      <p class="date">
        <i class="material-icons"><span class="material-symbols-outlined">calendar_month</span></i>
        <span class="orange-text">{{ event.date }}</span>
      </p>

      <p class="time">
        <i class="material-icons"><span class="material-symbols-outlined">schedule</span></i>
        <span class="orange-text">{{ event.time }}</span>
      </p>

      <a href="#" class="btn btn-primary">View Details</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped></style>

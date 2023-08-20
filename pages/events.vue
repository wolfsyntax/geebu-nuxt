<script lang="ts" setup></script>

<template>
  <div>
    <section class="events">
      <div class="container-fluid">
        <div class="container">
          <div class="content">
            <h2>Let's make some noise<br> and create unforgettable<br> moments</h2>
            <p>Custom tunes for any mood, and booking the best artists just<br> got easier with our website!</p>
            <a href="#" class="btn btn-primary">Find Event Planner</a>
          </div>
        </div>
        <div class="hidden-img">
          <img src="/assets/events/events-hidden-bg.webp" class="img-fluid" alt="Send yourself a reminder">
        </div>
      </div>
    </section>
    
    <event-list />
    <faq />
  </div>
</template>
<script>
definePageMeta({
    
})

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0' }
  ]
})
export default {
  
}
</script>
<style scoped></style>

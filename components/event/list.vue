<script lang="ts" setup></script>

<template>
  <div>
    <section class="events-showing">
      <div class="container">
        <h3>Events</h3>
        <p class="sub-heading">Collaborate with a professional independent artist to turn your story into one-of-a-kind custom song</p>
        <div class="row top-row">
          <div class="col-6">
            <a href="#" class="btn btn-primary filter"><i class="material-icons"><span class="material-symbols-outlined next">sort</span></i>Filter</a>
          </div>
          
          <div class="col-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for Events" aria-label="Search for Events" aria-describedby="button-addon2">
              <button class="btn btn-success border-rad" type="button" id="button-addon2">
                <i class="material-icons"><span class="material-symbols-outlined next">search</span></i>
              </button>
            </div>
          </div>

          <div class="col-4">
            <h5>Type of Event</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Music Festival Events</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="col-4">
            <h5>Location</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Naga City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="col-4">
            <h5>Cost</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Free</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div> <!-- end of row -->

        <!-- Upcoming Events -->
        <div class="row">
          <div class="col-4" v-for="(event, index) in events" :key="index">
            <event-card :event="event" />
          </div>
        </div>                                                   
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        id: 1,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423572/available-event-bg-1_p0gkss.webp',
        name: 'Sneaker Con Bay Area',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis. Sit suscipit natoque molestie nulla orci',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: true,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      },
      {
        id: 2,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423571/available-event-bg-2_glbbpx.webp',
        name: 'SM City Naga',
        description: 'Sziget is a massive island festival in Budapest. Today, it’s one of Europe’s biggest and best music festivals.',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: false,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'Naga LGU',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687754799/diamond_tnvz7y.webp'
      },
      {
        id: 3,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423572/available-event-bg-3_c1uxu3.webp',
        name: 'Legazpi Sawangan Park',
        description: 'Coachella is a common household name in music events. This is perhaps the most famous festival in the world, and also one of the greatest events',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: false,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'Facade Hotel',
        organizerImage: 'https://yt3.ggpht.com/yti/AHyvSCDjcNUmq7Ei-mklDFbjyPOH83Rgwhzg9eoFXRAgXA=s88-c-k-c0x00ffffff-no-rj-mo'
      },
      {
        id: 4,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1686465779/samples/cloudinary-group.jpg',
        name: 'SM City Legazpi',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis...',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: false,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      },
      {
        id: 5,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423571/available-event-bg-2_glbbpx.webp',
        name: 'Albay Astrodome',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis...',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: false,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      },
      {
        id: 6,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423572/available-event-bg-3_c1uxu3.webp',
        name: 'Bagasbas Beach',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis...',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: true,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      },
      {
        id: 7,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1686465779/samples/cloudinary-group.jpg',
        name: 'SM City Legazpi',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis...',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: false,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      },
      {
        id: 8,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423571/available-event-bg-2_glbbpx.webp',
        name: 'Albay Astrodome',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis...',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: false,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      },
      {
        id: 9,
        image: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687423572/available-event-bg-3_c1uxu3.webp',
        name: 'Bagasbas Beach',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit suscipit natoque molestie nulla orci. Quam bibendum euismod consequat facilisis...',
        location: 'Naga City, Cam. Sur Philippines',
        date: 'Saturday, June 12,2023',
        time: '8:00pm - 12:00 pm',
        cost: true,
        typeOfEvent: ['Music Festival Events', 'Concert'],
        organizer: 'KC Event Organizer',
        organizerImage: 'https://res.cloudinary.com/daorvtlls/image/upload/v1687491614/organized-by-logo_ybzrzs.svg'
      }
    ]
  })
}
</script>
<style scoped></style>

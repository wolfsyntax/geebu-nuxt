<script lang="ts" setup></script>

<template>
  <div>
    <header class="main-nav">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand logo" :href="home">
            <img src="/assets/geebu-logo.svg" alt="Geebu logo">
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="!isLoggedIn">
            <li class="nav-item" v-for="(item, index) in navItems" :key="index">
              <a class="nav-link" :href="item.link">{{ item.page }}</a>
            </li>
          </ul>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else>
            <li class="nav-item" v-for="(customer, index) in navItems" :key="index" v-if="userRole === 'customers'">
              <a class="nav-link" :href="customer.link">{{ customer.page }}</a>
            </li>

<li class="nav-item" v-for="(artist, index) in navItemsArtists" :key="index" v-if="userRole === 'artists'">
<a class="nav-link" :href="artist.link">{{ artist.page }}</a>
</li>

<!-- <li class="nav-item" v-for="(organizer, index) in navItemsOrganizers" :key="index" v-if="userRole === 'organizers'">
<a class="nav-link" :href="organizer.link">{{ organizer.page }}</a>
</li> -->

</ul>

<div class="float-end nav-button" v-if="!isLoggedIn">
<a :href="login" class="btn btn-primary log-in">Log In</a>
<a :href="signUp" type="button" class="btn btn-secondary sign-up">Sign Up</a>
</div>
<div class="float-end nav-button" v-else>
<!-- <h2 v-if="userRole === 'artists'">Artist</h2>
<h2 v-else-if="userRole === 'customers'">Customer</h2>
<h2 v-else-if="userRole === 'organizers'">Organizer</h2> -->

<!-- CUSTOMERS MENU AND DROPDOWN -->

<div v-if="userRole === 'customers'" class="d-flex align-items-center customers">
<a href="#"><span class="material-symbols-outlined bell-icon">&#xe7f4;</span></a>
<a href="#"><span class="material-symbols-outlined">&#xe8cc;</span></a>

<div class="dropdown dropstart">
<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
<img :src="myAccount.avatar" alt="artist profile">
<i class="material-icons"><span class="material-symbols-rounded">&#xe313;</span></i>
</button>
<ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
<li>
<div class="artist-info">
<img :src="myAccount.avatar" alt="artist profile">
<div class="artist-name">
<p class="name">{{ userInfo.business_name }}</p>
<p class="email">{{ userInfo.business_email }}</p>
<a class="dropdown-item view-profile" href="">View Profile</a>
</div>
</div>
</li>
<li><hr class="dropdown-divider"></li>
<li v-for="(customer, index) in customersDropdown" :key="index">
<i class="material-icons"><span class="material-symbols-rounded">{{ customer.icon }}</span></i>
<a class="dropdown-item" :href="customer.link">{{ customer.name }}</a>
</li>
<li><hr class="dropdown-divider"></li>
<li class="logout-wrapper">
<span class="material-icons">repeat</span>
<a class="dropdown-item logout" href="#" @click.prevent="logout">Switch Account</a>
</li>
<li class="logout-wrapper">
<i class="material-icons"><span class="material-symbols-rounded">logout</span></i>
<a class="dropdown-item logout" href="#" @click.prevent="logout">Logout</a>
</li>
</ul>
</div> <!-- end of dropdown -->
</div> <!-- end of user role for customers -->

<!-- ARTISTS MENU AND DROPDOWN -->

<div v-if="userRole === 'artists'" class="d-flex align-items-center artists">
<a href="#" class="btn btn-primary upgrade" 
@click="openModal"
data-bs-toggle="modal" data-bs-target="#selectPlanModal">Upgrade Plan</a>
<a href="#"><span class="material-symbols-outlined bell-icon">&#xe7f4;</span></a>

<div class="dropdown dropstart">
<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
<img :src="myAccount.avatar" alt="artist profile">
<i class="material-icons"><span class="material-symbols-rounded">&#xe313;</span></i>
</button>
<ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
<li>
<div class="artist-info">
<img :src="myAccount.avatar" alt="artist profile">
<div class="artist-name">
<p class="name">{{ userInfo.business_name }}</p>
<p class="email">{{ userInfo.role }}</p>
<a class="dropdown-item view-profile" href="/artist">View Profile</a>
</div>
</div>
</li>
<li><hr class="dropdown-divider"></li>
<li v-for="(artist, index) in artistsDropdown" :key="index">
<i class="material-icons"><span class="material-symbols-outlined">{{ artist.icon }}</span></i>
<a class="dropdown-item" :href="artist.link">{{ artist.name }}</a>
</li>
<li><hr class="dropdown-divider"></li>
<li class="logout-wrapper">
<span class="material-icons">repeat</span>
<a class="dropdown-item logout" href="#" @click.prevent="logout">Switch Account</a>
</li>
<li class="logout-wrapper">
<i class="material-icons"><span class="material-symbols-rounded">logout</span></i>
<a class="dropdown-item logout" href="#" @click.prevent="logout">Logout</a>
</li>
</ul>
</div> <!-- end of dropdown -->
</div> <!-- end of user role for artists -->


</div> <!-- end v-else -->

</div>
</div>
</nav>

</header>

  </div>
</template>

<style scoped></style>

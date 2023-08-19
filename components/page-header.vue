<script lang="ts" setup></script>

<template>
  <div>
    <header class="main-nav">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand logo" :href="home">
            <img src="~/assets/geebu-logo.svg" alt="Geebu logo">
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

            <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else-if="userRole === 'customers'">
              <li class="nav-item" v-for="(customer, index) in navItems" :key="index" >
                <a class="nav-link" :href="customer.link">{{ customer.page }}</a>
              </li>
            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else-if="userRole === 'artists'">
              <li class="nav-item" v-for="(artist, index) in navItemsArtists" :key="index" >
                <a class="nav-link" :href="artist.link">{{ artist.page }}</a>
              </li>
            </ul>

            <div class="float-end nav-button" v-if="!isLoggedIn">
              <a :href="login" class="btn btn-primary log-in">Log In</a>
              <a :href="signUp" type="button" class="btn btn-secondary sign-up">Sign Up</a>
            </div>

            <div class="float-end nav-button" v-else>
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
                <a href="#" class="btn btn-primary upgrade" @click="openModal"
                  data-bs-toggle="modal" data-bs-target="#selectPlanModal">
                  Upgrade Plan
                </a>

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

<script>
export default {
  data: () => ({
    userRole: 'artists',
    myAccount: {
      avatar: '',
    },
    isLoggedIn: false, 
    userInfo: {
      business_name: '',
      business_email: '',
      role: 'artists'
    },
    navItems: [
      { page: 'Home', link: '/' },
      { page: 'Create a Song', link: '/create-song' },
      { page: 'Artist', link: '/artists' },
      { page: 'Events', link: '/events' },
      { page: 'Services', link: '/services' },
      // { page: 'Partner With Us', link: '/partners' }
    ],
    navItemsArtists: [
      { page: 'Home', link: '/' },
      { page: 'Library', link: '/library' },
      { page: 'Artist', link: '/artists' },
      { page: 'Organizers', link: '/organizers' },
      { page: 'Events', link: '/events' }
    ],
    customersDropdown: [
      // change all icons name to &#x + Code point
      { icon: 'account_circle', name: 'Account Settings', link: '' },
      { icon: 'mail', name: 'Message', link: '' },
      { icon: 'library_music	', name: 'My Songs', link: '/' },
      { icon: 'event_available', name: 'My Bookings', link: '/' },
      // { icon: 'queue_music', name: 'My Proposals', link: '/'},
      { icon: 'help', name: 'Help Center', link: '/' },
    ],
    artistsDropdown: [
      { icon: 'account_circle', name: 'Account Settings', link: '/account/setting' },
      // { icon: 'mail', name: 'Message', link: '/message'},
      { icon: 'library_music	', name: 'Customized Songs', link: '/create-song' },
      { icon: 'event_available', name: 'My Bookings', link: '/' },
      // { icon: 'queue_music', name: 'My Proposals', link: '/'},
      { icon: 'upgrade', name: 'My Subscription', link: '/' },
      // { icon: 'help', name: 'Help Center', link: '/'},
    ],
    home: '/',
    createSong: '/create-song',
    artist: '/artist',
    events: '/events',
    otherServices: '/services',
    partnerWithUs: '/partners',
    login: '/login',
    signUp: '/register',
    blog: '/blog',
    privacy: '/privacy',
    support: '/support',
    terms: '/terms',
    facebookPage: 'https://www.facebook.com/',
    instagramPage: 'https://www.instagram.com/',
    twitterPage: 'https://twitter.com/',
    youtubePage: 'https://www.youtube.com/',
  }),
  methods: {
    logout()
    {
      
    }
  }
}
</script>

<style scoped>
</style>


<script lang="ts" setup></script>

<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <div class="menu">
              <div class="our-company">
                <h4>Our Company</h4>
                <ul>
                  <li><a :href="blog" target="_blank">Blog</a></li>
                  <li><a :href="support" target="_blank">Support</a></li>
                  <li><a :href="privacy" target="_blank">Privacy Policy</a></li>
                  <li><a :href="terms" target="_blank">Terms of Use</a></li>
                </ul>
              </div>

              <div class="songs">
                <h4>Songs</h4>
                <ul>
                  <li><a :href="artist" target="_blank">Playlist</a></li>
                  <li><a :href="artist" target="_blank">Artist</a></li>
                </ul>
              </div>

              <div class="for-artist">
                <h4>For Artist</h4>
                <ul>
                  <li><a :href="login" target="_blank">Artist Login</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-5">
            <div class="notify">
              <div class="card" style="width: 31.5rem;">
                <div class="card-body">
                  <h5 class="card-title">Keep me Notified</h5>
                  <div class="input-group mb-3 mt-4">
                    <input type="text" class="form-control" placeholder="Enter email" aria-label="Email address" aria-describedby="button-addon2">
                    <button class="btn btn-success border-rad" type="button" id="button-addon2">Subscribe</button>
                  </div>
                  
                  <p class="card-text">Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <div class="footer-logo">
              <a href="/">
                <img src="~/assets/geebu-logo.svg" loading="lazy" alt="logo">
              </a>
            </div>
          </div>

          <div class="col-4">
            <div class="text-center copy">
              <p>All Rights Reserved &copy; Jeffray Dy 2023</p>
            </div>
          </div>

          <div class="col-4">
            <div class="social-media-icons">
              <ul>
                <li>
                  <a href="#"  target="_blank"><img src="~/assets/facebook.svg" width="25px" height="25px" loading="lazy" alt="facebook logo"></a>
                </li>

                <li>
                  <a href="#"  target="_blank"><img src="~/assets/instagram.svg" width="25px" height="25px" loading="lazy" alt="instagram logo"></a>
                </li>

                <li>
                  <a href="#"  target="_blank"><img src="~/assets/twitter.svg" width="25px" height="25px" loading="lazy" alt="twitter logo"></a>
                </li>

                <li>
                  <a href="#" target="_blank"><img src="~/assets/youtube.svg" width="25px" height="25px" loading="lazy" alt="youtube logo"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    userRole: 'artists',
    myAccount: {
      avatar: '',
    },
    userInfo: {
      business_name: '',
      business_email: '',
      role: 'artists'
    },
    home: '/',
    createSong: '/create-song',
    artist: '/artist',
    login: '/login',
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
.footer .container {
  margin-top: 100px;
}

.footer .container .menu {
  display: flex;
  float: left;
}

.footer .menu .our-company,
.footer .menu .songs,
.footer .menu .for-artist {
  padding: 0 60px;
}

.footer .container .row:nth-child(1) {
  border-bottom: 1px solid #B8BBCF;
  margin-bottom: 3rem;
}

.footer .container .row:nth-child(2) {
  margin-bottom: 3rem;
}

.footer .menu h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212121;
  margin-bottom: 15px;
}

.footer .menu ul li a {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  opacity: 0.5;
  text-decoration: none;
}

.footer .menu ul li a:hover {
  color: #FF6B00;
  opacity: 1;
}

.footer .menu ul {
  padding-left: 0rem;
}

.footer .menu ul li {
  list-style-type: none;
  margin-bottom: 13px;
}

.footer ul li::marker {
  display: none;
}

.footer .notify {
  float: right;
  margin-top: -40px;
}

.footer .notify .card {
  background: #EFF3FD;
  border: none;
  margin-bottom: 30px;
}

.footer .card .card-body {
  padding: 30px 40px 45px;
}

.footer .card h5 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212121;
}

.footer .card p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
}

.footer .card .input-group {
  margin-bottom: 18px;
}

.footer .input-group .form-control {
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #D6D6D6;
  border-radius: 6px;
}

.footer .input-group .btn-success {
  background-color: #FF6B00;
  border-color: #FF6B00;
}

.social-media-icons {
  float: right;
}

.social-media-icons ul {
  display: flex;
}

.social-media-icons ul li {
  list-style-type: none;
  padding: 0 6px;
}

.social-media-icons a {
  opacity: 1;
}

.footer .copy,
.social-media-icons {
  margin-top: 20px;
}

.footer .copy p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  margin: 0rem;
}

.footer-logo a img {
  width: 201px;
  height: 53px;
}

@media (min-width: 992px) and (max-width: 1399.98px) {

  .footer .menu .our-company,
  .footer .menu .songs,
  .footer .menu .for-artist {
    padding: 0 40px;
  }

  .footer .menu h4 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    margin-bottom: 0.94rem;
  }

  .footer .menu ul li a {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.81rem;
  }

  .footer .card h5 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 175% */
  }

  .footer .card p {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .footer .copy p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .footer .copy,
  .social-media-icons {
    margin-top: 0.3rem;
  }

  .footer-logo a img {
    width: 9.4375rem;
    height: 2.5rem;
  }

  .footer .container .row:nth-child(2) {
    margin-bottom: 0.99rem;
  }

}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .footer .card .card-body {
    padding: 1.8rem 1.8rem 2.8rem;
  }

  .footer .menu .our-company,
  .footer .menu .songs,
  .footer .menu .for-artist {
    padding: 0 1.7rem;
  }
}</style>



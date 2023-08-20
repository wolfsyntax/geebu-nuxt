// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Geebu',
      titleTemplate: '%s - Geebu',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'assets/geebu-favicon.svg'},
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' },
        { rel: 'preconnect', href: 'https://fonts.bunny.net'},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=figtree:400,600&display=swap' },        
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css' }
      ],
      style: [
        {
          children: ".material-symbols-outlined { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48}"
        }
      ],
      noscript: [
        {children: 'Javascript is required.'}
      ],
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: "antialiased"
      }
    }
  },
  modules: [
    '@nuxtjs/color-mode',
    // '@nuxtjs/tailwindcss'
  ],
  css: ['@/assets/style.css']
})

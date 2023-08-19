// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Geebu',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', crossorigin: '' },
      ],
      style: [
        {
          children: ''
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
  }
})

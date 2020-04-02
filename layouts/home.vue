<template>
  <div>
    <navigation/>
    <div class="bg-gray-100 py-10 lg:py-16">
      <nuxt/>
    </div>
    <app-footer/>
  </div>
</template>
<script>
  import Navigation from '~/components/Navigation.vue'
  import AppFooter from '~/components/AppFooter.vue'

  export default {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fjalla+One'
        }
      ]
    },
    components: {
      Navigation,
      AppFooter,
    }
  }
</script>

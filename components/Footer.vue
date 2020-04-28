<template>
  <footer>
    <div class="footer-wrapper">
      <div class="top">
        <Logo />
        <p>Luxary Catering</p>
        <p>Great Food | Great Service</p>
      </div>
      <div class="links">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/">Wie zijn wij</nuxt-link>
        <nuxt-link to="/">Catering</nuxt-link>
        <nuxt-link to="/">Zakelijk</nuxt-link>
        <nuxt-link to="/">Impressie</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  }
}
</script>

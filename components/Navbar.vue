<template>
  <nav class="navbar-wrapper">
    <div class="navbar-brand">
      <nuxt-link to="/"><Logo /></nuxt-link>
    </div>
    <span class="icon" @click="toggleNav">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </span>
    <div class="navbar-links" id="navLinks">
      <nuxt-link to="/over-ons">Wie zijn wij</nuxt-link>
      <nuxt-link to="/catering">Catering</nuxt-link>
      <nuxt-link to="/zakelijk">Zakelijk</nuxt-link>
      <nuxt-link to="/gallerij">Impressie</nuxt-link>
      <nuxt-link to="/over-ons#contact">
        <button class="btn-gold-solid">Offerte aanvragen</button>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
export default {
  components: {
    Logo
  },

  methods: {
    toggleNav() {
      var x = document.getElementById('navLinks')
      if (x.className === 'topnav') {
        x.className += ' hidden'
      } else {
        x.className = 'topnav'
      }
    }
  }
}
</script>

<template>
  <nav class="navbar-wrapper">
    <div class="navbar-brand">
      <nuxt-link to="/"><Logo /></nuxt-link>
    </div>
    <div class="navbar-links hidden" id="navLinks">
      <nuxt-link to="/about">Wie zijn wij</nuxt-link>
      <nuxt-link to="/catering">Catering</nuxt-link>
      <nuxt-link to="/zakelijk">Zakelijk</nuxt-link>
      <nuxt-link to="/gallery">Impressie</nuxt-link>
      <nuxt-link to="/contact">
        <button class="btn-gold-solid">Offerte aanvragen</button>
      </nuxt-link>
      <!-- <a class="icon" @click="toggleNav">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </a> -->
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
        x.className += ' responsive'
      } else {
        x.className = 'topnav'
      }
    }
  }
}
</script>

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

<style lang="scss">
@import '@/assets/scss/main.scss';

//NAVBAR//
.navbar-wrapper {
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  backdrop-filter: brightness(1.5) opacity(0.5);

  .navbar-brand img {
    height: 75px;
    width: auto;
  }

  .navbar-links {
    display: none;
    span {
      display: unset;
    }
  }
}

.navbar-wrapper {
  padding: 1rem 5rem;
  max-height: 100px;
  span {
    display: none;
  }
  .navbar-links {
    display: flex;
    align-items: center;

    a {
      color: #fff;
      margin: 0 1rem;
      text-decoration: none;
      text-transform: uppercase;
      padding: 5px;
      &:nth-last-of-type(1) {
        margin-right: 0;
      }
      &:hover {
        color: $gold-color;
        border-bottom: 1px solid $gold-color;
      }
      &:hover:nth-last-of-type(1) {
        border: 0;
      }
    }
  }
}
</style>

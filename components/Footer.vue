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

<style lang="scss">
@import '@/assets/scss/main.scss';

//FOOTER//
footer {
  background-color: $secondary-color;
  width: 100%;
}

.footer-wrapper {
  text-align: center;
  padding: 1rem 0;
}

.footer-wrapper img {
  height: 75px;
  width: auto;
  margin-bottom: 1rem;
}

.footer-wrapper p {
  font-size: 0.8rem;
}

.footer-wrapper .links a {
  margin: 0 0.5rem;
  font-size: 0.7rem;
}

.footer-wrapper .links a:hover {
  color: $gold-color;
}
</style>

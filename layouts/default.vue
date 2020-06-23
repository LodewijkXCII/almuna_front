<template>
  <div>
    <Navbar />
    <TopImg />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import TopImg from '~/components/TopImg.vue'
export default {
  components: {
    Navbar,
    Footer,
    TopImg
  }
}
</script>

<style></style>

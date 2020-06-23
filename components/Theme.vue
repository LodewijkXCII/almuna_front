<template>
  <div class="theme">
    <img src="https://source.unsplash.com/random/380x160" alt="" />
    <div class="text-box">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <nuxt-link :to="`${type}/${title}`" :tilte="title" class="gold"
        >Meer info</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  props: {
    title: String,
    description: String,
    type: String
  }
}
</script>

<style></style>

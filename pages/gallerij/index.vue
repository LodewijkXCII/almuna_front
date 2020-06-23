<template>
  <div class="container">
    <h1 class="text-center">Impressie</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim
      dicta eaque sapiente suscipit rem optio cupiditate iusto, dolores hic
      reiciendis, neque saepe mollitia reprehenderit, quis provident repudiandae
      a impedit? Perspiciatis dolor quasi mollitia blanditiis excepturi? Cumque
      quaerat molestias autem tenetur corporis nesciunt vero dolorum incidunt
      non quo odio, nobis optio! Rem eius aut sint maxime harum accusantium?
      Cupiditate, earum?
    </p>
    <div class="impressie-gallery">
      <div class="thema">
        <h2 class="text-left">Pakketten</h2>
        <div class="thema-gallery">
          <Theme
            v-for="pakket in pakketten"
            :key="pakket.index"
            :title="pakket.title"
            :description="pakket.description"
            type="pakket"
            :link="pakket.title"
          />
        </div>
      </div>
      <div class="pakketten">
        <h2 class="text-left">Thema's</h2>
        <div class="pakketten-gallery">
          <Theme
            v-for="thema in themas"
            :key="thema.index"
            :title="thema.title"
            :description="thema.description"
            type="thema"
            :link="thema.title"
          />
        </div>
      </div>
    </div>

    <button class="btn-gold">
      <nuxt-link to="catering">Bekijk de caterings opties</nuxt-link>
    </button>
  </div>
</template>

<script>
import Theme from '@/components/Theme.vue'
export default {
  data() {
    return {
      pakketten: [
        {
          title: 'Brons',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'brons'
        },
        {
          title: 'Silver',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'silver'
        },
        {
          title: 'Goud',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'goud'
        },
        {
          title: 'Diamant',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'diamant'
        }
      ],
      themas: [
        {
          title: 'Fairytale Pink',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'fairytale-pink'
        },
        {
          title: 'Peachy Paradise',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'peachy-paradise'
        },
        {
          title: 'Classy Rose',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'classy-rose'
        },
        {
          title: 'Romantic Blue',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'romantic-blue'
        },
        {
          title: 'Royal Blue',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'royal-blue'
        },
        {
          title: 'Dream Gold',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'dream-gold'
        },
        {
          title: 'Silver Mirror',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'silver-mirror'
        },
        {
          title: 'Lorem Ipsum',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquid odit!',
          link: 'lorem-ipsum'
        }
      ]
    }
  },
  components: {
    Theme
  }
}
</script>

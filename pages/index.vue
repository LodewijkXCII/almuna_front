<template>
  <div>
    <div class="section img-full landing">
      <div class="img-full container full text-center">
        <h1 class="title">
          Al-Munasabaa
        </h1>
        <h2 class="subtitle">
          Luxary Catering
        </h2>
        <div class="keywords">
          <p><span>Great Food | Great Service</span></p>
        </div>
        <div class="bottom">
          <button class="blue-gold">
            <nuxt-link to="catering">
              Catering
            </nuxt-link>
          </button>
        </div>
      </div>
    </div>
    <section class="container callout">
      <h2>Waarom zijn wij de beste partner?</h2>
      <div class="keyfeatures">
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'check-double']" class="fa-2x" />
          <h4 class="gold">Kennis van de markt</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            sunt!
          </p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'truck']" class="fa-2x" />
          <h4 class="gold">Achtergrond in logistiek</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            sunt!
          </p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'users']" class="fa-2x" />
          <h4 class="gold">Familiebedrijf</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            sunt!
          </p>
        </div>
      </div>
    </section>
    <section class="section-B">
      <div class="bg-color-full">
        <div class="img-full container full">
          <h2 class="gold">Ons verhaal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            odio, minima commodi dolorem amet fugit repellendus eum nulla rerum
            placeat et delectus non dolorum cumque voluptate enim neque quisquam
            optio repudiandae sint aliquid dignissimos aperiam accusantium
            dolor? Vero obcaecati veritatis maiores facere iure asperiores
            consequuntur esse architecto tempora et unde impedit culpa
            voluptatum neque, velit harum, eaque iusto laudantium, aliquam
            ratione. Laboriosam consequuntur vero minus rem iste iure, labore
            asperiores id quos quaerat repellat reprehenderit qui expedita
            obcaecati enim. Eius?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptates repudiandae iusto necessitatibus excepturi quos
            voluptatum veniam possimus minus deleniti maxime pariatur rerum
            dignissimos accusantium enim, odit, laboriosam inventore placeat
            fugiat, aperiam nisi! Dolor quae sed facilis, neque possimus alias
            minima! Labore, quidem. Ducimus aperiam consequuntur nisi tempora
            provident voluptatibus a, rerum deleniti nam maxime impedit.
            Quisquam consequatur expedita mollitia.
          </p>
          <nuxt-link to="over-ons">
            <button class="btn-gold float-right">Lees meer</button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section-C">
      <div class="img-full container">
        <h2 class="gold">De verschillende Pakketten</h2>
        <Pakketten />
      </div>
    </section>
    <section class="team">
      <h2 class="gold text-center">Het Team</h2>
      <div class="gallery"></div>
    </section>
    <Review />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Review from '~/components/Review.vue'
import Pakketten from '~/components/Pakketten.vue'

export default {
  head: {
    return: {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    },
    title: 'Home page 🚀',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ]
  },
  components: {
    Logo,
    Review,
    Pakketten
  }
}
</script>

<style></style>

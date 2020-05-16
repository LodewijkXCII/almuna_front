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
          <button class="btn-gold float-right">Lees meer</button>
        </div>
      </div>
    </section>
    <section class="section-C">
      <div class="img-full container">
        <h2 class="gold">De verschillende Pakketten</h2>
        <div class="pakketten">
          <div class="pakket">
            <h3 class="gold">Brons</h3>
            <div class="inhoud">
              <div class="sec-1">
                <ul>
                  <li>Keuze uit 4 decoratiestijlen</li>
                  <li>3 Soorten drank per tafel</li>
                </ul>
              </div>
              <div class="sec-2">
                <h4
                  class="gold mb-10
                "
                >
                  Voorgerecht naar keuze
                </h4>
                <ul>
                  <li>Keuze uit 4 decoratiestijlen</li>
                  <li>3 Soorten drank per tafel</li>
                </ul>
              </div>
              <div class="sec-3">
                <h4 class="gold">Hoofdgerecht naar keuze</h4>
                <ul>
                  <li>Keuze uit 4 decoratiestijlen</li>
                  <li>3 Soorten drank per tafel</li>
                </ul>
              </div>
              <div class="sec-4">
                <div class="price gold">
                  &euro; 25 <span class="small">/persoon</span>
                </div>
                <button class="btn-gold">Bekijk details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="team">
      <h2 class="gold text-center">Het Team</h2>
      <div class="gallery"></div>
    </section>
    <section class="reviews">
      <div class="bg-color-full bg-review">
        <h2 class="gold text-center">Tevreden Klanten</h2>
        <div class="container happycust">
          <div class="review">
            <div class="review-title">
              <h4>Super service!</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci minus illum sunt esse cumque ex distinctio praesentium.
                Sunt eos perferendis voluptatem omnis eaque aspernatur
                similique, ullam consectetur placeat dignissimos commodi.
              </p>
              <div class="review-rating">
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star-half-alt']" />
              </div>
            </div>
          </div>
          <div class="review">
            <div class="review-title">
              <h4>Super service!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed
                excepturi voluptatum vero corporis architecto unde quas ea,
                optio perferendis tenetur ducimus accusamus, minima repellendus
                nam, voluptate est tempore aperiam ut amet eius eveniet saepe.
                Alias debitis nihil excepturi sapiente voluptatum iste iure
                neque eius.
              </p>
              <div class="review-rating">
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star-half-alt']" />
              </div>
            </div>
          </div>
          <div class="review">
            <div class="review-title">
              <h4>Super service!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quod quas distinctio culpa, quo debitis perferendis
                molestias ducimus odit pariatur est dolorem, vero in. Fugit
                reprehenderit est accusamus tenetur necessitatibus molestias sit
                doloremque, atque, a odit provident nulla alias quo voluptatem,
                fugiat aut autem inventore accusantium minima? Obcaecati.
              </p>
              <div class="review-rating">
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['fas', 'star-half-alt']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head: {
    title: 'Home page 🚀',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
    script: [
      { src: '/head.js' },
      // Supported since 1.0
      { src: '/body.js', body: true },
      { src: '/defer.js', defer: '' }
    ]
  },
  components: {
    Logo
  }
}
</script>

<style></style>

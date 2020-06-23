<template>
  <div>
    <div class="container two-one m-tb-3 ">
      <div class="left">
        <div class="container__info">
          <h1>Thema {{ title }}</h1>
          <p>
            Met een uitgesproken kleur blauw, in combinatie met mintgroen en
            wit, wordt de zaal tot leven gebracht. Geen standaardkleuren, maar
            uniek en eigentijds. De frisse kleuren geven de aankleding een
            eigenzinnig karakter, dat stijl, klasse en vooral romantiek omarmt.
          </p>
          <p>
            “Blue is the new color of love”
          </p>
        </div>
        <div class="combinations">
          <h3 class="gold">
            Dit thema is te combineren de volgende pakketten:
          </h3>
          <div class="pakketten">
            <div class="pakketten-gallery">
              <Theme
                v-for="pakket in pakketten"
                :key="pakket.index"
                :title="pakket.title"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <Offerte />
      </div>
    </div>
    <div class="img-gallery">
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
      <img src="https://source.unsplash.com/random/250x250" alt="" />
    </div>
  </div>
</template>

<script>
import Offerte from '@/components/Offerte.vue'
import Theme from '@/components/Theme.vue'

export default {
  data() {
    return {
      pakketten: [
        {
          title: 'Brons'
        },
        {
          title: 'Silver'
        },
        {
          title: 'Goud'
        },
        {
          title: 'Diamant'
        }
      ]
    }
  },
  components: {
    Offerte,
    Theme
  }
}
</script>

<style lang="scss">
.combinations {
  padding-top: 4em;

  .pakketten {
    margin: 0.8em 0;
  }
}

.two-one {
  display: grid;
  grid-template-columns: 5fr 3fr;
}

.left,
.right {
  padding: 1rem;
}

.img-gallery {
  grid-gap: 0.5em;
}
</style>

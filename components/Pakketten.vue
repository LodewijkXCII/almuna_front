<template>
  <div class="pakketten">
    <div class="pakket" v-for="pakket in pakketten" :key="pakket.index">
      <h3 class="gold">{{ pakket.title }}</h3>
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
            &euro; {{ pakket.price }} <span class="small">/persoon</span>
          </div>
          <nuxt-link :to="`gallerij/pakket/${pakket.title}`">
            <button class="btn-gold">Bekijk details</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pakketten: [
        {
          title: 'Brons',
          price: 25
        },
        {
          title: 'Silver',
          price: 27.5
        },
        {
          title: 'Goud',
          price: 30
        },
        {
          title: 'Diamant',
          price: 35
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.pakket {
  background-color: $blue-opacity;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  h3 {
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(55, 64, 79, 0.8);
    padding: 2rem;
  }
  .inhoud {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
      li:before {
        content: '✓';
        margin-right: 7px;
      }
    }
  }
}

.pakketten {
  margin-left: 2rem;
}

.pakketten-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
}
</style>

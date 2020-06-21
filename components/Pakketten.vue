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

<style></style>

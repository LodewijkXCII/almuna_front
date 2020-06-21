<template>
  <div class="container mt-150">
    <h1 class="text-center">Catering</h1>
    <h2>Hoe werkt het?</h2>

    <div class="Values">
      <div
        v-for="keyValue in keyValues"
        :key="keyValue.index"
        class="Values__Value"
      >
        <div class="ValueIcon">
          <font-awesome-icon :icon="['fas', `${keyValue.icon}`]" />
        </div>
        <div class="ValueText">
          <h4>{{ keyValue.title }}</h4>
          <p>
            {{ keyValue.text }}
          </p>
        </div>
      </div>
    </div>
    <h4>Spelregels</h4>
    <ul>
      <li>Reiskosten</li>
      <li>Ritten > 100km</li>
      <li>Prijzen zijn Ex btw</li>
    </ul>
    <h2>Waarom Al Munasabaa?</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyValues: [
        {
          title: 'Kies je pakket',
          text:
            "Er is keuze uit vier verschillende thema's, met elk hun soort gerechten",
          icon: 'check-double'
        },
        {
          title: 'Kies je thema',
          text:
            "Er is keuze uit vier verschillende thema's, met elk hun soort gerechten",
          icon: 'check-double'
        },
        {
          title: 'Kies je gerechten',
          text:
            "Er is keuze uit vier verschillende thema's, met elk hun soort gerechten",
          icon: 'check-double'
        }
      ]
    }
  }
}
</script>

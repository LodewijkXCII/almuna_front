<template>
  <div>
    <div class="container two-one m-tb-3 ">
      <div class="left">
        <div class="container__info">
          <h1>Romantic Blue</h1>
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
            Dit pakket is te combineren de volgende thema's:
          </h3>
          <div class="pakketten">
            <div class="pakketten-gallery">
              <Theme
                v-for="thema in themas"
                :key="thema.index"
                :title="thema.title"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <Offerte />
      </div>
    </div>
    <h2>Maak je keuze uit de volgende gerechten</h2>
    <div class="container gerecht-gallery">
      <div
        v-for="gerecht in gerechten"
        :key="gerecht.index"
        class="gerecht-gallery__gerecht"
      >
        <h4 class="gerecht-gallery__gerecht--title">{{ gerecht.name }}</h4>
        <p class="gerecht-gallery__gerecht--text">{{ gerecht.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Offerte from '@/components/Offerte.vue'
import Theme from '@/components/Theme.vue'

export default {
  props: {
    title: String,
    description: String,
    type: String
  },
  components: {
    Offerte,
    Theme
  },
  data() {
    return {
      themas: [
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
      ],
      gerechten: [
        {
          name: 'Visbastila',
          gang: 'Voorgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Kipbastila',
          gang: 'Voorgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Kippen',
          gang: 'Voorgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Kalfsvlees in jus',
          gang: 'Hoofdgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Luxe salade',
          gang: 'Hoofdgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Kip uit de oven',
          gang: 'Hoofdgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Gestoofd lamsvlees',
          gang: 'Hoofdgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Luxe vissalade',
          gang: 'Hoofdgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Tapanade salade',
          gang: 'Salade',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Victoriabaarsfilet',
          gang: 'Voorgerecht',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        },
        {
          name: 'Dorades',
          gang: 'Salade',
          description:
            'Rijkelijk gevuld met verse vis en gegarneerd met garnalen'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.combinations {
  padding-top: 4em;
}

.two-one {
  display: grid;
}

.left,
.right {
  padding: 1rem;
}

.gerecht-gallery {
  display: grid;
  grid-gap: 1em;
  margin-bottom: 1em;

  &__gerecht {
    background: #37404f;
    padding: 0.75em;

    &--title {
      color: #bea950;
      text-transform: uppercase;
      margin-bottom: 0.2em;
    }
  }
}

@media (min-width: 650px) {
  .two-one {
    grid-template-columns: 5fr 3fr;
  }
  .gerecht-gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

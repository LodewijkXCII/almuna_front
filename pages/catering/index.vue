<template>
  <section>
    <div class="container-fluid">
      <h1 class="text-center">Catering</h1>
      <h2>Hoe werkt het?</h2>

      <div class="Values">
        <div
          v-for="keyValue in keyValues"
          :key="keyValue.index"
          class="Values__Value"
        >
          <div class="Values__Value--icon">
            <font-awesome-icon :icon="['fas', `${keyValue.icon}`]" />
          </div>
          <div class="Values__Value--text">
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        aperiam laudantium maxime laboriosam debitis voluptas? Natus itaque sit
        qui, deserunt eveniet nihil dolorum iste quasi aliquam quis ullam fuga.
        Delectus odio, dignissimos architecto aspernatur consequatur iure ipsum
        porro sint aut repellendus recusandae natus, reprehenderit eaque
        mollitia quibusdam eveniet facere magni consectetur cupiditate sequi
        laudantium! Dicta sunt aliquam perspiciatis natus adipisci voluptates,
        dolor non obcaecati saepe amet, nam tempora aspernatur dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur
        animi voluptatem voluptate ea ullam accusamus magnam sapiente veritatis
        illo, maxime, sit fugit? Dolorem odio molestiae iste totam ut modi, eius
        quas atque, commodi quidem dolore in beatae sequi! Amet obcaecati
        nostrum voluptatibus velit id officia eius tenetur architecto quasi.
      </p>
    </div>
  </section>
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

<style lang="scss">
@import '@/assets/scss/main.scss';

.Values {
  display: grid;
  grid-gap: 2rem;
  margin: 3rem 0;

  &__Value {
    display: grid;
    grid-gap: 0.8rem;
    grid-template-columns: 1fr 7fr;
    align-items: center;
    justify-content: center;

    &--icon {
      background-color: darken($color: $blue-opacity, $amount: 5);
      padding: 1rem;
      margin: 1rem;
      border-radius: 50%;
      width: 95px;
      height: 95px;
      text-align: center;
      svg {
        color: $gold-color;
        margin-top: 7px;
        width: 45px;
        height: 45px;
      }
    }
    &--text {
      padding: 0 1rem;

      h4 {
        text-transform: uppercase;
        text-align: left;
      }

      p {
        font-size: 1rem;
        margin: 0;
        text-align: left;
      }
    }
  }
}

@media (min-width: 650px) {
  .Values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &__Value {
      grid-template-columns: 1fr;
      grid-auto-rows: 150px 200px;
      background-color: $secondary-color;
      padding: 1rem 0.5rem 2rem 0.5rem;
      align-items: flex-start;
      border-radius: 0.8rem;
      position: relative;

      &:not(:last-child)::after {
        content: '\203A';
        font-weight: bold;
        font-size: 3rem;
        position: absolute;
        color: $gold-color;
        right: -22px;
        align-self: center;
      }
      &--icon {
        margin: auto;
      }
      &--text {
        h4 {
          text-align: center;
          margin-bottom: 0.5rem;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>

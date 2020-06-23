<template>
  <div>
    <div class="container-fluid">
      <h1>Over ons</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
        architecto officia non reprehenderit assumenda impedit eligendi hic
        tenetur est odio voluptatum in, doloribus recusandae porro cum qui quis
        cumque labore ipsa laboriosam rerum voluptatem consequuntur dolores!
        Eaque sint rem magni numquam, amet nihil eum quibusdam nemo iste
        provident, quam eos.
      </p>

      <div class="aboutBlock">
        <div class="aboutBlock__left">
          <font-awesome-icon
            :icon="['fas', 'check-double']"
            class="fa-2x aboutBlock__left--icon"
          />
          <h3 class="aboutBlock__left--title">Kennis van de markt</h3>
        </div>
        <p class="aboutBlock--text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum a
          beatae fugit eius accusantium ab, consequuntur fugiat velit laborum,
          esse voluptate exercitationem, ea quae optio blanditiis laudantium
          quisquam nisi excepturi amet asperiores cupiditate maiores eligendi.
          Placeat molestias a eius suscipit eum minus earum consequatur nostrum
          provident amet, eos ipsa voluptas? Nostrum voluptatibus iure
          distinctio soluta facilis vel animi accusantium quae?
        </p>
      </div>
      <div class="aboutBlock">
        <div class="aboutBlock__left">
          <font-awesome-icon
            :icon="['fas', 'truck']"
            class="fa-2x aboutBlock__left--icon"
          />
          <h3 class="aboutBlock__left--title">Achtergrond in logistiek</h3>
        </div>
        <p class="aboutBlock--text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum a
          beatae fugit eius accusantium ab, consequuntur fugiat velit laborum,
          esse voluptate exercitationem, ea quae optio blanditiis laudantium
          quisquam nisi excepturi amet asperiores cupiditate maiores eligendi.
          Placeat molestias a eius suscipit eum minus earum consequatur nostrum
          provident amet, eos ipsa voluptas? Nostrum voluptatibus iure
          distinctio soluta facilis vel animi accusantium quae?
        </p>
      </div>
      <div class="aboutBlock">
        <div class="aboutBlock__left">
          <font-awesome-icon
            :icon="['fas', 'users']"
            class="fa-2x aboutBlock__left--icon"
          />
          <h3 class="aboutBlock__left--title">Familiebedrijf</h3>
        </div>
        <p class="aboutBlock--text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum a
          beatae fugit eius accusantium ab, consequuntur fugiat velit laborum,
          esse voluptate exercitationem, ea quae optio blanditiis laudantium
          quisquam nisi excepturi amet asperiores cupiditate maiores eligendi.
          Placeat molestias a eius suscipit eum minus earum consequatur nostrum
          provident amet, eos ipsa voluptas? Nostrum voluptatibus iure
          distinctio soluta facilis vel animi accusantium quae?
        </p>
      </div>

      <hr />
      <section id="contact" class="contact">
        <div class="contact__box">
          <h2 class="contact__box--header">Contact</h2>
          <p class="contact__box--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam
            dolore minus ratione quaerat. Obcaecati provident, exercitationem
            accusamus debitis est nostrum ratione adipisci molestias. Mollitia
            vero accusantium sequi eius harum, tempore fugiat quasi ut dolorum
            voluptatum laudantium architecto aut expedita tenetur culpa
            asperiores! Aperiam obcaecati ex nisi fugit atque molestias
            cupiditate nemo, sint voluptas modi eligendi ullam maiores inventore
            accusamus.
          </p>
        </div>
        <Offerte />
      </section>
    </div>
  </div>
</template>

<script>
import TopImg from '@/components/TopImg.vue'
import Offerte from '@/components/Offerte.vue'
export default {
  components: {
    TopImg,
    Offerte
  }
}
</script>

<style lang="scss">
.aboutBlock {
  display: grid;
  margin: 2em 0;
  grid-template-columns: 175px 8fr;

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #bea950;
    svg {
      margin: 0 0.5em 0.5em;
    }
  }
}

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  margin-top: 2em;

  &__box {
    &--header {
      text-align: left;
    }
  }
}
</style>

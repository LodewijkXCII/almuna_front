<template>
  <form>
    <h2>Offerte aanvragen</h2>
    <label for="name">Naam:</label>
    <input type="text" name="name" id="name" />
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" />
    <label for="phone">Telefoonnummer:</label>
    <input type="text" name="phone" id="phone" />
    <div class="form-half">
      <div class="item">
        <label for="date">Gewenste datum:</label>
        <input type="date" name="date" id="date" />
      </div>
      <div class="item">
        <label for="guest">Aantal gasten:</label>
        <input type="number" name="guest" id="guest" />
      </div>
      <div class="item">
        <label for="pakket">Pakket:</label>
        <select name="pakket" id="pakket">
          <option value="Peachy Paradise">Peachy Paradise</option>
          <option value="Fairytale Pink">Fairytale Pink</option>
          <option value="Classy Rose">Classy Rose</option>
          <option value="Romantic Blue">Romantic Blue</option>
          <option value="Royal Blue">Royal Blue</option>
          <option value="Dream Gold">Dream Gold</option>
          <option value="Silver Mirror">Silver Mirror</option>
          <option value="romantic blue">Romantic Blue</option>
        </select>
      </div>
      <div class="item">
        <label for="theme">Thema:</label>
        <select name="theme" id="theme">
          <option value="Brons">Brons</option>
          <option value="Silver">Silver</option>
          <option value="Goud">Goud</option>
          <option value="Diamant">Brons</option>
        </select>
      </div>
    </div>
    <button class="btn-gold-solid">Vraag offerte aan</button>
  </form>
</template>

<script>
// TODO: send email after submit
// nodemailer
export default {}
</script>

<style lang="scss" scoped>
form {
  background: #37404f;
  border: 2px solid #bea950;
  border-radius: 1em;
  padding: 1em;
  h2 {
    font-size: 1.5em;
  }

  label {
    display: block;
    text-transform: uppercase;
    margin-bottom: 0.2em;
  }
  input,
  select {
    width: 100%;
    background: #1d283a;
    border: 1px solid #bea950;
    border-radius: 0.8em;
    padding: 0.8em;
    margin-bottom: 1em;
    color: white;

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 6px #bea950;
    }
  }

  .form-half {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }

  button {
    width: 100%;
    margin: 0.5em 0;
  }
}
</style>

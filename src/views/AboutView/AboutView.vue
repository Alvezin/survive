<template>
  <div>
    <div class="about-menu">
      <h3>About</h3>
      <router-link class="router-link" to="/">X</router-link>
    </div>
    <section>
      <p>
        Survive is a horror game, but different from 3D environment, here
        excerpts of stories are presented and it remains for you to choose the
        best way to act. Your actions may result in good paths, such as
        discovery of items until danger escape, but it may also occur from
        encountering Situations not pleasant, such as ambushes, or even a horde
        of zombies.
      </p>
      <p>
        Don't forget to restore your basic needs if you want to keep alive. each
        action taken takes a percentage of its energy, become hungry and even
        health, so always keep some spare grocery in the backpack.
      </p>
      <p>
        Weapons are lost by the map, and it's up to you to look for them, but
        watch out, always keep it fixed, do not want to break a gun during the
        battle. The amount of them is vast and the better, the rarer it is find.
      </p>
      <p></p>
      <p></p>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss" scoped>
@import "@/scss/variaveis.scss";
@font-face {
  font-family: "normal-text";
  src: url("@/assets/fonts/Game\ Space\ Academy.otf") format("truetype");
}
.about-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
p {
  margin-bottom: 10px;
  line-height: 30px;
  text-align: justify;
  text-indent: 30px;
}
div {
  color: $white-smoke;
  font-family: "normal-text";
  width: 600px;
  font-size: xx-large;
  margin: auto;
}
section {
  padding: 10px;
  height: 350px;
  overflow-y: scroll;
  margin-top: 30px;
}
.router-link {
  text-decoration: none;
  color: $strong-red;
}
</style>

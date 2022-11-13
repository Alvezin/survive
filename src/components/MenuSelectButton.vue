<template>
  <div>
    <router-link :to="pathLink" class="button" @mouseover="playEffect">{{
      buttonTxt
    }}</router-link>
    <audio id="effectAudio">
      <source src="@/assets/sounds/menu-selection.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "MenuSelectButton",
  props: {
    buttonTxt: String,
    pathLink: String,
  },
  setup() {
    function playEffect() {
      const audio = document.getElementById("effectAudio");
      audio.currentTime = 0.0;
      audio.play();
    }
    return {
      playEffect,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/variaveis.scss";

.button {
  font-family: "evil Dead";
  text-transform: uppercase;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: $white-smoke;
  transition: 0.3s;
  font-size: large;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: $strong-red;
    text-shadow: 1px 0px 2px red;
  }
}
</style>

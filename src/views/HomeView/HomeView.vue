<template>
  <section @click="playSound" class="view">
    <menu-component />
    <audio id="audio" @ended="playSound">
      <source src="@/assets/sounds/Unnatural.mp3" type="audio/mpeg" />
    </audio>
  </section>
</template>

<script>
import MenuComponent from "./Menu.vue";
export default {
  name: "HomeView",
  components: {
    MenuComponent,
  },
  setup() {
    const playSound = () => {
      const audio = document.getElementById("audio");
      audio.play();
    };

    return {
      playSound,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variaveis.scss";
div {
  margin: 10px auto;
  height: 300px;
  width: 300px;
  background-color: $black;
  border-radius: 20px;
  color: $white-smoke;
  padding: 10px;
}
.view {
  height: calc(100vh - 110px);
}
</style>

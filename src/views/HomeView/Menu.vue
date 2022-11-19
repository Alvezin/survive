<template>
  <div class="menu">
    <menu-select-button
      v-for="option in menuOptions"
      :key="option.id"
      :buttonTxt="option.text"
      :pathLink="option.pathLink"
    />
  </div>
</template>

<script>
import MenuSelectButton from "@/components/MenuSelectButton.vue";

export default {
  name: "MenuComponent",
  components: {
    MenuSelectButton,
  },
  setup() {
    const menuOptions = [
      {
        id: 1,
        text: "New Game",
        pathLink: "/",
      },
      {
        id: 2,
        text: "Load",
        pathLink: "/load",
      },
      {
        id: 3,
        text: "About",
        pathLink: "/about",
      },
      {
        id: 4,
        text: "Credits",
        pathLink: "/credits",
      },
    ];

    return {
      menuOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variaveis.scss";

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.082);
}
</style>

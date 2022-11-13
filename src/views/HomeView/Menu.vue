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
        text: "Novo Jogo",
        pathLink: "/",
      },
      {
        id: 2,
        text: "Carregar",
        pathLink: "/load",
      },
      {
        id: 3,
        text: "Sobre",
        pathLink: "/about",
      },
      {
        id: 4,
        text: "Créditos",
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

@font-face {
  font-family: "evil Dead";
  src: url("@/assets/fonts/EVILDEAD.TTF") format("truetype");
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

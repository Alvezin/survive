<template>
  <header-component />
  <img
    src="@/assets/image/hand-blood.png"
    alt="hand-blood"
    class="item-tela one"
  />
  <router-view />
</template>

<script>
import HeaderComponent from "./components/Header.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>
<style lang="scss">
@import "@/scss/variaveis.scss";
@import "@/scss/scrollbar.scss";
@include scrollbar;
@font-face {
  font-family: "evil Dead";
  src: url("@/assets/fonts/EVILDEAD.TTF") format("truetype");
}
@font-face {
  font-family: "normal-text";
  src: url("@/assets/fonts/Game\ Space\ Academy.otf") format("truetype");
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  background-image: url("./assets/image/tela-sangue.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 25%;
  height: 100vh;
  background-color: $black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 200px;
}
.item-tela.one {
  position: absolute;
  top: 10vh;
  left: 10px;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

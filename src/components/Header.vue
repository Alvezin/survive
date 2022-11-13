<template>
  <header>
    <div>
      <h1 class="title">Survive !</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "@/scss/variaveis.scss";
@font-face {
  font-family: "evil Dead";
  src: url("../assets/fonts/EVILDEAD.TTF") format("truetype");
}
header {
  background-color: $grey;
  height: 100px;
  width: 400px;
  margin: auto;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  box-shadow: 0px 2px 1px 1px;
  & div {
    & .title {
      padding-top: 5px;
      color: $white-smoke;
      font-family: "evil Dead";
    }
  }
}
</style>

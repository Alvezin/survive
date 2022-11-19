<template>
  <div>
    <div class="about-menu">
      <h3>Credits</h3>
      <router-link class="router-link" to="/">X</router-link>
    </div>
    <section id="scrollbar">
      <p
        v-for="item in creditsData" :key="item.id"
      >
        <h4>{{ item.usedProduct }}</h4>
        <h5>
          <small>{{ item.owner }} - <a :href="item.site">page</a></small>
        </h5>

      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "CreditsView",
  setup() {
    const creditsData = [
      {
        id: 1,
        owner: 'BeachBoogeyman',
        site: 'https://beachboogeyman.itch.io/',
        usedProduct: 'Horror Icon Set',
      },
    ]
    return {
      creditsData,
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variaveis.scss";

.about-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
p {
  margin-bottom: 10px;
  line-height: 30px;
  text-align: center;
}
div {
  text-indent: 30px;
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

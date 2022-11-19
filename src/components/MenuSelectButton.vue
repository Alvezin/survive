<template>
  <div>
    <router-link
      :to="pathLink"
      class="button"
      @mouseover="playHoverEffect()"
      @mouseout="state.showIcon = false"
      @click="playSelectEffect()"
    >
      <p>
        {{ buttonTxt }}
      </p>
      <img
        src="@/assets/iconSet/144.png"
        alt="set"
        class="icon-img"
        v-show="state.showIcon"
      />
    </router-link>
    <audio id="effectAudio">
      <source :src="state.audioSrc" :type="state.audioType" />
    </audio>
  </div>
</template>

<script>
import AudioService from "@/services/AudioService";
import { reactive } from "@vue/reactivity";

export default {
  name: "MenuSelectButton",
  props: {
    buttonTxt: String,
    pathLink: String,
  },
  setup() {
    const state = reactive({
      audioSrc: null,
      audioType: null,
      showIcon: false,
    });
    function playHoverEffect() {
      state.showIcon = true;
      const audioSrc = AudioService.getAudioByName("menu-selection");
      const audio = document.getElementById("effectAudio");
      state.audioSrc = audioSrc.src;
      state.audioType = audioSrc.type;
      audio.currentTime = 0.0;
      audio.load();
      audio.play();
    }
    function playSelectEffect() {
      const audio = document.getElementById("effectAudio");
      const audioSrc = AudioService.getAudioByName("menu-selected");
      state.audioSrc = audioSrc.src;
      state.audioType = audioSrc.type;
      audio.currentTime = 0.0;
      audio.load();
      audio.play();
    }
    return {
      playHoverEffect,
      playSelectEffect,
      state,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/variaveis.scss";
div {
  padding: 20px 30px;
  height: 100%;
}
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
  width: 100%;
  display: block;
  cursor: pointer;
  &:hover {
    color: $strong-red;
    text-shadow: 1px 0px 2px red;
  }
}
.icon-img {
  width: 20px;
}
.img-container {
  width: 20px;
}
</style>

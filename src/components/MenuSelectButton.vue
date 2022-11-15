<template>
  <div>
    <router-link
      :to="pathLink"
      class="button"
      @mouseover="playHoverEffect()"
      @click="playSelectEffect()"
      >{{ buttonTxt }}</router-link
    >
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
    });
    async function playHoverEffect() {
      const audio = document.getElementById("effectAudio");
      const audioSrc = AudioService.getAudioByName("menu-selection");
      state.audioSrc = audioSrc.src;
      state.audioType = audioSrc.type;
      audio.currentTime = 0.0;
      await audio.load();
      audio.play();
    }
    async function playSelectEffect() {
      const audio = document.getElementById("effectAudio");
      const audioSrc = AudioService.getAudioByName("menu-selected");
      state.audioSrc = audioSrc.src;
      state.audioType = audioSrc.type;
      audio.currentTime = 0.0;
      await audio.load();
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

.button {
  font-family: "evil Dead";
  text-transform: uppercase;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: $white-smoke;
  transition: 0.3s;
  font-size: large;
  padding: 10px 30px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: $strong-red;
    text-shadow: 1px 0px 2px red;
  }
}
</style>

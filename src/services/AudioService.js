const audioSources = [
  {
    id: 1,
    name: "menu-selected",
    src: require("@/assets/sounds/menu-selected.mp3"),
    type: "audio/mpeg",
  },
  {
    id: 2,
    name: "menu-selection",
    src: require("@/assets/sounds/menu-selection.mp3"),
    type: "audio/mpeg",
  },
  {
    id: 3,
    name: "unnatural",
    src: require("@/assets/sounds/Unnatural.mp3"),
    type: "audio/mpeg",
  },
];

export default class AudioService {
  static getAudios() {
    return audioSources;
  }

  static getAudioByName(search) {
    return audioSources.filter((el) => {
      return el.name === search;
    })[0];
  }
}

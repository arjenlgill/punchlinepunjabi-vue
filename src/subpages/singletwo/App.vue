<template>
  <MobNav />
  <Single
    :img="this.post.img"
    :postH1="this.post.postH1"
    :postH2="this.post.postH2"
    :postIntro="this.post.postIntro"
    :lyricsOG="this.post.lyricsOG"
    :lyricsTrans="this.post.lyricsTrans"
    :postContent="this.post.postContent"
    :lyrics="lyrics"
  />
  <MoreMusic />
  <Footer />
</template>

<script>
import MobNav from "../../components/MobNav.vue";
import Single from "../../components/Single.vue";
import MoreMusic from "../../components/MoreMusic.vue";
import Footer from "../../components/Footer.vue";
import "../../assets/scss/style.scss";

export default {
  name: "app",
  components: {
    MobNav,
    Single,
    MoreMusic,
    Footer,
  },
  
  data() {
    return {
      post: {
        img: require("../../assets/img/hundalenemies.jpg"),
        postH1: "AMANTEJ HUNDAL X SIGNATURE BY SB: 'Enemies'",
        postH2: "Chorus",
        postIntro: "",
        lyricsOG: ["OGlyric", "OGlyric1", "OGlyric2"],
        lyricsTrans: ["transLyric", "transLyric1", "transLyric2"],
        lyricsSnippet: [],
        postContent: ""
      }
    };
  },
    computed: {
    lyrics() {
      let mo = this.post.lyricsOG.map((x, y) => {
        return [x, this.post.lyricsTrans[y]];
      });
      //return mo.concat.apply([], mo);
      return mo.flat(1);
    },
  },
};
</script>

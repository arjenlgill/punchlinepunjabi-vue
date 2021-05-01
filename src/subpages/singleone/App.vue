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
    v-bind:lyrics="lyrics"
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
        img: require("../../assets/img/amantejhundal.jpg"),
        postH1: "AMANTEJ HUNDAL X SIGNATURE BY SB: 'test'",
        postH2: "TestChros",
        postIntro: "",
        lyricsOG: ["jatt ne tah zindagi che lehne aa nazaare", "testOG"],
        lyricsTrans: ["test2", "test3"],
        postContent: "",
      }
    };
  },
    computed: {
    lyrics() {
      let mo = this.post.lyricsOG.map((x, y) => {
        return [x, this.post.lyricsTrans[y]];
      });
      return mo[0].concat(mo[1]);
    },
  },
};
</script>

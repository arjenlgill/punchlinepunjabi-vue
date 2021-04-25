<template>
  <div v-bind:key="post" v-for="post in post" id="post-wrapper">
    <div class="post-img-container">
      <img
        v-bind:key="post"
        v-on:click="lyricsConcat"
        :src="post.img"
        alt=""
        class="post-img"
      />
    </div>

    <div class="post-content-container">
      <div id="tte">
        <h1 class="post-h1">{{ post.postH1 }}</h1>

        <h2 class="post-h2">{{ post.postH2 }}</h2>

        <!--<div v-bind:key="item" v-for="item in post.lyricsOG" class="lyrics-og">
        
        <p>{{item}}</p>

        <p v-bind:key="item" v-for="item in post.lyricsTrans" class="lyrics-trans">{{item}}</p>

      </div> -->

        <div v-bind:key="lyric" v-for="(lyric, index) in lyrics">
          <p v-if="index % 2 === 0" class="lyrics-og">
            {{ lyric }}
          </p>

          <p v-else class="lyrics-trans">{{ lyric }}</p>
        </div>

        <p class="post-content">{{ post.postContent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      post: [
        {
          img: require("../assets/img/amantejhundal.jpg"),
          postH1: "AMANTEJ HUNDAL X SIGNATURE BY SB: 'NAZAARE'",
          postH2: "Chorus",
          lyricsOG: [
            "jatt ne tah zindagi che lehne aa nazaare", "testOG"
          ],
          lyricsTrans: [
            "test2", "test3"
          ],
          postContent: "",
        },
      ],
    };
  },
  computed: {
    lyrics() {
      let mo = this.post[0].lyricsOG.map((x, y) => {
        return [x, this.post[0].lyricsTrans[y]];
      });
      return mo[0].concat(mo[1]);
    },
  },
};
</script>

<template>
<div v-bind:key="post" v-for="post in post">
  <div id="post-wrapper">
    <div class="post-img-container">
      <img
        :src="img"
        alt=""
        class="post-img"
      />
    </div>

    <div class="post-content-container">
      <div id="tte">
        <h1 v-if="postH1" class="post-h1">{{ postH1 }}</h1>

        <h2 class="post-h2">{{ postH2 }}</h2>

        <p class="post-intro">{{ postIntro }}</p>

        <!--<div v-bind:key="item" v-for="item in lyricsOG" class="lyrics-og">
        
        <p>{{item}}</p>

        <p v-bind:key="item" v-for="item in lyricsTrans" class="lyrics-trans">{{item}}</p>

        </div> -->

        <div v-bind:key="lyric" v-for="(lyric, index) in lyrics">
          <p v-if="index % 2 === 0" class="lyrics-og">
            {{ lyric }}
          </p>

          <p v-else class="lyrics-trans">{{ lyric }}</p>
        </div>

        <p class="post-content">{{ postContent }}</p>

      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: [
        {
          img: require("../assets/img/amantejhundal.jpg"),
          postH1: "sample",
          postH2: "sample",
          postIntro: "",
          lyricsOG: [
            "sample", "sample"
          ],
          lyricsTrans: [
            "sample", "sample"
          ],
          postContent: "",
        },
      ],
    };
  },
  props: {
    img: String,
    postH1: String,
    postH2: String,
    postIntro: String,
    lyricsOG: Array,
    lyricsTrans: Array,
    postContent: String,
    lyrics: Array
  },
};
</script>

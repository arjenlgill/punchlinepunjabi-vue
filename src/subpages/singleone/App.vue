<template>
  <MobNav />
  <div id="post-wrapper">
    <div class="post-img-container">
      <img :src="this.post.img" alt="" class="post-img" />
    </div>

    <div class="post-content-container">
      <div id="tte">
        <h1 v-if="this.post.postH1" class="post-h1">{{ this.post.postH1 }}</h1>

        <h2 class="post-h2">{{ this.post.postH2 }}</h2>

        <p class="post-intro">{{ postIntro }}</p>

        <div v-bind:key="lyric" v-for="(lyric, index) in lyrics">
          <p v-if="index % 2 === 0" class="lyrics-og">
            {{ lyric }}
          </p>

          <p v-else class="lyrics-trans">{{ lyric }}</p>
        </div>

        <p class="post-content">{{ postContent }}</p>

        <p class="lyrics-og">‘Din jaap toh shuru honda,</p>
        <p class="lyrics-og">Aa keh paap teh mithiye mukkda’  </p>

        <h2 class="post-h2">Intro</h2>
        <div class="post-para-block">
          <p>
            ‘47’ is a song about three dons proclaiming their infamous
            reputations (we’ve written a separate track review for ‘47’, also).
            This piece will be focusing on Sidhu and his misadventures as a
            daaku, which cause moral complications for him because, ultimately,
            he is not bad at heart (noting his ad lib: ‘Dil da nee maara!’,
            which appears in intros). The daaku character is highly interesting
            to analyse because their reasons for being gangsters is rarely
            because they want to cause malice for its own sake; there's usually
            more to this type of person and what led to them becoming a
            gangster, and often you’ll find that they have a space in their
            heart for God. The contradictions that come from this make the daaku
            a multi-dimensional character worthy of observation.‍
          </p>

          <p>
            Being one of the biggest faces of the Punjabi hip hop sub-genre,
            it’s easy to see the influences Sidhu has acquired from rappers
            belonging to its parent genre: American hip hop, where the blueprint
            of the gangster life was laid down through articulate and catchy
            lyrics that still reverberate in popular culture to this day. There
            are many parallels of themes, ideas, and styles across the two
            styles of music – the most prevalent of which is the difficult
            choice a hustler must make between God and gun.   ‍
          </p>
          <p>
            Sidhu Moose Wala’s discography naturally carries traces of the thug
            life gene, and we’ve picked out several powerful lyrics where both
            artists have voiced mutual ideas about the trappings of sin, despite
            having a place for God in their hearts.‍
          </p>
          <p>
            This piece is divided into two sections. The first section is mainly
            concerned with Sidhu's fictional daaku persona, whereas the second
            section (taken from the transcript of the video version of this
            story) finds out how the real life Sidhu compares to the character
            he plays in his songs.‍
          </p>
        </div>

        <h2 class="post-h2">Story</h2>

        <div class="post-para-block">
          <p>
            On ‘47’, Sidhu revels in his infamy and the feats of bravery
            required to earn that reputation, spitting triumphant lines that
            seek to impress a girl (‘muttiyare’) that he’s presumably infatuated
            with:
          </p>

          <p class="lyrics-og">
            6 foot da jussa ni, rehnda barrel mooreh taneya.
          </p>

          <p class="lyrics-trans">
            My 6-foot body stands bravely in front of the barrel.
          </p>

          <p>
            Violence has long been an undercurrent of Sidhu’s music, as he has
            stylistically mirrored the thug life aesthetic fashioned by
            influential gangster rappers like Tupac Shakur, Biggie Smalls, and
            Snoop Dogg; even the Sidhu logo is a remix of the Grand Theft Auto:
            San Andreas video game art as a tribute to hip hop culture.
          </p>
          <p>
            In hip hop, the stories told by lyricists are often mired in a moral
            struggle between virtue and sin (Coolio’s ‘Gangsta’s Paradise’ and
            Tupac’s ‘Only God Can Judge Me’ come to mind in particular), and
            Sidhu’s music certainly stays true to form, where the dichotomy of
            God and gun is a recurring theme throughout his entire body of work.
            We’ve been previously accustomed to one-dimensional daakus in
            Punjabi films, whose motivations are monochromatically evil, but
            what this mix of Punjabi and hip hop does is create self-aware
            daakus, who now have their own medium to confess and reflect on
            their lifestyle.
          </p>
          <p>
              The blueprint for Sidhu’s daaku persona can be partly traced back
            to All Eyez on Me, a pivotal record where Tupac documents the
            trappings of the thug life. The subject matter covered in this album
            is bipolar, oscillating between feelings of pride and damnation. In
            ‘Gangsta Party’ (otherwise known as ‘2 of Amerikaz Most Wanted’),
            Tupac boasts of his fearlessness to pull the trigger, regardless of
            his religion:
          </p>

          <p class="lyrics-og">
            ‘I'm losin' my religion, <br />
            I'm vicious on these stool pigeons’.
          </p>

          <p>
            Then, a couple of songs later we reach ‘Only God Can Judge Me’,
            where that pride is replaced with shame as Tupac turns to God in his
            hours of need:
          </p>

          <p class="lyrics-og">
            Oh my Lord, tell me what I'm livin' for, <br />
            Everybody's droppin' got me knockin' on heaven's door.
          </p>

          <p>
            Similarly, Sidhu boasts about how his enemies fear him, recognising
            him as the AK47 personified, but also – like Tupac – realises how
            powerless he is to the grips of vice, which not even prayer can save
            him from:
          </p>

          <p class="lyrics-og">
            Jeone toh maarne tayi, ni mein kamm jaanda saare, <br />

            Meinu vairi kehnde ne, ‘47 ni muttiyare, […] <br />

            Din jaap toh shuru hunda, <br />

            Aa keh paap teh mittiye mukkda. <br />
          </p>

          <p class="lyrics-og">
            ‘From living to dying, I know of all the bad deeds, <br />
            My enemies call me ‘47, girl. […] <br />
            The day is ushered with prayer,<br />
            But ends at sin’s door’.
          </p>

          <p>
            What makes the daaku character so interesting in gangster music is
            that the subject matter tends to be rich in variety – at least in
            the upper echelons of poetry — as skilled poets word a whole
            spectrum of conflicting emotions that brew in the day-to-day
            hustling of a thug. Within the same breath, they’ll go from cursing
            their enemies, to expressing love. In ‘47’, Sidhu does this with his
            repeated use of the sweetened nouns ‘mithiye’ and ‘muttiyare’ [young
            woman], which are used to fill the syllable quota in each line;
            these nouns are placed within lines where Sidhu is talking about his
            enemies or his evil deeds.  
          </p>
        </div>
      </div>
    </div>
  </div>

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
        img: require("../../assets/img/sidhu47.jpg"),
        postH1: "Sidhu Moose Wala: '47', The Choice of God or Gun",
        postH2: "The Punchline Cut",
        postIntro: "",
        lyricsOG: [],
        lyricsTrans: [],
        lyricsSnippet: [],
        postContent: "",
      },
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

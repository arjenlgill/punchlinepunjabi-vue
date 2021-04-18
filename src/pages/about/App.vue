<template>
  <MobNav />
  <Sub :subTitle="this.sub.subTitle" :subContent="this.sub.subContent"/>
  <MoreMusic />
  <Footer />

</template>

<script>
import Sub from '../../components/Sub.vue'
import MobNav from '../../components/MobNav.vue'
import MoreMusic from '../../components/MoreMusic.vue'
import Footer from '../../components/Footer.vue'
import '../../assets/scss/style.scss'

export default {
  name: 'app',
  components: {
    MobNav,
    Sub,
    MoreMusic,
    Footer
  },
  data() {
    return {
      sub:{
        subTitle: 'About',
        subContent: 'Punchline Punjabi seeks to be a 1/1 music magazine that promotes our most talented Punjabi artists, deconstructing their songs into their individual parts to see exactly what makes them so rich in substance. We are a magazine in the traditional sense of producing written content, but also a magazine that you would find in a camera or CD player, loading pieces of dynamic media into the receptacle to play for your enjoyment. Through these two mediums of presenting content, we aim to document how the Punjabi sound continues to evolve over the centuries, from its folk roots. This will be achieved through series like: Sonah [gold] Selectah, which picks out some of the most ghaint [excellent] pieces of music; and Punjabi Samples, which picks out the most catchy old-school Punjabi loops and turns them into fresh tracks - to name just two of many. Further, we will cover interesting stories that are not being told elsewhere; for example: the influence of west coast G-Funk on Punjabi music. Essentially, our sonic magazine is at the intersection of Punjab and the wider Punjabi diaspora, covering the music that is coming out from the hemispheres. At our core, we seek to highlight the punchlines of our cultural narrative, hence the name: Punchline Punjabi'
      }
      }
    }
}
</script>

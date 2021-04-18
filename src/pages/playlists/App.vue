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
        subTitle: 'Playlists',
        subContent: 'We\'re bringing you playlists of Punjabi songs for every situation, from paying respects to our ma, to fighting off daakus, to celebrating with your mittar pyaare. Our playlists are designed to give you the complete Punjabi experience by proxy of your sound system.' 
      }
      }
    }
}
</script>

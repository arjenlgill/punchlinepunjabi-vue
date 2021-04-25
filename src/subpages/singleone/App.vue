<template>
  <MobNav />
  <Single />
  <MoreMusic />
  <Footer />

</template>

<script>
import MobNav from '../../components/MobNav.vue'
import Single from '../../components/Single.vue'
import MoreMusic from '../../components/MoreMusic.vue'
import Footer from '../../components/Footer.vue'
import '../../assets/scss/style.scss'

export default {
  name: 'app',
  components: {
    MobNav,
    Single,
    MoreMusic,
    Footer
  },
  data() {
    return {
    
      }
    }
}
</script>

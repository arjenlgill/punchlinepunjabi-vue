<template>
  <BurgerMenu />
  <Header />
  <MobNav />
  <HHero />
  <MoreMusic />
  <Footer />
</template>

<script>
import BurgerMenu from '../../components/BurgerMenu.vue'
import Header from '../../components/Header.vue'
import HHero from '../../components/HHero.vue'
import MobNav from '../../components/MobNav.vue'
import MoreMusic from '../../components/MoreMusic.vue'
import Footer from '../../components/Footer.vue'
import '../../assets/scss/style.scss'

export default {
  name: 'app',
  components: {
    BurgerMenu,
    Header,
    MobNav,
    HHero,
    MoreMusic,
    Footer
  },
  }
</script>

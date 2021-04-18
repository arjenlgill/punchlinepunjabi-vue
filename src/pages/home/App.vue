<template>
  <MobNav />
  <HHero />
</template>

<script>
import HHero from '../../components/HHero.vue'
import MobNav from '../../components/MobNav.vue'
import '../../assets/scss/style.scss'

export default {
  name: 'app',
  components: {
    MobNav,
    HHero
  },
  methods: {
    
  }
}
</script>

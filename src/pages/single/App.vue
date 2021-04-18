<template>
  <MobNav />
  <About />
</template>

<script>
import About from '@/views/About.vue'
import MobNav from './components/MobNav.vue'

export default {
  name: 'app',
  components: {
    MobNav,
    About
  }
}

</script>

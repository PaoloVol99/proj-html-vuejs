<script>
import Hero from './components/Hero.vue';
import EveryMomentSection from './components/EveryMomentSection.vue';

export default {
  components: {
    Hero,
    EveryMomentSection,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <Hero />
  <EveryMomentSection />
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>

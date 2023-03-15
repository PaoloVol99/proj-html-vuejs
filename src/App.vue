<script>
import Hero from './components/Hero.vue';
import EveryMomentSection from './components/EveryMomentSection.vue';
import OurValues from './components/OurValues.vue';
import RecentCauses from './components/RecentCauses.vue';
import AllCauses from './components/AllCauses.vue';
import Articles from './components/Articles.vue';
import ChangeALife from './components/ChangeALife.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    Hero,
    EveryMomentSection,
    OurValues,
    RecentCauses,
    AllCauses,
    Articles,
    ChangeALife,
    AppFooter,
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
  <OurValues />
  <RecentCauses />
  <AllCauses />
  <Articles />
  <ChangeALife />
  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>

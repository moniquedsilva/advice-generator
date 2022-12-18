<template>
  <main class="flex flex-col items-center justify-center gap-y-5 h-screen w-full bg-dark-blue">
    <AdviceCard />
    <AdviceFooter />
  </main>
</template>

<script>
import AdviceCard from './components/AdviceCard.vue'
import AdviceFooter from './components/AdviceFooter.vue'

export default {
  name: 'App',
  components: {
    AdviceCard,
    AdviceFooter,
  },
}
</script>

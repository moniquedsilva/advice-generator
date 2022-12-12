<template>
  <main class="flex items-center justify-center h-screen w-full bg-dark-blue">
    <AdviceCard />
  </main>
</template>

<script>
import AdviceCard from './components/AdviceCard.vue'
export default {
  name: 'App',
  components: {
    AdviceCard,
  },
}
</script>

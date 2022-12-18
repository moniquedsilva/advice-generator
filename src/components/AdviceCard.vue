<template>
  <article class="relative flex flex-col justify-center items-center gap-y-9 h-[332px] w-11/12 md:w-[540px] bg-gray-blue rounded-2xl font-manrope px-[32px]">
      <h1 class="text-neon-green uppercase tracking-[0.4em] text-xs font-extrabold">Advice # {{ id }}</h1>
      <p class="text-center text-light-blue font-extrabold tracking-[0.02em] leading-9 text-[28px] transition duration-300 ease-out opacity-0" :class="{'opacity-100': advice}">{{ advice }}</p>
      <img src="/assets/pattern-divider-desktop.svg" alt="Pattern">
      <button @click="generateAdvice" class="absolute -bottom-8 left-2/4 -translate-x-2/4 w-16 h-16 flex items-center justify-center cursor-pointer bg-neon-green rounded-full hover:shadow-[0_0_32px_rgba(83,255,171,1)] hover:shadow-neon-green transition duration-300">
        <img src="/assets/icon-dice.svg" alt="Dice" />
      </button>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AdviceCard',
  computed:{
    ...mapState({
      advice: state => state.advice,
      id: state => state.id,
    }),
  },
  mounted(){
    if(!this.advice) {
      this.$store.dispatch('NEW_ADVICE')
    }
  },
  methods:{
    async generateAdvice(){
      await this.$store.dispatch('NEW_ADVICE')
    }
  }
}
</script>
<template>
  <article class="relative flex flex-col justify-center items-center gap-y-9 h-[332px] w-11/12 md:w-[540px] bg-gray-blue rounded-2xl font-manrope px-[32px]">
      <h1 class="text-neon-green uppercase tracking-[0.4em] text-xs font-extrabold">Advice # </h1>
      <p class="text-center text-light-blue font-extrabold tracking-[0.02em] leading-9 text-[28px]">"It is easy to sit up and take notice, what’s difficult is getting up and taking action."</p>
      <img src="/assets/pattern-divider-desktop.svg" alt="Pattern">
      <button class="absolute -bottom-8 left-2/4 -translate-x-2/4 w-16 h-16 flex items-center justify-center cursor-pointer bg-neon-green rounded-full hover:shadow-[0_0_32px_rgba(83,255,171,1)] hover:shadow-neon-green transition">
        <img src="/assets/icon-dice.svg" alt="Dice">
      </button>
  </article>
</template>

<script>
export default {
  name: 'AdviceCard',
}
</script>
<template>
  <div
    class="container flex justify-center items-center h-screen w-screen m-auto"
  >
    <img src="https://http.cat/404" alt="404" />
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: '404 - Not Found',
    }
  },
}
</script>

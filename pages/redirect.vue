<template>
  <div>
    <h4 class="text-center">Please wait, you will redirect to home page...</h4>
  </div>
</template>

<script>
export default {
  name: "redirect",
  layout: 'auth',
  methods: {
    redirectToHome: async function() {
      setTimeout(() => {
        window.location.href = "/"
      }, Math.floor(Math.random() * 10000))
    }
  },
  async mounted() {
    await this.redirectToHome()
  }
}
</script>

<style scoped>

</style>

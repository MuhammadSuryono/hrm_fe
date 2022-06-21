<template>
  <div class="alert" :class="classes" role="alert">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: {
      default: ""
    },
    classes: {
      default: ""
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="card prod-p-card" v-bind:class="CardColor">
    <div class="card-body">
      <div class="row align-items-center m-b-30">
        <div class="col">
          <h6 class="m-b-5 text-white">{{CardTitle}}</h6>
          <h3 class="m-b-0 f-w-700 text-white" >{{CardValue}}</h3>
        </div>
        <div class="col-auto">
          <i class="fas f-18" v-bind:class="[IconWidget,IconColor]"></i>
        </div>
      </div>
      <p class="m-b-0 text-white" style="cursor: pointer">{{WidgetDescription}} <span class="fa fa-caret-down"/> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WidgetColor",
  props: {
    CardColor: {
      type: String,
      default: ""
    },
    CardTitle: String,
    CardValue: {
      default: 'undefined'
    },
    IconWidget: {
      default: "fa-money-bill-alt"
    },
    IconColor: {
      default: "text-c-red"
    },
    WidgetDescription: {
      default: ''
    }
  }
}
</script>

<style scoped>

</style>

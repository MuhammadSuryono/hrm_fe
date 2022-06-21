<template>
  <div>
    <div class="row">
      <div class="col-12" v-if="categoryLeave.length > 0">
        <div class="alert alert-danger" role="alert">
          <i class="fa fa-bell" /> Remaining penggunaan cuti anda berada di bawah ini
        </div>
      </div>
      <div class="col-xl-3 col-md-4 col-sm-12" v-for="(paidLeave, iPaidLEave) in categoryLeave" :key="iPaidLEave">
        <WidgetColor
          :icon-widget="paidLeave.icon"
          :icon-color="paidLeave.icon_color"
          :card-value="paidLeave.remaining_days_off"
          :card-color="paidLeave.base_color"
          :widget-description="paidLeave.description"
          :card-title="paidLeave.category_paid_leave_name" />
      </div>
    </div>

    <div class="row">
    </div>
  </div>
</template>

<script>
import HeaderContent from "@/components/layouts/HeaderContent";
export default {
  middleware: 'auth',
  name: 'IndexPage',
  components: {HeaderContent},
  data() {
    return {
      whatNew: [],
      categoryLeave: []
    }
  },
  async mounted() {
    await this.getDashboardCuti()
  },
  methods: {
    getDashboardCuti: async function() {
      try {
        let req = await this.$api.get('dashboard/cuti')
        this.categoryLeave = req.data.data.leaves
      } catch (e) {

      }
    },
    loadMore: function () {
      let newContent = []
      this.whatNew = this.whatNew.concat(newContent)
    },
  }

}
</script>

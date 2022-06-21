<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs  md-tabs" role="tablist">
            <li class="nav-item" v-for="(tab, iTab) in tabs" :key="iTab" v-if="tab.show">
              <a class="nav-link"
                 :class="{'active': tab.value === tabActive, '': tab.value !== tabActive}"
                 data-toggle="tab"
                 :href="`#${tab.value}`"
                 @click="onSelectTab(tab.value)"
                 role="tab" :aria-selected="tab.value === tabActive">
                <i :class="tab.icon"/> {{tab.label}}
              </a>
              <div class="slide"></div>
            </li>
          </ul>

          <div class="tab-content card-block">
            <div class="tab-pane" :class="{'active': 'user' === tabActive, '': 'user' !== tabActive}" id="user" role="tabpanel">
              <p class="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
            </div>
            <div class="tab-pane" :class="{'active': 'family' === tabActive, '': 'family' !== tabActive}" id="family" role="tabpanel">
              <Family />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Family from "../../components/pages/user/Family";
export default {
  name: "detail",
  components: {Family},
  data() {
    return {
      tabs: [
        {
          value: 'user',
          label: 'Pengguna',
          icon: 'fa fa-user',
          show: true
        },
        {
          value: 'family',
          label: 'Keluarga',
          icon: 'fa fa-users',
          show: true
        },
        {
          value: 'bank',
          label: 'Bank',
          icon: 'fa fa-university',
          show: true
        },
        {
          value: 'document',
          label: 'Dokumen',
          icon: 'fa fa-file',
          show: true
        },
        {
          value: 'scopes',
          label: 'Hak Akses User',
          icon: 'fa fa-key',
          show: this.$haveAccess(['scopes:update'])
        }
      ],
      tabActive: 'user'
    }
  },
  methods: {
    onSelectTab: function (key) {
      this.tabActive = key
    }
  },
  async mounted() {
    if (this.$queryUrl().active !== null) {
      this.tabActive = this.$queryUrl().active
    }
  }
}
</script>

<style scoped>

</style>

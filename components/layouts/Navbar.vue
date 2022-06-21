<template>
  <nav class="navbar header-navbar pcoded-header">
    <div class="navbar-wrapper">
      <div class="navbar-logo">
        <a href="index.html">
          <img class="img-fluid" src="/assets/png/logo.png" alt="Theme-Logo" />
        </a>
        <a class="mobile-menu" id="mobile-collapse" href="#!">
          <i class="feather icon-menu icon-toggle-right"></i>
        </a>
        <a class="mobile-options waves-effect waves-light">
          <i class="feather icon-more-horizontal"></i>
        </a>
      </div>
      <div class="navbar-container container-fluid">
        <ul class="nav-left">
        </ul>
        <ul class="nav-right">
          <li class="user-profile header-notification">
            <div class="dropdown-primary dropdown">
              <div class="dropdown-toggle" data-toggle="dropdown">
                <img src="/assets/jpg/avatar-4.jpg" class="img-radius" alt="User-Profile-Image">
                <span v-if="$auth.loggedIn">{{$auth.user.full_name}}</span>
                <i class="feather icon-chevron-down"></i>
              </div>
              <ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">

                <li>
                  <a @click="logout">
                    <i class="feather icon-log-out"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import  { mapGetters } from 'vuex';
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(['isAuthenticated','loggedInUser'])
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>

<template>
  <section class="login-block">

    <div class="col-lg-12">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-lg-4 col-md-6" style="margin-left: auto; display: block; margin-right: auto">

            <form class="md-float-material form-material" @submit.prevent="submitLogin">
              <div class="auth-box card">
                <div class="card-block">
                  <div class="row m-b-20">
                    <div class="col-md-12">
                      <h3 class="text-center txt-primary">HRM APPLICATION</h3>
                    </div>

                    <div class="text-center" style="margin-left: auto;margin-right: auto;">
                      <img src="https://mri-research-ind.com/dist/img/logo/logomri2.png" class="w-25" alt="logo.png">
                    </div>
                  </div>
                  <p class="text-muted text-center p-b-5">Masuk dengan akun Anda</p>
                  <div class="alert alert-danger" v-if="isError" role="alert">
                    Username or password is wrong. Please try again!
                  </div>
                  <div class="form-group form-primary">
                    <input type="text" name="username" v-model="username" class="form-control" required="">
                    <span class="form-bar"></span>
                    <label class="float-label">Username</label>
                  </div>
                  <div class="form-group form-primary">
                    <input type="password" name="password" v-model="password" class="form-control" required="">
                    <span class="form-bar"></span>
                    <label class="float-label">Password</label>
                  </div>
                  <div class="row m-t-25 text-left">
                    <div class="col-12">
                      <div class="forgot-phone text-right float-right">
                        <a href="#" class="text-right f-w-600"> Lupa Password?</a>
                      </div>
                    </div>
                  </div>
                  <div class="row m-t-30">
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  auth: 'guest',
  name: "login",
  layout: 'auth',
  data() {
    return {
      username: "",
      password: "",
      isError: false
    }
  },
  methods: {
    submitLogin() {
      try {
        this.$auth.loginWith('local', {data: {username: this.username, password: this.password}});
      } catch (e) {
        this.isError = true
        this.password = ""
      }
    }
  }
}
</script>

<style scoped>

</style>

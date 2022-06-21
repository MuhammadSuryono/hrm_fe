<template>
  <div>
    <div id="pcoded" class="pcoded">
      <div class="pcoded-overlay-box"></div>
      <div class="pcoded-container navbar-wrapper">
        <Navbar />
        <SidebarChat />
        <div class="pcoded-main-container">
          <div class="pcoded-wrapper">
            <Sidebar />

            <div class="pcoded-content">
              <div class="pcoded-inner-content">
                <div class="main-body">
                  <div class="page-wrapper">
                    <div class="page-body">
                      <Nuxt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="styleSelector">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/layouts/Navbar";
import SidebarChat from "@/components/layouts/SidebarChat";
import Sidebar from "@/components/layouts/Sidebar";
import HeaderContent from "@/components/layouts/HeaderContent";
export default {
  name: "default",
  components: {HeaderContent, Sidebar, SidebarChat, Navbar},
}
</script>

<style scoped>

</style>

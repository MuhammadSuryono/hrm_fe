<template>
  <!-- active pcoded-trigger -->
  <nav class="pcoded-navbar">
    <div class="nav-list">
      <div class="pcoded-inner-navbar main-menu">
        <div v-for="(menu, iMenu) in menus" :key="iMenu">
          <div v-if="menu.groupScopes.length === 0 ? true : $haveAccess(menu.groupScopes)">
            <div class="pcoded-navigation-label">{{menu.headerMenu}}</div>
            <ul class="pcoded-item pcoded-left-item">
              <li v-for="(menuHeader, iMenuHeader) in menu.menus"
                  :key="iMenuHeader"
                  :class="menuHeader.hasMenu ? 'pcoded-hasmenu':''" v-if="menuHeader.scopes.length === 0 ? true : $haveAccess(menuHeader.scopes)">

                <NuxtLink v-if="!menuHeader.hasMenu" :to="menuHeader.path" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i :class="menuHeader.icon"></i>
                  </span>
                  <span class="pcoded-mtext">{{menuHeader.label}}</span>
                </NuxtLink>

                <a v-if="menuHeader.hasMenu" href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i :class="menuHeader.icon"></i>
                  </span>
                  <span class="pcoded-mtext">{{menuHeader.label}}</span>
                </a>

                <ul v-if="menuHeader.hasMenu" class="pcoded-submenu">
                  <li v-for="(subMenu1, iSubMenu1) in menuHeader.subMenus" :key="iSubMenu1"
                      v-if="subMenu1.scopes.length === 0 ? true : $haveAccess(subMenu1.scopes)"
                      class="">
                    <NuxtLink :to="subMenu1.path" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">{{subMenu1.label}}</span>
                    </NuxtLink>
                  </li>
                </ul>

              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menus: [
        {
          headerMenu: "Home",
          groupScopes: [],
          menus: [
            {
              label: "Dashboard",
              hasMenu: false,
              icon: 'feather icon-menu',
              path: '/',
              scopes: [],
              subMenus: []
            },
          ]
        },
        {
          headerMenu: "Master Data",
          groupScopes: ['divisi:create','divisi:update','divisi:delete','divisi:list','divisi:read'],
          menus: [
            {
              label: "Divisi",
              hasMenu: false,
              icon: 'feather icon-inbox',
              scopes: ['divisi:create','divisi:update','divisi:delete','divisi:list','divisi:read'],
              path: '/master/divisi',
              subMenus: []
            },
          ]
        },
        {
          headerMenu: "Cuti",
          groupScopes: [
            'khusus:create',
            'khusus:validation',
            'kebijakan:create',
            'kebijakan:update',
            'leave_other:create','leave_other:validation',
            'kebijakan:delete','dispensasi:create','dispensasi:validasi','dispensasi:delete','dispensasi:update'
          ],
          menus: [
            {
              label: "Cuti Khusus",
              hasMenu: true,
              icon: 'feather icon-inbox',
              path: '/cuti/khusus',
              scopes: ['khusus:create','khusus:validation'],
              subMenus: [
                {
                  label: "Pengajuan Cuti Khusus",
                  hasMenu: false,
                  icon: 'feather icon-inbox',
                  scopes: ['khusus:create'],
                  path: '/cuti/khusus/pengajuan'
                },
                {
                  label: "Validasi Cuti Khusus",
                  hasMenu: false,
                  icon: 'feather icon-inbox',
                  scopes: ['khusus:validation'],
                  path: '/cuti/khusus/pengajuan/validasi'
                }
              ]
            },
            {
              label: "Cuti Lainnya",
              hasMenu: true,
              icon: 'feather icon-inbox',
              path: '/cuti/khusus',
              scopes: ['leave_other:create','leave_other:validation'],
              subMenus: [
                {
                  label: "Pengajuan Cuti Lainnya",
                  hasMenu: false,
                  icon: 'feather icon-inbox',
                  scopes: ['leave_other:create'],
                  path: '/cuti/khusus/pengajuan'
                },
                {
                  label: "Validasi Cuti Lainnya",
                  hasMenu: false,
                  icon: 'feather icon-inbox',
                  scopes: ['leave_other:validation'],
                  path: '/cuti/khusus/pengajuan/validasi'
                }
              ]
            },
            {
              label: "Cuti Kebijakan",
              hasMenu: false,
              icon: 'feather icon-inbox',
              scopes: ['kebijakan:create','kebijakan:update','kebijakan:delete'],
              path: '/cuti/kebijakan',
              subMenus: []
            },
            {
              label: "Cuti Dispensasi",
              hasMenu: true,
              icon: 'fa fa-smile',
              scopes: ['dispensasi:create','dispensasi:validasi','dispensasi:delete','dispensasi:update'],
              path: '/cuti/dispensasi',
              subMenus: [
                {
                  label: "Pengajuan Cuti Dispensasi",
                  hasMenu: false,
                  icon: 'feather icon-inbox',
                  scopes: ['dispensasi:create'],
                  path: '/cuti/dispensasi/pengajuan'
                },
                {
                  label: "Validasi Cuti Dispensasi",
                  hasMenu: false,
                  icon: 'feather icon-inbox',
                  scopes: ['dispensasi:validasi','dispensasi:delete','dispensasi:update'],
                  path: '/cuti/dispensasi/pengajuan/validasi'
                }
              ]
            },
            {
              label: "Histori Cuti Semua Karyawan",
              hasMenu: false,
              icon: 'fa fa-users',
              path: '/cuti/history',
              scopes: ['cutihistory:list'],
              subMenus: []
            },
            {
              label: "Histori Cuti Saya",
              hasMenu: false,
              icon: 'fa fa-archive',
              path: '/cuti/my-history',
              scopes: ['cutihistory:read'],
              subMenus: []
            },
          ]
        },
        {
          headerMenu: "Account",
          groupScopes: [],
          menus: [
            {
              label: "Profile",
              hasMenu: false,
              icon: 'feather icon-users',
              path: '/user/detail',
              scopes: [], // 'profile:update','profile:read'
              subMenus: []
            },
            {
              label: "User Accounts",
              hasMenu: false,
              icon: 'feather icon-users',
              path: '/account/accounts',
              scopes: ['user_account:create','user_account:update','user_account:delete','user_account:list','user_account:read'],
              subMenus: []
            },
            {
              label: "Password",
              hasMenu: false,
              icon: 'feather icon-command',
              path: '/account/change-password',
              scopes: [],
              subMenus: []
            },
          ]
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.fullPath)
  }
}
</script>

<style scoped>

</style>

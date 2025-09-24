<template data-theme="">
  <div class="flex h-screen overflow-hidden" data-theme="corporate">
    <!-- Sidebar -->
    <aside
      class="bg-base-100 border-base-200 fixed z-40 flex h-full flex-col border-r transition-all duration-300 ease-in-out md:relative"
      :class="[
        //  drawer mode saat layar kecil
        isDrawerOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full',
        //  sidebar mode saat layar besar
        isSidebarOpen && 'md:w-64 md:translate-x-0',
        !isSidebarOpen && 'translate-x-0 md:w-20',
      ]"
    >
      <!-- Bagian Logo -->
      <div v-if="isSidebarOpen">
        <div class="border-base-200 flex h-16 items-center justify-center border-b px-4 transition">
          <span class="ml-2 text-lg font-bold">MyApp</span>
        </div>
      </div>

      <!-- Bagian Menu -->
      <div class="flex-1 overflow-hidden p-2">
        <ul class="menu rounded-box flex w-full">
          <!-- Dashboard -->
          <li>
            <a v-if="isSidebarOpen"> <Home /> Dashboard </a>
            <div v-else class="tooltip tooltip-right">
              <a>
                <Home />
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- bagian akun -->
      <div
        class="dropdown border-base-200 border-t"
        :class="
          isSidebarOpen
            ? 'dropdown-top dropdown-end'
            : 'dropdown-right dropdown-top flex justify-center p-2'
        "
      >
        <div
          v-show="isSidebarOpen"
          tabindex="0"
          role="button"
          class="hover:bg-base-200 flex w-full cursor-pointer items-center p-3 duration-200"
        >
          <div class="avatar avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-8 rounded-full">
              <span class="text-xs">UI</span>
            </div>
          </div>

          <Transition name="fade" appear>
            <div v-if="showProfileDetail" class="ml-3 grow">
              <p class="text-sm leading-tight font-semibold">Denish N</p>
              <p class="text-xs text-gray-500">@withden</p>
            </div>
          </Transition>

          <Transition name="fade" appear>
            <ChevronsUpDown
              v-if="showProfileDetail"
              class="text-secondary flex-shrink-0 cursor-pointer text-sm"
            />
          </Transition>
        </div>

        <div
          v-show="!isSidebarOpen"
          tabindex="0"
          role="button"
          class="tooltip tooltip-right cursor-pointer"
          data-tip="Denish N"
        >
          <div class="avatar avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-8 rounded-full">
              <span class="text-xs">UI</span>
            </div>
          </div>
        </div>

        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box bg-base-100 z-50 mb-2 w-52 p-2 shadow"
        >
          <li>
            <a href="/pages/settings">
              <User class="h-4 w-4" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a href="/pages/settings">
              <Settings class="h-4 w-4" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a>
              <LogOut class="h-4 w-4" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <!-- overlay -->
    <div
      v-if="isDrawerOpen"
      class="bg-opacity-40 bg-base-200 fixed inset-0 z-30 opacity-50 md:hidden"
      @click="isDrawerOpen = false"
    ></div>

    <!-- Content -->

    <div class="flex flex-1 flex-col transition-all duration-300 ease-in-out">
      <!-- Navbar -->
      <div class="navbar bg-base-100 border-base-200 border-b shadow">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost" @click="toggleSidebar">
            <Menu />
          </button>
        </div>

        <div class="flex-1 pl-2">
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </div>

      <!-- breadcrumb -->
      <div class="breadcrumbs bg-base-100 hidden p-4 text-sm md:block">
        <ul>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-4 w-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-4 w-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Documents
            </a>
          </li>
          <li>
            <span class="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-4 w-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Add Document
            </span>
          </li>
        </ul>
      </div>

      <!-- Main content -->
      <main class="bg-base-100 h-100 flex-1 overflow-x-hidden overflow-y-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ChevronsUpDown, Home, LogOut, Menu, Settings, User } from 'lucide-vue-next'
import { ref, watch } from 'vue'

const isSidebarOpen = ref(true)
const showProfileDetail = ref(true)
const isDrawerOpen = ref(false)

const toggleSidebar = () => {
  if (window.innerWidth < 768) {
    isDrawerOpen.value = !isDrawerOpen.value
  } else {
    isSidebarOpen.value = !isSidebarOpen.value
  }
}

watch(isSidebarOpen, (val) => {
  if (val) {
    setTimeout(() => {
      showProfileDetail.value = true
    }, 150)
  } else {
    showProfileDetail.value = false
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

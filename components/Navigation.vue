<template>
  <nav class="w-full fixed bg-red-400 shadow-xs">
    <div class="container lg:mx-auto">
      <div class="flex">
        <div class="lg:relative fixed bottom-0 w-full bg-red-400 h-14 py-2 lg:pt-4">
          <ul class="flex flex-row lg:justify-start justify-between text-center ml-3">
            <li class="flex-1 lg:flex-none ml-3 mr-3">
              <nuxt-link to="/" :class="activeLink('/')">
                <div class="flex justify-center">
                  <svg
                    class="lg:hidden w-5 fill-current"
                    v-bind:class="isActiveLink('/') ? 'text-white' : 'text-black'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      class="heroicon-ui"
                      d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"
                    />
                  </svg>
                </div>
                <span class="lg:text-base text-xs lg:text-white pb-1">Beranda</span>
              </nuxt-link>
            </li>
            <li class="flex-1 lg:flex-none mr-3">
              <nuxt-link
                to="/info"
                :class="activeLink('/info')"
              >
                <div class="flex justify-center">
                  <svg
                    class="lg:hidden w-5 fill-current"
                    v-bind:class="isActiveLink('/info') ? 'text-white' : 'text-black'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      class="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    />
                  </svg>
                </div>
                <span class="lg:text-base text-xs lg:text-white pb-1">Informasi</span>
              </nuxt-link>
            </li>
            <li class="flex-1 lg:flex-none mr-3">
              <nuxt-link
                to="/about-us"
                :class="activeLink('/about-us')"
              >
                <div class="flex justify-center">
                  <svg
                    class="lg:hidden w-5 fill-current"
                    v-bind:class="isActiveLink('/about-us') ? 'text-white' : 'text-black'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      class="heroicon-ui"
                      d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    />
                  </svg>
                </div>
                <span class="lg:text-base text-xs lg:text-white pb-1">Tentang Kami</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      activeLink(link) {
        let isActive = this.isActiveLink(link)
        return (isActive) ? 'flex flex-col text-white lg:border-b-2 lg:border-white lg:pb-2 lg:mr-5' : 'flex flex-col lg:border-b-2 lg:border-gray-400 lg:border-none lg:pb-2 lg:mr-5'
      },
      isActiveLink(link) {
        let firtspath = this.$route.path.split('/')[1]
        return link == '/' + firtspath
      }
    }
  };
</script>

<style scoped>
</style>

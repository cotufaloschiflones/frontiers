<template>
  <v-app>
    <app-navigation />

    <v-main class="grey-light">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'

export default {
  name:       'App',
  components: {
    AppNavigation
  }
}
</script>

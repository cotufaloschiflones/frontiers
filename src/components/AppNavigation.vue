<template>
  <v-navigation-drawer
    permanent
    fixed
    app
  >
    <v-app-bar
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>papers.</h1>
      </div>
    </v-app-bar>

    <v-divider />

    <v-list dense>
      <v-list-item
        :to="{ name: 'home'}"
        color="primary"
        exact
        link
      >
        <v-list-item-content>
          <v-list-item-title>Exercise 1</v-list-item-title>
          <v-list-item-subtitle>Papers Card</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        :to="{ name: 'recursiveMenu'}"
        color="primary"
        link
      >
        <v-list-item-content>
          <v-list-item-title>Exercise 2</v-list-item-title>
          <v-list-item-subtitle>Recursive menu</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>

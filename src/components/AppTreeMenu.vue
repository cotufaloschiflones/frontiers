<template>
  <v-list
    dense
    app
  >
    <v-list-group v-if="hasChildren">
      <template v-slot:activator>
        <v-list-item-title>{{ item.name }} <sup>({{ item.children.length }})</sup></v-list-item-title>
      </template>

      <app-tree-menu
        v-for="(children, i) in item.children"
        :key="i"
        :item="children"
        class="pl-4"
      />
    </v-list-group>
    <v-list-item
      v-else
      link
    >
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name:  'AppTreeMenu',
  props: {
    item: { type: Object, required: true }
  },
  computed: {
    hasChildren() {
      return this.item.children?.length
    }
  }
}
</script>

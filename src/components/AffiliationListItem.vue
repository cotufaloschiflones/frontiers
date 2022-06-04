<template>
  <div
    class="mb-2 text-caption"
    v-bind="{...$attrs, ...$props}"
  >
    <div>
      <sup class="font-weight-bold">{{ affiliation.id }}</sup>
      <span class="black--text"> {{ affiliation.name }} </span>
    </div>
    <v-icon
      size="13"
      color="grey-light darken-1"
    >
      mdi-map-marker
    </v-icon>
    {{ affiliation.city }},
    {{ affiliation.country }}
  </div>
</template>

<script>
export default {
  name:  'AffiliationListItem',
  props: {
    affiliation: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.active {
  background: red !important;
}
</style>
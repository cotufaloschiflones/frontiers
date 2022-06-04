<template>
  <div>
    <span class="text-body-2 font-weight-bold black--text">{{ label }} </span>
    <span
      v-for="(profile, i) in authors"
      :key="i"
      class="text-body-2"
    >
      <profile-card
        :profile="profile"
        :affiliations="affiliations"
      />
      <span v-if="i === authors.length - 2"> and </span>
      <span v-else-if="i < authors.length - 1">, </span>
    </span>
  </div>
</template>

<script>
import ProfileCard from './ProfileCard.vue'
export default {
  name:       'AuthorList',
  components: {
    ProfileCard
  },
  props: {
    label:        { type: String, default: null },
    authors:      { type: Array, default: () => [] },
    affiliations: { type: Array, required: true }
  }
}
</script>
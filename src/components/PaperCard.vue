<template>
  <v-container
    class="d-flex justify-center flex-column"
    fill-height
  >
    <div class="d-flex flex-column mb-4">
      <v-icon
        color="primary"
        size="56"
      >
        mdi-file-check-outline
      </v-icon>
      <h2>Thank you for considering participating to this paper</h2>
    </div>
    <v-card
      max-width="660"
      tile
    >
      <v-card-text class="py-6 px-8">
        <h3 class="text-body-2">
          {{ type }}
        </h3>
        <h2 class="text-subtitle-1 black--text mb-2">
          {{ title }}
        </h2>

        <author-list
          :authors="authors"
          :affiliations="affiliations"
          label="Authors"
          class="mb-2"
        />
        <author-list
          :authors="[editor]"
          :affiliations="affiliations"
          label="Editor"
        />
        <author-list
          :authors="[yourself]"
          :affiliations="affiliations"
          label="Yourself"
        />

        <affiliation-list
          :affiliations="affiliations"
          :active-affiliations="activeAffiliations"
        />

        <div class="mt-2 text-body-2 font-weight-regular black--text">
          {{ journal }} | {{ section }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AuthorList from '@/components/AuthorList'
import AffiliationList from '@/components/AffiliationList'

export default {
  name:       'PaperCard',
  components: {
    AuthorList,
    AffiliationList
  },
  props: {
    title:        { type: String, default: null },
    type:         { type: String, default: null },
    journal:      { type: String, default: null },
    section:      { type: String, default: null },
    authors:      { type: Array, required: true },
    editor:       { type: Object, required: true },
    yourself:     { type: Object, required: true },
    affiliations: { type: Array, required: true }
  },
  computed: {
    ...mapState(['selectedProfile']),
    activeAffiliations() {
      return this.selectedProfile?.affiliations.map(affiliation => affiliation.id)
    }
  }
}
</script>

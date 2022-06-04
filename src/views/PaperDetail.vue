<template>
  <v-container fill-height>
    <PaperCard v-bind="{ ...paper, affiliations }" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import PaperCard from '@/components/PaperCard'

export default {
  name:       'Home',
  components: {
    PaperCard
  },
  computed: {
    ...mapState(['paper']),
    affiliations() {
      const authorAffiliations = this.paper.authors.map(author => author.affiliations).flat()
      const allAffiliations = [
        ...authorAffiliations,
        ...this.paper.editor.affiliations,
        ...this.paper.yourself.affiliations
      ]

      const uniqAff = Array.from(new Set(allAffiliations.map(a => a.id)))
        .map(id => allAffiliations.find(a => a.id === id))

      return uniqAff
    }
  }
}
</script>


<template>
  <div>
    <app-button
      class="mt-2"
      @click="visible = !visible"
    >
      Affiliations <v-icon size="18">
        {{ buttonIcon }}
      </v-icon>
    </app-button>
    <v-expand-transition>
      <div
        v-show="visible"
        class="text-caption"
      >
        <affiliation-list-item
          v-for="affiliation in affiliations"
          :key="affiliation.id"
          :affiliation="affiliation"
          :class="{'grey lighten-5 pa-2': isAffiliationActive(affiliation)}"
        />
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import AffiliationListItem from '@/components/AffiliationListItem'
import AppButton from '@/components/AppButton'

export default {
  name:       'AffiliationList',
  components: {
    AffiliationListItem,
    AppButton
  },
  props: {
    affiliations:       { type: Array, required: true },
    activeAffiliations: { type: Array, default: null }
  },
  data: () => ({
    visible: false
  }),
  computed: {
    buttonIcon() {
      return this.visible ? 'mdi-chevron-up' : 'mdi-chevron-down'
    }
  },
  methods: {
    isAffiliationActive(affiliation) {
      return this.activeAffiliations?.includes(affiliation.id)
    }
  }
}
</script>
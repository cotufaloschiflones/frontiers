<template>
  <v-menu
    :close-on-content-click="false"
    max-width="385px"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <span
        v-bind="attrs"
        v-on="on"
        @click="setSelectProfile(profile)"
      >
        <span class="text-decoration-underline">{{ profile.fullName }}</span>
        <sup>{{ affiliationIds.join() }}</sup>
      </span>
    </template>

    <v-card tile>
      <v-card-text>
        <div class="d-flex justify-space-between align-center">
          <div>
            <h4 class="text-subtitle-2 black--text">
              {{ profile.fullName }}
            </h4>
            <h6 class="text-body-2">
              {{ profile.role }}
            </h6>
          </div>
          <v-avatar
            size="56"
            class="ml-4"
            color="primary"
          >
            <v-img
              v-if="profile.pictureUrl"
              :src="profile.pictureUrl"
              :alt="profile.fullName"
              @error="profile.pictureUrl = null"
            />
            <span
              v-else
              class="white--text text-subtitle-1"
            >{{ userNameInitials }}</span>
          </v-avatar>
        </div>

        <affiliation-list-item
          v-for="affiliationId in affiliationIds"
          :key="affiliationId"
          :affiliation="getAffiliationById(affiliationId)"
        />

        <div class="mt-4 mb-2">
          <profile-card-metric-label
            :metric="profile.publications"
            label="Publications"
          />
          <profile-card-metric-label
            :metric="profile.views"
            label="Views"
            class="mx-4"
          />
          <profile-card-metric-label
            :metric="profile.followers"
            label="Followers"
          />
        </div>

        <div class="text-right">
          <app-button
            :href="profile.profileUrl"
            target="_blank"
            class="text-uppercase"
          >
            <v-icon
              class="mr-1"
              size="18"
            >
              mdi-open-in-new
            </v-icon>
            View profile
          </app-button>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations } from 'vuex'
import ProfileCardMetricLabel from '@/components/ProfileCardMetricLabel'
import AffiliationListItem from '@/components/AffiliationListItem'
import AppButton from '@/components/AppButton'

export default {
  name:       'ProfileCard',
  components: {
    ProfileCardMetricLabel,
    AffiliationListItem,
    AppButton
  },
  props: {
    profile:      { type: Object, required: true },
    affiliations: { type: Array, required: true }
  },
  computed: {
    affiliationIds() {
      return this.profile.affiliations.map(affiliation => affiliation.id)
    },
    userNameInitials() {
      return this.profile.fullName.split(' ').map(name => name.charAt(0)).join('')
    }
  },
  methods: {
    ...mapMutations(['setSelectProfile']),
    getAffiliationById(id) {
      return this.affiliations.find(affiliation => affiliation.id === id)
    }
  }
}
</script>

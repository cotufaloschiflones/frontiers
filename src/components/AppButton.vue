<template>
  <v-btn
    class="text-none"
    v-bind="{...$attrs, ...$props}"
    v-on="$listeners"
  >
    <template
      v-for="(i, slot) in $scopedSlots"
      v-slot:[slot]
    >
      <slot :name="slot" />
    </template>
  </v-btn>
</template>

<script>
export default {
  name:         'AppButton',
  inheritAttrs: false,
  props:        {
    color:  { type: String, default: 'primary' },
    text:   { type: Boolean, default: true },
    ripple: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  padding: 0 !important;
  font-size: #{13 / $font-size-root}rem !important;

  &::before {
    background-color: transparent !important;
  }
}
</style>

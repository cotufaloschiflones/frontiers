<template>
  <span class="text-caption">
    <span class="primary--text font-weight-bold">{{ metric }} </span>
    <span>{{ label }}</span>
  </span>
</template>

<script>
export default {
  name:  'ProfileCardMetricLabel',
  props: {
    metric: { type: [String, Number], default: null },
    label:  { type: String, default: null }
  }
}
</script>

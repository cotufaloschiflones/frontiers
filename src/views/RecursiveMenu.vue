<template>
  <app-tree-menu :item="tree" />
</template>

<script>
import AppTreeMenu from '@/components/AppTreeMenu'

export default {
  name:       'RecursiveMenu',
  components: {
    AppTreeMenu
  },
  data: () => ({
    tree: {
      name:     'Root',
      children: [
        {
          name:     'Child 1',
          children: [{ name: 'Child 1.1' }, { name: 'Child 1.2' }, { name: 'Child 1.3', children: [{ name: 'Children 1.3.1' }] }]
        },
        { name: 'Child 2' }
      ]
    }
  })
}
</script>

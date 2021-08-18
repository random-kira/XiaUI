<template>
    <svg class="xia-icon">
        <use :xlink:href="`#x-${name}`"></use>
    </svg>
</template>

<script>
  export default {
    name: 'Icon',
    props: ['name']
  };
</script>

<style lang="scss" scoped>
    .xia-icon  {
        height: 1em;
        width: 1em;
    }
</style>

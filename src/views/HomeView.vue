<script>
import header_comp from '../components/main/header_comp.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    'v-header-comp': header_comp
  }
}
</script>

<template>
  <div>
    <layout>
      <v-header-comp />
    </layout>
  </div>
</template>

<style lang="scss"></style>
<script>
import header_comp from '../components/main/header_comp.vue';
import section1 from '../components/main/section1.vue';
import section2 from '../components/main/section2.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    'v-header-comp': header_comp,
    'section1': section1,
    'section2': section2,
  }
}
</script>

<template>
  <div>
    <layout>
      <v-header-comp />
      <section1 />
      <section2 />
    </layout>
  </div>
</template>

<style lang="scss"></style>
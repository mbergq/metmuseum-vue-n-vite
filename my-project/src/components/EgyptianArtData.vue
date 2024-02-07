
<script>
export default {
  props: {
    year: {
      type: String
    },
  }
}
</script>
<template>
  <div>
    <p v-if="year === null">Null</p>
    <p v-else>{{ year }}</p>
  </div>
</template>

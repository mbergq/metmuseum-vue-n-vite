
<script>
export default {
  props: {
    year: {
      type: String
    },
    department: {
      type: String
    },
    medium: {
      type: String
    }
  }
}
</script>
<template>
  <div>

    <p>{{ department }}</p>
    <p>{{ year }}</p>
    <p>{{ medium }}</p>
  </div>
</template>

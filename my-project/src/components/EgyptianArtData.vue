
<script>
export default {
  props: {
    year: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    medium: {
      type: String,
      required: true
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

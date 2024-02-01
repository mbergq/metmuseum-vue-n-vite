<script>

export default {

  props: {
    keyWordLog: {
      type: String,
    },
    numberOfPossibleIds: {
      type: Number,
    },
  },


}

</script>

<template>
  <p>{{ this.keyWordLog }}</p>
</template>

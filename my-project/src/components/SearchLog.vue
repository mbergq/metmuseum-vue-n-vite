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
  <div>

    <p>{{ numberOfPossibleIds }}</p>
    <p>{{ keyWordLog }}</p>

  </div>
</template>

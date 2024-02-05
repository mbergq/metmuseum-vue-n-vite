<script>

export default {

  props: {
    keyWord: {
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
    <p>{{ keyWord }}</p>

  </div>
</template>

<template>
  <v-container>
    <div :class="{'loading-oppacity' : isLoadingData }">
      <h1> {{file.title}}</h1>
      <v-img :src="file.url"></v-img>
    </div>
    <v-progress-circular
      v-if="isLoadingData"
      :size="100"
      :width="7"
      class="loading-progress"
      color="#34b5ae"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script>
export default {
  name: "specificFileCard",
  props: ["file"],
  data() {
    return {
      isLoadingData: true
    };
  },
  methods: {},
  watch: {
    file() {
      this.isLoadingData = false;
    }
  }
};
</script>

<template>
  <v-flex>
      <span class="title-bla">Welcome To Deep Drive</span>
    <div class="showcase-container">
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "homeCard",

  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style  >
.showcase-container {
  width: 100vw;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1459200486679-385949c40e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80  ");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 25rem;
  opacity: 0.7;
  z-index: 1;
  
}
.title-bla {
    position: absolute;
    top:30%;
    left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  z-index: 2;
}

</style>
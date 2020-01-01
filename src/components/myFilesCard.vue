<template>
  <v-container>
 <v-card :class="{'loading-oppacity' : isLoadingData }" class=" mx-auto" max-width="750"  >
    <v-toolbar color="cyan"  dark>
      <v-toolbar-title>All My Files</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line >
      <template v-for="(item, index) in items">
        <v-divider v-if="index !==0" :key="item.title"></v-divider>
        <v-list-item link  :key="item.title" > 
          <v-list-item-avatar>
            <v-img :src="`https://randomuser.me/api/portraits/men/${index}.jpg`"></v-img>
          </v-list-item-avatar>
          <v-list-item-content >
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-img width="150px" height="50px" :src="item.thumbnailUrl"></v-img>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
       <v-progress-circular
                    v-if="isLoadingData"
                    :size="100"
                    :width="7"
                    class="loading-progress"
                    color="#34b5ae"
                    indeterminate
            ></v-progress-circular>
       <v-pagination
          v-model="pagination.page"
          :length="pagination.total"
          @input="fetchData"
          circle
    ></v-pagination>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'myFilesCard',
  data: () => ({
    items: [],
    isLoadingData : false,
     pagination: {
      page: 1,
      total: 5,
      perPage: 0
    }
  }),
  methods:{
    fetchData () {
      this.isLoadingData = true ;
      setTimeout(()=> {
          fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
          .then(response =>  response.json())
          .then(data => this.items = data)
          this.isLoadingData = false;
      }, 2000);
    }
  },
  created() {
   this.fetchData()
  }
};
</script>
<style>
   .loading-progress {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%,-50%);
        z-index: 1;
    }
    .loading-oppacity {
      opacity: 0.4;
    }
</style>
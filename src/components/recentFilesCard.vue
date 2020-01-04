<template>
  <v-container>
          <v-toolbar  flat >
            <v-toolbar-title>
                <span class="card-header-title">Recent Files</span>
            </v-toolbar-title>
            <div class="px-2 textMuted">
                ({{desserts.length}})
            </div>
                 <v-spacer></v-spacer>
             <v-text-field append-icon="search" v-model="search" label="Search..." class="mx-5 mt-5"></v-text-field>
        </v-toolbar>
        <v-data-table
        :headers="headers" 
        :items="desserts" 
        :items-per-page="10" 
        :search="search"
        class="elevation-1">
       
        <template v-slot:item.type="{ item }">
        <v-icon>audiotrack</v-icon>
        </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "recentFilesCard",
  data() {
    return {
    isLoadingData: true,
    search: '',
      headers: [
        {  text: "File Name",  value: "name"},
        { text: "Size", value: "calories" },
        { text: "Created Date", value: "iron" },
        { text: "Author", value: "carbs" },
        { text: "Length (Mins)", value: "protein" },
        { text: "Type", value: "type" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  created(){
      setTimeout(()=> this.isLoadingData = false, 3000)
  }
};
</script>
<style>
    .toolbar--filters .v-text-field.v-text-field--solo .v-input__control {
        min-height: 28px;
        width: 80px;
    }
    .toolbar--filters .v-text-field input {
        font-size: 14px;
        line-height: 14px;
        padding: 0;
    }
    .toolbar--filters .theme--light.v-text-field--solo-inverted.v-text-field--solo .v-input__slot {
        margin-bottom: 0;
    }
</style>
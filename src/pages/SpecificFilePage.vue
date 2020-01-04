<template>
    <v-container>
        <v-layout justify-center>
                <v-flex lg7 >
                    <specific-file-card
                    :file="file"
                    ></specific-file-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import specificFileCard from '../components/specificFileCard';

export default {
    name: 'SpecificFilePage',
    components: {
        specificFileCard
    },
    props:['fileId'],
    data(){
        return{
           file : {} 
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/photos?id=${this.fileId}`)
        .then(response => response.json())
        .then(data => this.file = data[0] )
    }
};
</script>

<style scoped>

</style>

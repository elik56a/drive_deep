<template>
    <v-container  >
        <v-layout justify-center>
                <v-flex lg7 >
                    <my-files-card
                    ></my-files-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import myFilesCard from '../components/myFilesCard';

export default {
    name: 'MyAcoountPage',
    components: {
        myFilesCard
    }
};
</script>

<style scoped>

</style>

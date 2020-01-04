<template>
    <v-container  >
        <v-layout justify-center>
                <v-flex >
                    <recent-files-card
                    ></recent-files-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import recentFilesCard from '../components/recentFilesCard';

export default {
    name: 'recentFilesPage',
    components: {
        recentFilesCard
    }
};
</script>

<style scoped>

</style>

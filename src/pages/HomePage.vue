<template>
    <v-container  >
        <v-layout justify-center>
                <v-flex lg7 >
                    <home-card
                    ></home-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import homeCard from '../components/homeCard';

export default {
    name: 'HomePage',
    components: {
        homeCard
    }
};
</script>

<style scoped>

</style>

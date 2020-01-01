<template>
    <v-container  >
        <v-layout justify-center>
                <v-flex lg7 >
                    <my-account-card
                    ></my-account-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import myAccountCard from '../components/myAccountCard';

export default {
    name: 'MyAcoountPage',
    components: {
        myAccountCard
    }
};
</script>

<style scoped>

</style>

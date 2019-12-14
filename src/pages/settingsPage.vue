<template>
    <v-container  >
        <v-layout justify-center>
                <v-flex lg7 >
                    <settings-card
                    ></settings-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import settingsCard from '../components/settingsCard';

export default {
    name: 'settingsPage',
    components: {
        settingsCard
    }
};
</script>

<style scoped>

</style>

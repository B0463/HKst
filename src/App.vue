<template>
    <header-main/>
    <home-main/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "./components/HeaderMain.vue";
import FooterMain from "./components/FooterMain.vue";
import HomeMain from "./components/HomeMain.vue";
export default defineComponent({
    name: 'App',
    components: {
        HeaderMain,
        FooterMain,
        HomeMain
    }
});
</script>
<style scoped>
</style>

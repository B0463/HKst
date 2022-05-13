<template>
    <header-main/>
    <home-main/>
    <footer-main/>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderMain from "../components/HeaderMain.vue";
import FooterMain from "../components/FooterMain.vue";
import HomeMain from "../components/HomeMain.vue";
export default defineComponent({
    name: 'Home',
    components: {
        HeaderMain,
        FooterMain,
        HomeMain
    },
    beforeMount() {
        document.title = "HOME | HKst";
    }
});
</script>

<style scoped>
</style>

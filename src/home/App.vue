<template>
    <header-main/>
    <h1>What will be ahead?</h1>
    <p>Sorry, this site is undergoing some changes. Any questions about the change contact the email "hkimpr40@gmail.com"</p>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../components/HeaderMain.vue";
import FooterMain from "../components/FooterMain.vue";
export default defineComponent({
    name: 'App',
    components: {
        HeaderMain,
        FooterMain
    }
});
</script>
<style scoped>
</style>

<template>
    <header-main/>
    <not-found/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../../components/HeaderMain.vue";
import FooterMain from "../../components/FooterMain.vue";
import NotFound from "./NotFound.vue";
export default defineComponent({
    name: 'App',
    components: {
        HeaderMain,
        FooterMain,
        NotFound
    }
});
</script>
<style scoped>
</style>

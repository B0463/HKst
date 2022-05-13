<template>
    <header-main/>
    <projetos-main/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../components/HeaderMain.vue";
import FooterMain from "../components/FooterMain.vue";
import ProjetosMain from "../components/ProjetosMain.vue";
export default defineComponent({
    name: 'projetos',
    components: {
        HeaderMain,
        FooterMain,
        ProjetosMain
    },
    beforeMount() {
        document.title = "PROJETOS | HKst";
    }
});
</script>
<style scoped>
</style>

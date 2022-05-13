<template>
    <header-main/>
    <curriculo-main/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../components/HeaderMain.vue";
import FooterMain from "../components/FooterMain.vue";
import CurriculoMain from "../components/CurriculoMain.vue";
export default defineComponent({
    name: 'Curriculo',
    components: {
        HeaderMain,
        FooterMain,
        CurriculoMain
    },
    beforeMount() {
        document.title = "CURRICULO | HKst";
    }
});
</script>
<style scoped>
</style>

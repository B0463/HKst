<template>
    <header-main/>
    <utilitarios-main/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../components/HeaderMain.vue";
import FooterMain from "../components/FooterMain.vue";
import UtilitariosMain from "../components/UtilitariosMain.vue";
export default defineComponent({
    name: 'Utilitarios',
    components: {
        HeaderMain,
        FooterMain,
        UtilitariosMain
    },
    beforeMount() {
        document.title = "UTILITARIOS | HKst";
    }
});
</script>
<style scoped>
</style>

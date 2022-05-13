<template>
    <header-main/>
    <contato-main/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../components/HeaderMain.vue";
import FooterMain from "../components/FooterMain.vue";
import ContatoMain from "../components/ContatoMain.vue";
export default defineComponent({
    name: 'Contato',
    components: {
        HeaderMain,
        FooterMain,
        ContatoMain
    },
    beforeMount() {
        document.title = "CONTATO | HKst";
    }
});
</script>
<style scoped>
</style>

<template>
    <header-main/>
    <not-found/>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "../../components/HeaderMain.vue";
import FooterMain from "../../components/FooterMain.vue";
import NotFound from "../../components/errors/NotFound.vue";
export default defineComponent({
    name: '404 - NotFound',
    components: {
        HeaderMain,
        FooterMain,
        NotFound
    },
    beforeMount() {
        document.title = "404 - NotFound | HKst";
    }
});
</script>
<style scoped>
</style>

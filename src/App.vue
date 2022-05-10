<template>
    <header-main/>
    <div class="space"></div>
    <footer-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "./components/HeaderMain.vue";
import FooterMain from "./components/FooterMain.vue";
export default defineComponent({
    name: 'App',
    components: {
        HeaderMain,
        FooterMain
    }
});
</script>
<style scoped>
.space {
    height: 20vh;
}
</style>

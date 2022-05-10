<template>
    <header-main/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "./components/HeaderMain.vue";
export default defineComponent({
    name: 'App',
    components: {
        HeaderMain
    }
});
</script>
<style>
</style>

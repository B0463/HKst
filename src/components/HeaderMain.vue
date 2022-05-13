<template>
    <header class="box has-background-black-ter header">
        <div>
            <figure class="image headerLogoFig">
                <img class="headerLogo" src="../assets/logo.png">
            </figure>
            <h1 class="title headerTitle">HKst</h1>
        </div>
        <nav class="headerNav box has-background-black-ter">
            <div class="headerNavCont">
                <a href="/" class="headerNavItem">
                    <div class="headerNavDivItem has-background-grey-dark has-text-white">Home</div>
                </a>
                <a href="/contato" class="headerNavItem">
                    <div class="headerNavDivItem has-background-grey-dark has-text-white">Contato</div>
                </a>
                <a href="/projetos" class="headerNavItem">
                    <div class="headerNavDivItem has-background-grey-dark has-text-white">Projetos</div>
                </a>
                <a href="/curriculo" class="headerNavItem">
                    <div class="headerNavDivItem has-background-grey-dark has-text-white">Curriculo</div>
                </a>
                <a href="/utilitarios" class="headerNavItem">
                    <div class="headerNavDivItem has-background-grey-dark has-text-white">Utilitarios</div>
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HeaderMain"
})
</script>

<style scoped>
@import url("../assets/css/HeaderMain.css");
</style>

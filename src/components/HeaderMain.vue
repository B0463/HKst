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
.headerLogo {
    width: 128px;
    margin: 0 auto;
}
.headerTitle {
    color: #f0f0f0;
    text-align: center;
}
.header {
    border-radius: 0;
    margin: 0;
}
.headerNav {
    padding: 0rem;
    box-shadow: none;
    text-align: center;
}
.headerNavItem {
    margin: 0 0.4rem;
}
.headerNavDivItem {
    margin: 0.4rem 0;
    display: inline-block;
    padding: 0.7rem;
    border-radius: 6px;
    font-weight: bold;
}
.headerNavCont {
    display: inline-block;
}
@media screen and (min-width: 900px) {
    .headerLogo {
        position: absolute;
        margin: 0;
    }
}
</style>

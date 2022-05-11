<template>
    <footer class="box has-background-black-ter footer">
        <div>
            <figure class="image footerLogoFig">
                <img class="footerLogo" src="../assets/logo.png">
            </figure>
            <h1 class="title footerTitle">HKst</h1>
        </div>
        <div class="footerContent has-background-black-ter box">
            <nav>
                <ul>
                    <li><a class="has-text-white" href="/">Home</a></li>
                    <li><a class="has-text-white" href="/contato">Contato</a></li>
                    <li><a class="has-text-white" href="/projetos">Projetos</a></li>
                    <li><a class="has-text-white" href="/curriculo">Curriculo</a></li>
                    <li><a class="has-text-white" href="/utilitarios">Utilitarios</a></li>
                </ul>
            </nav>
        </div>
        <p class="has-text-white">Copyright&copy;2022 HKst</p>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FooterMain"
})
</script>

<style scoped>
.footerLogo {
    width: 128px;
    margin: 0 auto;
}
.footer {
    border-radius: 0;
    margin: 0;
    padding-bottom: 2rem;
}
.footerTitle {
    color: #f0f0f0;
    text-align: center;
}
.footerContent {
    margin: 0;
    padding: 0;
    box-shadow: none;
}
p {
    text-align: center;
    margin-top: 2rem;
}
@media screen and (min-width: 900px) {
    .footerLogo {
        margin: 0;
    }
    .footerContent {
        padding: 0 3rem;
    }
}
</style>

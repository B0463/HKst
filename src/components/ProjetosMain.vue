<template>
    <main>
        <div class="prejeto--card--container">
            <div class="projeto--card box has-background-grey-dark">
                <div class="title--bar">
                    <div class="name-area">
                        <h3 class="name-text title is-3 has-text-white">HKst</h3>
                    </div>
                    <div class="lang-area">
                        <span class="tag is-info is-medium has-text-white">TypeScript</span>
                        <span class="tag is-success is-medium has-text-white">Vue3</span>
                    </div>
                </div>
                <div class="text-area">
                    <p class="has-text-white">Site pessoal (este site) com algumas informações sobre mim.</p>
                </div>
            </div>
        </div>
        <div class="prejeto--card--container">
            <div class="projeto--card box has-background-grey-dark">
                <div class="title--bar">
                    <div class="name-area">
                        <h3 class="name-text title is-3 has-text-white">VigenereED</h3>
                    </div>
                    <div class="lang-area">
                        <span class="tag is-info is-medium has-text-white">C++</span>
                    </div>
                </div>
                <div class="text-area">
                    <p class="has-text-white">Programa de criptogrtafia e descriptografia de texto em cifra de vigenere baseado em c++.</p>
                </div>
            </div>
        </div>
        <div class="prejeto--card--container">
            <div class="projeto--card box has-background-grey-dark">
                <div class="title--bar">
                    <div class="name-area">
                        <h3 class="name-text title is-3 has-text-white">Bot_0463</h3>
                    </div>
                    <div class="lang-area">
                        <span class="tag is-info is-medium has-text-white">TypeScript</span>
                    </div>
                </div>
                <div class="text-area">
                    <p class="has-text-white">Bot de discord baseado em Discord.js feito em TypeScript.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ProjetosMain"
})
</script>

<style scoped>
@import url("../assets/css/ProjetosMain.css");
</style>

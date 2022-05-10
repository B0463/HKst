<template>
    <header class="box has-background-black-ter header">
        <div class="columns is-vcentered is-mobile">
            <figure class="image column headerLogoFig">
                <img class="headerLogo" src="../assets/logo.png">
            </figure>
            <h1 class="column title headerTitle">HKst</h1>
        </div>
        <nav class="headerNav">
            
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
}
.headerTitle {
    color: #f0f0f0
}
.header {
    border-radius: 0;
}
</style>

<template>
    <main>
        <div class="box tiles_board has-background-grey-lighter">
            <div class="tile has-background-grey-light">
                <div class="tile-cont">
                    <div>
                        <h3 class="tile_title title is-3">home</h3>
                    </div>
                    <div>
                        <div class="tile_prev has-background-grey">
                            <div class="space">
                                <a class="prev_home_as has-text-warning">Home</a>
                                <a class="prev_home_as has-text-warning">Contato</a>
                                <a class="prev_home_as has-text-warning">Projetos</a>
                                <a class="prev_home_as has-text-warning">Curriculo</a>
                                <a class="prev_home_as has-text-warning">Utilitarios</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile has-background-grey-light">
                <div class="tile-cont">
                    <div>
                        <h3 class="tile_title title is-3">contato</h3>
                    </div>
                    <div>
                        <div class="tile_prev has-background-grey">
                            <div class="space">
                                <div class="prev_contato_align">
                                    <p class="prev_contato_ts has-text-warning">Github:</p> <a href="https://github.com/B0463" target="_blank" class="prev_contato_ts has-text-success">B0463</a>
                                </div>
                                <div class="prev_contato_align">
                                    <p class="prev_contato_ts has-text-warning">TikTok:</p> <a href="https://www.tiktok.com/@b.0463" target="_blank" class="prev_contato_ts has-text-success">@b.0463</a>
                                </div>
                                <div class="prev_contato_align">
                                    <p class="prev_contato_ts has-text-warning">Instagram:</p> <a class="prev_contato_ts has-text-success">@b.0463</a>
                                </div>
                                <div class="prev_contato_align">
                                    <p class="prev_contato_ts has-text-warning">Twitter:</p> <a class="prev_contato_ts has-text-success">@b_0463</a>
                                </div>
                                <div class="prev_contato_align">
                                    <p class="prev_contato_ts has-text-warning">Discord:</p> <a class="prev_contato_ts has-text-success">Ceira Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile has-background-grey-light">
                <div class="tile-cont">
                    <div>
                        <h3 class="tile_title title is-3">projetos</h3>
                    </div>
                    <div>
                        <div class="tile_prev has-background-grey">
                            <div class="space">
                                <a class="prev_home_as has-text-warning">home</a>
                                <a class="prev_home_as has-text-warning">contato</a>
                                <a class="prev_home_as has-text-warning">projetos</a>
                                <a class="prev_home_as has-text-warning">curriculo</a>
                                <a class="prev_home_as has-text-warning">utilitarios</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile has-background-grey-light">
                <div class="tile-cont">
                    <div>
                        <h3 class="tile_title title is-3">curriculo</h3>
                    </div>
                    <div>
                        <div class="tile_prev has-background-grey">
                            <div class="space">
                                <a class="prev_home_as has-text-warning">home</a>
                                <a class="prev_home_as has-text-warning">contato</a>
                                <a class="prev_home_as has-text-warning">projetos</a>
                                <a class="prev_home_as has-text-warning">curriculo</a>
                                <a class="prev_home_as has-text-warning">utilitarios</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile has-background-grey-light">
                <div class="tile-cont">
                    <div>
                        <h3 class="tile_title title is-3">utilitarios</h3>
                    </div>
                    <div>
                        <div class="tile_prev has-background-grey">
                            <div class="space">
                                <a class="prev_home_as has-text-warning">home</a>
                                <a class="prev_home_as has-text-warning">contato</a>
                                <a class="prev_home_as has-text-warning">projetos</a>
                                <a class="prev_home_as has-text-warning">curriculo</a>
                                <a class="prev_home_as has-text-warning">utilitarios</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomeMain"
})
</script>

<style scoped>
.tiles_board {
    border-radius: 0;
    padding: 0;
    text-align: center;
}
.tile {
    margin: 2rem;
    display: inline-block;
    padding: 1rem;
    border-radius: 5px;
}
.tile-cont {
}
.tile_title {
    padding: 1rem;
}
.tile_prev {
    padding: 1rem;
    border-radius: 5px;
}
.prev_home_as {
    display: block;
    text-align: left;
}
.prev_contato_align {
    display: block;
    text-align: left;
}
.prev_contato_ts {
    display: inline-block;
}
.space {
    width: 15rem;
    height: 10rem;
}
</style>

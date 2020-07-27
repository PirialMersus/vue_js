<template>
    <div class="page-content">
        <div class="wrapper">
            <div class="page-title">
                <h1 class="title">Characters</h1>
            </div>
            <search-field :characters="characters" @updateQuery="updateQuery" @pokemonForShowing="getPokemonInformation"></search-field>
            <!-- <table v-if="showTable">
                <thead>
                    <th>Имя покемона</th>
                    <th>Информация о покемоне</th>
                </thead>
                <tbody>
                    <tr v-for="character in filteredCharacters">
                       <td>{{ character.name }}</td>
                        <td><a class="pokemonLink" @click="getPokemonInformation(character.url)">{{ character.url }}</a></td>
                    </tr>
                </tbody>
            </table> -->
            <div class="pokemonInfo" v-if="pokemonInformation.sprites">
                <h3 class="pokemonName">{{pokemonInformation.name}}</h3>
                <img class="pokemonAva" :src="pokemonInformation.sprites.front_default" alt="">
                <h4 class="pokemonWeight">Вес - {{pokemonInformation.weight}}</h4>
                <h4 class="pokemonHeight">Рост - {{pokemonInformation.height}}</h4>
            </div>
        </div>
    </div>
</template>
<style>
    .pokemonLink {
        cursor: pointer;
        color: rgb(79, 60, 160);
    }
    .pokemonLink:hover {
        color: rgb(33, 133, 30);
    }
    .pokemonInfo {
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
    }

</style>
<script>

    module.exports = {
        data: function () {
            return {
                filteredCharacters: [],
                showTable: true
            };
        },
        components: {
            'search-field': require('./../components/search.vue')
        },
        computed: {
            characters: function(){
                return this.$store.getters['getCharacters'];
            },
            pokemonInformation: function(){
                return this.$store.getters['getPokemonInformation'];
            }
        },
        methods: {
            updateQuery: function (value) {
                this.filteredCharacters = value;
                this.showTable = true;
            },
            getPokemonInformation: function (url) {
                this.$store.dispatch('getPokemonInformation', url);
                this.showTable = false;
                // console.log(url);
                // return this.$store.getters['getPokemonInformation'];
            }
        },
        mounted: function () {
            this.$store.dispatch('getCharacters');
        }
    };
</script>

<template>
    <div class="page-content">
        <div class="wrapper">
            <div class="page-title">
                <h1 class="title">Characters</h1>
            </div>
            <search-field :characters="characters" @updateQuery="updateQuery"></search-field>
            <ul>
                <li v-for="character in filteredCharacters">{{character.name}}</li>
            </ul>
            <table v-if="showTable">
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
            </table>
            <div class="pokemonInfo" v-else>
                <h3 class="pokemonName">{{pokemonInformation.name}}</h3>
                <img class="pokemonAva" :src=pokemonInformation.sprites.front_default alt="">
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
    /* .pokemonName {
        display: inline-block;
    }
    .pokemonAva {
        display: inline-block;
    }
    .pokemonWeight {
        display: inline-block;
    }
    .pokemonHeight {
        display: inline-block;
    } */
    .pokemonInfo {
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
    }

</style>
<script>
    var Axios = require('axios');

    module.exports = {
        data: function () {
            return {
                characters: [],
                filteredCharacters: [],
                pokemonInformation: [],
                showTable: true
            };
        },
        components: {
            'search-field': require('./../components/search.vue')
        },
        methods: {
            updateQuery: function (value) {
                this.filteredCharacters = value;
                this.showTable = true;
            },
            getPokemonInformation: function (url) {
                Axios
                    .get(url)
                    .then(function(responce) {
                        console.log(responce.data);
                        this.pokemonInformation = responce.data;
                        this.showTable = false;
                    }.bind(this));
            }
        },
        mounted: function () {
            Axios
                .get('https://pokeapi.co/api/v2/pokemon/')
                .then(function (responce) {
                    // console.log(responce.data.results);
                    this.characters = responce.data.results;
                    this.filteredCharacters = responce.data.results;
                }.bind(this));
        }
    };
</script>

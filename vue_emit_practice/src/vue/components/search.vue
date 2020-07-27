<template>
    <div class="search-field">
        <form action="">
            <input class="inputCharacter" type="text" placeholder="Enter query..." v-model="query" @input="updateQuery" @click="toShowModal">
            <ul class="modal-container" :class="{'showModalList': isModalShown}">
                <li v-for="character in filteredCharacters"><a @click="showCharacterInformation(character.url)">{{character.name}}</a></li>
            </ul>
        </form>
        <!-- <input name="poke" list="pokemons" /> -->
        <!-- <datalist id="pokemons">
            <option v-for="character in filteredCharacters">{{ character.name }}</option>
        </datalist> -->
        
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                query: '',
                isModalShown: false,
                filteredCharacters: []
            }
        },
        props: ['characters'],
        methods: {
            updateQuery: function () {
                var query = this.query.toLowerCase();
                this.filteredCharacters = this.characters;

                if (query.length) {
                    this.filteredCharacters = this.filteredCharacters.filter(function (character) {
                        return ~character.name.toLowerCase().indexOf(query);
                    });
                }
                this.$emit('updateQuery', this.filteredCharacters);
            },
            toShowModal: function () {
                this.isModalShown = true;
            },
            showCharacterInformation: function (url) {
                this.isModalShown = false;
                this.$emit('pokemonForShowing', url);
                this.query = '';
                this.filteredCharacters = this.characters;
            }
        },
        mounted: function () {
            setTimeout(function(){
                this.updateQuery();
                this.filteredCharacters = this.characters;
            }.bind(this),500);
            window.addEventListener('click', function (e){
                    if (event.target.parentnode != this.$vnode.elm) {
                        this.isModalShown = false;
                    }
            })
        }
    };
</script>

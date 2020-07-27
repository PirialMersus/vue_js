<template>
    <div class="search-field">
        <input type="text" placeholder="Enter query..." v-model="query" @input="updateQuery">
        <!-- <input name="poke" list="pokemons" /> -->
        <!-- <datalist id="pokemons">
            <option v-for="character in filteredCharacters" v-model="query">{{ character.name }}</option>
        </datalist> -->
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                query: ''
            }
        },
        props: ['characters', 'filteredCharacters'],
        methods: {
            updateQuery: function () {
                var query = this.query.toLowerCase();
                var filteredCharacters = this.characters;

                if (query.length) {
                    filteredCharacters = filteredCharacters.filter(function (character) {
                        return ~character.name.toLowerCase().indexOf(query);
                    });
                }
                this.$emit('updateQuery', filteredCharacters);
            }
        },
        mounted: function () {
            setTimeout(function(){
                this.updateQuery();
            }.bind(this),600);
        }
    };
</script>

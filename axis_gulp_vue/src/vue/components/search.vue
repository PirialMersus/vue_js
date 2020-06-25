<template>
    <div class="search-field">
        <input type="text" placeholder="Enter query..." v-model="query" @input="updateQuery">
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                query: ''
            }
        },
        props: ['characters'],
        methods: {
            updateQuery: function () {
                var query = this.query.toLowerCase();
                var filteredCharacters = this.characters;

                filteredCharacters = filteredCharacters.filter(function (character) {
                    return ~character.name.toLowerCase().indexOf(query);
                });

                // console.log(filteredCharacters);
                this.$emit('updateQuery', filteredCharacters);
            }
        },
        mounted: function () {
            setTimeout(function(){
                // console.log(this.characters);
            }.bind(this),1000);
        }
    };
</script>

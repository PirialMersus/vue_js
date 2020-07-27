<template>
    <div class="search-field">
        <input type="text" placeholder="Enter h1 tag" v-model="title" @input="setTitle">
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                title: ''
            }
        },
        props: [],
        methods: {
            setTitle: function () {
                this.$emit('input', this.title);
            }
        }
        // mounted: function () {
        //     setTimeout(function(){
        //         this.updateQuery();
        //     }.bind(this),600);
        // }
    };
</script>

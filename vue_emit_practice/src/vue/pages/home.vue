<template>
    <div class="page-content">
        <div class="wrapper">
            <div class="page-title">
                <h1>{{ title }}</h1>
            </div>
            <search-practice @input="setTitle"></search-practice>
        </div>
    </div>
</template>
<style>
</style>
<script>

    module.exports = {
        data: function () {
            return {
              title: 'not found'
            }
        },
        components: {
            'search-practice': require('./../components/searchPractice.vue')
        },
        methods: {
            setTitle: function (value) {
                if (!value) {
                    this.title='not found';
                } else
                this.title = value;
            }
        },
        mounted: {
        }

    };
</script>

<template>
    <div class="global-container">
        <page-header></page-header>
        <router-view></router-view>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {

            }
        },
        components: {
            'page-header': require('./components/page-heder.vue')
        }
    }
</script>

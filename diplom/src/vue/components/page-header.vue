<template>
    <div class="site-header">
        <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'profile'}">Profile</router-link></li>
            <li><router-link :to="{name: 'characters'}">Characters</router-link></li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {};
    },
    props: ['content'],
    methods: {},
};
</script>

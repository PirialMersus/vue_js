<template>
    <div class="page-header">
        <ul class="menu">
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'profile'}">Profile</router-link></li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                
            }
        }
    }
</script>

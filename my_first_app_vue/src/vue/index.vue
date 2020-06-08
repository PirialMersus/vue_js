<template>
    <div>
        <h1 :class="{'red': isRed}">{{msg}}</h1>
      <input type="text" placeholder="enter your text" v-model="msg" />
      <button @click="changeColor()">Change color</button>
      <p v-if="isRed">
        1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        delectus animi, minus molestias atque ut perspiciatis deleniti
        accusantium ullam. Praesentium nemo, ipsam accusamus impedit non nam
        sunt dicta consequatur! Magni?
      </p>
      <p v-else>
        2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        delectus animi, minus molestias atque ut perspiciatis deleniti
        accusantium ullam. Praesentium nemo, ipsam accusamus impedit non nam
        sunt dicta consequatur! Magni?
      </p>
      <ul>
        <li v-for="user in users">{{user.name}}, {{user.age}}</li>
      </ul>
    </div>
</template>
<style>

</style>
<script>
    module.exports = {
        data: function () {
            return {
                msg: 'Hello!',
                isRed: false,
                users: [
                    {
                        name: 'Andryu1',
                        age: 26
                    },
                    {
                        name: 'Andryu2',
                        age: 26
                    },
                    {
                        name: 'Andryu3',
                        age: 26
                    },
                    {
                        name: 'Andryu_4',
                        age: 26
                    }
                ]
            }
        },
        methods: {
        changeColor: function () {
            this.isRed = !this.isRed;
        }
    }
    }
</script>
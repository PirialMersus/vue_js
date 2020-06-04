new Vue({
    el: "#app",
    data: {
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

    },
    methods: {
        changeColor: function () {
            this.isRed = !this.isRed;
        }
    }
})
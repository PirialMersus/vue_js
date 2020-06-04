new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        c: 0
    },
    computed: {
        d: function () {
            return this.b * this.b - (4 * this.a * this.c);
        },
        x1: function () {
            if (this.d > 0) {
                return x1 = (-this.b + Math.sqrt(this.d)) / (2 * this.a);
            }
            else if (this.d == 0) {
                return x1 = (-this.b + Math.sqrt(this.d)) / (2 * this.a);
            }
            else {
                return 0;
            }
        },
        x2: function () {
            if (this.d > 0) {
                return x2 = (-this.b - Math.sqrt(this.d)) / (2 * this.a);
            }
            else {
                return 0;
            }
        },
        msg: function () {
            if (this.d < 0) {
                return "решений нет";
            }
            else {
                return false;
            }
        }
    },
    methods: {

        // quadraticEquation: function () {
        //     if (d > 0) {
        //         this.x1 = (-this.b + Math.sqrt(d)) / (2 * this.a);
        //         this.x2 = (-this.b - Math.sqrt(d)) / (2 * this.a);
        //         this.msg = 'Уравнение имеет 2 корня';

        //     }
        //     else if (d < 0) {
        //         this.msg = 'Уравнение не имеет решений';
        //         this.x1 = 0;
        //         this.x2 = 0;

        //     }
        //     else {
        //         this.x1 = (-this.b + Math.sqrt(d)) / (2 * this.a);
        //         this.msg = 'Уравнение имеет 1 корень.';
        //         this.x2 = 0;
        //     }
        // }
    }
})
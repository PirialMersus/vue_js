new Vue({
    el: "#app",
    data: {
        msg: '',
        isRed: false,
        a: 0,
        b: 0,
        c: 0,
        D: 0,
        x1: 0,
        x2: 0

    },
    methods: {
        changeColor: function () {
            this.isRed = !this.isRed;
        },
        quadraticEquation: function () {
            this.D = this.b * this.b - (4 * this.a * this.c);
            if (this.D > 0) {
                this.x1 = (-this.b + Math.sqrt(this.D)) / (2 * this.a);
                this.x2 = (-this.b - Math.sqrt(this.D)) / (2 * this.a);
                this.msg = 'Уравнение имеет 2 корня. x1 = ' + this.x1 + ', x2 = ' + this.x2;


            }
            if (this.D < 0) {
                this.msg = 'Уравнение не имеет решений, ' + this.D + '';

            }
            if (this.D == 0) {
                this.x1 = (-this.b + Math.sqrt(this.D)) / (2 * this.a);
                this.msg = 'Уравнение имеет 1 корень. x1 = ' + this.x1;
            }
        }
    }
})
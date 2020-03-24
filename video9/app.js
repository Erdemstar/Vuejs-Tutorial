var test = new Vue({
    el: "#test",
    data: {
        age: 20
    },
    methods: {
        addAgeA: function () {
            console.log("A function invoked")
            return this.age += 1;

        }
    },
    computed: {
        addAgeB: function () {
            console.log("B function invoked")
            return this.age += 1;
        }
    }
})

/**
 * Normal fonksiyon ile computed propery arasındaki fark computed'lar bir kere işlenir ve işlenen içerik aynıysa eğer bir kere daha 
 * çalışmaya gerek kalmaz. Fakat Fonksiyon bir daha dönmesi sürekli çağırılması gerekir. Ve bunun yanında anladığım kadaryıla computed
 * objeleri bir yerden çağırılmadan kendi otomatik çağırıldığını gördüm. Aşağıdaki random örneğindede computed data bir kere hesaplanıp
 * html tarafına aynı şekilde basılıyor. Fonksiyon ile arasındaki bir diğer fark ise fonksiyonlar () bekler fakat  computed'larda buna
 * gerek yoktur.
 */

var random = new Vue({
    el: "#random",
    data: {

    },
    methods: {
        random1: function () {
            return Math.floor(Math.random() * 1000)
        }

    },
    computed: {
        random2: function () {
            return Math.floor(Math.random() * 1000);
        }

    }
})
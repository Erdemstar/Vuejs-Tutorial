new Vue({
    el: "#test",
    data: {
        age: 25
    },
    methods: {
        addYear: function (i) {
            this.age += i;
        },
        revYear: function (i) {
            this.age -= i;
        }

    }
})

/**
 * Vuejs'de html içerisinde bir event'i yakalayıp aksiyon almak için 2 yöntem vardır. Bunlar event'ın önüne gelerek "v-on" diğer ise "@" 
 * aşağıdaki şekilde kullanılır.
 *  -   v-on:click("method")
 *  -   @click("method")
 */
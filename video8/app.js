var test = new Vue({
    el: "#test",
    data:{
        projectName: "Data Binding",
        name: "",
        age:  ""
    },
    methods: {

    }
})

/**
 * Vuejs'de input olarak girilen data vue nesnesi içersindeki bir alanı değiştirilebilir. Bu bir geleneksel yöntemlerle yapabilir. Yani
 * bir data alır sonra onu bir vue nesnesi içersinde bir fonsiyona göndererir ve içerisinde this.data = data şeklinde bir atama yaparak
 * değiştirebilir. Bir diğer yöntem ise v-model="baglanacak-veri" şeklinde yaparak vue nesnesi içersinde doğrudan bir aktarım yapabilir.
 */
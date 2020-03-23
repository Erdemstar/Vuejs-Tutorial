new Vue({
    el: "#test",
    data: {
        name:"Erdemstar",
        count: 1
    },
    methods: {
        alert: function(){
            this.add()
            alert("You clicked " + this.count  + "times");
        },
        add: function(){
            this.count += 1;  
        }
    }
})

/**
 * Vuejs'de eklenen events'lara bir kere çalış üzerine geldiğinde çalış şeklinde komutlar verirken bunların yanında
 * mevcut html tag'lerinin event'larını engelleyebilmeyi gösterid. Mesela bir a tag'in  redirect özelliği prevent ile bozubailir.
 * 
 */
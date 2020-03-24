var test = new Vue({
    el: "#test",
    data: {
        size: 100,
        blue: false,
        yellow: true,
        string: "Erdemyıldız",
    },
    methods: {
        add: function(){
            this.size +=5;
        },
        subtrack: function(){
            this.size -=5;
        }

    },
    computed: {
        writeFontSize: function(){
            console.log("computed fonk cagirildi")
            if (this.size > 120){
                this.blue=true;
                this.yellow=false
                this.string="Erdemstar"
            }
            else{
                this.blue=false;
                this.yellow=true
                this.string="Erdemyıldız"
            }
            return this.size;
        },
    }
})

/**
 * Vue'de class="" içerisinde 2 farklı şekilde class elementi tanımlabilir. Bunlar normal html yapısında olan static class'lar bir diğeri
 * ise vue'nun getirdiği dinamil olanlardır. Bu dinamik olanlar style class'ları genelde belirli şarta göre active olup belirli
 * şarta göre deactive olanlardır.
 * 
 * Yukarıdaki örnekde font size'yı 120'den büyük oldnuğuda css class'ı değişiyor.
 */
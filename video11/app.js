new Vue({
    el: "#test",
    data:{
        stat1: false,
        stat2: false,
        age:0
    }
})

/**
 * Burada basit bir şekilde vue.js'de if , else if olaylarına girdik. v-if="" şeklinde bir kullanımı var ve yazılıan durumu göre mevcut
 * html tagi gösterilir veya gösterilmez. Aynı işlem v-show="" ilede yapılabilir aralarındaki fark v-show'da bir durum false ise v-show 
 * üzerinde tanımlanan nesnesin display:none yapar fakar v-if doğrudan remove eder
 */
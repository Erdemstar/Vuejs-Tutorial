var test = new Vue({
    el: "#test",
    data: {
        names: ["Erdem","Ali","Mehmet"],
        jobs: [
            {name:"Chemistry"},
            {name:"App Security"},
            {name:"Network Security"},
            {name:"Developer"}
        ]
    }
})
/**
 * Basitce v-for="array" olarak kullandığımız bir for loop yapısı. Template tagleri içersine yazıldığında template tagları vue.js
 * olarak frotn'da gösterme şeklinde baz alınıyor. Bunu bir yerde for loop kullanmak istersen fakat for loop için tag görülmesin dersen
 * kullanabilirisn.
 */
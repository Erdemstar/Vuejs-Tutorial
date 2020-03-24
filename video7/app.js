var test = new Vue({
    el: "#test",
    data: {
        projectName: "Keyboard Events"

    },
    methods: {
        entert: function(){
            alert("Enter tusuna basıldı")
        },
        backspace: function(){
            alert("Backspace tusuna basıldı")
        }
    }
})

/**
 * Vue.js ile bir html nesnesine keyboard eventlara atayabilirsin. Bunun için mevcut olan elemente gidip v-on:keyup şeklinde bir tanımlama
 * yapmak ve daha sonraki davranışı belirlemek gerekiyor. Eper sadece keyup ile bırakırsan herhangi bir tuşa basıldığında atanan
 * event tetiklenecketir. Fakat v-on:keyup.enter şeklinde bir ifade yazıldığında eğer mevcut tuş enter ise bir işlem yap olacaktır.
 */
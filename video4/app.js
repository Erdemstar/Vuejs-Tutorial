new Vue({
    el: "#test",
    data: {
        name: "Erdemstar",
        job: "Hacker and part time developer",
        myBlog: "https://erdemstar.com",
        google: "<a href='https://www.google.com'>google</a>"
    },
    methods:{
        whatsmyname: function(){
            return this.name;
        }
    }


});

/**
 * Vuejs doğrudan html attribute'lerine birşey yazımını engeller. Bunun için data bind
 * dedikleri yöntemle ilgili tag'a "v-bind" yazıp dahasonra ":" atribute yazark ona veri 
 * ekleyebilme imkani sunar. Diğer türlü doğrudan bir yöntem yoktur.
 *
 * Bunun yanonda datalara eklenen html elementi ekrana basarken onu text olarak alıp öyle
 * basıyor ve bu işlemi yaparken frontend tarafta html tarayı tarafından yorumlanmıyor (html encode ediyor). 
 * Aynı şekilde vuejs burada v-html="" kullanarak kullanıcılara bunu html olarak bastırmaya yardımcı oluyor.
 */
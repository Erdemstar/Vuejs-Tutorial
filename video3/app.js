var test = new Vue({
    el: "#test",
    data: {
        name: "Erdemstar",
        job: "Hacker and part time developer"
    },
    methods: {
        whatsmyname: function(){
            return this.name
        },
        whatsmyjob: function(){
            return this.job                 
        },
        whatsmyage: function(age){
            return age -2
        }
    }

})

/**
 * Yukarıdaki oluşturduğumuz test objesi içersine methods alanları create edip bunlarıda frontned'den metodAdi() şeklinde call edilebilir
 * olark kullanılabiliyoruz. Bunun yanında mevcut test objesi içersindeki herhangi bir alandaki data'ya this objesi kullanarak
 * alabiliyporuz
 */
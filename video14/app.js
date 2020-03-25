var firstVue = new Vue({
    el: "#firstVue",
    data: {
        title: "First Vue Instance",
        buttonName: "Greetinggs"
    },
    methods: {
        greeting: function(){
            alert("Hello from firstVue instance");
        }
    },
    computed: {

    }
})

var secondVue = new Vue({
    el: "#secondVue",
    data: {
        title: "Second Vue Instance",
        buttonName: "Greetinggs"
    },
    methods: {
        greeting: function(){
            alert("Hello from secondVue instance");
        },
        changeFirstVueTitle: function(){
            firstVue.title = "Changed by secondVue"
        }
    },
    computed: {

    }
});

secondVue.title="Changed by Outscope"  

/**
 * Burada instance'ı alınan bir vuejs nesnesi başka bir farklı bir vue nesnesi içerisnde çağırabileceği gibi dışarıdan da çağırılabilir.
 * Burada class mantığı şeklinde düşün bir vue nesnesi işaret eden örneği ile o nesnedeki herhangi bir objeyi yönetebilir call 
 * edebilirisn.
 */
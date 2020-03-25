Vue.component("my-comp",{
    template: "<button v-on:click='add'>clikc me {{ count }}</button>",
    add: function(){
        return {
            count: 13
        }
    },
    methods: {
        add: function(){
            return {
                count: 13
            }
        }
    }
});

var test = new Vue({
    el: "#test"
})
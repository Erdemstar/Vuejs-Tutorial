new Vue({
    el: "#test",
    data: {
        lname: "",
        fname: ""
    },
    methods: {
        submit: function () {
            this.fname = this.$refs.fname.value;
            this.lname = this.$refs.lname.value;
            this.checkData()
            alert("Formunuz gönderildi.");
        },
        checkData: function(){
            console.log(this.fname,this.lname)
        }

    }
})

/**
 * HTML tarafta girilen data vuejs'e aktarılırken ref adlı verilen bir parametre kullanılır. Bu tıpkı frontend form elemanlarına name
 * verip backend'de data beklemek gibidir. Burada froent tarata ref="name" verip vue tarafta this.$refs.name.value şeklinde datayı elde
 * etmekdir.
 */
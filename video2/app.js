var test = new Vue({
    el: "#test",
    data:{
        firstname: "erdemstar"
    }

});

/**
 * Genel olarak mantık vue objesi oluşturu bunu frontend'de bir id'ye atarsın ve obje içerisindeki dataları virtual olarak
 * frontend'deki eleminin içine yazılır.
 * 
 * obje içerisindeki parametreler
 *  - el: frontend'de hangi id'li obje üzerinde işlem yapılacaksa #onun-adı 
 *  - data: { frontend tarafta bir {{ data }} şeklinde alanların olduğunu ve bunun bilgisin buradan bastığın yerdir. Burada data'yı tanımlar
 * ve bunu frontend'de görürüsün.}
 * 
 */
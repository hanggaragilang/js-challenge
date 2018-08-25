let tahun = 1900

if (tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0){
    console.log (tahun + " adalah kabisat")
}else {
    console.log (tahun + " bukan tahun kabisat")
}
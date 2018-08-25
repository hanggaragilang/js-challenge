let word = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

let string = word.toLowerCase().split(/[ \n]/)
let numWord = string.length-1
let totalAku = 0
let totalIngin = 0 
let totalDapat = 0
// for(let i = 0; i <= numWord; i++)
for(let i in string){
    if(string[i] == 'aku'){
        totalAku += 1
    }
    if(string[i] == 'ingin'){
        totalIngin += 1
    }
    if(string[i] == 'dapat'){
        totalDapat += 1
    }
}
console.log(`total kata aku sebanyak ${totalAku}`);
console.log(`total kata ingin sebanyak ${totalIngin}`);
console.log(`total kata dapat sebanyak ${totalDapat}`);
// console.log(numWord);
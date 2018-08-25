class Str {
    constructor(){

    }

    upper(string){
        return string.toUpperCase();
    }
    lower(string){
        return string.toLowerCase();
    }
    capitalize(string){
        let Str = string.split(" ")
        let coba = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        return Str.map(coba).join(" ");
    }
    reverse(string){
        let res = string.split("").reverse().join("")
        return res
    }
    contains(string,counter){
        
        if (typeof counter === 'string' ){
            let res = string.includes(counter)
                return res
        } else if (Array.isArray(counter)){
            let str = string.split(' ')
            // console.log(str);
            for (let i in str){
                for (let x of counter){
                    // console.log(x);
                    // console.log(str[i]);
                    if (str[i] === x) {
                        // continue
                        return true
                    } else {
                        continue
                    }
                }
            }
            return false
        }
       
        // if (str.includes(counter)){
        //     return true
        // } else {
        //     return false
        // }
    }
    random(num){
        let number = num
        let res = ''
        let random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        if (!number) {
            // let num = 9
            let num2 = Math.floor(Math.random(9)*random.length)
            for (var i=0; i < num2; i++) { 
                res += random.charAt(Math.floor(Math.random()*random.length)); 
            }
        } else {
            for (var i=0; i < number; i++) { 
                res += random.charAt(Math.floor(Math.random()*random.length)); 
            }
        }
        return res;   
    }
    slug(string,any){
        let res = ''
        let str = string.split(/[ ,&?-]+/);
        if (!any){
            res = str.join('-')
        } else {
            res = str.join(any)
        }
        return res
    }

    count(string){
        let res = string.split('').length
        return res
    }
    countWords(string){
        let res = string.split(' ').length
        return res
    }
    trim(string,num,other){
        let number = num
        let str = string.split('',number)
        let count = str.length
        let res = ''
        if(count <= 100 && !num && !other){
            res = str.join('')
        } else if (count <= 100 && number <= 100 && !other) {
            res = str.join('')
        } else if (count <= 100 && number <= 100) {
            res = str.join('') + other
        } else {
            console.log('word more than 100 or number more than counter number');
        }
        console.log(count);
        return res
    }

    trimWords(string,num,other){
        let number = num
        let str = string.split(' ',number)
        let count = str.length
        let res = ''
        if(count <= 30 && num === undefined && other === undefined){
            res = str.join(' ')
        } else if (count <= 30 && number <= 30 && other === undefined) {
            res = str.join(' ')
        } else if (count <= 30 && number <= 30) {
            res = str.join(' ') + other
        } else {
            console.log('letter more than 30 or number more than counter number');
        }
        console.log(count);
        return res
    }
}

let nama = new Str
let tes = nama.capitalize('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?')
console.log(tes)
// console.log(Math.random().toString(36).slice(2))
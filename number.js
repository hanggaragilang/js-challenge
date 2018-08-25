let even = [],
    odd = [],
    multiplies = [],
    prime = []

for (let i = 0; i <=100; i++){
    if (i % 2 == 0){
        even.push(i)
    } else {
        odd.push(i)
    }
    if (i % 5 == 0){
        multiplies.push(i)
    } 

    let notPrime = false
    for (let x = 2; x <= i; x++) {
        if (i % x === 0 && x !== i) {
            notPrime = true
        } else {
            continue
        }
    }
    if (notPrime === false) {
       prime.push(i)
    }
}

console.log(even)
console.log(odd)
console.log(multiplies)
console.log(prime)
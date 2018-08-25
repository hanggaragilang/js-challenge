const csv = `NAME,CATEGORY,PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

function csvJSON(csv){

  let lines=csv.split("\n")

  let res = []

  let key=lines[0].split(",")

  for(let i=1; i<lines.length; i++){

	  let obj = {}
	  let line=lines[i].split(",")

	  for(let j=0; j<key.length; j++){
		  obj[key[j]] = line[j]
	  }

	  res.push(obj)

  }
  
  let arr = JSON.parse(JSON.stringify(res))
  let result = arr.sort((a, b) => {
                    if (parseInt(a.PRICE) < parseInt(b.PRICE)) return -1
                    if (parseInt(a.PRICE) > parseInt(b.PRICE)) return 1
                    return 0
                })
  arr.forEach((a) => {
    a.PRICE = ("Rp " + a.PRICE).toString().replace(/\d(?=(\d{3})+$)/g, '$&.')
  })
  // return res
  console.log(result)
}

csvJSON(csv)



              

        
const 	first = ['Behind' , 'every' , 'great', 'man'],
	  	second = ['is', 'a', 'woman'],
		third = ['rolling', 'her', 'eyes']


	function combine(first,second,third){
		let combineArray = first.concat(second,third)
		let join = combineArray.join(" ")
		console.log(join)	
	}

combine(first,second,third)
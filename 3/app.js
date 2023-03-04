for (let num = 0; num <= 20; num++){
    if(num%2 == 0){console.log(num)} }

    

 var drinks =['milk', 'beer', 'beer', 'milk']
 var badDrinks = ['beer']

 for(i= 0; i < drinks.length; i++){
    if(badDrinks[i].includes(drinks[i].toLowerCase()))  {
        console.log("bad");
    }else(console.log("good"))
 }
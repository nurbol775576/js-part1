var name =  prompt ('введите имя:)');
var surname =  prompt ('введите фамилию)');
var surname = prompt ('введите отчество)');
var old = + prompt('сколько вам лет?)');
    if(old <= 18){
        console.log('привет', name)
    }
    else if (old <=18 || old<= 50){
        console.log('здраствуйте мис',name,surname)
        }
            else if(old <=18 || old <=50 || old <=100){
                console.log('здраствуйте мис',surname,name,surname)
            }      
                else if(old <= 100000000){
                            console.log('ошибка:(')
                          }
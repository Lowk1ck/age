let numbers = +prompt('Введите число пользователей')

let rand = 0

for(let i = 0; i < numbers; i++){

    rand += 1 ;

    let name = prompt("Введите имя");
    let age = prompt("Введите возраст");
    let two = {
        polz:{
            nam: name,
            ag: age
        }
    }

for(let key in two ) {
    console.log(`Пользователь ${rand}`);
    for(let newKey in two[key])
    console.log(two[key][newKey]);
    
}
}










    
    




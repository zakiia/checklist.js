function onlyPositive(number){
    for(let i = 0; i < number.length; i++){
        if(number[i] < 0){
            break;
        }
        console.log(number[i]);
    } 
}
onlyPositive([5, 7, 3, 9, -2, -4, 17]);
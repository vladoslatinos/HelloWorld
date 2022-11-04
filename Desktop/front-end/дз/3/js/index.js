

var userAge = prompt('How old are you?');


function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}




let useryear =  declOfNum(userAge, ['год', 'года', 'лет']);

if (userAge >= 0) {
    
    alert(userAge + ' ' + useryear);
} else {
    alert('no');
}


// Задание 1

function comparison(v,c) {
    if (v===c) {
        return true;
    }
    else if (v !=c) {
        return false;
    }
}

console.log(comparison(4,5));
console.log(comparison(5,5));


// Задание 2
function getSum(x, y) {
    return x+y; 
}
console.log(getSum(10,5));


const getsum = (a, b) => a+b;
const result = getsum(1,3);
console.log(result);

// Задание 3

function degree(a, n) {
    return a ** n;
}

console.log(degree(2,5));
console.log(degree(3,3));
console.log(degree(10,5));

// Задание 4

function whichDay(w) {
    if (w === 1) {
        return 'Понедельник';
    }
    else if (w === 2) {
        return 'Вторник';
    }
    else if (w === 3) {
        return 'Среда';
    }
    else if (w === 4) {
        return 'Четверг';
    }
    else if (w === 5) {
        return 'Пятница';
    }
    else if (w === 6) {
        return 'Суббота';
    }
    else if (w === 7) {
        return 'Воскресенье';
    }
    else  {
        return 'Такого дня нет'
    }
}

console.log(whichDay(1));
console.log(whichDay(5));
console.log(whichDay(10));

// Задание 5


function greetings() {

    const userName = prompt('Как вас зовут?');
    const userAge = Number(prompt('Сколько Вам лет?'));

    if (userAge >= 30) 
        alert('Здавствуйте, ' + userName);
    
    else {
        alert('Привет, ' + userName);
    }
}

greetings();
greetings();

// Задание 4

const whichDay1 = Number(prompt('Введите число, чтобы узнать день недели'));

switch (whichDay1) {
    case 1: 
        alert('Понедельник');
        break;
    case 2:
        alert('Вторник');
        break;
    case 3:
        alert('Среда');
        break;
    case 4:
        alert('Четверг');
        break;
    case 5:
        alert('Пятница');
        break;
    case 6:
        alert('Суббота');
        break;
    case 7:
        alert('Воскресенье');
        break;
    default:
        alert('Такого дня нет') 
}


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


// function greetings() {

//     const userName = prompt('Как вас зовут?');
//     const userAge = Number(prompt('Сколько Вам лет?'));

//     if (userAge >= 30) 
//         alert('Здавствуйте, ' + userName);
    
//     else {
//         alert('Привет, ' + userName);
//     }
// }

// greetings();
// greetings();


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// for (let i = 20; i >= 10; i--) {
//     console.log(i);
// }

// let l = 20;
// while (l >= 10) {
//     console.log(l);
//     l--;
// }

getResult: {
    for (let i = 2; i <= 10; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) 
            continue 
            console.log(i);
        }
    }
};

getResult(1, 10)

// const getResult = (start, finish) => {
//         for (let i = start; i <= finish; i++) {
//                 if (i % i === 1 && i % i !== 0) {
//                     console.log(i);
//                 }
//         }
// };

// getResult(1, 10)





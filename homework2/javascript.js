const a = 5;
const b = 10;

result = a + b;
console.log('a+b =', result);

result = a - b;
console.log('a-b =', result);

result = a*b;
console.log('a*b =', result);

result = b / a;
console.log('b/a =', result);

// const userName = prompt('Wthat is your name?');
// console.log('userName', userName);

// alert('Hello, '+ userName+ '!');

//*****************//

const number1 = Number(prompt('Введите число'));
const number2 = Number(prompt('Введите еще число'));

/*result = number1 + number2;
/*alert(result);*/


// if (number1 > number2) {

//     alert('Число ' + number1 + ' больше, чем число ' + number2);
// } else if (number1 === number2) {
//     alert('Числа ' + number1 + ' и ' + number2 + ' равны');
// } else {
//     alert('Число ' + number1 + ' меньше, чем число ' + number2)
// }

const wthatWeMustDo = prompt('Какое математическое действие нужно сделать?');

switch (wthatWeMustDo) {
    case '+':
        resalt = number1 + number2;
        alert('Сумма чисел = ' + result);
        break;
    case '-':
        result = number1 - number2;
        alert('Разность чисел =' + result);
        break;
    case '*':
        result = number1 * number2;
        alert('Произведение чисел = ' + result);
        break;
    case '/':
        result = number1 / number2;
        alert('Частное чисел = ' + result);
        break;
    default:
        alert('Я поломался');
}


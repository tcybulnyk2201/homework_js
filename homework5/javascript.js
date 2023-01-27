// Задание 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


for (let i = 20; i >= 10; i--) {
    console.log(i);
}

let l = 20;
while (l >= 10) {
    console.log(l);
    l--;
}


// Задание 2


let k = 10; // Находим простые числа от 2 до 10

nextPrime:
for (let i = 2; i <= k; i++) { 

for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
}

console.log( i ); 
}



let n = 100; // Находим простые числа от 10 до 100

nextPrime:
for (let i = 10; i <= n; i++) { 

for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
}

console.log( i ); 
}


// Задание 3


// Задание 4



// Задание 5











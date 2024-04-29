let numb = 10000.0;
let result;
let counter = 0;

while (numb >= 50) {
    numb = numb / 2;
    counter++;
}

result = numb;

console.log("Результат: " + result);
console.log("Кількість ітерацій: " + counter);

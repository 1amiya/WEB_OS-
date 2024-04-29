let number = 2;

while (number <= 100) {
    let isPrime = true;
    let divisor = 2;

    while (divisor < number) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        console.log(number);
    }

    number++;
}

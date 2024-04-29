let number = 0;

do {
    let message;
    if (number === 0) {
        message = number + " - це нуль";
    } else if (number % 2 === 0) {
        message = number + " - парне число";
    } else {
        message = number + " - непарне число";
    }
    console.log(message);
    number++;
} while (number <= 10);

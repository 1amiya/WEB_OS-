function getCurrentTime() 
{

    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    const days = [, 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота', 'неділя'];

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dayOfWeek = days[now.getDay()];
    const dayOfMonth = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const currentTime = `${hours}:${minutes}:${seconds}, ${dayOfWeek}, ${dayOfMonth} ${month} ${year} року`;

    return currentTime;

}

getCurrentTime();
let playAgain = true;

while (playAgain) {
    const targetNumber = Math.floor(Math.random() * 101); 
    let attempts = 0;

    while (true) {
        const userGuess = parseInt(prompt("Спробуйте вгадати число від 0 до 100:"));

        if (isNaN(userGuess)) {
            alert("Будь ласка, введіть число.");
            continue;
        }

        attempts++;

        if (userGuess === targetNumber) {
            console.log(`${new Date().toLocaleString()} Спроба ${attempts}: число ${userGuess} - вірно`);
            alert(`За ${attempts} спроб ви вгадали число ${targetNumber}.`);
            break;
        } else {
            let message = "холодно";

            if (Math.abs(targetNumber - userGuess) <= 10) {
                message = "тепліше";
            }
            if (Math.abs(targetNumber - userGuess) <= 5) {
                message = "гаряче";
            }
            if (targetNumber - userGuess < 0) {
                message += ", число менше";
            } else {
                message += ", число більше";
            }

            console.log(`${new Date().toLocaleString()} Спроба ${attempts}: число ${userGuess} - не вірно (${message})`);
            alert(`Не вірно. ${message}.`);
        }
    }

    playAgain = confirm("Хочете зіграти ще раз?");
}

alert("Дякуємо за гру!");

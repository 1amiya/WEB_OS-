function getCurrentTime() {
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
    console.log(currentTime);
    return currentTime;
}

getCurrentTime();

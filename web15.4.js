let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):")) - 1;

let seasons = ["зима", "весна", "літо", "осінь"];
let months = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];
let seasonIndex = Math.floor((month+1) / 3);
if (month==11) {seasonIndex = 0;}

alert("Місяць " + months[month] + " належить до пори року " + seasons[seasonIndex]);

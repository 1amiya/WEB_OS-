
function squareNumber(event) 
{

    var number = parseInt(event.target.textContent);
    event.target.textContent = number * number;
    
}

var paragraph1 = document.getElementById('paragraph1');
paragraph1.addEventListener('click', squareNumber);

var paragraph2 = document.getElementById('paragraph2');
paragraph2.addEventListener('click', squareNumber);

var paragraph3 = document.getElementById('paragraph3');
paragraph3.addEventListener('click', squareNumber);

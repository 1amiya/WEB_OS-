
var clickedInputs = {};

function handleClick(event) {

    var inputId = event.target.id;
    
    if (!clickedInputs[inputId]) 
    {

        alert(event.target.value);
        clickedInputs[inputId] = true;

    }

}

var input1 = document.getElementById('input1');
input1.addEventListener('click', handleClick);

var input2 = document.getElementById('input2');
input2.addEventListener('click', handleClick);

var input3 = document.getElementById('input3');
input3.addEventListener('click', handleClick);

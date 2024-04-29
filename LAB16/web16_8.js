
function validateInput(event) 
{

    var input = event.target;
    var expectedLength = parseInt(input.getAttribute('data-length'));

    if (input.value.length === expectedLength) 
    {

        input.classList.remove('invalid');
        input.classList.add('valid');

    }
    else 
    {

        input.classList.remove('valid');
        input.classList.add('invalid');

    }
}

var input1 = document.getElementById('input1');
input1.addEventListener('blur', validateInput);

var input2 = document.getElementById('input2');
input2.addEventListener('blur', validateInput);

var input3 = document.getElementById('input3');
input3.addEventListener('blur', validateInput);

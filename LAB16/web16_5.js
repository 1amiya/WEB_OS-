
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var demo = document.getElementById('demo');

input1.addEventListener('blur', function() {

    demo.textContent = input1.value;

});

input2.addEventListener('blur', function() {

    demo.textContent = input2.value;

});

input3.addEventListener('blur', function() {

    demo.textContent = input3.value;
    
});

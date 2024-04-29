
function handleClick(event) 
{

    var src = event.target.src;
    alert(src);

}

var images = document.querySelectorAll('img');

images.forEach(function(image) 
{

    image.onclick = handleClick;
    
});
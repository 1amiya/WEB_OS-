function handleMouseOver(event) 
{

    var text = event.target.textContent;
    event.target.setAttribute('title', text);

} 

let link2 = document.getElementById ('link2');
var links = document.querySelectorAll('a');

links.forEach(function(link) 
{

    link.addEventListener('mouseover', handleMouseOver);

});

links.forEach(function(link) 
{
    link.addEventListener('mouseout', function() 
    {

        link.removeAttribute('title');

    });
    
});
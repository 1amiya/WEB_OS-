        
        function handleMouseOver(event) 
        {
            
            var href = event.target.getAttribute('href');
            event.target.textContent += ' (' + href + ')';

        }

        
        function handleMouseOut(event) 
        {
            
            var text = event.target.textContent;
            var href = event.target.getAttribute('href');
            event.target.textContent = text.substring(0, text.indexOf(' (' + href + ')'));

        }

        var links = document.querySelectorAll('a');  

        links.forEach(function(link) 
        {

            link.addEventListener('mouseover', handleMouseOver);

        });

        links.forEach(function(link) 
        {

            link.addEventListener('mouseout', handleMouseOut);
            
        });
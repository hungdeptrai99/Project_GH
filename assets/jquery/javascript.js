document.addEventListener("DOMContentLoaded",function(){
    
    var nut = document.querySelectorAll('.nutchuyen ul li');
    var slides = document.querySelectorAll('.ndslide ul li');
    
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click',function(){
         
            for (var i = 0; i < nut.length; i++) {
                nut[i].classList.remove('active');
                
            }
            this.classList.add('active');
          
             var nutactive=this;
            var vt=0;
           for (vt = 0; nutactive=nutactive.previousElementSibling; vt++) {
                          
            } 
           
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[vt].classList.add('active');
                
            }
        })
        
    } 
    autoslide();
 
    function autoslide(){
         
    var thoigian = setInterval(function(){
        var vtslide=0;
        var slidehientai=document.querySelector('.ndslide ul li.active');
        console.log(slidehientai);
        console.log();
        
         for (var vtslide = 0; slidehientai=slidehientai.previousElementSibling; vtslide++) {
    
            
        }
        if(vtslide<(slides.length-1)){
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('active');
            }
       
        slides[vtslide].nextElementSibling.classList.add('active');
        nut[vtslide].nextElementSibling.classList.add('active');   
        }
        else
        {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('active');
            }
       
        slides[0].classList.add('active');
        nut[0].classList.add('active');   
        }
        console.log("vi tri hientai la "+ vtslide);
      
            
     },5000);
    
    }


    function openCity(cityName, elmnt, color) {
        // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
      
        // Show the specific tab content
        document.getElementById(cityName).style.display = "block";
      
        // Add the specific color to the button used to open the tab content
        elmnt.style.backgroundColor = color;
      }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
})
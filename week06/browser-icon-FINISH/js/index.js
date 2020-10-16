window.addEventListener('load', function(e){
   const browserTypes = document.querySelector('#browserTypes')
 
   
   browserTypes.addEventListener('change', function(e){
     const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
     updateBrowserIcon(e.currentTarget.value)
 
   })


   // Function updates the icon
   //   whichIcon is the option value that contains the browser type.
   function updateBrowserIcon(whichIcon){
      const browserIcon = document.querySelector('.browser-icon')
      const path = `img/icons/browsers/${whichIcon}.svg`
      browserIcon.src = path
      }
      

})
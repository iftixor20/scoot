var elSiteHeader = document.querySelector(".site-header");
var elSiteNavToggler = elSiteHeader.querySelector(".site-nav__open-btn");

if(elSiteNavToggler){
  elSiteNavToggler.addEventListener("click", function(){
    elSiteHeader.classList.toggle("open-header")
  });
}
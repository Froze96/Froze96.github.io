
navToggler.onclick = function navToggle() {
  let x = document.getElementById('header__nav-id');
  if (x.className === "header__nav") {
    x.className += " header__nav--active";
  }else  {
     x.className = "header__nav";
  }
}

 

window.addEventListener('scroll',headerAnimation); 



function headerAnimation() { 
	let x = document.getElementById('header-id');
	  if ( window.pageYOffset > 50  && x.className === "header"){
	  	x.className += " uk-animation-slide-top-small header--slide"
	  } else if (window.pageYOffset <= 50){
	  	x.className = "header";
	  }
}

 //header.setAttribute("uk-scrollspy", "cls:uk-animation-slide-top-small") 
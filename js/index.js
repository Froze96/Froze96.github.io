
navToggler.onclick = function navToggle() {
  let x = document.getElementById('header__nav-id');
  if (x.className === "header__nav") {
    x.className += " header__nav--active";
  }else  {
     x.className = "header__nav";
  }
}

 
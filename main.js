// setCursor();
setMenu();
setToTopButton();

function setCursor() {

  const cursor= document.querySelector( ".cursor" );
  let isShown= false;

  window.addEventListener( "mouseover", ()=> {
    if( !isShown) {
      cursor.style.display= "block";
      isShown= true;
    }
  });
  window.document.addEventListener( "mouseleave", ()=> {
    cursor.style.display= "none";
    isShown= false;
  });

  // Position cursor div to cursor position
  document.addEventListener( "mousemove", e=> {
    cursor.style.left= `${ e.clientX }px`;
    cursor.style.top= `${ e.clientY }px`;
  });

  // Add "click" class to cursor on mousedown and remove on mouseup
  document.addEventListener( "mousedown", e=> cursor.style.scale= ".6" );
  document.addEventListener( "mouseup", e=> cursor.style.scale= "1" );

  // Add "pressable" class to cursor when hovering certain elements
  //! not working
  const items = document.querySelectorAll( "a, button, .menu__nav" );
  items.forEach( item=> {
    item.addEventListener( "mouseover", ()=> {
      cursor.style.opacity= ".2";
    });
    item.addEventListener( "mouseleave", ()=> {
      cursor.style.opacity= ".6";
    });
  });
}

function setMenu() {

  const menuIcon= document.querySelector( ".menu__icon" );
  const menu= document.querySelector( ".menu" );
  const menuNavLinks= document.querySelectorAll( ".menu__nav a" );
  const mobileSize= 580;
  let isMenu= false;
  setMenuVisibility();

  // MOBILE click menu icon
  menuIcon.addEventListener( "click", ()=> {
    menu.style.top= isMenu? "-100%": "0";
    isMenu= !isMenu;
    setMenuIconVisibility();
  });

  // MOBILE click menu option
  menuNavLinks.forEach( m=> m.addEventListener( "click", ()=> {
    if( window.innerWidth< mobileSize )
      menu.style.top= "-100%";
    isMenu= false;
    setMenuIconVisibility();
  }));

  // RESIZE menu visibility
  window.addEventListener( "resize", setMenuVisibility );

  function setMenuVisibility() {
    isMenu= window.innerWidth>= mobileSize;
    if ( isMenu ) {
      // menuNav.style.display= "block";
      menu.style.top= "0";
    } else {
      // menuNav.style.display= "none";
      menu.style.top= "-100%";
    }
  }

  function setMenuIconVisibility() {
    if ( isMenu ) {
      menuIcon.classList.add( "menu__icon--closed" );
    } else {
      menuIcon.classList.remove( "menu__icon--closed" );
    }
  }
}

function setToTopButton() {

  const toTopButton= document.querySelector( ".to-top" );

  // SCROLL to top button visibility
  window.addEventListener( "scroll", e=> {
    if( window.pageYOffset> 100 ) {
      toTopButton.style.pointerEvents= "all";
      toTopButton.style.opacity= "1";
    } else {
      toTopButton.style.pointerEvents= "none";
      toTopButton.style.opacity= "0";
    }
  });
}

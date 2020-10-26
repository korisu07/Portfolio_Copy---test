const
  menu_open = Array.from(document.getElementsByClassName('open_menu')),
  side_menus = Array.from(document.getElementsByClassName('side-menu'));

side_menus.forEach( (menu) =>{
  menu.style.height = '0px';
  menu.style.display = 'none';
});

menu_open.filter((link)=>{
  link.addEventListener('click', function (){

    const 
      sub_menu = link.nextElementSibling;

    if(sub_menu.clientHeight > 0){
      sub_menu.style.height = '0px';
      sub_menu.style.display = 'none';
    }else{
      sub_menu.style.height = '';
      sub_menu.style.display = '';
    }

    console.log(sub_menu.clientHeight);

  }, false);
});
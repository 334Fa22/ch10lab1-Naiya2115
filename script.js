/*
  Student Name: Naiya Patel
  File Name: scrpit.js
  Date: 09/19/2022
  */

  //Hamburger menu function
  function hamburger(){
    var menu = document.getElementById("menu-links");
    if(menu.style.display === block){
      menu.style.display = "none";
    }else{
      menu.style.display = "block";
    }
}

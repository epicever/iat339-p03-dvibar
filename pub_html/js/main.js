'use strict';

/*

Legend

rock_spike_wave = fx01

*/

var fadeOutDelay = 200;
var fadeInDelay = 200;

var mainpage_content = document.querySelector("#mainpage");
var biography_content = document.querySelector("#biography-content");
var contactme_content = document.querySelector("#contactme-content");
var fx01_content = document.querySelector("#fx01-page");

//Nav references

var logo_heading_button = document.querySelector("#logo-heading");
var logo_caption_button = document.querySelector("#logo-caption");

var nav_biography_button = document.querySelector(".nav-biography");
var nav_contactme_button = document.querySelector(".nav-contactme");

//Thumbnail buttons for the projects on the mainpage
var fx01_mp_button = document.querySelector(".mp-proj-button");

//Current content opened
var curContentOpen = mainpage_content;

function pageFadeTransition(fadeOutElement,fadeInElement){
  fadeOutElement.classList.remove("fadeIn");
  fadeOutElement.classList.add("fadeOut");


  setTimeout(
    function(){
      fadeOutElement.classList.add("hidden");
      fadeInElement.classList.remove("hidden");
      setTimeout(function(){
        fadeInElement.classList.add("fadeIn")
        fadeOutElement.classList.remove("fadeIn");
        fadeInElement.classList.remove("fadeOut");
      },fadeInDelay);
    },fadeOutDelay);




}

function cacheNewContent(newContent){
  curContentOpen = newContent;
}

function isVisisble(content){
  if(content.opacity == "1"){
    return true;
  }else{
    return false;
  }
}

function addButton(obj,targPage){
  obj.addEventListener("click",
    function () {
      console.log(" pressed");

      changeContent(targPage);
    }
  );
}

function changeContent(targPage){
  if(targPage != curContentOpen){
    pageFadeTransition(curContentOpen,targPage);
    cacheNewContent(targPage);
  }

}

addButton(logo_heading_button,mainpage_content);
addButton(nav_biography_button,biography_content);
addButton(nav_contactme_button,contactme_content);

addButton(fx01_mp_button,fx01_content);

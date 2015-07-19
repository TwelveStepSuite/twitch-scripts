// ==UserScript==
// @name           Twitch Hide Games
// @description    Hide annoying games from Twitch directory
// @namespace      
// @grant          none
// @author         Zik_
// @license        MIT License
// @match          http://www.twitch.tv/directory/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @version        0.1
// ==/UserScript==

// Игры скрываются по нажатию на Ctrl.
// Перед нажатием Ctrl лучше немного проскроллить страницу.
// Скрываются игры из списка ниже. Можно вводить как и названия игр полностью, так и часть названия.
var array = ["League of Legends", "Dota", "Counter", "Tanks"];

function hideGames() {
	var index = 0;
	for (index = 700; index < 90000; index++) {
		var stream = document.body.querySelector('#ember'+index);
		if (stream != null) {
      if (stream.parentNode.className == 'js-directory tse-content') {
          continue;
      }
      if (stream.parentNode.parentNode.className == 'js-directory tse-content') {
          continue;
      }
      if (stream.parentNode.className == 'js-streams streams items') {
          continue;
      }
      
      var str = stream.querySelector('.boxart');
      if (str != null) {
          str = str.toString();
          for (var i = 0; i < array.length; i++) {
              if (str.indexOf(array[i]) > -1) {
                  stream.style.display = "none";
                  break;
              }
          }
      }
		}
	}
}

function init() {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/ /g,"%20");
    }
    
    document.addEventListener("keydown", keydown, false);
}

function keydown(e){
	if (e.ctrlKey) {
		hideGames();
	}
}

init()

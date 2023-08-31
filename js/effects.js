// JavaScript Document
/*window.addEventListener('load', function(){
	
});*/
window.setTimeout(colorChange, 700);
function colorChange(){
	let line = document.getElementById('colorLine');
	line.style.background = '#a1b0ff';
}


// ↓スライドしながら各ID要素を出現させる記述
let id2Judge = false;
let id3Judge = false;
let id4Judge = false;

window.addEventListener('scroll', function () {

  // PROFILEの処理
  // IDを取得
  let id2 = document.getElementById('PROFILE');
  console.log(id2);
  console.log(id2Judge);
  // ブラウザの画面の上端から取得したIDコンテンツの上端までの距離を取得
  id2 = id2.getBoundingClientRect().top;
  // ブラウザの画面の下2割にコンテンツが入ってきて、
  //　取得した距離がマイナスではなく、
  // ２度目の処理ではないとき
  if (id2 <= window.innerHeight * 0.8 && id2 >= 0 && id2Judge === false) {
    console.log('id2の判定に入った')
    // 取得したIDに出現用のクラスを付ける
    document.getElementById('PROFILE').classList.add('appearUP');
    // 一度処理したら二回目はしないように
    id2Judge = true;
    console.log(id2);
  } else {
    console.log('id2のelseに入った');
  }
	
  // WORKSの処理
  let id3 = document.getElementById('WORKS');
  console.log(id3);
  console.log(id3Judge);
  id3 = id3.getBoundingClientRect().top;
  if (id3 <= window.innerHeight * 0.8 && id3 >= 0 && id3Judge === false) {
    console.log('id3の判定に入った')
    document.getElementById('WORKS').classList.add('appearUP');
    id3Judge = true;
    console.log(id3);
  } else {
    console.log('id3のelseに入った');
  }
	
  // TOOLSの処理
  let id4 = document.getElementById('TOOLS');
  console.log(id4);
  console.log(id4Judge);
  id4 = id4.getBoundingClientRect().top;
  if (id4 <= window.innerHeight * 0.8 && id4 >= 0 && id4Judge === false) {
    console.log('id4の判定に入った')
    document.getElementById('TOOLS').classList.add('appearUP');
    id4Judge = true;
    console.log(id4);
  } else {
    console.log('id3のelseに入った');
  }
});
// ↑スライドしながら各ID要素を出現させる記述

// ↓このままだとTOPやメニュークリックで各IDへ行けないので、そのための記述
let topBtn	= document.getElementById('topBtn');
let menu2 = document.getElementById('menuProfile');
let menu3 = document.getElementById('menuWorks');
let menu4 = document.getElementById('menuTools');

topBtn.addEventListener('click', function(){
	document.getElementById('PROFILE').classList.add('appearUP');
	id2Judge = true;
});
menu2.addEventListener('click', function(){
	document.getElementById('PROFILE').classList.add('appearUP');
	id2Judge = true;
});
menu3.addEventListener('click', function(){
	document.getElementById('WORKS').classList.add('appearUP');
	id3Judge = true;
});
menu4.addEventListener('click', function(){
	document.getElementById('TOOLS').classList.add('appearUP');
	id4Judge = true;
});
// ↑このままだとTOPやメニュークリックで各IDへ行けないので、そのための記述

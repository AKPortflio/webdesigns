//　backgroundImage の値がローカルパスになっているので
// アップロードするときは注意
const lightBoxIn = document.getElementById('lightBoxIn');
const lightBoxOut = document.getElementById('lightBoxOut');
const dark = document.getElementById('dark');

// img1をクリックしたときの動作
var img1 = document.getElementById('img1');
img1.addEventListener('click', function () {
  console.log('img1に入った');
	// class: lightBoxIn　に背景画像を挿入する
  lightBoxIn.style.backgroundImage = 'url("https://akportflio.github.io/webdesigns/images/torii.jpg")';
	// class: laightBoxIn, lightBoxOut, dark　を有効にする
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
	
  console.log(lightBoxIn);
console.log(lightBoxOut);
console.log(dark);	
});

//　以下同じ動作

// img2をクリックしたときの動作
var img2 = document.getElementById('img2');
img2.addEventListener('click', function () {
  console.log('img2に入った');
	lightBoxIn.style.backgroundImage = 'url("https://akportflio.github.io/webdesigns/images/seimon.jpg")';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});
// img3をクリックしたときの動作
var img3 = document.getElementById('img3');
img3.addEventListener('click', function () {
  console.log('img3に入った');
	lightBoxIn.style.backgroundImage = 'url("https://akportflio.github.io/webdesigns/images/shaden.jpg")';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});
// img4をクリックしたときの動作
var img4 = document.getElementById('img4');
img4.addEventListener('click', function () {
  console.log('img4に入った');
	lightBoxIn.style.backgroundImage = 'url("https://akportflio.github.io/webdesigns/images/ajisai.jpg")';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});
// img5をクリックしたときの動作
var img5 = document.getElementById('img5');
img5.addEventListener('click', function () {
  console.log('img5に入った');
	lightBoxIn.style.backgroundImage = 'url("https://akportflio.github.io/webdesigns/images/ema.jpg")';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});
// img6をクリックしたときの動作
var img6 = document.getElementById('img6');
img6.addEventListener('click', function () {
  console.log('img6に入った');
	lightBoxIn.style.backgroundImage = 'url("https://akportflio.github.io/webdesigns/images/komainu.jpg")';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});


// ライトボックスの画像表示から抜け出す

// lightBoxIn をクリックしたら
lightBoxIn.addEventListener('click', function () {
  console.log('lightBoxInの判定に入った')
	// lightBoxIn から背景画像を削除する
  lightBoxIn.style.backgroundImage = '';
	// lightBoxIn, lightBoxOut, dark　を無効にする
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});

// 以下同じ動作
lightBoxOut.addEventListener('click', function () {
  console.log('lightBoxOutの判定に入った')
  lightBoxIn.style.backgroundImage = '';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});

dark.addEventListener('click', function () {
  console.log('darkの判定に入った')
  lightBoxIn.style.backgroundImage = '';
  lightBoxIn.classList.toggle('lightBoxInner');
  lightBoxOut.classList.toggle('lightBoxOuter');
  dark.classList.toggle('blackOut');
});

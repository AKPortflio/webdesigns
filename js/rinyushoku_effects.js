// 挙動がおかしいので糸口が見つかるまではコメントアウト
// スライドショー************************************/
// スライドショー用の画像をセット
const headerImgLists = [
  "food-foto-cutapple.jpg",
  "food-foto-lemon.jpg",
  "food-foto-rime.jpg",
  "food-foto-fruits.jpg",

];
// ヘッダー画像用のimgタグをセット


//console.log(headerImgSrc.src);

// アニメ効果のパラメータ
const interval = 2000;
const effectTime = 500;
const startFrame = {
  opacity: [0, 1]
};
const endFrame = {
  opacity: [1, 0]
};
let num = 1;
// ヘッダー画像のsrcを取得
const headerImg = document.querySelector(".headerImg img");
/*window.addEventListener('load', () => {
  //headerImg.animate(startFrame, effectTime);
  
	setTimeout(headerImg.animate(endFrame, {
    duration: 500,
    delay: 1500,
  }), 1500);
  // interval秒毎にスライドショー
  setInterval(setSrcLoop, interval);
});
// スライドショー用の関数
const setSrcLoop = () => {
  headerImg.src = `images/${headerImgLists[num]}`;
  headerImg.animate(startFrame, effectTime);
  headerImg.animate(endFrame, {
    duration: effectTime,
    delay: interval - effectTime,
  });

  if (num === headerImgLists.length - 1) {
    num = 0;
  } else {
    num++;
  }
};*/
// スライドショー************************************//


// 文字がふわっとするヤツ１************************************//

const fuwaAnimation = (entries) => {
  entries.forEach((entry,obs) => {
    if (entry.isIntersecting) {
      entry.target.animate({
        opacity: [0, 1],
        translate: ['0 2em', 0],
      }, {
        duration: 700,
        easing: 'ease',
        fill: 'forwards',
      });
		//console.log(obs);
      //obs.unobserve(entry.target);
    }
  });
};
const fuwaObserver = new IntersectionObserver(fuwaAnimation);
const fuwas = document.querySelectorAll('.fuwa');
//console.log(fuwas);
fuwas.forEach((fuwa) => {
  fuwaObserver.observe(fuwa);
});
// 文字がふわっとするヤツ１************************************//

// 文字がふわっとするヤツ２************************************//

const opcAnimation = (entries) => {
  entries.forEach((entry, obs) => {
    if (entry.isIntersecting) {
      entry.target.animate({
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0)'],
      }, {
        duration: 500,
        easing: 'ease',
        fill: 'forwards',
      });
      //obs.unobserve(entry.target);
    }
  });
};
const opcObserver = new IntersectionObserver(opcAnimation);
const opcs = document.querySelectorAll('.opc');
opcs.forEach((opc) => {
  opcObserver.observe(opc);
});
// 文字がふわっとするヤツ２************************************//

// ボックスが左からスライドしてくるヤツ************************************//
const fLeftAnimation = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //console.log('fLeftAnimationはいった');
      entry.target.animate({
        opacity: [0, 1],
        translate: ['-100vw 0', 0],
      }, {
        duration: 700,
        easing: 'ease',
        fill: 'forwards',
      });
		//console.log(obs);
      obs.unobserve(entry.target);
    }
  });
};
const fLeftObserver = new IntersectionObserver(fLeftAnimation);
const fLefts = document.querySelectorAll('.fLeft');
fLefts.forEach((fLeft) => {
  // console.log('fLefts入った');
  //console.log(fLeft);
  fLeftObserver.observe(fLeft);
});
// ボックスが左からスライドしてくるヤツ************************************//

// ボックスが右からスライドしてくるヤツ************************************//
const fRightAnimation = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //console.log('fRightAnimationはいった');
      entry.target.animate({
        opacity: [0, 1],
        translate: ['100vw 0', 0],
      }, {
        duration: 700,
        easing: 'ease',
        fill: 'forwards',
      });
      obs.unobserve(entry.target);
    }
  });
};
const fRightObserver = new IntersectionObserver(fRightAnimation);
const fRights = document.querySelectorAll('.fRight');
fRights.forEach((fRight) => {
  //console.log('fRight入った');
  //console.log(fRight);
  fRightObserver.observe(fRight);
});
// ボックスが右からスライドしてくるヤツ************************************//

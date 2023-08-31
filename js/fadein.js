'use strict';
//console.log('JSはいった。');
window.addEventListener('load', function () {
  //console.log('loadはいった。');
  const bodyJudge = document.getElementsByTagName('body');

  const Judge = bodyJudge[0].id;

  if (Judge === 'mainBody') {
    // console.log('mainBodyに入った')
    let body = document.getElementById('mainBody');
    //console.log(body);
    body.classList.add('appear');
  } else {
    //console.log('indexBodyに入った');
    document.getElementById('mainLink').addEventListener('click',
      function () {
        let body = document.getElementsByTagName('body');
        //console.log(body);
        body[0].classList.add('disapear');
        //console.log(body);
      });
  }
});

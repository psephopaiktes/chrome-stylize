'use strict';
{
  console.log('stylized');

  // Cボタンでコメントトグル
  {
    let button = document.getElementsByClassName('CommentOnOffButton')[0];
    document.addEventListener('keydown', (e) => {
      if( e.keyCode == 67 ) { button.click(); }
    });
  }

}

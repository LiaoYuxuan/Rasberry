// 先使用一个叫做querySelector() 的函数来获取标题，然后将其储存在一个叫 myHeading 的变量中。
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//点击事件
// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }
//其他写法
// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MyImage.jpg') {
      myImage.setAttribute('src', 'images/NextImage.jpg');
    } else {
      myImage.setAttribute('src', 'images/MyImage.jpg');
    }
}
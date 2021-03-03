var box = document.querySelector('#exDiv');
var box2 = document.querySelector('#exim');

function expandimg(source){
    box.style.display = "block";
    box2.src = source.src;
}
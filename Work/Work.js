var images = [
    'images/st.jpg',
    'images/js.png',
    'images/my.jpg',
    'images/htcs.png',
    'images/tim.jpg',
    'images/Hk.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
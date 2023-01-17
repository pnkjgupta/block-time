var starts = new Date();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function move(){
    var left = Math.floor(Math.random()*300);
    var top = Math.floor(Math.random()*300);
    var wh = ((Math.random()* 200)+100);
    document.getElementById("shape").style.left = left;
    document.getElementById("shape").style.top = top;
    document.getElementById("shape").style.width = wh;
    document.getElementById("shape").style.height = wh;
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    starts = new Date();
}
move();
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display=" none";
    var ends = new Date();
    var timetaken = (ends-starts)/1000;
    alert(timetaken);
    move();
}
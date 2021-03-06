mouseevent = "none";
 canvas = document.getElementById("mydraw");
ctx = canvas.getContext("2d");

color = document.getElementById("colour").value;
 radius = document.getElementById("radius").value;
 width = document.getElementById("width").value;

canvas.addEventListener("mousedown", My_mousedown);
function My_mousedown(e) {
  color = document.getElementById("colour").value;
  radius = document.getElementById("radius").value;
  width = document.getElementById("width").value;
 mouseevent = "mouseDown";
}



canvas.addEventListener("mousemove", My_mousemove);
function My_mousemove(e) {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  
  current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

  if (mouseevent == "mouseDown") 
  {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_of_mouse_x ,current_position_of_mouse_Y,radius, 0, 2*Math.PI );
    ctx.stroke();
     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
   current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    
  }

  
}

function clear_space() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Red rectangle
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(5, 5, 290, 140);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

// Blue rectangle
ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.rect(50, 50, 150, 80);
ctx.stroke();
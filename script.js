// Conectar el canva con la de HTML y el contexto
var canvas = document.getElementById("frame");
var ctx = canvas.getContext("2d");

//Crear un entorno dentro del canva en el cual se puedan poner imagenes o pixeles
var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var data = imgData.data;


//llamado de funciones y envio de los valores
function redLine() {
    bresenham(100,50, 200, 150);
    //ctx.putImageData(imgData, 0, 0);
}

function limpiar() {
    ctx.clearRect(0,0,300,300);
}


var DrawPixel = function (x, y) {
    ctx.fillRect(x, y, 1, 1);
  }
//funcion de la creacion de las lineas mediante le metodo de bresenham
function bresenham(x1,y1 ,x2,y2){
    var m = 2 * (y2 - y1);
    var error = m - (x2 - x1);
     
    for (x = x1, y = y1; x <= x2; x++){
        DrawPixel(x,y);
 
        // Add slope to increment angle formed
        error += m;
 
        // Slope error reached limit, time to
        // increment y and update slope error.
        if (error >= 0){
        y++;
        error -= 2 * (x2 - x1);
        }
    }
}    





  

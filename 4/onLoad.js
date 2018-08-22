let ctx = document.getElementById("canvas").getContext("2d");

function myDrawImageMMethod(image){
    ctx.drawImage(image, 0, 0);
}

var image1 = new Image();
image1.src = "image1.jpg";
image1.onload = function() {
        myDrawImageMMethod(this);
}

let ctx = document.getElementById("canvas").getContext("2d");
let width = 400;
let height = 500;
let half = width/2;

let imageData = ctx.createImageData(width, height);
let r = 0;
let g = 0;
let b = 0;

for (let x = 0; x < half; x++) {
    for (let y = 0; y < height; y++) {
        setPixel(imageData, x, y, r, g, b, 255);
        r = Math.round((x/half) * 255);
        g = Math.round((x/half) * 255);
    }
}

 let r1 = 255;
 let g1 = 255;
 let b1 = 0;

 for (let x = half; x < width; x++) { 
     for (let y = 0; y < height; y++) {
         setPixel(imageData, x, y, r1, g1, b1, 255);
         g1 = 255 - (((x-half)/half) * 255);
     }
}

ctx.putImageData(imageData, 0, 0);

function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + (y * imageData.width)) * 4; 
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
 }
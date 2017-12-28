const areaRectangle = (w, h) => w * h;
     
const volumeBox = (w, h, l) => w * h * l;
      
const areaCircle = (r) => Math.pow(r, 2) * Math.PI;

const volumeSphere = (r) => (4/3) * Math.pow(r, 3) * Math.PI; 

console.log(areaRectangle(5, 22) );

console.log(volumeBox(4.5, 12.5, 17.4) );

console.log(areaCircle(7.2) );

console.log(volumeSphere(7.2) );








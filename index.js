// ----------------------------------------
// -----------Triangle ver1----------------

// function drawTriangle(){
//     for (i = 0; i < 6; i++){
//     let star = "";
//     for (j = 0; j < i; j++){
//         star += "*";
//     }
//     console.log(star);
// }
// }
// drawTriangle()
// -----------------------------------------

function drawTriangle() {
    let i = 1;
    while (i <= 5) {
      let stars = '';
      let j = 0;
      while (j < i) {
        stars += '*';
        j++;
      }
      console.log(stars);
      i++;
    }
  }
  
  drawTriangle();
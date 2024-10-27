let img;
let mstring = "";

function preload() {
  img = loadImage('../assets/Hamilton.jpg');
  mstring = loadStrings('../assets/words.text');
}
let wList = [];
let hList = [];
function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  for(id = 0; id < 40;id++){
    w = height/40*id +random(-5,+5);
    h = random(0,height*1.5)
    wList.push(w);
    hList.push(h);
  }
  
}
// Looks not good
// function title_star(x, y, scale) {
//   push();
//   translate(x, y);


//   let star = [1,3, 5,4, 3, 2, 1];
//   let words = 'AlexanderHamilton';
//   let length = 0;
//   words = words.toLocaleUpperCase()

//   for (let i = 0; i < star.length; i++) {
//     textSize(scale*2+star[i]*2);


//     let currentLength = star[i];
//     let gap = ((scale*2+5*2) / 3) * (5 - star[i]);
//     let textSnippet = words.substring(length, length + currentLength);

//     text(textSnippet, x + gap, y);
//     y += scale+star[i]*2;
    
//     length += currentLength;
//   }

//   pop();
// }



function rain(posx,posy,x,y){

  words = "I am not throwin' away my shot"
  push() 
  translate(posx,posy)
  rotate(-60)
  text(words,x,y)
  pop()
}

function Hamilton(scale) {


  let mword = mstring.join(' ').split(' ');
  img.resize(0, height/scale);
  img.loadPixels(); 

  let i = 0; 


  for (let idx = 0; idx < img.pixels.length; idx += 4 * 10) {
    let r = img.pixels[idx];  
    let g = img.pixels[idx + 1]; 
    let b = img.pixels[idx + 2]; 
    let a = img.pixels[idx + 3]; 

   
    if (r < 50 && g < 20 && b < 20) {
      r = map(r,0,50,150,255);
      g = map(g,0,20,100,200)
      b = map(b,0,20,0,40)
      noStroke();
      fill(r, g, 0, a);
      let x = (idx / 4) % img.width; 
      let y = floor((idx / 4) / img.width);
      if(mword[i] ==='Non-stop!'|| mword[i] ==='Hamilton'){
        textSize(scale*7)
      }  
      else{

        textSize(scale*5)
      }
      text(mword[i], x*scale , y*scale );

      // It will be super freezing if I run the loop

      // for (let c = 0; c < mword[i].length; c++) {
      //   let offset = map(c, 0, mword[i].length, -mword[i].length / 2, mword[i].length / 2);
      //   text(mword[i][c], (x + offset) * scale, (y + offset) * scale);
      // }
      i = (i + 1) % mword.length;
    }
  }
}


function draw() {
 background(220);
 let time = int(millis()/180)
 scale = map(sin(time),-1,1,5,8)
 scaleStar = map(sin(time),-1,1,10,30)
 Hamilton(scale) 
 for(i = 0;i <40;i++){
  x = wList[i]
  y = hList[i]
  rain(x,y,-(time*100)%(height*1.2),0)

 }

 for(i = 0;i <40;i++){
  x = wList[i]
  y = hList[i]
  rain(x,y-height*1.5,-(time*100)%(height*1.2),0)

 }




}

function mousePressed(){
  noLoop()
  background(220);
  Hamilton(5)

}

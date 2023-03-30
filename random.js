
let x = Math.floor(Math.random() * 10)

document.getElementById("randomBtn").onclick = function (){
  x = Math.floor(Math.random() * 10) + 1;

  document.getElementById("random").innerHTML = x;
if (x === 1){
  document.getElementById("link").style.display = "block";
}else if(x === 2){
  document.getElementById("link2").style.display = "block";
}else if (x === 3){
  document.getElementById("link3").style.display = "block";
}else if (x === 4){
  document.getElementById("link4").style.display = "block";
}

if (x === 5){
  document.getElementById("link5").style.display = "block";
}

if (x === 6){
  document.getElementById("link6").style.display = "block";
}

if (x === 7){
  document.getElementById("link7").style.display = "block";
}

if (x === 8){
  document.getElementById("link8").style.display = "block";
}

if (x === 9){
  document.getElementById("link9").style.display = "block";
}

if (x === 10){
  document.getElementById("link10").style.display = "block";
}
}


function show(){
  document.getElementById("bolani").style.display = "inline-block";
  document.getElementById("text1").style.display = "block";
}

function show1(){
  document.getElementById("egg").style.display = "inline-block";
  document.getElementById("text2").style.display = "block";
}

function show2(){
  document.getElementById("manto").style.display = "inline-block";
  document.getElementById("text3").style.display = "block";
}

function show3(){
  document.getElementById("shola").style.display = "inline-block";
  document.getElementById("text4").style.display = "block";
}

function show4(){
  document.getElementById("choclate").style.display = "block";
  document.getElementById("text5").style.display = "inline-block";
}

function show5(){
  document.getElementById("kabuli").style.display = "inline-block";
  document.getElementById("text6").style.display = "block";
}

function show6(){
  document.getElementById("ashak").style.display = "inline-block";
  document.getElementById("text7").style.display = "block";
}

function show7(){
  document.getElementById("soil").style.display = "inline-block";
  document.getElementById("text8").style.display = "block";
}

function show8(){
  document.getElementById("icecream").style.display = "inline-block";
  document.getElementById("text9").style.display = "block";
}

function show9(){
  document.getElementById("pizza").style.display = "inline-block";
  document.getElementById("text10").style.display = "block";
}


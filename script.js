var light = document.querySelector(".light");
var dark = document.querySelector(".dark");
var body = document.querySelector("body");
var guess = document.querySelector(".guess"); 
light.addEventListener('click',function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}); 
dark.addEventListener('click' , function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";                   
}); 

var random_color = ['yellow' , 'blue' , 'green' ,'red' , 'purple' , 'violet' , 'cyan'];
var color_pallete = document.querySelector(".color-pallete"); 
var color_pallete2 = document.querySelector(".color-pallete2"); 
var color_pallete3 = document.querySelector(".color-pallete3"); 
var color_pallete4 = document.querySelector(".color-pallete4"); 
var seconds = document.querySelector(".seconds")
var random = document.querySelector(".random-color"); 
var content = document.querySelector(".content");
// console.log(random_color[random_number]);

for(let i = 0;i< 8; i++){
  var span = document.createElement('span');  
  random_number = Math.floor(Math.random()*7)
  span.style.backgroundColor = random_color[random_number];
  span.classList = "random-color";
  color_pallete.appendChild(span);
}

for(let i = 0;i< 8; i++){
  var span = document.createElement('span');  
  random_number = Math.floor(Math.random()*7)
  span.style.backgroundColor = random_color[random_number];
  span.classList = "random-color";
  color_pallete2.appendChild(span);
} 
for(let i = 0;i< 8; i++){
  var span = document.createElement('span');  
  random_number = Math.floor(Math.random()*7)
  span.style.backgroundColor = random_color[random_number];
  span.classList = "random-color";
  color_pallete3.appendChild(span);
} 
for(let i = 0;i< 8; i++){
  var span = document.createElement('span');  
  random_number = Math.floor(Math.random()*7)
  span.style.backgroundColor = random_color[random_number];
  span.classList = "random-color";
  color_pallete4.appendChild(span);
}  
// function ron({
//   guess = Math.floor(Math.random()*random_color)
// }); 
var random = document.querySelectorAll('.random-color');
var score = 0; 
var btn


for(let i of random){
	i.addEventListener("click" , function() {
	// alert("click") 
    if (i.style.backgroundColor == guess.style.backgroundColor){
      ron();
			score = score + 1;
			document.querySelector(".score").innerHTML = score;
      
    }
	
});
}


function ron() {
	var rn = Math.floor(Math.random()  * 7)
	guess.style.backgroundColor = random_color[rn];
}
ron()
// TIMER
var timer = 60;

setInterval(function() {
	console.log(timer);
	timer = timer - 1;
	if(timer <= 0) {
		content.classList = "gameover";
		content.innerHTML = "GAME OVER"
		document.querySelector('.play').style.display = "block";
		timer = 0;
	}
	seconds.innerHTML = timer;
	
},1000) 

document.querySelector('.play').addEventListener("click" , function () {
  location.reload();
})
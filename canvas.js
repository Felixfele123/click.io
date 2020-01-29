let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


function Circle(x, y, dx, dy, radius, color, fade, id){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = color
    this.fade = fade
    this.id = id

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
    }
    
    this.update = function(){

        this.draw();

        if( this.x + radius > innerWidth || this.x - this.radius < 0){
            this.dx= -this.dx;
        }
        if( this.y + radius > innerHeight || this.y - this.radius < 0){
            this.dy= -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        c.fillStyle = ` rgb(${this.color}, 0, 0, ${this.fade}) `

    }
}



let circleArray= [];
let id = 0;
let fade = 1;



for(i = 0; i < 3; i++){
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    let radius = 30;
    let color = 1;


    circleArray.push(new Circle(x, y, dx, dy, radius, color, fade, id));
    id++
    fade = fade - 0.2
}




function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)

    circleArray.forEach(el => {

        el.update();
        
    });

  
}





function getMousePosition(canvas, event) { 
    let rect = canvas.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
} 


let canvasElem = document.querySelector("canvas"); 
  
canvasElem.addEventListener("mousedown", function(e) 
{ 
    
    let rect = canvas.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
        circleArray.forEach(function(el, index){
            if(x < el.x + 30 && x > el.x - 30 && y < el.y + 30 && y > el.y - 30){
                circleArray[el.id].fade = circleArray[el.id].fade - 0.1
                console.log(index)
                console.log(el.id)
            }
        });
    

    getMousePosition(canvasElem, e); 
}); 

animate();

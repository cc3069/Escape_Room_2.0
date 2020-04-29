let isMapPress= false;
let isDoorPress= false;
let isboxPress= false;
let isboxSolved= false;
let backButton= false;

function preload(){
    room1 = loadImage('Images/hotel bedroom.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#252B42');
    
    room1.loadPixels();
   
}

function draw() {
    image(room1, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
    if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
        cursor(HAND);
    }
    else{
        cursor(ARROW);
    }
}

function mousePressed(){
    if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
        cursor(HAND);
        alert("Locked!")
    }
    else{
        cursor(ARROW);
    }
}

function clickDoor(){
        
    
}

function clickMap(){

}

function clickBox(){

}

function boxPuzzle(){

}
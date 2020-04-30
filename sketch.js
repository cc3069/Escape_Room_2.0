let isMapPress= false;
let isDoorPress= false;
let isboxPress= false;
let isboxSolved= false;
let isPlantClicked= false;
let backButton= false;
let morseCode;


function preload(){
    room1= loadImage('Images/hotel bedroom.jpg');
    paper= loadImage('Images/Morse code reference.jpg');
    map= loadImage('Images/edited map.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#252B42');
    
    morseCode= createAudio('images/Escape theme one.wav');
    morseCode.loop();
    
    room1.loadPixels();
    paper.loadPixels();
    map.loadPixels();
   
}

function draw() {
    image(room1, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
    //rect(650,250,50,140); plant
    //rect(750,230,120,65); map
    //rect(485,260,35,15); box

    if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
        cursor(HAND);
    }
    
    else if(mouseX>=650 && mouseX<=700 && mouseY>=250 && mouseY<=390){
        cursor(HAND);
    }

    else if(mouseX>=750 && mouseX<=870 && mouseY>=230 && mouseY<=295){
        cursor(HAND);
    }

    else if(mouseX>=485 && mouseX<=520 && mouseY>=260 && mouseY<=275){
        cursor(HAND);
    }

    else{
        cursor(ARROW);
    }


    if(isPlantClicked==true){
        image(paper,(windowWidth/2)-100, (windowHeight/2)-125, 200, 250);
        arrow();
    }

    if(isMapPress==true){
        image(map,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
        arrow();
    }


    if(backButton==true){
        isPlantClicked=false;
        isMapPress= false;
        backButton=false;
    }
}

function mousePressed(){
    if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
        alert("Locked!");
    }

    else if(mouseX>=650 && mouseX<=700 && mouseY>=250 && mouseY<=390){
        alert("There's a piece of paper here");
        isPlantClicked= true;
    }

   // else if(mouseX>=485 && mouseX<=520 && mouseY>=260 && mouseY<=275){
     //   isBoxPress= true;
    //}

    if((mouseX>=430 && mouseX<=464 && mouseY>=116 && mouseY<=189) ||(mouseX>=464 && mouseX<=540 && mouseY>=143 && mouseY<=162)){
        backButton=true;
    }

    else if(mouseX>=750 && mouseX<=870 && mouseY>=230 && mouseY<=295){
        isMapPress= true;
    }

   
}

function arrow(){
    translate(250,80);
    fill('red');
    beginShape();
  vertex(180, 70);
  vertex(214, 36);
  vertex(214, 63);
  vertex(290, 63);
  vertex(290, 82);
  vertex(214, 82);
  vertex(214, 109)
  endShape();
}

function boxPuzzle(){
    
}
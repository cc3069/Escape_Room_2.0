let inRoom1= true;
let inRoom2= false;
let inRoom3= false;

//room 1
let isMapPress= false;
let isDoorPress= false;
let isBoxPress= false;
let isBoxSolved= false;
let puzzleDone=false;
let isPlantClicked= false;
let backButton= false;
let morseCode;

//box puzzle
 let clicks1=0;
 let clicks2=0;
 let clicks3=0;
 let input=['A','B','C','D','E','F','G','H']


function preload(){
    room1= loadImage('Images/hotel bedroom.jpg');
    paper= loadImage('Images/Morse code reference.jpg');
    map= loadImage('Images/edited map.jpg');
    puzzle= loadImage('Images/Box puzzle unsolved.jpg');
    finishPuzzle= loadImage('Images/Solved box.jpg');

    room2= loadImage('Images/Hallway.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#252B42');
    
    morseCode= createAudio('images/Escape theme one.wav');
    morseCode.loop();
    
    room1.loadPixels();
    paper.loadPixels();
    map.loadPixels();
    puzzle.loadPixels();
    finishPuzzle.loadPixels();
    room2.loadPixels();
   
}

function draw() {
    //rect(650,250,50,140); plant
    //rect(750,230,120,65); map
    //rect(485,260,35,15); box
    if(inRoom1==true){
        image(room1, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
    }
    else if(inRoom2==true){
        image(room2, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
    }
    
    

    changeCursor();

    if(isPlantClicked==true){
        image(paper,(windowWidth/2)-100, (windowHeight/2)-125, 200, 250);
        arrow();
    }

    if(isBoxSolved==true){
        isBoxPress=false;
        image(finishPuzzle,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
        arrow();
    }

    if(isBoxPress==true){
        image(puzzle,(windowWidth/2)-250, (windowHeight/2)-200, 500, 400);
        
        text(input[clicks1],720,420);
        text(input[clicks2],770,420);
        text(input[clicks3],820,420);

        if(clicks1==2 && clicks2==5 && clicks3==7){
            isBoxSolved= true;
            puzzleDone= true;
        }
        arrow();
        
        //rect(457,310,35,10); 
        //rect(505,310,35,10);
        //rect(555,310,35,10); 

        //rect(457,350,35,10);
        //rect(505,350,35,10);
        //rect(555,350,35,10);
        
    }

    if(isMapPress==true){
        image(map,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
        arrow();
    }

    if(backButton==true){
        isPlantClicked=false;
        isMapPress= false;
        isBoxPress= false;
        backButton=false;
        isBoxSolved= false;
    }
   
}

function mousePressed(){
    if(puzzleDone==false){
        if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
            alert("Locked!");
        }
    }
    else if(puzzleDone==true){
        if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
            inRoom2=true;
            inRoom1=false;
        }
    }
    
    if(mouseX>=650 && mouseX<=700 && mouseY>=250 && mouseY<=390){
        alert("There's a piece of paper here");
        isPlantClicked= true;
    }

   else if(mouseX>=485 && mouseX<=520 && mouseY>=260 && mouseY<=275){
        isBoxPress= true;        
    }

    if(isBoxPress==true){
        if(mouseX>=707 && mouseX<=742 && mouseY>=390 && mouseY<=400){
            clicks1++;
            if(clicks1==input.length){
                clicks1=0;
            }    
        } 
        else if(mouseX>=707 && mouseX<=840 && mouseY>=430 && mouseY<=440){
            clicks1--;
            if(clicks1<0){
                clicks1=7;
            }
        }

        if(mouseX>=755 && mouseX<=790 && mouseY>=390 && mouseY<=400){
            clicks2++;
            if(clicks2==input.length){
                clicks2=0;
            }    
        } 
        else if(mouseX>=755 && mouseX<=840 && mouseY>=430 && mouseY<=440){
                clicks2--;
                if(clicks2<0){
                    clicks2=7;
                }
            }

        if(mouseX>=805 && mouseX<=840 && mouseY>=390 && mouseY<=400){
                    clicks3++;
                    if(clicks3==input.length){
                        clicks3=0;
                    }    
                } 
        else if(mouseX>=805 && mouseX<=840 && mouseY>=430 && mouseY<=440){
                    clicks3--;
                    if(clicks3<0){
                        clicks3=7;
                    }
                }
            
            
        }
    

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

function puzzleSolved(){
    alert("Oh! It's a key!");
}


function changeCursor(){
    if(inRoom1==true){

       if(mouseX>=970 && mouseX<=1050 && mouseY>=260 && mouseY<=430){
            cursor(HAND);
        }

        else if(mouseX>=755 && mouseX<=790 && mouseY>=390 && mouseY<=400 //top center
            ||mouseX>=707 && mouseX<=742 && mouseY>=390 && mouseY<=400 //top left
            ||mouseX>=805 && mouseX<=840 && mouseY>=390 && mouseY<=400 //top right
    
            ||mouseX>=707 && mouseX<=840 && mouseY>=430 && mouseY<=440 //bottom left
            ||mouseX>=755 && mouseX<=840 && mouseY>=430 && mouseY<=440 //bottom center
            ||mouseX>=805 && mouseX<=840 && mouseY>=430 && mouseY<=440) { //bottom right
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

    }
    
}
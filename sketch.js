let inRoom1= false;
let inRoom2= true;
let inRoom3= false;

//room 1
let isMapPress= false;
let isDoorPress= false;
let isBoxPress= false;
let isBoxSolved= false;
let puzzleDone=false;
let keyTaken= false;
let isPlantClicked= false;
let backButton= false;
let morseCode;
let timesLeft=0;

//box puzzle
 let clicks1=0;
 let clicks2=0;
 let clicks3=0;
 let input=['A','B','C','D','E','F','G','H']

 //room 2
 let hotelArrow=false;
 let isSheepClicked=false;
 let isWaterClicked=false;
 let boardedDoor= false;
 let wrongDoor= false;
 let waterPress= false;
 let exitPress= false;
 let showAxe= false;
 let axeTaken= false;
 let playAgain= false;

function preload(){
    room1= loadImage('Images/hotel bedroom.jpg');
    paper= loadImage('Images/Morse code reference.jpg');
    map= loadImage('Images/edited map.jpg');
    puzzle= loadImage('Images/Box puzzle unsolved.jpg');
    finishPuzzle= loadImage('Images/Solved box.jpg');
    emptyBox= loadImage('Images/open box.jpg');

    room2= loadImage('Images/better hallway.jpg');
    axePhoto= loadImage('Images/axe on table.jpg');
    newZealandFlag= loadImage('Images/New zealand flag.png');
    glacier=loadImage('Images/Glacier.jpg');
    axeGone= loadImage('Images/table no axe.jpg');
    gameOver= loadImage('Images/wrong door.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#252B42');
    
    print(screen.width); //1536px
    print(screen.height); //864px

    morseCode= createAudio('images/Escape theme one.wav');
    //morseCode.loop();
    
    room1.loadPixels();
    paper.loadPixels();
    map.loadPixels();
    puzzle.loadPixels();
    finishPuzzle.loadPixels();
    room2.loadPixels();
    emptyBox.loadPixels();
    axePhoto.loadPixels();
    newZealandFlag.loadPixels();
    glacier.loadPixels();
    axeGone.loadPixels();
    gameOver.loadPixels();

    
}

function draw() {
    
    changeCursor();
    if(inRoom1==true){
        image(room1, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
        
        //rect(650,250,50,140); plant
        //rect(750,230,120,65); map
        //rect(485,260,35,15); box
        
        if(isPlantClicked==true){
            image(paper,(windowWidth/2)-100, (windowHeight/2)-125, 200, 250);
            arrow();
        }

        if(isBoxSolved==true){
            isBoxPress=false;
            
            image(finishPuzzle,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
           
         
        if(keyTaken==true){
            image(emptyBox,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
            }
        
        arrow();
        }

        if(isBoxPress==true){
            image(puzzle,(windowWidth/2)-250, (windowHeight/2)-200, 500, 400);
  
            fill('red');
            text(input[clicks1],(windowWidth/2)-48,(windowHeight/2)+43);
            text(input[clicks2],(windowWidth/2)+2,(windowHeight/2)+43);
            text(input[clicks3],(windowWidth/2)+52,(windowHeight/2)+43);

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
        }

    else if(inRoom2==true){
        image(room2, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
        textSize(16);
        fill('black');
        text('To Hotel Room',900,630);
        rm1Arrow();
        fill('red')
        rect((windowWidth/2)-1030, (windowHeight/2)-700,130,70)
        //rect((windowWidth/2)-1040, (windowHeight/2)-650, 75,300); boarded door
        //rect((windowWidth/2)-520, (windowHeight/2)-650, 100,300); axe door
        //rect((windowWidth/2)-620, (windowHeight/2)-620, 50,180); wrong door
        //rect((windowWidth/2)-790, (windowHeight/2)-650, 100,170); exit door

        if(showAxe==true){
            translate(-730,-500);
            image(axePhoto,(windowWidth/2)-50, (windowHeight/2)-200, 300, 250);
            arrow();
        }

        else if(wrongDoor==true){
            translate(-730,-500);
            image(gameOver,(windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
            
        }

    }
    
    if(playAgain==true){
        clicks1=0;
        clicks2=0;
        clicks3=0;
        inRoom1=true;
        isBoxSolved= false;
        puzzleDone=false;
        keyTaken= false;
        timesLeft=0;
        playAgain= false;
    }
  

    if(backButton==true){
        isPlantClicked=false;
        isMapPress= false;
        isBoxPress=false;
        isBoxSolved= false;

        boardedDoor= false;
        wrongDoor= false;
        waterPress= false;
        exitPress= false;
        showAxe= false;

        backButton=false;
    }
   
}

function mousePressed(){
  if(inRoom1){
        if(puzzleDone==false){
            if(mouseX>= (windowWidth/2)+207 && mouseX<=(windowWidth/2)+287 && mouseY>= (windowHeight/2)-130 && mouseY<=(windowHeight/2)+80){
                alert("Locked!");
             }
        }
         else if(puzzleDone==true){
            if(mouseX>= (windowWidth/2)+207 && mouseX<=(windowWidth/2)+287 && mouseY>= (windowHeight/2)-130 && mouseY<=(windowHeight/2)+80){
                inRoom1=false;
                inRoom2=true;
                
                timesLeft++;

                if(timesLeft==1){
                    alert("Oh God, what a mess!");
                }
               
            }
        }
        
        if(mouseX>=(windowWidth/2)-113 && mouseX<=(windowWidth/2)-63 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+10){
            alert("There's a piece of paper here");
            isPlantClicked= true;
        }

        else if(mouseX>=(windowWidth/2)-278 && mouseX<=(windowWidth/2)-243 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-105){
            isBoxPress= true;        
        }

        else if(mouseX>=(windowWidth/2)-10 && mouseX<=(windowWidth/2)+110 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)-85){
            isMapPress= true;
        }

        if(isBoxPress==true){
            if(mouseX>=(windowWidth/2)-56 && mouseX<=(windowWidth/2)-21 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+20){
                clicks1++;
                if(clicks1==input.length){
                    clicks1=0;
                }    
        } 
        else if(mouseX>=(windowWidth/2)-56 && mouseX<=(windowWidth/2)-21 && mouseY>=(windowHeight/2)+45 && mouseY<=(windowHeight/2)+55){
            clicks1--;
            if(clicks1<0){
                clicks1=7;
            }
        }

        if(mouseX>=(windowWidth/2)-8 && mouseX<=(windowWidth/2)+27 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+20){
            clicks2++;
            if(clicks2==input.length){
                clicks2=0;
            }    
        } 
        else if(mouseX>=(windowWidth/2)-8 && mouseX<=(windowWidth/2)+27 && mouseY>=(windowHeight/2)+45 && mouseY<=(windowHeight/2)+55){
                clicks2--;
                if(clicks2<0){
                    clicks2=7;
                }
            }

        if(mouseX>=(windowWidth/2)+42 && mouseX<=(windowWidth/2)+77 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+20){
                    clicks3++;
                    if(clicks3==input.length){
                        clicks3=0;
                    }    
                } 
        else if(mouseX>=(windowWidth/2)+42 && mouseX<=(windowWidth/2)+77 && mouseY>=(windowHeight/2)+45 && mouseY<=(windowHeight/2)+55){
                    clicks3--;
                    if(clicks3<0){
                        clicks3=7;
                    }
                } 
        }
        if(puzzleDone){
             //rect((windowWidth/2),(windowHeight/2)-10,80,50);
            if(mouseX>=(windowWidth/2) && mouseX<=(windowWidth/2)+80 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+40){
                keyTaken=true;
                alert("Great, let's see what's outside!");
            }
        }
}
       
else if(inRoom2){
    if((mouseX>=910 && mouseX<=986 && mouseY>=563 && mouseY<=582) ||(mouseX>=986 && mouseX<=1020 && mouseY>=536 && mouseY<=609)){
        inRoom1=true;
        inRoom2= false;
    }
    if(isSheepClicked==true){
      
        if(mouseX>=(windowWidth/2)+60 && mouseX<=(windowWidth/2)+140 && mouseY>=(windowHeight/2)-100 && mouseY<=(windowHeight/2)+120){
            image(newZealandFlag,(windowWidth/2)-350, (windowHeight/2)-275, 700, 550 )
        }
    }
         //rect((windowWidth/2)-1040, (windowHeight/2)-650, 75,300); boarded door
        //rect((windowWidth/2)-520, (windowHeight/2)-650, 100,300); axe door
        //rect((windowWidth/2)-620, (windowHeight/2)-620, 50,180); wrong door
        //rect((windowWidth/2)-790, (windowHeight/2)-650, 100,170); exit door

        //translate(730,500);
    if(mouseX>=(windowWidth/2)-310 && mouseX<=(windowWidth/2)-235 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+150){
        boardedDoor=true;
        if(axeTaken==false){
            alert("It's boarded up. We should find a way to open it");
        }

        else{
            inRoom3=true;
        }
    }

    else if(mouseX>=(windowWidth/2)+210 && mouseX<=(windowWidth/2)+310 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+150){
        showAxe= true;
    }

    else if(mouseX>=(windowWidth/2)+110 && mouseX<=(windowWidth/2)+160 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)+60){
        wrongDoor= true;
    }

    else if(wrongDoor==true){
        //rect((windowWidth/2)-320, (windowHeight/2)+150, 130, 70);
        if(mouseX>=(windowWidth/2)-320 && mouseX<=(windowWidth/2)-190 && mouseY>=(windowHeight/2)+150 && mouseY<=(windowHeight/2)+220){
            playAgain=true;
        }
    }

    else if(mouseX>=(windowWidth/2)-60 && mouseX<=(windowWidth/2)+40 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+20){
        exitPress= true;
        alert("Nope! Locked tight!");
    }
}
 
if((mouseX>=430 && mouseX<=464 && mouseY>=116 && mouseY<=189) ||(mouseX>=464 && mouseX<=540 && mouseY>=143 && mouseY<=162)){
    backButton=true;
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

function rm1Arrow(){
translate(730,500);
  fill('blue');
  beginShape();
    vertex(180, 63);
    vertex(256, 63);
    vertex(256, 36);
    vertex(290, 70);
    vertex(256, 109);
    vertex(256, 82);
    vertex(180, 82)
  endShape();
}

function changeCursor(){

    //(windowWidth/2)-350, (windowHeight/2)-275
    //413, 157
    //windowWidth:1526
    //windowHeight:864

    if(inRoom1){

       if(mouseX>= (windowWidth/2)+207 && mouseX<=(windowWidth/2)+287 && mouseY>= (windowHeight/2)-130 && mouseY<=(windowHeight/2)+80){
            cursor(HAND);
        }
            //rect(457,310,35,10); 
            //rect(505,310,35,10);
            //rect(555,310,35,10); 

            //rect(457,350,35,10);
            //rect(505,350,35,10);
            //rect(555,350,35,10);

        else if(mouseX>=(windowWidth/2)-8 && mouseX<=(windowWidth/2)+27 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+20//top center
            ||mouseX>=(windowWidth/2)-56 && mouseX<=(windowWidth/2)-21 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+20 //top left
            ||mouseX>=(windowWidth/2)+42 && mouseX<=(windowWidth/2)+77 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+20 //top right
    
            ||mouseX>=(windowWidth/2)-56 && mouseX<=(windowWidth/2)-21 && mouseY>=(windowHeight/2)+45 && mouseY<=(windowHeight/2)+55 //bottom left
            ||mouseX>=(windowWidth/2)-8 && mouseX<=(windowWidth/2)+27 && mouseY>=(windowHeight/2)+45 && mouseY<=(windowHeight/2)+55 //bottom center
            ||mouseX>=(windowWidth/2)+42 && mouseX<=(windowWidth/2)+77 && mouseY>=(windowHeight/2)+45 && mouseY<=(windowHeight/2)+55) { //bottom right
            cursor(HAND);
            }


        else if(mouseX>=(windowWidth/2)-113 && mouseX<=(windowWidth/2)-63 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+10){
            cursor(HAND);
        }
    
        else if(mouseX>=(windowWidth/2)-10 && mouseX<=(windowWidth/2)+110 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)-85){
            cursor(HAND);
        }
    
        else if(mouseX>=(windowWidth/2)-278 && mouseX<=(windowWidth/2)-243 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-105){
           cursor(HAND);
        }
    
        else{
            cursor(ARROW);
        }
    }

    else if(inRoom2){
        if((mouseX>=(windowWidth/2)+155 && mouseX<=(windowWidth/2)+300 && mouseY>= (windowHeight/2)+165 && mouseY<=(windowHeight/2)+185) ||(mouseX>=(windowWidth/2)+300 && mouseX<=(windowWidth/2)+380 && mouseY>=(windowHeight/2)+185 && mouseY<=(windowHeight/2)+230)){
            cursor(HAND);
        }
        /*if(mouseX>=(windowWidth/2)-278 && mouseX<=(windowWidth/2)-243 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-105){
            cursor(HAND);
        }*/

        else{
            cursor(ARROW);
        }
    }
    
}
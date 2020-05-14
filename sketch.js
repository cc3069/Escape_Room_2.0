let inRoom1= true;
let inRoom2= false;
let inRoom3= false;
let inRoom4=false;
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
let morseCodeisPlaying=false;
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
 let hallwayDone= false;
 let timesExitedHallway= 0;
 let playAgain= false;

 //room 3
 let boilerMessage= false;
 let vaultPress= false;
 let vaultOpen=false;
 let hallwayRoute= false;

 //room 4
let endTheme;
let congratulationisPlaying=false;

 //vault puzzle
 let letters1=0;
 let letters2=0;
 let letters3=0;
 let letters4=0;

 let firstSet=['A','B','C','D','E','F'];
 let secondSet=['G','H','I','J','K','L'];
 let thirdSet=['M','N','O','P','Q','R'];
 let lastSet= ['S','T','U','V','W','X','Y','Z'];

function preload(){
    room1= loadImage('Images/hotel bedroom.jpg');
    paper= loadImage('Images/Morse code reference.jpg');
    map= loadImage('Images/edited map.jpg');
    puzzle= loadImage('Images/Box puzzle unsolved.jpg');
    finishPuzzle= loadImage('Images/Solved box.jpg');
    emptyBox= loadImage('Images/open box.jpg');

    room2= loadImage('Images/better hallway.jpg');
    axePhoto= loadImage('Images/axe on table.jpg');
    newZealandClue= loadImage('Images/New zealand pic.jpg');
    greenlandClue= loadImage('Images/nametag clue.jpg');
    glacier=loadImage('Images/Glacier.jpg');
    axeGone= loadImage('Images/table no axe.jpg');
    gameOver= loadImage('Images/wrong door.jpg');
    solvedHallway= loadImage('Images/solved hallway.jpg');

    room3= loadImage('Images/creepy basement.jpg');
    boilerHint= loadImage('Images/boiler hint.jpg');
    vaultPuzzle= loadImage('Images/vault puzzle.jpg');

    congrats= loadImage('Images/YOU WIN.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#252B42');
    
    print(screen.width); //1536px
    print(screen.height); //864px

    fill('red')
    textSize(30)
    text('Open your ears and eyes...', 330, 50);
    text('And Make It Out Alive',700,50 );
    text('Click to Play!',1030,50 )
     
    room1.loadPixels();
    paper.loadPixels();
    map.loadPixels();
    puzzle.loadPixels();
    finishPuzzle.loadPixels();

    room2.loadPixels();
    emptyBox.loadPixels();
    axePhoto.loadPixels();
    newZealandClue.loadPixels();
    greenlandClue.loadPixels();
    glacier.loadPixels();
    axeGone.loadPixels();
    gameOver.loadPixels();
    solvedHallway.loadPixels();

    room3.loadPixels();
    boilerHint.loadPixels();
    vaultPuzzle.loadPixels();
    
    morseCode= createAudio('Images/Escape theme one.wav');
    endTheme= createAudio('Images/bensound-ukulele.mp3');
    congrats.loadPixels();
      
}

function draw() {
    if(inRoom1==true){
        image(room1, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
        changeCursor1();
        
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
            textSize(20)
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
    

    else if(inRoom2){
        //rect((windowWidth/2)-1040, (windowHeight/2)-650, 75,300); boarded door
        //rect((windowWidth/2)-520, (windowHeight/2)-650, 100,300); axe door
        //rect((windowWidth/2)-620, (windowHeight/2)-620, 50,180); wrong door
        //rect((windowWidth/2)-790, (windowHeight/2)-650, 100,170); exit door
        //rect((windowWidth/2)-200, (windowHeight/2)-110, 40, 60); sheep poster
        //rect((windowWidth/2)-100, (windowHeight/2)+50, 60, 40); water location

        changeCursor2();
        if(hallwayDone==true){
            image(solvedHallway, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
            textSize(16);
            fill('black');
            text('To Hotel Room',900,630);
            rm1Arrow();
        }

        else{
            image(room2, (windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
            textSize(16);
            fill('black');
            text('To Hotel Room',900,630);
            rm1Arrow();
        }
        
         if(showAxe==true){
            image(axePhoto,(windowWidth/2)+40, (windowHeight/2)-100, 300, 250);
            if(axeTaken==true){
                image(axeGone,(windowWidth/2)+40, (windowHeight/2)-100, 300, 250);
            }
            arrow();
        }

        else if(wrongDoor==true){
            image(gameOver,(windowWidth/2)-350, (windowHeight/2)-275, 700, 550);

            if(playAgain==true){
                replay();
             }
        }

        else if(isSheepClicked==true){
                image(newZealandClue,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
                arrow();
            }

        else if(isWaterClicked==true){
            image(greenlandClue,(windowWidth/2)-225, (windowHeight/2)-125, 450, 250);
            arrow();
        }

        
    }

    else if (inRoom3){
        changeCursor3();
        image(room3,(windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
        if(boilerMessage==true){
            image(boilerHint,(windowWidth/2)-110, (windowHeight/2)-100, 200, 250);
            arrow();
        }

        if(vaultPress==true){
            image(vaultPuzzle,(windowWidth/2)-150, (windowHeight/2)-140, 500, 400);

            //rect((windowWidth/2)-45, (windowHeight/2)-120, 40, 60); vault arrow coordinates
            //rect((windowWidth/2)-45, (windowHeight/2)-25, 40, 60);
            //rect((windowWidth/2)-45, (windowHeight/2)+70, 40, 60);
            //rect((windowWidth/2)-45, (windowHeight/2)+170, 40, 60);

            //rect((windowWidth/2)+200, (windowHeight/2)-120, 40, 60);
            //rect((windowWidth/2)+200, (windowHeight/2)-25, 40, 60);
            //rect((windowWidth/2)+200, (windowHeight/2)+70, 40, 60);
            //rect((windowWidth/2)+200, (windowHeight/2)+170, 40, 60);

            fill('red');
            textSize(50);
            text(firstSet[letters1],(windowWidth/2)+80,(windowHeight/2)-70);
            text(secondSet[letters2],(windowWidth/2)+80,(windowHeight/2)+20);
            text(thirdSet[letters3],(windowWidth/2)+80,(windowHeight/2)+120);
            text(lastSet[letters4],(windowWidth/2)+80,(windowHeight/2)+220);

            arrow();
            
            if(letters1==0 && letters2==0 && letters3==1 && letters4==7){
                vaultOpen= true;
                translate(-250,-80);
                image(congrats,(windowWidth/2)-350, (windowHeight/2)-275, 700, 550);
                
                buttonEndGame = createButton('Finished?');
                buttonEndGame.position(1200, 550);
                buttonEndGame.size(200,100);
                buttonEndGame.style("font-family", "Bodoni");
                buttonEndGame.style("font-size", "30px");
                buttonEndGame.style("color","#FC7651");
                buttonEndGame.style("background-color","#FFDB60");
                buttonEndGame.mousePressed(changePG);

                buttonEndGame = createButton('Play Again!');
                buttonEndGame.position(50, 400);
                buttonEndGame.size(200,100);
                buttonEndGame.style("font-family", "Bodoni");
                buttonEndGame.style("font-size", "30px");
                buttonEndGame.style("color","#FC7651");
                buttonEndGame.style("background-color","#FFDB60");
                buttonEndGame.mousePressed(replay);

                
                
        }
                
        }
    }
    
    if(backButton==true){
        back();
    }
}

function changePG(){
    endingPage();
}

function boxPuzzle(){
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

function bedroom(){
        if(puzzleDone==false){
            if(mouseX>= (windowWidth/2)+207 && mouseX<=(windowWidth/2)+287 && mouseY>= (windowHeight/2)-130 && mouseY<=(windowHeight/2)+80){
                alert("Locked!");
             }
        }
         else if(puzzleDone==true){
            if(mouseX>= (windowWidth/2)+207 && mouseX<=(windowWidth/2)+287 && mouseY>= (windowHeight/2)-130 && mouseY<=(windowHeight/2)+80){
                inRoom1=false;
                inRoom3= false;
                inRoom2=true;
                timesLeft++;
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
            boxPuzzle();
        }
        if(puzzleDone){
             //rect((windowWidth/2),(windowHeight/2)-10,80,50);
            if(mouseX>=(windowWidth/2) && mouseX<=(windowWidth/2)+80 && mouseY>=(windowHeight/2)-10 && mouseY<=(windowHeight/2)+40){
                keyTaken=true;
                alert("Great, let's see what's outside!");
            }
        }
}

function hallway(){
        if((mouseX>=910 && mouseX<=986 && mouseY>=563 && mouseY<=582) ||(mouseX>=986 && mouseX<=1020 && mouseY>=536 && mouseY<=609)){
            inRoom1=true;
            inRoom2= false;
        }
        
        if(mouseX>=(windowWidth/2)-310 && mouseX<=(windowWidth/2)-235 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+150){
            boardedDoor=true;
            if(axeTaken==false){
                alert("It's boarded up. We should find a way to open it");
            }
    
            else if(axeTaken==true){
                hallwayDone= true;
                timesExitedHallway++;
                if(timesExitedHallway>1){
                    inRoom2= false;
                    inRoom3=true;
                }
            }
        }
    
        else if(mouseX>=(windowWidth/2)+210 && mouseX<=(windowWidth/2)+310 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+150){
            showAxe= true;
        }
    
        else if(showAxe==true){
            if(mouseX>=(windowWidth/2)+120 && mouseX<=(windowWidth/2)+220 && mouseY>=(windowHeight/2)-20 && mouseY<=(windowHeight/2)+10){
                axeTaken= true;
            }
        }
    
        if(mouseX>=(windowWidth/2)+110 && mouseX<=(windowWidth/2)+160 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)+60){
            wrongDoor= true;
        }
    
        if(wrongDoor==true){
            //rect((windowWidth/2)-320, (windowHeight/2)+150, 130, 70);
            if(mouseX>=(windowWidth/2)-320 && mouseX<=(windowWidth/2)-190 && mouseY>=(windowHeight/2)+150 && mouseY<=(windowHeight/2)+220){
                playAgain=true;
            }
        }
    
        if(mouseX>=(windowWidth/2)-60 && mouseX<=(windowWidth/2)+40 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+20){
            exitPress= true;
            alert("Nope! Locked tight!");
        }
        //rect((windowWidth/2)-200, (windowHeight/2)-110, 40, 60);
        else if(mouseX>=(windowWidth/2)-200 && mouseX<=(windowWidth/2)-160 && mouseY>=(windowHeight/2)-110 && mouseY<=(windowHeight/2)-50){
            isSheepClicked= true; 
        }
        //rect((windowWidth/2)-100, (windowHeight/2)+50, 60, 40);
        else if(mouseX>=(windowWidth/2)-100 && mouseX<=(windowWidth/2)-40 && mouseY>=(windowHeight/2)+50 && mouseY<=(windowHeight/2)+90){
            isWaterClicked= true;
        }
}

function basement(){
        //rect((windowWidth/2)-150, (windowHeight/2)-210, 150,95);
        if(mouseX>=(windowWidth/2)-150 && mouseX<=(windowWidth/2) && mouseY>=(windowHeight/2)-210 && mouseY<=(windowHeight/2)-115){
            inRoom2=true;
            inRoom1= false;
            inRoom3=false;
            inRoom4=false;
        }
   //rect((windowWidth/2)-220, (windowHeight/2)+40, 50,60);
        else if(mouseX>=(windowWidth/2)-220 && mouseX<=(windowWidth/2)-170 && mouseY>=(windowHeight/2)+40 && mouseY<=(windowHeight/2)+100){
            boilerMessage=true;
        }

        else if(mouseX>=(windowWidth/2)-150 && mouseX<=(windowWidth/2)+275 && mouseY>=(windowHeight/2)-90 && mouseY<=(windowHeight/2)+110){
            vaultPress=true;
        }
   }

   function vault(){
    if(mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-60){
        letters1++;
        if(letters1==firstSet.length){
            letters1=0;
        }    
    } 
    else if(mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-60){
        letters1--;
        if(letters1<0){
            letters1=5;
        }
    }

    if(mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)-25 && mouseY<=(windowHeight/2)+35){
        letters2++;
        if(letters2==secondSet.length){
            letters2=0;
        }    
    } 
    else if(mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)-25 && mouseY<=(windowHeight/2)+35){
        letters2--;
        if(letters2<0){
            letters2=5;
        }
    }

    if(mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)+70 && mouseY<=(windowHeight/2)+130){
            letters3++;
            if(letters3==thirdSet.length){
                letters3=0;
            }    
        } 
        
    else if(mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)+70 && mouseY<=(windowHeight/2)+130){
            letters3--;
            if(letters3<0){
                letters3=5;
            }
        } 
    
    if(mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)+170 && mouseY<=(windowHeight/2)+230){
            letters4++;
            if(letters4==lastSet.length){
                letters4=0;
            }    
        } 
    
        else if(mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)+170 && mouseY<=(windowHeight/2)+230){
            letters4--;
            if(letters4<0){
                letters4=7;
            }
        } 
   }

 function endingPage(){
    background("#209b85");
    fill('#ffbd59')
    text("Yay! How does it feel to escape the room?", (windowWidth/2)-400, (windowHeight/2)-300)
    buttonPlayMusic = createButton('Congratulations!');
    buttonPlayMusic.position(50, 550);
    buttonPlayMusic.size(200,100);
    buttonPlayMusic.style("font-family", "Bodoni");
    buttonPlayMusic.style("font-size", "30px");
    buttonPlayMusic.style("color","#FC7651");
    buttonPlayMusic.style("background-color","#FFDB60");
    buttonPlayMusic.mousePressed(endMusic);
    
 } 

 function endMusic() {
    endTheme.play();
 }

function mousePressed(){
    if(inRoom1){
        bedroom();
    }
    
    else if(inRoom2){
        hallway();
    }

    else if(inRoom3){
        basement();
        if(vaultPress){
            vault();
        }
    }
    else if(inRoom4){
        endingPage();
    }


    if((mouseX>=430 && mouseX<=464 && mouseY>=116 && mouseY<=189) ||(mouseX>=464 && mouseX<=540 && mouseY>=143 && mouseY<=162)){
        backButton=true;
    }

    if(mouseX >= 0 && mouseX <= width && mouseY >=0 && mouseY <= (windowHeight/2)-275
    ||mouseX >= 0 && mouseX <= width && mouseY >= (windowHeight/2)+275 && mouseY <= height){
        audio();

    }
}

function audio(){
    background('#252B42')
        if(morseCodeisPlaying){
            morseCode.stop();
            morseCodeisPlaying=false;
            fill('red')
            textSize(30);
            text('Play Music!', 300, 700)
        } else{
            morseCode.loop();
            morseCodeisPlaying=true;
            fill('red')
            text('Make It Stop!!',950, 700)
        }
}
    
   
function replay(){
    clicks1=0;
    clicks2=0;
    clicks3=0;
    inRoom1=true;
    isBoxSolved= false;
    puzzleDone=false;
    keyTaken= false;
    timesLeft=0;

    timesExitedHallway=0;
    axeTaken= false;
    hallwayDone= false;
    playAgain= false;

    vaultOpen=false;
    letters1= 0;
    letters2=0;
    letters3=0;
    letters4=0;
}

function back(){
    isPlantClicked=false;
    isMapPress= false;
    isBoxPress=false;
    isBoxSolved= false;

    boardedDoor= false;
    wrongDoor= false;
    isWaterClicked= false;
    isSheepClicked=false;
    exitPress= false;
    showAxe= false;

    boilerMessage= false;
    vaultPress=false;

    backButton=false;
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

  translate(-730,-500);
}

function changeCursor1(){

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
    
function changeCursor2(){    
    if((mouseX>=910 && mouseX<=986 && mouseY>=563 && mouseY<=582) ||(mouseX>=986 && mouseX<=1020 && mouseY>=536 && mouseY<=609)){
        cursor(HAND);
    }
    
    else if(mouseX>=(windowWidth/2)-310 && mouseX<=(windowWidth/2)-235 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+150){
        cursor(HAND);
    }

    else if(mouseX>=(windowWidth/2)+210 && mouseX<=(windowWidth/2)+310 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+150){
        cursor(HAND);
    }

    else if(mouseX>=(windowWidth/2)+120 && mouseX<=(windowWidth/2)+220 && mouseY>=(windowHeight/2)-20 && mouseY<=(windowHeight/2)+10){
            cursor(HAND);
        }

    else if(mouseX>=(windowWidth/2)+110 && mouseX<=(windowWidth/2)+160 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)+60){
        cursor(HAND);
    }

    
    else if(mouseX>=(windowWidth/2)-320 && mouseX<=(windowWidth/2)-190 && mouseY>=(windowHeight/2)+150 && mouseY<=(windowHeight/2)+220){
            cursor(HAND);
        }
    

    else if(mouseX>=(windowWidth/2)-60 && mouseX<=(windowWidth/2)+40 && mouseY>=(windowHeight/2)-150 && mouseY<=(windowHeight/2)+20){
        cursor(HAND);
    }

    else if(mouseX>=(windowWidth/2)-278 && mouseX<=(windowWidth/2)-243 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-105){
        cursor(HAND);
    }

    else if((mouseX>=(windowWidth/2)+155 && mouseX<=(windowWidth/2)+300 && mouseY>= (windowHeight/2)+165 && mouseY<=(windowHeight/2)+185) ||(mouseX>=(windowWidth/2)+300 && mouseX<=(windowWidth/2)+380 && mouseY>=(windowHeight/2)+185 && mouseY<=(windowHeight/2)+230)){
            cursor(HAND);
        }

    else if(mouseX>=(windowWidth/2)-200 && mouseX<=(windowWidth/2)-160 && mouseY>=(windowHeight/2)-110 && mouseY<=(windowHeight/2)-50){
            cursor(HAND);
        }

    else if(mouseX>=(windowWidth/2)-100 && mouseX<=(windowWidth/2)-40 && mouseY>=(windowHeight/2)+50 && mouseY<=(windowHeight/2)+90){
            cursor(HAND);
        }

        else{
            cursor(ARROW);
        }
}

function changeCursor3(){
    if(mouseX>=(windowWidth/2)-150 && mouseX<=(windowWidth/2) && mouseY>=(windowHeight/2)-210 && mouseY<=(windowHeight/2)-115){
        cursor(HAND);
    }
//rect((windowWidth/2)-220, (windowHeight/2)+40, 50,60);
    else if(mouseX>=(windowWidth/2)-220 && mouseX<=(windowWidth/2)-170 && mouseY>=(windowHeight/2)+40 && mouseY<=(windowHeight/2)+100){
        cursor(HAND);
    }

    else if(mouseX>=(windowWidth/2)+125 && mouseX<=(windowWidth/2)+275 && mouseY>=(windowHeight/2)-90 && mouseY<=(windowHeight/2)+110){
        cursor(HAND);
    }

    else if(mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-60//right top
    ||mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)-25 && mouseY<=(windowHeight/2)+35 //right second
    ||mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)+70 && mouseY<=(windowHeight/2)+130 //right third
    ||mouseX>=(windowWidth/2)+200 && mouseX<=(windowWidth/2)+240 && mouseY>=(windowHeight/2)+170 && mouseY<=(windowHeight/2)+230 //right bottom

    ||mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)-120 && mouseY<=(windowHeight/2)-60 //left top
    ||mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)-25 && mouseY<=(windowHeight/2)+35 //left second
    ||mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)+70 && mouseY<=(windowHeight/2)+130 //left third
    ||mouseX>=(windowWidth/2)-45 && mouseX<=(windowWidth/2)-5 && mouseY>=(windowHeight/2)+170 && mouseY<=(windowHeight/2)+230) { //left bottom 
        cursor(HAND);
    }

    else{
        cursor(ARROW);
    }
}




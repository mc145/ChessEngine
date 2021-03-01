let wpawn,bpawn,wknight,bknight,wbishop,bbishop,wqueen,bqueen,wking,bking,wrook,brook; 
function preload(){
    wpawn = loadImage('Assets/whitepawn.png'); 
    bpawn = loadImage('Assets/blackpawn.png'); 
    wknight = loadImage('Assets/whiteknight.png'); 
    bknight = loadImage('Assets/blacknight.png'); 
    wbishop = loadImage('Assets/whitebishop.png'); 
    bbishop = loadImage('Assets/blackbishop.png'); 
    wqueen = loadImage('Assets/whitequeen.png'); 
    bqueen = loadImage('Assets/blackqueen.png'); 
    wking = loadImage('Assets/whiteking.png'); 
    bking = loadImage('Assets/blackking.png'); 
    wrook = loadImage('Assets/whiterook.png'); 
    brook = loadImage('Assets/blackrook.png'); 

}

function setup(){
    createCanvas(800,800); 

    background(255);
    stroke(105);
    rect(0,0,800,800);
    
    
    boardSquares(); 
    boardLines();

    
}

 
function draw(){ 
    updateBoard(0,0,0,0);  

}



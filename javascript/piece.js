let currentBoard = []; 

currentBoard.push([1,6,0,0,0,0,-6,-1]); 
currentBoard.push([2,6,0,0,0,0,-6,-2]); 
currentBoard.push([3,6,0,0,0,0,-6,-3]); 
currentBoard.push([4,6,0,0,0,0,-6,-4]); 
currentBoard.push([5,6,0,0,0,0,-6,-5]); 
currentBoard.push([3,6,0,0,0,0,-6,-3]); 
currentBoard.push([2,6,0,0,0,0,-6,-2]); 
currentBoard.push([1,6,0,0,0,0,-6,-1]); 



function updateBoard(xStart, yStart, xEnd, yEnd){

    
   // yStart = [xStart, xStart = yStart][0];
   // yEnd = [xEnd, xEnd = yEnd][0];

    if((xStart != xEnd) || (yStart != yEnd)){
   let piece = currentBoard[xStart][yStart];
    console.log("PIECE", piece);

    let possibleMoves = legalMoves(piece,xStart,yStart); 
    if(piece == 3){
        console.log(possibleMoves); 
    }
    let moveLegal = false; 

    for(let i = 0; i<possibleMoves.length; i++){
        if((possibleMoves[i][0] == xEnd) && (possibleMoves[i][1] == yEnd)){
            moveLegal = true; 
        }
    }

    if(!moveLegal){
        return 0; 
    }



    currentBoard[xStart][yStart] = 0; 
    

    if(currentBoard[xEnd][yEnd] != 0){
        fillSquare(xEnd, yEnd); 
    }
    currentBoard[xEnd][yEnd] = piece; 


    RedrawBoard(); 
    fillSquare(xStart, yStart); 
    
} 
    

}

function fillSquare(x, y){
    boardWidth = 100;
    noStroke(); 
    console.log("X Y", x, y); 
    if((x + y) % 2 == 1){
        console.log("HERE");
        fill(255); 
        rect(100*x, 100*(7 -y), boardWidth, boardWidth); 

    }
    else{
        fill(47,79,40); 
        rect(100*x, 100*(7 -y), boardWidth, boardWidth); 

    }
}


function RedrawBoard(){
    for(let x = 0; x<8; x++){
        for(let y = 0; y<8; y++){
                if(currentBoard[x][y] != 0){
                    
                image(whichPiece(currentBoard[x][y]), 100*x + 5, 100 * (7-y) + 5, 85,85);
                }
        }
    }
}
function whichPiece(piece){
    if(piece == 1){
        return wrook; 
    }
    else if(piece == 2){
        return wknight;
    }
    else if(piece == 3){
        return wbishop;
    }
    else if(piece == 4){
        return wqueen;
    }
    else if(piece == 5){
        return wking;
    }
    else if(piece == 6){
        return wpawn;
    }
    else if(piece == -1){
        return brook;
    }
    else if(piece == -2){
        return bknight;
    }
    else if(piece == -3){
        return bbishop;
    }
    else if(piece == -4){
        return bqueen;
    }
    else if(piece == -5){
        return bking; 
    }
    else if(piece == -6){
        return bpawn; 
    }
}


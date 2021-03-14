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


   if(whitesMove && piece < 0){
       console.log("NOT YOUR TURN"); 
       return 0; 
   }
   if(!whitesMove && piece > 0){
       console.log("NOT YOUR TURN");
       return 0;  
   }

 

    console.log("PIECE", piece, whitesMove);
  

    if((xStart == 4) && (yStart == 0) && (xEnd == 6) && (yEnd == 0)){
        if(castleKing){
            currentBoard[6][0] = 5; 
            currentBoard[5][0] = 1; 
            currentBoard[7][0] = 0; 
            currentBoard[4][0] = 0; 
            RedrawBoard(); 
            fillSquare(4,0); 
            fillSquare(7,0); 
            whitesMove = false; 
            return 0;
        }
    }
    if((xStart == 4) && (yStart == 0) && (xEnd == 2) && (yEnd == 0)){
        if(castleQueen){
            currentBoard[3][0] = 1; 
            currentBoard[2][0] = 5; 
            currentBoard[4][0] = 0; 
            currentBoard[0][0] = 0; 
            RedrawBoard(); 
            fillSquare(0,0); 
            fillSquare(4,0); 
            whitesMove = false; 
            return 0; 
        }
    }

    if((xStart == 4) && (yStart == 7) && (xEnd == 6) && (yEnd == 7)){
        if(blackCastleKing){
            currentBoard[6][7] = -5; 
            currentBoard[5][7] = -1; 
            currentBoard[7][7] = 0; 
            currentBoard[4][7] = 0; 
            RedrawBoard(); 
            fillSquare(4,7); 
            fillSquare(7,7); 
            whitesMove = true; 
            return 0; 
        }
    }
    if((xStart == 4) && (yStart == 7) && (xEnd == 2) && (yEnd == 7)){
        if(blackCastleQueen){
            currentBoard[3][7] = -1; 
            currentBoard[2][7] = -5; 
            currentBoard[4][7] = 0; 
            currentBoard[0][7] = -0; 
            RedrawBoard(); 
            fillSquare(0,7); 
            fillSquare(4,7); 
            whitesMove = true; 
            return 0; 
        }
    }

    let possibleMoves = legalMoves(piece,xStart,yStart); 
 
    let moveLegal = false; 

    for(let i = 0; i<possibleMoves.length; i++){
        if((possibleMoves[i][0] == xEnd) && (possibleMoves[i][1] == yEnd)){
            moveLegal = true; 
        }
    }



    if(!moveLegal){
        return 0; 
    }


    if(whitesMove){
        whitesMove = false; 
    }
    else if(!whitesMove){
        whitesMove = true; 
    }

    currentBoard[xStart][yStart] = 0; 
    

    if(currentBoard[xEnd][yEnd] != 0){
        fillSquare(xEnd, yEnd); 
    }
    currentBoard[xEnd][yEnd] = piece; 

    if((currentBoard[4][0] != 5)){
        kingMoved = true; 
    }
    if(currentBoard[0][0] != 1){
        queenRookMoved = true; 
    }
    if(currentBoard[7][0] != 1){
        kingRookMoved = true; 
    }

    if(!kingMoved && !queenRookMoved && (currentBoard[3][0] == 0) && (currentBoard[2][0] == 0) && (currentBoard[1][0] == 0)){
        castleQueen = true; 
    }
    if(!kingMoved && !kingRookMoved && (currentBoard[5][0] == 0) && (currentBoard[6][0] == 0)){
        castleKing = true; 
    }

    if(kingMoved || queenRookMoved){
        castleQueen = false; 
    }
    if(kingMoved || kingRookMoved){
        castleKing = false; 
    }

    if(currentBoard[4][7] != -5){
        blackKingMoved = true; 
    }
    if(currentBoard[0][7] != -1){
        blackQueenRookMoved = true; 
    }
    if(currentBoard[7][7] != -1){
        blackKingRookMoved = true; 
    }
    if(!blackKingMoved && !blackQueenRookMoved && (currentBoard[3][7] == 0) && (currentBoard[2][7] == 0) && (currentBoard[1][7] == 0)){
        blackCastleQueen = true; 
    }
    if(!blackKingMoved && !blackKingRookMoved && (currentBoard[5][7] == 0) && (currentBoard[6][7] == 0)){
        blackCastleKing = true; 
    }
    if(blackKingMoved || blackQueenRookMoved){
        castleQueen = false; 
    }
    if(blackKingMoved || blackKingRookMoved){
        blackCastleKing = false; 
    }

    RedrawBoard(); 
    fillSquare(xStart, yStart); 
    
} 
    

}

function fillSquare(x, y){
    boardWidth = 100;
    noStroke(); 
    if((x + y) % 2 == 1){
        fill(241,222,182); 
        rect(100*x, 100*(7 -y), boardWidth, boardWidth); 

    }
    else{
        //fill(177,177,177); 
        
        fill(187,137,100); 

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


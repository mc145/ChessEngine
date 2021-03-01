let currentBoard = []; 

currentBoard.push([1,2,3,4,5,3,2,1]); 
currentBoard.push([6,6,6,6,6,6,6,6]); 
currentBoard.push([0,0,0,0,0,0,0,0]); 
currentBoard.push([0,0,0,0,0,0,0,0]); 
currentBoard.push([0,0,0,0,0,0,0,0]); 
currentBoard.push([0,0,0,0,0,0,0,0]); 
currentBoard.push([-6,-6,-6,-6,-6,-6,-6,-6]); 
currentBoard.push([-1,-2,-3,-4,-5,-3,-2,-1]); 



function updateBoard(xStart, yStart, xEnd, yEnd){

    
    yStart = [xStart, xStart = yStart][0];
    yEnd = [xEnd, xEnd = yEnd][0];


    let piece = currentBoard[xStart][yStart]; 
    currentBoard[xStart][yStart] = 0; 
    currentBoard[xEnd][yEnd] = piece; 
    
    console.log(piece);

    for(let x = 0; x<8; x++){
        for(let y = 0; y<8; y++){
                if(currentBoard[x][y] != 0){
                image(whichPiece(currentBoard[x][y]), 100*y + 5, 100 * (7-x) + 5, 85,85);
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


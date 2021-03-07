let moves = []; 
function legalMoves(piece, x, y){
    moves = []; 
    if(piece == 6){
        pawnMoves(x, y); 
    }
    else if(piece == 2){
        knightMoves(x,y);
    }
    else if(piece == 3){
        bishopMoves(x,y); 
    }

    return moves; 
}

function pawnMoves(x, y){

    if(y != 7){
        if((x != 7) && (currentBoard[x+1][y+1] != 0)){
            moves.push([x+1,y+1]); 
        }
        if((x != 0) && (currentBoard[x-1][y+1] != 0)){
            moves.push([x-1, y+1]); 
        } 

        if(currentBoard[x][y+1] == 0){
            moves.push([x,y+1]);
        }   

        if(y == 1){
            if(currentBoard[x][y+2] == 0){
                moves.push([x, y+2]); 
            }
        }
    } 
}


function knightMoves(x,y){
    // x - 2, y + 1
    if((x > 1) && (y <= 6) && (currentBoard[x-2][y+1] <= 0)){
        moves.push([x-2, y+1]); 
    }
    // x -2  y - 1
    if((x > 1) && (y >= 1) && (currentBoard[x-2][y-1] <= 0)){
        moves.push([x-2, y-1]); 
    }
    // x - 1 , y + 2
    if((x != 0) && (y < 6) && (currentBoard[x-1][y+2] <= 0)){
        moves.push([x-1, y+2]); 
    }
    // x + 1, y + 2
    if((x != 7) && (y < 6) && (currentBoard[x+1][y+2] <= 0)){
        moves.push([x+1, y+2]); 
    }
    //x + 2, y + 1
    if((x < 6) && (y <= 6) && (currentBoard[x+2][y+1] <= 0)){
        moves.push([x+2,y+1]); 
    }
    // x+2, y-1
    if((x < 6) && (y >= 1) && (currentBoard[x+2][y-1] <= 0)){
        moves.push([x+2, y-1]); 
    }
    // x + 1, y - 2
    if((x != 7) && (y > 1) && (currentBoard[x+1][y-2] <= 0)){
        moves.push([x+1, y-2]); 
    }
    //x-1, y-2
    if((x != 0) && (y > 1) && (currentBoard[x-1][y-2] <= 0)){
        moves.push([x-1, y-2]); 
    }


}


function bishopMoves(x,y){
    let curX = x
    let curY = y 

    while((curX + 1<=7) && (curY +1 <=7)&& (currentBoard[curX+1][curY+1] <= 0)){
        curX++; 
        curY++; 
        moves.push([curX, curY]); 
       
    }

    curX = x
    curY = y

    while((curX - 1 >= 0) && (curY + 1 <=7) && (currentBoard[curX-1][curY+1] <= 0)){
        curX--; 
        curY++; 
        moves.push([curX, curY]); 
       
    }

    curX = x; 
    curY = y; 
    while((curX - 1 >= 0) && (curY -1 >= 0) && (currentBoard[curX-1][curY-1] <= 0)){
        curX--; 
        curY--; 
        moves.push([curX, curY]); 
       
    }

    curX = x;
    curY = y; 
    while( (curX + 1 <= 7) && (curY -1 >= 0) && (currentBoard[curX+1][curY-1] <= 0)){
        curX++; 
        curY--; 
        moves.push([curX, curY]); 
        
    }
}
let moves = []; 
function legalMoves(piece, x, y){
    moves = []; 
    if((piece == 6)){
        WhitePawnMoves(x, y); 
    }
    else if(piece == -6){
        BlackPawnMoves(x,y); 
    }
    else if(piece == 2){
        WhiteKnightMoves(x,y); 
    }
    else if(piece == -2){
        BlackKnightMoves(x,y); 
    }
    else if(piece == 3){
        WhiteBishopMoves(x,y); 
    }
    else if(piece == -3){
        BlackBishopMoves(x,y); 
    }
    else if(piece == 1){
        WhiteRookMoves(x,y); 
    }
    else if(piece == -1){
        BlackRookMoves(x,y); 
    }
    else if(piece == 4){
        WhiteQueenMoves(x,y); 
    }
    else if(piece == -4){
        BlackQueenMoves(x,y); 
    }
    else if(piece == 5){
        WhiteKingMoves(x,y); 
    }

    return moves; 
}

function BlackPawnMoves(x,y){
    if(y != 0){
        if((x != 0) && (currentBoard[x-1][y-1] > 0)){
            moves.push([x-1,y-1]); 
        }
        if((x != 7) && (currentBoard[x+1][y-1] > 0)){
            moves.push([x+1, y-1]); 
        } 

        if(currentBoard[x][y-1] == 0){
            moves.push([x,y-1]);
        }   

        if(y == 6){
            if(currentBoard[x][y-2] == 0){
                moves.push([x, y-2]); 
            }
        }
    }
}

function WhitePawnMoves(x, y){

    if(y != 7){
        if((x != 7) && (currentBoard[x+1][y+1] < 0)){
            moves.push([x+1,y+1]); 
        }
        if((x != 0) && (currentBoard[x-1][y+1] < 0)){
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


function WhiteKnightMoves(x,y){
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



function BlackKnightMoves(x,y){
    // x - 2, y + 1
    if((x > 1) && (y <= 6) && (currentBoard[x-2][y+1] >= 0)){
        moves.push([x-2, y+1]); 
    }
    // x -2  y - 1
    if((x > 1) && (y >= 1) && (currentBoard[x-2][y-1] >= 0)){
        moves.push([x-2, y-1]); 
    }
    // x - 1 , y + 2
    if((x != 0) && (y < 6) && (currentBoard[x-1][y+2] >= 0)){
        moves.push([x-1, y+2]); 
    }
    // x + 1, y + 2
    if((x != 7) && (y < 6) && (currentBoard[x+1][y+2] >= 0)){
        moves.push([x+1, y+2]); 
    }
    //x + 2, y + 1
    if((x < 6) && (y <= 6) && (currentBoard[x+2][y+1] >= 0)){
        moves.push([x+2,y+1]); 
    }
    // x+2, y-1
    if((x < 6) && (y >= 1) && (currentBoard[x+2][y-1] >= 0)){
        moves.push([x+2, y-1]); 
    }
    // x + 1, y - 2
    if((x != 7) && (y > 1) && (currentBoard[x+1][y-2] >= 0)){
        moves.push([x+1, y-2]); 
    }
    //x-1, y-2
    if((x != 0) && (y > 1) && (currentBoard[x-1][y-2] >= 0)){
        moves.push([x-1, y-2]); 
    }


}


function WhiteBishopMoves(x,y){
    let curX = x
    let curY = y 
    let hit = false; 

    while((curX + 1<=7) && (curY +1 <=7)&& (currentBoard[curX+1][curY+1] <= 0)){
        curX++; 
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }

       
    }

    curX = x
    curY = y

    hit = false; 

    while((curX - 1 >= 0) && (curY + 1 <=7) && (currentBoard[curX-1][curY+1] <= 0)){
        curX--; 
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    hit = false; 
    curX = x; 
    curY = y; 
    while((curX - 1 >= 0) && (curY -1 >= 0) && (currentBoard[curX-1][curY-1] <= 0)){
        curX--; 
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    hit = false; 
    curX = x;
    curY = y; 
    while( (curX + 1 <= 7) && (curY -1 >= 0) && (currentBoard[curX+1][curY-1] <= 0)){
        curX++; 
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
        
    }
} 


function BlackBishopMoves(x,y){
    let curX = x
    let curY = y 

    let hit = false; 

    while((curX + 1<=7) && (curY +1 <=7)&& (currentBoard[curX+1][curY+1] >= 0)){
        curX++; 
        curY++; 
        moves.push([curX, curY]); 

        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }

       
       
    }

    curX = x
    curY = y

    hit = false; 

    while((curX - 1 >= 0) && (curY + 1 <=7) && (currentBoard[curX-1][curY+1] >= 0)){
        curX--; 
        curY++; 
        moves.push([curX, curY]); 

        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }

       
       
    }

    curX = x; 
    curY = y; 

    hit = false; 

    while((curX - 1 >= 0) && (curY -1 >= 0) && (currentBoard[curX-1][curY-1] >= 0)){
        curX--; 
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }

       
       
    }

    curX = x;
    curY = y; 

    hit = false; 

    while( (curX + 1 <= 7) && (curY -1 >= 0) && (currentBoard[curX+1][curY-1] >= 0)){
        curX++; 
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }

       
        
    }
}


function WhiteRookMoves(x,y){
    let curX = x
    let curY = y 

    let hit = false; 

    while((curX + 1<=7) &&(currentBoard[curX+1][curY] <= 0)){
        curX++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x
    curY = y
    hit = false; 

    while((curX - 1 >= 0) && (currentBoard[curX-1][curY] <= 0)){
        curX--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x; 
    curY = y; 
    hit = false; 


    while((curY -1 >= 0) && (currentBoard[curX][curY-1] <= 0)){
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x;
    curY = y; 
    hit = false; 

    while( (curY + 1 <=7) && (currentBoard[curX][curY+1] <= 0)){
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] < 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
        
    }
}

function BlackRookMoves(x,y){
    let curX = x;
    let curY = y;

    let hit = false; 

    while((curX + 1<=7) &&(currentBoard[curX+1][curY] >= 0)){
        curX++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x;
    curY = y;
    hit = false; 

    while((curX - 1 >= 0) && (currentBoard[curX-1][curY] >= 0)){
        curX--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x; 
    curY = y; 
    hit = false; 

    while((curY -1 >= 0) && (currentBoard[curX][curY-1] >= 0)){
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x;
    curY = y; 
    hit = false; 
    while( (curY + 1 <=7) && (currentBoard[curX][curY+1] >= 0)){
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
        
    }
}


function WhiteQueenMoves(x,y){
        let curX = x
        let curY = y 
    
        let hit = false; 
    
        while((curX + 1<=7) &&(currentBoard[curX+1][curY] <= 0)){
            curX++; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
           
        }
    
        hit = false; 
        curX = x
        curY = y
    
        while((curX - 1 >= 0) && (currentBoard[curX-1][curY] <= 0)){
            curX--; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
           
        }
    
        curX = x; 
        curY = y; 
        hit = false; 

        while((curY -1 >= 0) && (currentBoard[curX][curY-1] <= 0)){
            curY--; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
           
        }
    
        curX = x;
        curY = y; 
        hit = false; 

        while( (curY + 1 <=7) && (currentBoard[curX][curY+1] <= 0)){
            curY++; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
            
        }

        curX = x; 
        curY = y; 
        hit = false; 

        while((curX + 1<=7) && (curY +1 <=7)&& (currentBoard[curX+1][curY+1] <= 0)){
            curX++; 
            curY++; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
           
        }
    
        curX = x
        curY = y
        hit = false; 
    
        while((curX - 1 >= 0) && (curY + 1 <=7) && (currentBoard[curX-1][curY+1] <= 0)){
            curX--; 
            curY++; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
           
        }
    
        curX = x; 
        curY = y; 
        hit = false; 

        while((curX - 1 >= 0) && (curY -1 >= 0) && (currentBoard[curX-1][curY-1] <= 0)){
            curX--; 
            curY--; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
           
        }
    
        curX = x;
        curY = y; 
        hit = false; 

        while( (curX + 1 <= 7) && (curY -1 >= 0) && (currentBoard[curX+1][curY-1] <= 0)){
            curX++; 
            curY--; 
            moves.push([curX, curY]); 
            if(currentBoard[curX][curY] < 0){
                hit = true; 
            }
            if(hit){
                break; 
            }
        }
    
}


function BlackQueenMoves(x,y){
    let curX = x
    let curY = y 

    let hit = false; 

    while((curX + 1<=7) &&(currentBoard[curX+1][curY] <= 0)){
        curX++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    hit = false; 
    curX = x
    curY = y

    while((curX - 1 >= 0) && (currentBoard[curX-1][curY] <= 0)){
        curX--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x; 
    curY = y; 
    hit = false; 

    while((curY -1 >= 0) && (currentBoard[curX][curY-1] <= 0)){
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x;
    curY = y; 
    hit = false; 

    while( (curY + 1 <=7) && (currentBoard[curX][curY+1] <= 0)){
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
        
    }

    curX = x; 
    curY = y; 
    hit = false; 

    while((curX + 1<=7) && (curY +1 <=7)&& (currentBoard[curX+1][curY+1] <= 0)){
        curX++; 
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x
    curY = y
    hit = false; 

    while((curX - 1 >= 0) && (curY + 1 <=7) && (currentBoard[curX-1][curY+1] <= 0)){
        curX--; 
        curY++; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x; 
    curY = y; 
    hit = false; 

    while((curX - 1 >= 0) && (curY -1 >= 0) && (currentBoard[curX-1][curY-1] <= 0)){
        curX--; 
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
       
    }

    curX = x;
    curY = y; 
    hit = false; 

    while( (curX + 1 <= 7) && (curY -1 >= 0) && (currentBoard[curX+1][curY-1] <= 0)){
        curX++; 
        curY--; 
        moves.push([curX, curY]); 
        if(currentBoard[curX][curY] > 0){
            hit = true; 
        }
        if(hit){
            break; 
        }
    }

}

function WhiteKingMoves(x,y){
    if(currentBoard[x-1][y] <= 0){
        moves.push([x-1,y]); 
    }
    else if(currentBoard[x-1][y+1] <= 0){
        moves.push([x-1,y+1]); 
    }
    else if(currentBoard[x][y+1] <= 0){
        moves.push([x,y+1]); 
    }
}


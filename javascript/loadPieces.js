function setupPieces(){
for(let x = 0; x<8; x++){
    for(let y = 0; y<8; y++){
            if(currentBoard[x][y] != 0){
                
            image(whichPiece(currentBoard[x][y]), 100*x + 5, 100 * (7-y) + 5, 85,85);
            }
    }
}
} 
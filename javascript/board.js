function boardLines(){
    stroke(105);
    strokeWeight(5);
    for(let i = 100; i<=800; i+=100){
        line(i, 0, i, 800);
        line(0,i,800,i);  
    }
    strokeWeight(10);
    line(0,0,800,0);
    line(0,0,0,800); 
    line(0,800,800,800); 
    line(800,0,800,800); 
}

function boardSquares(){
    noStroke();
    for(let i = 0; i <= 800; i+=200){
        for(let j = 100; j<=800; j+=200){
        fill(47,79,40); 
        rect(i,j,100,100);
        } 
    }
    for(let i = 100; i<=800; i+=200){
        for(let j = 0; j<=800; j+=200){
            rect(i,j,100,100);  
        }
    }
}

function loadPieces(){
    //drawing pawns
    for(let i = 5; i<=800; i+=100){
        image(wpawn, i, 605, 85, 85); 
        image(bpawn, i, 105, 85,85);
    }
    //drawing rooks
    image(wrook,-10,690,120,120);
    image(wrook, 690,690,120,120); 
    image(brook, 5,5,85,85);
    image(brook,705,5,85,85);

    //drawing knights

    image(wknight,105,705,85,85);
    image(wknight,605,705,85,85);
    image(bknight,105,5,85,85);
    image(bknight,605,5,85,85);
    //drawing bishops
    image(wbishop,205,705,85,85);
    image(wbishop,505,705,85,85);
    image(bbishop,205,5,85,85);
    image(bbishop,505,5,85,85);
    //drawing queens
    image(wqueen, 305,705,85,85);
    image(bqueen,305,5,85,85);
    //drawing kings
    image(wking,405,705,85,85);
    image(bking,405,5,95,95);


}

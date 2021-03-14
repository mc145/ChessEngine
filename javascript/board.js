// function boardLines(){
//     stroke(105);
//     strokeWeight(5);
//     for(let i = 100; i<=800; i+=100){
//         line(i, 0, i, 800);
//         line(0,i,800,i);  
//     }
//     strokeWeight(10);
//     line(0,0,800,0);
//     line(0,0,0,800); 
//     line(0,800,800,800); 
//     line(800,0,800,800); 
// }

function boardSquares(){
    noStroke();
    for(let i = 0; i <= 800; i+=200){
        for(let j = 100; j<=800; j+=200){
        fill(187,137,100); 
        rect(i,j,100,100);
        } 
    }

    for(let i = 100; i<=800; i+=200){
        for(let j = 0; j<=800; j+=200){
            rect(i,j,100,100);  
        }
    }
}


// r = 1, k = 2, b = 3, q = 4, k = 5, p = 6

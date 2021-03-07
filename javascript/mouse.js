let boxClicked; 
let clickedMouse = false; 
function mouseClicked(){
       boxClicked = [lowestHundred(mouseX)/100, 7 - lowestHundred(mouseY)/100]; // 0 scaling
      // boxClicked = [lowestHundred(mouseX), lowestHundred(mouseY)]; 
       clickedMouse = true; 
       return false; 
    
   
}

function lowestHundred(x){
    return x - (x%100); 
}
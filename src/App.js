import React, { useState } from 'react';


const App = () =>{
    const [player_turn,setPlayer_turn] = useState('X')
    const [boxes,setBoxes] = useState(['','','','','','','','','']) ;
   const clicked  = (index) => {
        if(!boxes[index]){
            boxes[index] = player_turn;
        } else{
           return alert('Cannot select this block');
            
        }
        
        setBoxes(boxes);
        setPlayer_turn(player_turn == 'X' ? 'O' : 'X');

        let winCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [8,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        for(let i=0;i<winCombos.length;i++){
            let winRow = winCombos[i];
            let p1 = winRow[0];
            let p2 = winRow[1];
            let p3 = winRow[2];
            if(boxes[p1] && boxes[p2] && boxes[p3])
            if(boxes[p1] == boxes[p2] && boxes[p2] == boxes[p3]  && boxes[p3] == boxes[p1]){
                setBoxes(['','','','','','','','','']);
              
                return alert(player_turn + ' won!');  
            }

            if(checkBoxesArefilledIn() == true){
              return alert('Draw Match');
            }
        }
        
        
    }

    const checkBoxesArefilledIn = () =>{
        for(let val of boxes){
          if(val == ''){
            return false;
          }
        }
        return true;
    }

    
     return(
       <div class="board">
         <h1>TIC TAC TOE</h1>
        <div className="rows">
           {
            boxes.map((box, index) => 
                <div key={index} onClick={() => clicked(index)} className="boxClass">
                    <span>{box}</span>
                </div>
            ) 
       }
        </div>
       </div>
       
        
    );
    
}


export default App;

function resetGame(){
    location.reload();
}

function changeButtonColor(buttonID) {
    var ele = document.getElementById(buttonID);
    if(count%2!=0){   
        ele.style.backgroundColor = '#b24e4e';
        ele.textContent = 'X';
        ele.disabled = true;
    }
    else{
        ele.style.backgroundColor = 'lightgreen';
        ele.textContent = 'O';
        ele.disabled = true;
    }

}


var playerOneName = 'A';
var playerTwoName = 'B';

let count = 0;
var player_1 = false;
var player_2 = false;
var arr  = [['','',''],['','',''],['','','']];
var pp = document.getElementById('playerTeller');
pp.value = playerOneName;

function setArrayValue_1(){
    if(count%2==0)
    arr[0][0] = 'X';
    else
    arr[0][0] = 'O';

    count++; 
    changeButtonColor('btn_1');   
    updateText();   
    isValid();
    isValid_2();
}
function setArrayValue_2(){
    if(count%2==0)
    arr[0][1] = 'X';
    else
    arr[0][1] = 'O';

    count++;
    changeButtonColor('btn_2');   
    updateText();
    isValid_2();
    isValid();
}
function setArrayValue_3(){
    if(count%2==0)
    arr[0][2] = 'X';
    else
    arr[0][2] = 'O';

    count++;
    changeButtonColor('btn_3');   
    updateText();
    isValid_2();
    isValid();
}
function setArrayValue_4(){
    if(count%2==0)
    arr[1][0] = 'X';
    else
    arr[1][0] = 'O';

    count++;
    updateText();
    changeButtonColor('btn_4');   
    isValid_2();
    isValid();
}
function setArrayValue_5(){
    if(count%2==0)
    arr[1][1] = 'X';
    else
    arr[1][1] = 'O';

    count++;
    updateText();
    changeButtonColor('btn_5');   
    isValid_2();
    isValid();
}
function setArrayValue_6(){
    if(count%2==0)
    arr[1][2] = 'X';
    else
    arr[1][2] = 'O';

    count++;
    updateText();
    changeButtonColor('btn_6');   
    isValid_2();
    isValid();
}
function setArrayValue_7(){
    if(count%2==0)
        arr[2][0] = 'X';
        else
        arr[2][0] = 'O';

    count++;
    updateText();
    changeButtonColor('btn_7');   
    isValid_2();
    isValid();
}
function setArrayValue_8(){
    if(count%2==0)
        arr[2][1] = 'X';
        else
        arr[2][1] = 'O';

    count++;
    updateText();
    changeButtonColor('btn_8');   
    isValid_2();
    isValid();
}
function setArrayValue_9(){
    if(count%2==0)
    arr[2][2] = 'X';
    else
    arr[2][2] = 'O';

    count++;    
    updateText();
    changeButtonColor('btn_9');   
    isValid_2();
    isValid();
}

//validate each ver , Hor , and perpend
function isValid(){
    let mark = 0;
    for(let i=0;i<3;i++){
        if(arr[i][i]=='X'  )
            mark++;
    }
    if(mark==3){
        player_1 = true;
        setTimeout(function you_won(){    
            if(player_1 ==true){
            playerwon = playerOneName;
            alert('Player - A Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }
        },200);
        return;}

    mark = 0;
    for(let i = 0;i<3;i++){ 
       mark = 0;
        for(let j=0;j<3;j++){
            if(arr[i][j] == 'X' )
            mark++;
        }    
        if(mark==3){
        player_1 = true;
        setTimeout(function you_won(){    
            if(player_1 ==true){
            playerwon = playerOneName;
            alert('Player - A Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }
        },200);
        return;}
    }
    
    mark = 0;
    for(let i = 0;i<3;i++){ 
        mark = 0;
         for(let j=0;j<3;j++){
             if(arr[j][i] == 'X' )
             mark++;
         }    
        if(mark==3){
        player_1 = true;
        setTimeout(function you_won(){    
            if(player_1 ==true){
            playerwon = playerOneName;
            alert('Player - A Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }
        },200);
        return;}
    }
    
    if(arr[2][0] =='X' && arr[0][2] =='X' && arr[1][1] =='X'){
    setTimeout(function you_won(){    
        if(player_1 ==true){
        playerwon = playerOneName;
        alert('Player - B Has Won 🥳🥳 ');
        alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
        resetGame();
        }
    },200);

    }

}

function isValid_2(){
    let mark = 0;
    for(let i=0;i<3;i++){
        if(arr[i][i]=='O'  )
            mark++;
    }
    if(mark == 3){
        player_2 = true;
        setTimeout(function you_won(){    
        if(player_2 == true){
        playerwon = playerTwoName;
        alert('Player - B Has Won 🥳🥳 ');
        alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
        resetGame();  
        }  
        }, 200); 
        
        return;}
    
    mark = 0;
    for(let i = 0;i<3;i++){ 
       mark = 0;
        for(let j=0;j<3;j++){
            if(arr[i][j] == 'O' )
            mark++;
        }    
        if(mark==3){
        player_2 = true;
        setTimeout(function you_won(){    
            if(player_2 == true){
            playerwon = playerTwoName;
            alert('Player - B Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }  
        }, 200); 
        return;}
    }

    mark=0;
    for(let i = 0;i<3;i++){ 
        mark = 0;
         for(let j=0;j<3;j++){
             if(arr[j][i] == 'O' )
             mark++;
         }    
         if(mark==3){
        player_2 = true;

        setTimeout(function you_won(){    
        if(player_2 == true){
        playerwon = playerTwoName;
        alert('Player - B Has Won 🥳🥳 ');
        alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
        resetGame();
        }  
    }, 200); 
         
        return;}
    }
    
    //check perpend
    if(arr[2][0] =='O' && arr[0][2] =='O' && arr[1][1] =='O'){
    player_2 = true;
    setTimeout(function you_won(){    
        if(player_2 == true){
        playerwon = playerTwoName;
        alert('Player - B Has Won 🥳🥳 ');
        alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
        resetGame();
        }  
    }, 200); 
    }



}


/*
function you_won(){    
 
    var playerwon = 'draw';
    if(player_1 ==true){
    playerwon = playerOneName;
    alert('You Won 🥳🥳 A');
    alert('click OK to restart the Game');

    }
    else if(player_2 == true){
    playerwon = playerTwoName;
    alert('You Won 🥳🥳 B');
    alert('click OK to restart the Game');  
    
    }  
}
*/



function updateText(){
    var pp = document.getElementById('playerTeller');
    if(count%2===0){
    pp.value = playerOneName;
    pp.style.backgroundColor = '#b24e4e';
    }
    else{
    pp.value = playerTwoName;
    pp.style.backgroundColor = '#b24e4e';    
    }
}

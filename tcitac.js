function resetGame(){
    location.reload();
}

function changeButtonColor(buttonID) {
    var ele = document.getElementById(buttonID);
    if(count%2!=0){   
        ele.style.color = '#f33434';
        ele.textContent = 'X';
        ele.disabled = true;
    }
    else{
        ele.style.color = 'lightgreen';
        ele.textContent = 'O';
        ele.disabled = true;
    }

}


var playerOneName = 'A';
var playerTwoName = 'B';

let count = 0;
var player_1 = false;
var player_2 = false;
var draw = false;

var arr  = [['.','.','.'],['.','.','.'],['.','.','.']];
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
    
}
function setArrayValue_2(){
    if(count%2==0)
    arr[0][1] = 'X';
    else
    arr[0][1] = 'O';

    count++;
    changeButtonColor('btn_2');   
    updateText();
    
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
    
    isValid();
}

//validate each ver , Hor , and perpend
function isValid(){
    let playerOneCout = 0;
    let playerTwoCout = 0;

    for(let i=0;i<3;i++){
        if(arr[i][i]=='O'  )
            playerTwoCout++;
        else if(arr[i][i]=='X'  )
            playerOneCout++;
    }
    if(playerOneCout==3){
        player_1 = true;
        setTimeout(function you_won(){    
            if(player_1 ==true){
            playerwon = playerOneName;
            alert('Player - A Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }
        },80);
        return;}

        else if(playerTwoCout==3){
            player_2 = true;
            setTimeout(function you_won(){    
                if(player_2 ==true){
                playerwon = playerOneName;
                alert('Player - B Has Won 🥳🥳 ');
                alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
                resetGame();
                }
            },80);
            return;}
            
            
    playerOneCout = 0;
    playerTwoCout = 0;

    for(let i = 0;i<3;i++){ 
       playerOneCout = 0;
       playerTwoCout = 0;

        for(let j=0;j<3;j++){
            if(arr[i][j] == 'X' )
            playerOneCout++;
            else if(arr[i][j] == 'O')
            playerTwoCout++;
        }    
        if(playerOneCout==3){
        player_1 = true;
        setTimeout(function you_won(){    
            if(player_1 ==true){
            playerwon = playerOneName;
            alert('Player - A Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }
        },80);  
        }else if(playerTwoCout==3){
            player_2 = true;
            setTimeout(function you_won(){    
                if(player_2 ==true){
                playerwon = playerOneName;
                alert('Player - B Has Won 🥳🥳 ');
                alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
                resetGame();
                }
            },80);
        return;}
        }
    
    playerOneCout = 0;
    playerTwoCout = 0

    for(let i = 0;i<3;i++){ 
        playerOneCout = 0;
        playerTwoCout = 0;
         for(let j=0;j<3;j++){
             if(arr[j][i] == 'X' )
             playerOneCout++;
             else if(arr[j][i] == 'O')
             playerTwoCout++;
         }    
        if(playerOneCout==3){
        player_1 = true;
        setTimeout(function you_won(){    
            if(player_1 ==true){
            playerwon = playerOneName;
            alert('Player - A Has Won 🥳🥳 ');
            alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
            resetGame();
            }
        },80);
        return;}
        else if(playerTwoCout==3){
            player_2 = true;
            setTimeout(function you_won(){    
                if(player_2 ==true){
                playerwon = playerOneName;
                alert('Player - B Has Won 🥳🥳 ');
                alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
                resetGame();
                }
            },80);
            return;}

    }
    

    playerOneCout = 0;
    playerTwoCout = 0;
    if(arr[2][0] =='X' && arr[2][0] == arr[1][1] && arr[0][2] == arr[1][1] ){
        player_1 = true;
    setTimeout(function you_won(){    
        if(player_1 ==true){
        playerwon = playerOneName;
        alert('Player - A Has Won 🥳🥳 ');
        alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
        resetGame();
        }
    },80);

    }
    if(arr[2][0] =='O' && arr[2][0] == arr[1][1] && arr[0][2] == arr[1][1] ){
        player_2 = true;
    setTimeout(function you_won(){    
        if(player_2 ==true){
        playerwon = playerOneName;
        alert('Player - B Has Won 🥳🥳 ');
        alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
        resetGame();
        }
    },80);
    }
    
    if(count >= 8 && player_1==false && player_2 == false){
        let drawCount = 0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(arr[i][j] !='.' )
                    drawCount++;
            }
        }
        if(drawCount == 9){
            {draw = true;
                setTimeout(function you_won(){    
                    if(draw ==true){
                    playerwon = playerOneName;
                    alert(" It's a Draw 🤝🤝");
                    alert(" Game Has Finished \n  Click 'OK' to restart the Game");  
                    resetGame();
                    }
                },80);
                }
        }
    }

}

function updateText(){
    var pp = document.getElementById('playerTeller');
    if(count%2===0){
    pp.value = playerOneName;
    pp.style.backgroundColor = '#f33434';
    }
    else{
    pp.value = playerTwoName;
    pp.style.backgroundColor = 'lightgreen';    
    }
}


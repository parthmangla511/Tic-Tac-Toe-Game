let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(Winner,name)=>{
    msg.innerText=`Congratulations, Winner is ${Winner} ${name}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                if(pos1 == 'O')
                showWinner(pos1,"player1");

            else
                                showWinner(pos1,"player2");

            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
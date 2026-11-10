
let boxes = document.querySelectorAll(".box");
let RB = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turnO = true; //playerX, playerY
let count = 0;
let gameOver = false;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{

        if(gameOver) return;

        console.log("box was clicked");

        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;//iska ye kaam hai ki jab hum box pe dubara click karen to dubara change na ho

        count++;
        checkwinner();
    });
});

const showwinner = (winner) =>{
    msg.innerText = `🎉 CONGRATULATIONS! WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    gameOver = true;

    boxes.forEach((box) =>{
        box.disabled = true;
    });
};

const checkwinner = () =>{
    for(let pattern of winpatterns){

        console.log(pattern[0],pattern[1],pattern[2]);

        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let po1val = boxes[pattern[0]].innerText;
        let po2val = boxes[pattern[1]].innerText;
        let po3val = boxes[pattern[2]].innerText;

        if(po1val != "" && po2val != "" && po3val != ""){
            if(po1val === po2val && po2val === po3val){
                console.log("winner", po1val);
                showwinner(po1val);
                return;
            }
        }
    }

    if(count === 9){
        msg.innerText = "🤝 IT'S A DRAW!";
        msgcontainer.classList.remove("hide");
        gameOver = true;
    }
};

const resetgame = () =>{
    turnO = true;
    count = 0;
    gameOver = false;

    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    });

    msgcontainer.classList.add("hide");
};

RB.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);

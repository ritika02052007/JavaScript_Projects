let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;//playerX, playero
// Ager turn0 ki hai to value true hogi aur button dabane per 0 likha aayega
// ager turn0 ki value flase hai to button dabane per X likha aayega

//Winning pattern ko store karege in the form of 2-D array
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//Har ek box ko click karne per kuch na kuch event ho isliye hum event listner ka use karege
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
         box.innerText = "O";//jab button ko click kare to kuch likha aa jaye isliye ye use karge
         turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner(); // ek function ko call kare ke liye likha
    });
});

const disableBoxes = () =>{
    for (let box of boxes) {
        box.disalbled =true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes) {
        box.disabled =false;
        box.innerText ="";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () =>{
    for (let pattern of winPattern) {
        let post1val =boxes[pattern[0]].innerText;
        let post2val =boxes[pattern[1]].innerText;
        let post3val =boxes[pattern[2]].innerText;

        if(post1val != "" && post2val != ""  && post3val != ""){
            if(post1val === post2val && post2val === post3val){
                showWinner(post1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



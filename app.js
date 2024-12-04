let buttons = document.querySelectorAll(".box"); /* queryselrtor all due to multiple class=box buttons*/
let resetBtn = document.querySelector("#reset-btn");
let turncheck = document.querySelector(".displayturn")
let h1rule = document.querySelector(".h1")
let newgamebtn = document.querySelector("#new-btn")
let msgcontai = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
buttons.forEach((obj) => { /* line 21 to 36 remember */
    obj.addEventListener("click", () => {
        // buton was clicked
        if(turnO) {
            obj.innerHTML = "O"
            turnO = false
            turncheck.innerHTML = "X's Turn"
        } else {
            obj.innerHTML = "X"
            turnO = true
            turncheck.innerHTML = "O's Turn"
        }     
        obj.disabled = true;  // remember this
        checkWinner();
    })
})
const checkWinner = () => {
    for(let apattern of winPatterns) {
        let pos1val =  buttons[apattern[0]].innerHTML;
        let pos2val =  buttons[apattern[1]].innerHTML;
        let pos3val =  buttons[apattern[2]].innerHTML;
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val == pos2val && pos2val == pos3val) {
                disablebuttons()
                showWinner(pos1val)
                h1rule.innerHTML = ""
                turncheck.innerHTML = ""
            }
        }     
    }
}

const showWinner = (win) => {
    msg.innerHTML = `Congratulations winner is ${win}` 
    msgcontai.classList.remove("hide")
}
const disablebuttons = () => {
    // buttons.disabled = true we cant use like this
    for(btn of buttons) {
        btn.disabled = true
    }
}
const enablebuttons = () => {
    for(btn of buttons) {
        btn.disabled = false
        btn.innerHTML = "" /* previous marks will be removed*/
        msgcontai.classList.add("hide")
    }
}
resetBtn.addEventListener("click",() => {
    turnO = true
    h1rule.innerHTML = "To Win Horizontally or vertically or diagonally 3 O's or 3 X's"
    turncheck.innerHTML = "O's Turn first"
    enablebuttons()
})
newgamebtn.addEventListener("click",() => {
    turnO = true;
    h1rule.innerHTML = "To Win Horizontally or vertically or diagonally 3 O's or 3 X's"
    turncheck.innerHTML = "O's Turn first"
    enablebuttons()
})
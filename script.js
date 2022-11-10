let board = document.getElementById('board');
let cells = document.getElementsByClassName('cell');
let circleTurn;
const x_class = "x";
const circle_class = "circle";

const winning_combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function Styling(){
  
    board.style.width = "100%";
    board.style.height = "100vh";
    board.style.display ="grid";
    board.style.justifyContent ="center";
    board.style.alignContent = "center";
    board.style.alignItems = "center";

    board.style.gridTemplateColumns = "repeat(3,auto)";
    
}

Styling();

const cellElements = document.querySelectorAll('[data-cell]')

cellElements.forEach(cell => {

    cell.addEventListener("click",handleClick , {once:true})
})

function handleClick(e){
    

    //placing symbol login
    const cell = e.target;
    const currentClass = circleTurn ? circle_class : x_class;
    placeMark(cell, currentClass)

    if(checkWin(currentClass)){
        console.log("winner")
    }
    swapTurns()
    setNextPlay()

}

function placeMark(cell, currentClass){
    //thi function places the symbol
    cell.classList.add(currentClass)

}

function swapTurns(){

    circleTurn = !circleTurn
}

function setNextPlay(){

    board.classList.remove(x_class);
    board.classList.remove(circle_class);
    if(circleTurn){
        board.classList.add(circle_class);
    }
    else{
        board.classList.add(x_class)
    }
}

function checkWin(currentClass){

    winning_combos.some(combination => {
        return combination.every(index =>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}
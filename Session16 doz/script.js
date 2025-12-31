// گرفتن تمام خانه های بازی و متن اصلی
let cells = document.querySelectorAll(".cell");
let statusText = document.querySelector("#status");
let btn = document.querySelector("button");
let Player = "X";
let page = ["", "", "", "", "", "", "", "", ""];
let game = false;

btn.addEventListener("click" , () =>{
    game == true;
});

statusText.innerText = "بازی را شروع کنید"
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        handelClick(i);
    })
}

function handelClick(index) {

    if (game == false){
        alert("بازی هنوز شروع نشده است ! لطفا روی دکمه (شروع بازی) کلیک کنید");
    }
    if (page[index] !== "" || game == false) {
        return;
    }

    page[index] = Player;
    cells[index].innerText = Player;

    checkWinner();
}

function checkWinner() {

    for (let i = 0; i < win.length; i++) {
        let a = win[i][0];
        let b = win[i][1];
        let c = win[i][2];

        if (page[a] !== "" && page[a] == page[b] && page[a] == page[c]) {
            statusText.innerText = `برنده شد ${Player} بازیکن `;
            btn.innerText = "شروع دوباره بازی"
            game = false;
            return;
        }
    }
    let draw = true;

    for (let i = 0; i < page.length; i++) {
        if (page[i] == "") {
            draw = false;
            break;
        }
    };

    // گر مساوی شد

    if (draw) {
        statusText.innerText = "بازی مساوی شد !";
        game = false;
        btn.innerText = "شروع دوباره بازی"
        return;
    }
    if (Player == "X") {
        Player = "O";
    } else {
        Player = "X";
    };

    statusText.innerText = `${Player} نوبت بازیکن `;
}

function resetGame() {
    page = ["", "", "", "", "", "", "", "", ""];
    game = true;
    Player = "X";
    statusText.innerText = "بازیکن ضبدر شروع کند";
    btn.innerText = "شروع بازی"
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
}
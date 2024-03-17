let com_score = 0;
let my_score = 0;
let arr = ["rock", "paper", "scissor"];
const my_opts = document.querySelectorAll(".img");
let message = document.getElementById("message");
let my_sc = document.getElementById("my");
let cm_sc = document.getElementById("com");
let rest = document.getElementById("Reset");
let tex = document.getElementById("text");
function verify(my_input, com_input) {
    if (my_input === com_input) {
        text.innerText = "Draw"
        text.style.backgroundColor = "white";
    }
    else if (my_input === "scissor") {
        if (com_input === "paper") {
            my_score += 1;
            tex.innerText = "You Won"
            tex.style.backgroundColor = "green";
        }
        if (com_input === "rock") {
            com_score += 1;
            tex.innerText = "You Lost"
            tex.style.backgroundColor = "red";
        }
    }
    else if (my_input === "paper") {
        if (com_input === "scissor") {
            com_score += 1;
            tex.innerText = "You Lost"
            tex.style.backgroundColor = "red";
        }
        if (com_input === "rock") {
            my_score += 1;
            tex.innerText = "You Won"
            tex.style.backgroundColor = "green";

        }
    }
    else if (my_input === "rock") {
        if (com_input === "scissor") {
            my_score += 1;
            tex.innerText = "You Won"
            tex.style.backgroundColor = "green";
        }
        if (com_input === "paper") {
            com_score += 1;
            tex.innerText = "You Lost"
            tex.style.backgroundColor = "red";
        }
    }
    my_sc.innerText = my_score;
    cm_sc.innerText = com_score;
}
function computer_input() {
    index = Math.random() * 3;
    index = Math.floor(index);
    com_input = arr[index];
    verify(my_input, com_input);
}

my_opts.forEach((opt) => {
    opt.addEventListener("click", () => {
        my_input = opt.getAttribute("id");
        computer_input(my_input);
    })
}
)
rest.addEventListener("click", () => {
     my_sc.innerText = 0;
     cm_sc.innerText = 0;
     com_score = 0;
     my_score = 0;
     text.innerText = "Choose One";
     text.style.backgroundColor = "white";
})



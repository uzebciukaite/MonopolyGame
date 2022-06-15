"use strict";
const container = document.querySelector(".container");
const topCont = document.querySelector(".top");
const rightCont = document.querySelector(".right");
const leftCont = document.querySelector(".left");
const bottomCont = document.querySelector(".bottom");
const btn = document.querySelector("button");
const points = document.querySelector(".points");
let pointsAfterCycle = 0;
//append divs to container
function createDivs() {
    for (let i = 0; i < 8; i++) {
        topCont.innerHTML +=
            `
    <div id="${i}"" class="box"></div>
    `;
    }
    for (let i = 8; i < 14; i++) {
        rightCont.innerHTML +=
            `
    <div id="${i}" class="box"></div>
    `;
    }
    for (let i = 14; i < 22; i++) {
        bottomCont.innerHTML +=
            `
    <div id="${i}" class="box"></div>
    `;
    }
    for (let i = 22; i < 28; i++) {
        leftCont.innerHTML +=
            `
    <div  id="${i}" class="box"></div>
    `;
    }
}
createDivs();
const boxes = document.querySelectorAll(".box");
boxes[0].innerHTML = `<i class="fa-solid fa-face-laugh"></i>`;
let start = 0;
function startGame() {
    btn.onclick = () => {
        boxes[0].innerHTML = "";
        const moveSomeDivs = Math.floor(Math.random() * 6) + 1;
        start = start + moveSomeDivs;
        if (start > 27) {
            start = 0;
            pointsAfterCycle += 200;
            points.innerHTML = `POINTS: ${pointsAfterCycle} `;
        }
        console.log(moveSomeDivs);
        console.log(`start: ${start}`);
        boxes.forEach(x => {
            setTimeout(() => {
                if (Number(x.id) == start) {
                    x.innerHTML = `<i class="fa-solid fa-face-laugh"></i>`;
                }
                else {
                    x.innerHTML = "";
                }
            }, 500);
        });
    };
}
startGame();

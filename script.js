// Task at Lesson
// let dragEl = document.querySelector(".drag")
// let areaEl = document.querySelectorAll(".area")
// let id;
// dragEl.ondragstart = function () {
//     this.id = id
// }

// dragEl.ondragover = function () {
// }

// areaEl.forEach(item => item.ondragover = function (ev) {
//     ev.preventDefault();
// })

// areaEl.forEach(item => item.ondrop = function () {
//     let dragElement = document.getElementById(id)
//     this.append(dragElement)
// })

// -------


// ------- Task 1 Start

let row = document.getElementById("row")

let numb = document.querySelectorAll(".numb")

let area = document.querySelectorAll(".label")

let id;
let numbValue;
numb.forEach(n =>
    n.ondragstart = function () {
        numbValue = n
        console.log(n.childNodes);
        console.log(n);
        id = this.id
        console.log(id);
    })



area.forEach(a => {
    a.ondragover = function (ev) {
        ev.preventDefault();
    }
    a.ondrop = function () {
        let numbId = document.getElementById(id)
        // console.log(numbValue.childNodes.item(0))
        if (id <= 4 || id == 0) {
            if (this.id == 1) {
                this.append(numbId)
            }
        } else if (id <= 8 || id == 4) {
            if (this.id == 2) {
                this.append(numbId)
            }
        }
        else if (id == 12 || id >= 9) {
            if (this.id == 3) {
                this.append(numbId)
            }
        }
    }
})
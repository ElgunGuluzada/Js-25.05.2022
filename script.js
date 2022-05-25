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
numb.forEach(n =>
    n.ondragstart = function () {
        id = this.id
        console.log(id);
    })

area.forEach(a => {
    a.ondragover = function (ev) {
        ev.preventDefault();
    }
    a.ondrop = function () {
        let numbId = document.getElementById(id)
        this.append(numbId)
        if (id <= 4 && this.id == "a1") {
            numbId.classList.add("bg-primary", "py-2", "px-3")
            numbId.classList.remove("bg-danger")
            // this.append(numbId)
        }
        else if (id >= 5 && id <= 8 && this.id == "a2") {
            numbId.classList.add("bg-primary", "py-2", "px-3")
            numbId.classList.remove("bg-danger")
            // this.append(numbId)
        }
        else if (id >= 9 && this.id == "a3") {
            numbId.classList.add("bg-primary", "py-2", "px-3")
            numbId.classList.remove("bg-danger")
            // this.append(numbId)
        }
        else {
            numbId.classList.add("bg-danger", "py-2", "px-3")
        }
    }
})
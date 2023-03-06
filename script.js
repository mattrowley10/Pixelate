// Your code here
const drawingBoard = document.getElementById("theTable")
const square = document.getElementsByTagName('td')[0]
const row = document.createElement("tr")

function makeRow(num) {
    for (let i=0; i<num; i++){
        drawingBoard.appendChild(row)
        for (let i=0; i<20; i++){
            row.appendChild(square)
        }
    }
}
makeRow(5)
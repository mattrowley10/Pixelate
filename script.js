// Your code here
const drawingBoard = document.getElementsByTagName('table')[0]
// const cell = document.createElement('td')

function makeRow(){
    const row = document.createElement("tr")

    for (let square=0; square < 20; square++){
        let square = document.createElement('td')

        row.appendChild(square)
    }
    drawingBoard.appendChild(row)
}
makeRow()
makeRow()
makeRow()
makeRow()
makeRow()

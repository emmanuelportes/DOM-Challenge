const table = document.getElementById("main-table");
const addRowButton = document.getElementById("add-row");
const addColumnButton = document.getElementById("add-column");
const deleteButton = document.getElementById("delete");

function generateTableHeader(){

    const row = document.createElement("tr");
    const firstHeader = document.createElement("th");
    const secondHeader = document.createElement("th");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    firstHeader.appendChild(checkbox);
    secondHeader.innerText = "Last Column";
    row.append(firstHeader, secondHeader);
    table.appendChild(row);
 
}

function generateTableRows(){

    let rows = document.createElement("tr");

    for(let index = 1; index <= getCellsLength() ; index++){

        const firstCells = document.createElement("td");
        const middleCells = document.createElement("td");
        const lastCells = document.createElement("td");
        const button = document.createElement("button");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        makeCellsEditable(middleCells);
        button.innerText = "Button";
        firstCells.appendChild(checkbox);
        lastCells.appendChild(button);

        if(index === 1){
            rows.appendChild(firstCells);

        } else if (index === getCellsLength()){
            rows.appendChild(lastCells);

        } else {
            rows.appendChild(middleCells);

        }
    }

    table.appendChild(rows)
 }

 function AddNewRow(){

    if(table.children.length < 1){
       generateTableHeader();
    }else{
        generateTableRows();
    }
}

function generateTableColumns(){
    let rows = document.querySelectorAll("tr");
 
    for(let i = 0; i < getRowsLength(); i++){
        if(i === 0){

            header = document.createElement("th");
            headerText = document.createTextNode("new column header");
            header.appendChild(headerText);
            rows[i].insertBefore(header, rows[i].lastChild);

        } else {

        cells = document.createElement("td");
        cellsText = document.createTextNode("New Column");
        makeCellsEditable(cells);
        cells.appendChild(cellsText);
        rows[i].insertBefore(cells, rows[i].lastChild);

        } 
    }

}

function makeCellsEditable(cell){
    cell.setAttribute("contenteditable","false");

    cell.addEventListener("dblclick", () => {
        cell.contentEditable = true;
    });

    cell.addEventListener("keydown", e =>{
        if(e.keyCode === 13){
            e.preventDefault();
            cell.contentEditable = false;
        }
    });
 
}



function getRowsLength(){ 
   return table.getElementsByTagName("tr").length;
   //console.log(mainTable.getElementsByTagName("tr").length);
   
};

function getCellsLength(){ 
   return table.getElementsByTagName("th").length;
    //console.log(mainTable.getElementsByTagName("th").length);
}

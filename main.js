const mainTable = document.getElementById("main-table");
const addNewRow = document.getElementById("add-row");
const addNewColumn = document.getElementById("add-column");
const deleteButton = document.getElementById("delete");



function generateFirstTableHeader(){

    const tableRow = document.createElement("tr");
    const tableHeader1 = document.createElement("th");
    const tableHeader2 = document.createElement("th");
    const headerText = document.createTextNode("Last Column");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    tableHeader1.appendChild(checkbox);
    tableHeader2.appendChild(headerText);
    tableRow.append(tableHeader1, tableHeader2);
    mainTable.appendChild(tableRow);

}

function generateTableRows(){
    tableRow = document.createElement("tr");

    for(let index = 1; index <= countTableCells() ; index++){

        
        firstTableCell = document.createElement("td");
        middleTableCell = document.createElement("td");
        lastTableCell = document.createElement("td");
        functionsButton = document.createElement("button");
        functionsButton.innerHTML = "BTN";
        checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        firstTableCell.appendChild(checkbox);
        lastTableCell.appendChild(functionsButton);

        if(index === 1){

            tableRow.appendChild(firstTableCell);

        } else if (index === countTableCells()){

            tableRow.appendChild(lastTableCell);

        } else {

            tableRow.appendChild(middleTableCell);

        }



    }

    mainTable.appendChild(tableRow);
 }

 function AddNewRow(){
    if(mainTable.childNodes.length < 1){
        generateFirstTableHeader();
    }else{
        generateTableRows();
    }
}

function generateTableColumns(){

    let rows = document.querySelectorAll("tr");
    for(let i = 0; i < countTableRows(); i++){
        if(i === 0){

            tableHeader = document.createElement("th");
            tableHeaderText = document.createTextNode("new column header");
            tableHeader.appendChild(tableHeaderText);
            rows[i].insertBefore(tableHeader, rows[i].lastChild);

        } else {
              
        tableCell = document.createElement("td");
        tableCellText = document.createTextNode("New Column");
        tableCell.appendChild(tableCellText);
        rows[i].insertBefore(tableCell, rows[i].lastChild);  

        }
    
   }

 }


function countTableRows(){ 
   return mainTable.getElementsByTagName("tr").length;
   //console.log(mainTable.getElementsByTagName("tr").length);
   
};

function countTableCells(){ 
   return mainTable.getElementsByTagName("th").length;
    //console.log(mainTable.getElementsByTagName("th").length);
}


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
// function generateTableRows(){ }

// function generateTableColumns(){ }

//function countTableRows(){ }

//function countTableCells(){ }



    var list1 = [];
    var list2 = [];
    var values = [];
    var matrix1 = [];
    var matrix2 = [];
    var matrix3 = [];

function drawMatrices() {

    //Get the values of row/column number
    var row1 = document.getElementById("row1").value;
    var column1 = document.getElementById("column1").value;
    var column2 = document.getElementById("column2").value;
    var row2 = document.getElementById("row2").value;
    
    //Check whether matrices are compatible with respect to multiplication or not.    
    if (column1 != row2) {
        alert("The number of columns of the first matrix must be equal to the number of rows of the second matrix.");
        return
    }
    
    //Disable to enter new values ,and disable the button
    document.getElementById("row1").setAttribute("disabled","true");
    document.getElementById("row2").setAttribute("disabled","true");
    document.getElementById("column1").setAttribute("disabled","true");
    document.getElementById("column2").setAttribute("disabled","true");
    var but = document.getElementById("draw");
    but.remove();

    // get the reference for the body
    var body = document.getElementsByTagName("div")[0];
    
    // creates a title for table
    var tblHead = document.createElement("p");
    tblHead.setAttribute("id","matrixh1")
    tblHead.innerHTML = "<h4>Matrix NO:1</h4>" ;
    body.appendChild(tblHead);

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id","matrix1");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < row1; i++) {

        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < column1; j++) {
            // Create a <td> element and a input element
            var cell = document.createElement("td");
            cell.innerHTML = '<input class="matrixIn" type="number" id='+ 1+i+j +'>' ;
            list1.push('1'+i+j);
             row.appendChild(cell);
        }
    
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);

    var tblHead = document.createElement("p");
    tblHead.setAttribute("id","matrixh2")
    tblHead.innerHTML = "<h4>Matrix NO:2</h4>" ;
    body.appendChild(tblHead);

    var tbl = document.createElement("table");
    tbl.setAttribute("id","matrix2");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < row2; i++) {

        var row = document.createElement("tr");

        for (var j = 0; j < column2; j++) {
            var cell = document.createElement("td");
            cell.innerHTML = '<input class="matrixIn" type="number" id='+ 2+i+j +'>' ;
            list2.push('2'+i+j);
             row.appendChild(cell);
        }
    
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    //Create a calculate button
    var tblHead = document.createElement(null);
    tblHead.innerHTML = '<div class="subdiv"><input class="button" type="button" onclick="calculate()" value="Calculate" id="calculate"></div>' ;
    body.appendChild(tblHead);
}

function calculate() {

    var row1 = document.getElementById("row1").value;
    var column1 = document.getElementById("column1").value;
    var column2 = document.getElementById("column2").value;
    var row2 = document.getElementById("row2").value;
    
    //Create matrices
    for (var i = 0; i < row1; i++) {
        matrix1[i] = [];
        for(var j=0; j < column1; j++) {

            if (document.getElementById(list1[j+i*column1]).value == ""){
                alert("Please enter a number for all spaces")
                return
            }

            matrix1[i][j] = document.getElementById(list1[j+i*column1]).value;
        }
    }
    for (var i = 0; i < row2; i++) {
        matrix2[i] = [];
        for(var j=0; j < column2; j++) {

            if (document.getElementById(list2[j+i*column2]).value == ""){
                alert("Please enter a number for all spaces")
                return
            }

            matrix2[i][j] = document.getElementById(list2[j+i*column2]).value;
        }
    }
    for (var i = 0; i < row1; i++) {
        matrix3[i] = [];
        for(var j=0; j < column2; j++) {
            matrix3[i][j] = 0;
        }
    }

    //Calculate and place the values of the 3rd matrix
    for (var i = 0; i < row1; i++) {
        for(var j=0; j < column2; j++) {
            for (var k = 0; k < column1; k++){
                matrix3[i][j] +=  matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    
    var body = document.getElementsByTagName("div")[0];
    var tblHead = document.createElement("p");
    tblHead.innerHTML = "<h4>Matrix 1</h4>" ;
    body.appendChild(tblHead);

    var tbl = document.createElement("table");
    tbl.setAttribute("id","matrix1");
    var tblBody = document.createElement("tbody");
    
    for (var i = 0; i < row1; i++) {
    
        var row = document.createElement("tr");
    
        for (var j = 0; j < column1; j++) {
            var cell = document.createElement("td");
            cell.innerHTML = matrix1[i][j] ;
            row.appendChild(cell);
        }
        
        tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    var tblHead = document.createElement("p");
    tblHead.innerHTML = "<h4>Matrix 2</h4>" ;
    body.appendChild(tblHead);

    var tbl = document.createElement("table");
    tbl.setAttribute("id","matrix2");
    var tblBody = document.createElement("tbody");
    
    for (var i = 0; i < row2; i++) {
    
        var row = document.createElement("tr");
    
        for (var j = 0; j < column2; j++) {
            var cell = document.createElement("td");
            cell.innerHTML = matrix2[i][j] ;
            row.appendChild(cell);
        }

    tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    var tblHead = document.createElement("p");
    tblHead.innerHTML = "<h4>Result</h4>" ;
    body.appendChild(tblHead);

    var tbl = document.createElement("table");
    tbl.setAttribute("id","matrix3");
    var tblBody = document.createElement("tbody");
    
    for (var i = 0; i < row1; i++) {
    
        var row = document.createElement("tr");
    
        for (var j = 0; j < column2; j++) {
            var cell = document.createElement("td");
            cell.innerHTML = matrix3[i][j] ;
            row.appendChild(cell);
        }
        
        tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    //Delete all value-inputs, titles and calculation button
    var but = document.getElementById("calculate");
    but.remove();
    var tab1 = document.getElementById("matrix1");
    tab1.remove();
    var tab2 = document.getElementById("matrix2");
    tab2.remove();
    var tab1h = document.getElementById("matrixh1");
    tab1h.remove();
    var tab2h = document.getElementById("matrixh2");
    tab2h.remove();
}
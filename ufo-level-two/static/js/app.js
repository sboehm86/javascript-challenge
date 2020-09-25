// from data.js
var tableData = data;

// data: datetime   city   state   country   shape   durationMinutes   comments

//Make the table and add data to it
//Add Data to tbody element
//Loop through Data and append to td element
//Loop through each field in row and append td element
//Add values from data to td element(s)

var tbody=d3.select("tbody");

function buildTable(data){
    tbody.html("");

    data.forEach((dataRow)=> {
        var row=tbody.append("tr");

        Object.values(dataRow).forEach((val)=>{
            var cell = row.append("td");
            cell.text(val);
        });
    });
}

//make the filter work...
function handleClick(){
    d3.event.preventDefault(); //prevent reload
    
    var date=d3.select("#datetime").property("value"); //date filter
    let filteredData=tableData; 
    if (date) {
        filteredData=filteredData.filter(row=> row.datetime === date);
    }
    //rebuild the table with the filtered data
    buildTable(filteredData);
}

//Add new input forms to index...done!
//More filtering...
var filters= {};

function updateFilters(){
    //we need to save the element value and id of the filter...
    var changedElements=d3.select(this).select("input");
    var elementValue=changedElements.property("value");
    var filterID=changedElemens.attr("id");

    if (elementValue) {
        filters[filterId]=elementValue;
    }
    else{
        delete filters[filteredId];
    }
    filterTable();  //call the function to apply changes and rebuild table
}
//filter table from the list just created...
function filterTable() {
    let filteredData=tableData;
    //move through filters...
    Object.entries(filters).forEach(([key,value])=>{
        filteredData=filteredData.filter(row=>row[key]===value);
    });

    //rebuild table
    builtTable(filteredData);
}

//event to "listen" for the button click...
d3.selectAll(".filter").on("change",updateFilters);

//Build the table when page (re)loads, place at end because cascade...
buildTable(tableData);
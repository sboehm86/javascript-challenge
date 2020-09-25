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

//event to "listen" for the button click...
d3.selectAll("#filter-btn").on("click",handleClick);

//Build the table when page (re)loads, place at end because cascade...
buildTable(tableData);
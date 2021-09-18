// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the filter button
var buttonFilter = d3.select("#filter-btn");

// Select the reset button
var buttonReset = d3.select("#reset-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Compile unfiltered table
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]){
        var cell = tbody.append("td");
        cell.text(value);
    });
});


// Create event handlers
buttonFilter.on("click", runEnter);
buttonReset.on("click", runReset);

// Filter after click or enter
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear unfiltered data
    tbody.selectAll('*').remove();

    // Select the input element and value
    var inputElementDate = d3.select("#datetime");
    var inputValueDate = inputElementDate.property("value").trim();

    // Select the input element and value
    var inputElementCity = d3.select("#loccity");
    var inputValueCity = inputElementCity.property("value").toLowerCase().trim();

    // Select the input element and value
    var inputElementState = d3.select("#locstate");
    var inputValueState = inputElementState.property("value").toLowerCase().trim();

    // Select the input element and value
    var inputElementCountry = d3.select("#loccountry");
    var inputValueCountry = inputElementCountry.property("value").toLowerCase().trim();

    // Select the input element and value
    var inputElementShape = d3.select("#ufoshape");
    var inputValueShape = inputElementShape.property("value").toLowerCase().trim();


    // Filter by input values
    if(inputValueDate.length == 0) {
        var filteredData = tableData;
    } else {
        var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValueDate);
    }
    if(inputValueCity.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.city === inputValueCity);
    }
    if(inputValueState.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.state === inputValueState)
    }
    if(inputValueCountry.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.country === inputValueCountry)
    }
    if(inputValueShape.length == 0) {
        var filteredData = filteredData;
    } else {
        var filteredData = filteredData.filter(ufoEvent => ufoEvent.shape === inputValueShape)
    }
    if(filteredData.length == 0) {
        alert("Sorry no sightings found with your criterias!");
        var filteredData = [{
            datetime: "N/A",
            city: "N/A",
            state: "N/A",
            country: "N/A",
            shape: "N/A",
            durationMinutes: "N/A",
            comments: "N/A"
          }];
    }

    // Compile result table
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key, value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

};

// Reset after click or reset
function runReset() {
    location.reload();
}
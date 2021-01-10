// base template sourced from bootcamp starter files, then I added some stuff to make it awesome
// BOOTCAMP STARTER FILE ==> https://oregon.bootcampcontent.com/Oregon_Coding_Bootcamp/uofo-por-data-pt-09-2020-u-c/-/blob/master/14-Intro-To-JavaScript/HW/Instructions/StarterCode/static/js/app.js

var tableData = data; // this declares varable TABLEDATA and points it to the data contained in data.js
// console.log(tableData);

var tbody = d3.select("tbody"); // Use D3 to select the table body from INDEX.HTML
// console.log(tbody);

// ---------------------------------------------------------- //
// --------------------- POPULATE TABLE --------------------- //
// ---------------------------------------------------------- //
// RESOURCE: MODULE 14 > DAY 3 > ACTIVITY 2 ==> https://oregon.bootcampcontent.com/Oregon_Coding_Bootcamp/uofo-por-data-pt-09-2020-u-c/-/blob/master/14-Intro-To-JavaScript/3/Activities/02-Ins_D3_Tables/Solved/static/js/app.js 
// RESOURCE FOR OJBECT.VALUES ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
tableData.forEach((item) => {  // Use forEach to append to table row-by-row from data.js 
    var row = tbody.append("tr"); // Append one table row `tr` to the table body
    Object.values(item).forEach(value => {  //OJBECT.VALUE gets the value from ojbect, specifically from the value part of the key-value pair
        row.append("td").text(value);  // Append one cell for the student name
        // console.log(value)
    });
    // console.log(item);
  })

// ------------------------------------------------------ //
// -------------------- FILTER TABLE -------------------- //
// ------------------------------------------------------ //

// -------------------- FIRST FILTER ATTEMPT -------------------- //
// RESOURCE: MODULE 14 DAY 3 ACTIVITY 9 ==> https://oregon.bootcampcontent.com/Oregon_Coding_Bootcamp/uofo-por-data-pt-09-2020-u-c/-/blob/master/14-Intro-To-JavaScript/3/Activities/09-Par_Form_Filter/Solved/app.js

// Assign the data from `data.js` to a descriptive variable
var filteredSightings = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var dateInputElement = d3.select("#datetime-input");

  // Get the value property of the input element
  var dateToFilter = dateInputElement.property("value");

  console.log(dateToFilter);
  console.log(filteredSightings);

  var filteredData = filteredSightings.filter(ufo => ufo.datetime === dateToFilter);

  console.log(filteredData);
};

// -------------------- SECOND FILTER ATTEMPT -------------------- //
// function filterTable() {
//   console.log("filtered");
//   d3.event.preventDefault();
//   var dateInput = d3.select("#datetime-input").node().value;
//   var filtered = tableData.filter(d => d.datetime ===datetime-input);
//   buildpage(filtered);
// }
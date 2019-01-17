var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = 5;
var currentBand = "";
var currentVeggie = "";
var bandElement = document.getElementById("boy_bands");
var veggieElement = document.getElementById("vegetables");

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
    bandNames = bands[loopTracker];
    veggieNames = vegetables[loopTracker];
    currentBand += "<ul>" +
      "<button class='ui right labeled icon button'>" +
  "<i class='right arrow icon'></i>" +
  "Next" +
"</button>" + bandNames + "</ul>";
    currentVeggie += "<ul><div class='ui labeled button' tabindex='0'><div class='ui red button'><i class='heart icon'></i> Like</div><a class='ui basic red left pointing label'>" + loopTracker + "</a>" + "</div>" + veggieNames + "</ul>";

    bandElement.innerHTML = currentBand;
    veggieElement.innerHTML = currentVeggie;
}

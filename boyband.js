const bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
const vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const bandElement = document.getElementById("boy_bands");
const veggieElement = document.getElementById("vegetables");

let currentBand = "";
let currentVeggie = "";

for (let i = 0; i < bands.length; i++) {
    currentBand += "<ul>" +
        "<button class='ui right labeled icon button'>" +
            "<i class='right arrow icon'></i>" +
            "Next" +
        "</button>" + bands[i] + "</ul>";
    currentVeggie += "<ul><div class='ui labeled button' tabindex='0'>" +
        "<div class='ui red button'><i class='heart icon'></i> Like</div>" +
        "<a class='ui basic red left pointing label'>" + i + "</a>" +
        "</div>" + vegetables[i] + "</ul>";
}

bandElement.innerHTML = currentBand;
veggieElement.innerHTML = currentVeggie;

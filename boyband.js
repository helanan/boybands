const bands = [
  { name: "Boyz II Men", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/BoyzIIMenHWoFJan2012.jpg" },
  { name: "NSync", img: "https://upload.wikimedia.org/wikipedia/commons/b/be/NSYNC.jpg" },
  { name: "New Kids on the Block", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/New_Kids_on_the_Block.JPG" },
  { name: "98 Degrees", img: "https://upload.wikimedia.org/wikipedia/commons/4/47/98_Degrees_Mixtape.jpg" },
  { name: "One Direction", img: "https://upload.wikimedia.org/wikipedia/commons/4/40/One_Direction_2012_Stockholm.jpg" },
];
const vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const bandElement = document.getElementById("boy_bands");
const veggieElement = document.getElementById("vegetables");

let currentBand = "";
let currentVeggie = "";

for (let i = 0; i < bands.length; i++) {
    currentBand += "<ul>" +
        "<button class='ui right labeled icon button band-btn' data-index='" + i + "'>" +
            "<i class='right arrow icon'></i>" +
            "View Band" +
        "</button>" + bands[i].name + "</ul>";
    currentVeggie += "<ul><div class='ui labeled button' tabindex='0'>" +
        "<div class='ui red button'><i class='heart icon'></i> Like</div>" +
        "<a class='ui basic red left pointing label'>" + i + "</a>" +
        "</div>" + vegetables[i] + "</ul>";
}

bandElement.innerHTML = currentBand;
veggieElement.innerHTML = currentVeggie;

const modal = document.getElementById("band-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementById("modal-close");

document.querySelectorAll(".band-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        const idx = this.dataset.index;
        modalImg.src = bands[idx].img;
        modalImg.alt = bands[idx].name;
        modalTitle.textContent = bands[idx].name;
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", function() {
    modal.classList.remove("active");
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

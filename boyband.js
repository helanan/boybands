const bands = [
  { name: "Boyz II Men", img: "https://placehold.co/400x300?text=Boyz+II+Men" },
  { name: "NSync", img: "https://placehold.co/400x300?text=NSync" },
  { name: "New Kids on the Block", img: "https://placehold.co/400x300?text=New+Kids+on+the+Block" },
  { name: "98 Degrees", img: "https://placehold.co/400x300?text=98+Degrees" },
  { name: "One Direction", img: "https://placehold.co/400x300?text=One+Direction" },
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
            "Next" +
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

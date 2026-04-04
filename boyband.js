const bands = [
  {
    name: "Boyz II Men",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/BoyzIIMenHWoFJan2012.jpg",
    desc: "Formed in Philadelphia in 1988, Boyz II Men are the best-selling R&B group of all time. Known for silky harmonies and massive ballads like 'End of the Road' and 'I'll Make Love to You', they ruled the charts throughout the 90s. 🎤"
  },
  {
    name: "NSync",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/be/NSYNC.jpg",
    desc: "Formed in Orlando in 1995, *NSYNC became one of the biggest boy bands ever. Featuring Justin Timberlake, they sold over 70 million records worldwide with hits like 'Bye Bye Bye' and 'Tearin' Up My Heart'. 💫"
  },
  {
    name: "New Kids on the Block",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/New_Kids_on_the_Block.JPG",
    desc: "The original 90s boy band! Formed in Boston in 1984, NKOTB pioneered the boy band blueprint with massive hits like 'Hangin' Tough' and 'Step by Step'. They literally started it all. 🔥"
  },
  {
    name: "98 Degrees",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/98_Degrees_Mixtape.jpg",
    desc: "Formed in LA in 1996, 98 Degrees featured Nick and Drew Lachey alongside Jeff Timmons and Justin Jeffre. Their romantic hits like 'Because of You' and 'The Hardest Thing' made them every girl's dream. 💘"
  },
  {
    name: "One Direction",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/40/One_Direction_2012_Stockholm.jpg",
    desc: "Formed on The X Factor UK in 2010, One Direction — Harry Styles, Niall Horan, Liam Payne, Louis Tomlinson, and Zayn Malik — became a global phenomenon with anthems like 'What Makes You Beautiful'. ⭐"
  },
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
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("modal-close");

document.querySelectorAll(".band-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        const idx = this.dataset.index;
        modalImg.src = bands[idx].img;
        modalImg.alt = bands[idx].name;
        modalTitle.textContent = bands[idx].name;
        modalDesc.textContent = bands[idx].desc;
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

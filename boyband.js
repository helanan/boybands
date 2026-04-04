const bands = [
  {
    name: "Boyz II Men",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/BoyzIIMenHWoFJan2012.jpg",
    desc: "Formed in Philadelphia in 1988, Boyz II Men are the best-selling R&B group of all time. Known for silky harmonies and massive ballads like 'End of the Road' and 'I'll Make Love to You', they ruled the charts throughout the 90s. 🎤",
    formed: 1988,
    members: 4,
    origin: "Philadelphia, PA",
    hit: "End of the Road",
    num: "#001"
  },
  {
    name: "NSync",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/be/NSYNC.jpg",
    desc: "Formed in Orlando in 1995, *NSYNC became one of the biggest boy bands ever. Featuring Justin Timberlake, they sold over 70 million records worldwide with hits like 'Bye Bye Bye' and 'Tearin' Up My Heart'. 💫",
    formed: 1995,
    members: 5,
    origin: "Orlando, FL",
    hit: "Bye Bye Bye",
    num: "#002"
  },
  {
    name: "New Kids on the Block",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/New_Kids_on_the_Block.JPG",
    desc: "The original 90s boy band! Formed in Boston in 1984, NKOTB pioneered the boy band blueprint with massive hits like 'Hangin' Tough' and 'Step by Step'. They literally started it all. 🔥",
    formed: 1984,
    members: 5,
    origin: "Boston, MA",
    hit: "Hangin' Tough",
    num: "#003"
  },
  {
    name: "98 Degrees",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/98_Degrees_Mixtape.jpg",
    desc: "Formed in LA in 1996, 98 Degrees featured Nick and Drew Lachey alongside Jeff Timmons and Justin Jeffre. Their romantic hits like 'Because of You' and 'The Hardest Thing' made them every girl's dream. 💘",
    formed: 1996,
    members: 4,
    origin: "Los Angeles, CA",
    hit: "Because of You",
    num: "#004"
  },
  {
    name: "One Direction",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/40/One_Direction_2012_Stockholm.jpg",
    desc: "Formed on The X Factor UK in 2010, One Direction — Harry Styles, Niall Horan, Liam Payne, Louis Tomlinson, and Zayn Malik — became a global phenomenon with anthems like 'What Makes You Beautiful'. ⭐",
    formed: 2010,
    members: 5,
    origin: "London, UK",
    hit: "What Makes You Beautiful",
    num: "#005"
  },
];

const veggies = [
  { name: "Carrots",  emoji: "🥕" },
  { name: "Kale",     emoji: "🥬" },
  { name: "Zucchini", emoji: "🥒" },
  { name: "Broccoli", emoji: "🥦" },
  { name: "Squash",   emoji: "🎃" },
];

// scores[bandIndex][veggieIndex] = count
const scores = bands.map(() => veggies.map(() => 0));

const veggieColors = ["#FF8C00", "#5aab3e", "#7dc97d", "#3D9970", "#e8621a"];

const bandElement = document.getElementById("boy_bands");
const chartElement = document.getElementById("veggie-chart");

function renderChart() {
    const totals = scores.map(s => s.reduce((a, b) => a + b, 0));
    const max = Math.max(...totals, 1);

    chartElement.innerHTML = bands.map(function(band, i) {
        const segments = veggies.map(function(v, j) {
            const w = (scores[i][j] / max) * 100;
            return w > 0
                ? "<div class='chart-segment' style='width:" + w + "%;background:" + veggieColors[j] + "' title='" + v.name + ": " + scores[i][j] + "'></div>"
                : "";
        }).join("");

        const total = totals[i];
        return "<div class='chart-row'>" +
            "<span class='chart-label'>" + band.name + "</span>" +
            "<div class='chart-bar-wrap'>" +
                (total > 0 ? segments : "<div class='chart-empty'>no votes yet</div>") +
            "</div>" +
            "<span class='chart-count'>" + (total > 0 ? total + " 🥦" : "—") + "</span>" +
        "</div>";
    }).join("");
}

function renderBands() {
    let html = "";
    for (let i = 0; i < bands.length; i++) {
        let veggieBtns = veggies.map(function(v, j) {
            return "<button class='veggie-btn' data-band='" + i + "' data-veggie='" + j + "'>" +
                v.emoji +
                "<span class='veggie-count' id='score-" + i + "-" + j + "'>" +
                    (scores[i][j] > 0 ? " x" + scores[i][j] : "") +
                "</span>" +
            "</button>";
        }).join("");

        html += "<div class='band-card'>" +
            "<div class='band-card-top'>" +
                "<span class='band-name'>" + bands[i].name + "</span>" +
                "<button class='ui right labeled icon button band-btn' data-index='" + i + "'>" +
                    "<i class='right arrow icon'></i>View Band" +
                "</button>" +
            "</div>" +
            "<div class='band-mini-stats'>" +
                "<span>📅 " + bands[i].formed + "</span>" +
                "<span>👥 " + bands[i].members + " members</span>" +
                "<span>📍 " + bands[i].origin + "</span>" +
            "</div>" +
            "<div class='veggie-rating'>" +
                "<span class='veggie-rating-label'>Rate with veggies:</span>" +
                veggieBtns +
            "</div>" +
        "</div>";
    }
    bandElement.innerHTML = html;
    attachListeners();
}

function attachListeners() {
    document.querySelectorAll(".band-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            const idx = this.dataset.index;
            const band = bands[idx];
            modalImg.src = band.img;
            modalImg.alt = band.name;
            modalTitle.textContent = band.name;
            modalDesc.textContent = band.desc;
            modalFormed.textContent = band.formed;
            modalMembers.textContent = band.members;
            modalOrigin.textContent = band.origin;
            modalHit.textContent = band.hit;
            modalNum.textContent = band.num + " / 005";
            modal.classList.add("active");
        });
    });

    document.querySelectorAll(".veggie-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            const b = parseInt(this.dataset.band);
            const v = parseInt(this.dataset.veggie);
            scores[b][v]++;
            const el = document.getElementById("score-" + b + "-" + v);
            el.textContent = " x" + scores[b][v];
            this.classList.add("veggie-pop");
            this.addEventListener("animationend", () => this.classList.remove("veggie-pop"), { once: true });
            renderChart();
        });
    });
}

const modal = document.getElementById("band-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalFormed = document.getElementById("stat-formed");
const modalMembers = document.getElementById("stat-members");
const modalOrigin = document.getElementById("stat-origin");
const modalHit = document.getElementById("stat-hit");
const modalNum = document.getElementById("card-number");
const closeBtn = document.getElementById("modal-close");

closeBtn.addEventListener("click", function() {
    modal.classList.remove("active");
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

renderBands();
renderChart();

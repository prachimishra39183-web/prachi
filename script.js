console.log("Campus Diaries loaded successfully");

/* ================= SLIDER ================= */

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Safety check
if (slides.length > 0) {
  showSlide(index);
}

nextBtn?.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn?.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

/* Auto slide */
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);


/* ================= MY DIARY SECTION ================= */

/* ================= CAMPUS DIARY HISTORY ================= */

const diaryLink = [...document.querySelectorAll("nav a")]
  .find(link => link.textContent.toLowerCase().includes("diary"));

// Sample data (you can edit or auto-add later)
let diaryHistory = JSON.parse(localStorage.getItem("campusDiary")) || [
  {
    event: "Campus Tech Meetup",
    date: "10 July 2026",
    status: "Won 🏆",
    category: "Technical"
  },
  {
    event: "Coding Challenge",
    date: "12 July 2026",
    status: "Participated 🎯",
    category: "Technical"
  },
  {
    event: "Cultural Showcase",
    date: "14 July 2026",
    status: "Won 🏆",
    category: "Cultural"
  }
];

// Create diary modal
const diaryModal = document.createElement("div");
diaryModal.className = "diary-modal";
diaryModal.innerHTML = `
  <div class="diary-box">
    <span class="close-diary">&times;</span>
    <h2>📖 My Campus Diary</h2>
    <div class="diary-history"></div>
  </div>
`;
document.body.appendChild(diaryModal);

// Render diary history
function renderDiary() {
  const container = diaryModal.querySelector(".diary-history");
  container.innerHTML = "";

  diaryHistory.forEach(item => {
    container.innerHTML += `
      <div class="diary-entry">
        <h4>${item.event}</h4>
        <p>📅 ${item.date}</p>
        <p>🏷 ${item.category}</p>
        <span class="status">${item.status}</span>
      </div>
    `;
  });

  localStorage.setItem("campusDiary", JSON.stringify(diaryHistory));
}

// Open diary
diaryLink?.addEventListener("click", (e) => {
  e.preventDefault();
  renderDiary();
  diaryModal.style.display = "flex";
});

// Close diary
diaryModal.querySelector(".close-diary").onclick = () => {
  diaryModal.style.display = "none";
};
const buttons = document.querySelectorAll('.view-events-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the sibling <ul> in the same card
      const eventsList = button.nextElementSibling;
      
      // Toggle visibility
      if (eventsList.style.display === "none") {
        eventsList.style.display = "block";
        button.textContent = "Hide Events"; // change button text
      } else {
        eventsList.style.display = "none";
        button.textContent = "View Events";
      }
    });
  });

  var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

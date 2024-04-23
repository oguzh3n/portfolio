const seeAll = document.getElementById("seeAll");
const desc = document.getElementById("desc");

seeAll.addEventListener('click', function() {
  desc.classList.remove("hidden");
  seeAll.classList.add("hidden");
});

document.addEventListener('click', (event) => {
  if (!seeAll.contains(event.target) && !desc.contains(event.target)) {
    desc.classList.add("hidden");
    seeAll.classList.remove("hidden");
  }
});

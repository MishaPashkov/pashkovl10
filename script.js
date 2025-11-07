const cakes = [
  { name: "cake1", img: "img/cake1.png" },
  { name: "cake2", img: "img/cake2.png" },
  { name: "cake3", img: "img/cake3.png" },
  { name: "cake4", img: "img/cake4.png" },
  { name: "cake5", img: "img/cake5.png" }
];
let user = prompt("Your name") || "User";
document.getElementById("userName").textContent = user;
let round = 0, win = 0;
function getSet() {
  return cakes.sort(() => Math.random() - 0.5).slice(0, 3);
}
function spin() {
  if (round >= 3) return;
  round++;
  document.getElementById("round").textContent = `Спроба ${round} із 3`;
  const final1 = getSet();
  const final2 = getSet();
  const final3 = getSet();
  showImages("col1", final1);
  showImages("col2", final2);
  showImages("col3", final3);
  for (let i = 0; i < 3; i++) {
    if (final1[1].name === final2[1].name && final2[1].name === final3[1].name) {
      win++;
    }
  }
  if (round === 3) {
    setTimeout(() => {
      alert(win > 0 ? `${user} won!` : `${user} lose`);
      round = win = 0;
      document.getElementById("round").textContent = `Спроба 0 із 3`;
    }, 300);
  }
}
function showImages(colId, set) {
  const col = document.getElementById(colId);
  col.innerHTML = set.map(cake => `<img src="${cake.img}" alt="${cake.name}" class="slot-img">`).join("");
}

const btn = document.getElementById("chaosBtn");
const status = document.getElementById("status");

btn.addEventListener("click", ()=>{
  const pick = Math.floor(Math.random()*effects.length);
  status.textContent = `Effect #${pick+1}`;
  effects[pick]();
});

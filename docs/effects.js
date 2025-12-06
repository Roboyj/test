
const effects = [];

function modal(text, time=2000){
  const o=document.getElementById('overlay');
  o.innerHTML=`<div style="background:#111;padding:20px;border-radius:10px">${text}</div>`;
  o.classList.remove('hidden');
  setTimeout(()=>o.classList.add('hidden'), time);
}

// 1-35 EFFECTS
effects.push(()=>modal("Screen Glitch!"));
effects.push(()=>modal("Random Meme 😂"));
effects.push(()=>modal("You won ₹999,999 🎉"));
effects.push(()=>modal("Roasted 🔥"));
effects.push(()=>modal("Jump scare!"));
effects.push(()=>modal("Confetti blast"));
effects.push(()=>modal("Hacker mode enabled"));
effects.push(()=>window.open("https://theuselessweb.com"));
effects.push(()=>modal("Generative Art"));
effects.push(()=>modal("Random Poem"));
effects.push(()=>modal("Pixel Distortion"));
effects.push(()=>modal("Color Universe"));
effects.push(()=>modal("ASCII Mode"));
effects.push(()=>modal("I Know You 😈"));
effects.push(()=>modal("Your future revealed"));
effects.push(()=>modal("Reality Question"));
effects.push(()=>confirm("Are you brave?"));
effects.push(()=>modal("Mini Game Launch"));
effects.push(()=>modal("Reaction Test"));
effects.push(()=>modal("One Chance Challenge"));
effects.push(()=>modal("Productivity Tip"));
effects.push(()=>modal("AI Tool Suggestion"));
effects.push(()=>modal("Coding Snippet"));
effects.push(()=>modal("Life Hack"));
effects.push(()=>modal("Motivation Quote"));
effects.push(()=>modal("Gravity Flip"));
effects.push(()=>modal("Time Reversal"));
effects.push(()=>modal("Fake Lag"));
effects.push(()=>modal("Mirror Mode"));
effects.push(()=>modal("Silent Mode"));
effects.push(()=>modal("Brain Age Calculated"));
effects.push(()=>modal("Personality Result"));
effects.push(()=>modal("Internet Mood"));
effects.push(()=>modal("Luck %"));
effects.push(()=>modal("Your Superpower"));

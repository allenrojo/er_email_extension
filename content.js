function showTitleCard(text) {
  // Remove any existing card first
  const oldCard = document.getElementById("ds-title-card");
  if (oldCard) oldCard.remove();

  // Create card element
  const card = document.createElement("div");
  card.id = "ds-title-card";
  card.textContent = text;
  document.body.appendChild(card);

  const audio = new Audio(chrome.runtime.getURL("elden_ring_sfx.mp3"));
  audio.volume = 0.8; // adjust volume
  audio.play().catch(err => console.warn("Audio play failed:", err));

  // Trigger fade-out after 3s
  setTimeout(() => {
    card.classList.add("fade-out");
    setTimeout(() => card.remove(), 1000); // cleanup after fade
  }, 3000);
}

document.addEventListener("click", (e) => {
  const sendBtn = e.target.closest("div.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3[role='button']");
  if (sendBtn) {
    console.log("Send button clicked!");
    showTitleCard("EMAIL SENT"); // ← text here
  }
});

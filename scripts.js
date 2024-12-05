function checkPassword() {
  const input = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (input === "h4ckm3") {
    feedback.innerHTML =
      '<a href="level3.html">Bien joué ! Passer au niveau 3.</a>';
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Mot de passe incorrect. Essayez encore.";
    feedback.style.color = "red";
  }
}

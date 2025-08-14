//
//  script.js
//  
//
//  Created by Bob Robertson on 8/14/25.
//

// Check login state
document.addEventListener("DOMContentLoaded", () => {
  const storedUser = localStorage.getItem("username");
  if (storedUser) {
    showApp(storedUser);
  }
});

document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("username", username);
    showApp(username);
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("username");
  location.reload();
});

function showApp(username) {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("user-display").textContent = username;
}

// Add snippets
document.getElementById("add-snippet").addEventListener("click", () => {
  const container = document.getElementById("snippet-container");
  const text = document.getElementById("new-snippet").value.trim();

  if (text) {
    const pre = document.createElement("pre");
    pre.textContent = text;
    container.appendChild(pre);
    document.getElementById("new-snippet").value = "";
  }
});

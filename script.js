//
//  script.js
//  
//
//  Created by Bob Robertson on 8/14/25.
//

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

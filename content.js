chrome.storage.sync.get("theme", function (data) {
    var currentTheme = data.theme;
    var newTheme = currentTheme === "light" ? "dark" : "light";
    chrome.storage.sync.set({ theme: newTheme });
    applyTheme(newTheme);
  });
  
  function applyTheme(theme) {
    var css = `
      :root {
        filter: ${theme === "dark" ? "invert(100%)" : "none"} !important;
        background-color: ${theme === "dark" ? "#1a1a1a" : "white"} !important;
        color: ${theme === "dark" ? "white" : "black"} !important;
      }
    `;
    var style = document.createElement("style");
    style.textContent = css;
    document.documentElement.appendChild(style);
  }
  
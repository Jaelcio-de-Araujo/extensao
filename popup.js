document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: applyTheme
      });
    });
  });

  function applyTheme() {
    var css = `
      :root {
        filter: invert(100%) hue-rotate(180deg) !important;
      }
    `;
    var style = document.createElement("style");
    style.textContent = css;
    document.documentElement.appendChild(style);
  }
});

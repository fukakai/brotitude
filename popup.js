// when the page is loaded
var broButton = document.getElementById("toggle-button");
var broStatus = document.getElementById("status-image");

chrome.storage.local.get("enable", function (data) {
	broButton.textContent = data.enable ? "disable" : "enable";
	broStatus.src = data.enable ? "enabled.png" : "disabled.png";
});

// event listener
document.addEventListener("DOMContentLoaded", function () {
  var broButton = document.getElementById("toggle-button");
  var broStatus = document.getElementById("status-image");
  
  broButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "toggleExtension" });
	broButton.textContent = broButton.textContent === "enable" ? "disable" : "enable";
	broStatus.src = broButton.textContent === "enable" ? "disabled.png" : "enabled.png";
  });
});

let mapBro = new Map([["Pro","Bro"],["PRO","BRO"],["pro","bro"]]);
let arrayBro = Array.from(mapBro.keys());
var configBro = {
  childList: true,
  subtree: true
};

function replaceText(node) {
  if(checkToContinue(node)) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (checkToContinueParent(node)) {
        if(arrayBro.find(v => node.textContent.includes(v))) {
          replaceProBro(node);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.childNodes.forEach(childNode => replaceText(childNode));
    }
  }
}

function replaceProBro(node){
  for (let [key, value] of mapBro) {
    node.textContent = node.textContent.replace(new RegExp(key, 'g'), value);
  }
}
function checkToContinue(node) {
  return node.parentNode !== null
      && !(isEditable(node) || isInputType(node));
}

function checkToContinueParent(node){
    return node.parentNode !== null
        && !(isEditable(node.parentNode) || isInputType(node.parentNode));
}

function isEditable(node){
  return typeof node.getAttribute !== "undefined" && node.getAttribute("contenteditable") === "true";
}

function isInputType(node){
  return node.tagName === "input" || node.tagName === "datalist";
}

window.onload = function() {
  replaceText(document.body);
};

var observerBro = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    mutation.addedNodes.forEach(node => replaceText(node));
  });
});
observerBro.observe(document.body, configBro);

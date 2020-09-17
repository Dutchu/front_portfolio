const path = "//h2[@class='_9c44d_pEGMd']";

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

console.log(getElementByXpath("//h2[@class='_9c44d_pEGMd']"));

let element = getElementByXpath(path);

function removeElement(element) {
  // Removes an element from the document
  element.parentNode.removeChild(element);
}

removeElement(element);

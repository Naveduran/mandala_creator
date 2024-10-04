


function createHtmlElement(element, layer){
  // Creates an html element with it's attributes
  // it's children and text node
  let eName = element.name
  let eAtts = element.attributes
  let eChildren = element.children
  let eText = element.textNode

  console.log(layer)
  let htmlElement = document.createElement(eName);

  if (eAtts){
    eAtts = Object.entries(eAtts)
    for (let i = 0; i < eAtts.length; i++){
      htmlElement.setAttribute(
        eAtts[i][0],
        eAtts[i][1]
      );
    }
  }
  if (eChildren){
    b = eChildren
    for (let child of eChildren){
      a = child
      let newChild = createHtmlElement(child)
      htmlElement.appendChild(newChild)
    }
  }
  if (eText){
    let text = document.createTextNode(eText);
    htmlElement.appendChild(text);
  }
  return htmlElement
}


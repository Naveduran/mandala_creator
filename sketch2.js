// This functions allows to create mandalas easily based on a configuration. It uses p5 and p5.polar libraries to do it.

let backgroundColorInput;
let backgroundColor = "#ffffff"

const initialConfig = {
  size: 900,
  layers: [
    {
      name:'Lines',
      strokeColor: '#f6f678',
      fillColor: '#f6f678',
      figureName: 'line',
      figureSettings: {
        total: 4,
        size: 180
      },
    },
    {
      name:'Circle 1',
      strokeColor: '#f33890',
      fillColor: '#f33890',
      figureName: 'circle',
      figureSettings: {
        total: 14,
        radius: 50,
        distance: 165
      },
    },
  ]
}

const config = initialConfig

// Resize the canvas when the browser's size changes.
function windowResized() {
  if (windowHeight > windowWidth){ //phone
    resizeCanvas(windowWidth - 18, windowWidth - 18);
  } else { //desktop
    resizeCanvas(windowHeight - 18, windowHeight - 18);
  }
}

// use the rgb values of the color picker to set the mandala background
function updateCanvasColor(event) {
  backgroundColor = event.target.value
}

// Runs once, Creates the space to draw
function setup()
{
  createCanvas(900,900);
  windowResized()
  frameRate(100);
  // Allow changing the background color of the canvas
  backgroundColorInput = document.querySelector("#backgroundColorInput");
  backgroundColorInput.addEventListener("input", updateCanvasColor, false);
  backgroundColorInput.select();

  // Set dark background if the user theme is dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    backgroundColor = "#000000"
  }

  let layers = document.getElementById("layers");
  config.layers.forEach((layerConfig) => {
    let htmlLayer = drawHtmlLayer(layerConfig)
    layers.appendChild(htmlLayer);
  })

}

// Iterates trough configuration to draw each layer of the mandala
function draw() {
  background(backgroundColor);
  setCenter(width/2, height/2);

  config.layers.forEach((layerConfig) => {
    drawMandalaLayer(layerConfig)
  })
}

function drawHtmlLayer(layerConfig){
  let newLayer = document.createElement('div');
  newLayer.setAttribute("class","layer");

  const elementsOfLayer = [
    {
      name:"button",
      attributes:{class: "imagedButton"},
      children: [{name:"img",attributes: {class:"clickable-button", src:"https://img.icons8.com/?size=100&id=25019&format=png&color=000000", alt:"move"}}]
    },
    {
      name:"input",
      attributes:{type:"number", id:"figureNumber", name:"figureNumber", value:layerConfig.figureSettings.total},
    },
    {/*replaced for size in lines*/
      name:"input",
      attributes:{type:"number", id:"figureRadius", name:"figureRadius", value:layerConfig.figureSettings.radius},
    },
    {/*removed in lines*/
      name:"input",
      attributes:{type:"number", id:"figureDistance", name:"figureDistance", value:layerConfig.figureSettings.distance},
    },
    {
      name:"select",
      attributes:{name:"figureName", id:"figureName", class:"clickable-button", value:layerConfig.figureName},
      children:[
        {name:"option", attributes:{value:"triangle", class:"clickable-button"}, textNode: "Triangles"},
        {name:"option", attributes:{value:"circle", class:"clickable-button"}, textNode: "Circles"},
        {name:"option", attributes:{value:"line", class:"clickable-button"}, textNode: "Lines"},
        {name:"option", attributes:{value:"square", class:"clickable-button"}, textNode: "Squares"},
      ]
    },
    {
      name:"label",
      attributes:{for:"borderColor"},
      textNode: "Border"
    },
    {
      name:"input",
      attributes:{type:"color", id:"borderColor", name:"borderColor", class:"clickable-button", value:layerConfig.strokeColor},
    },
    {
      name:"label",
      attributes:{for:"fillColor"},
      textNode: "Fill"
    },
    {
      name:"input",
      attributes:{type:"color", id:"fillColor", name:"fillColor", class:"clickable-button", value:layerConfig.fillColor},
    },
    {
      name:"button",
      attributes:{type:"button", class:"plus-button"},
      textNode: "+"
    },
    {
      name:"button",
      attributes:{class: "imagedButton"},
      children: [{name:"img", attributes: {class:"clickable-button", src:"https://img.icons8.com/?size=100&id=13758&format=png&color=000000", alt:"visibility"}}]
    },
  ]

  /*if line, then remove radius and distance and add size*/ 
  if(layerConfig.figureName == 'line'){

    elementsOfLayer[2] = {name:"input", attributes:{type:"number", id:"figureSize", name:"figureSize", value:layerConfig.figureSettings.size}},
    elementsOfLayer[3] = {name:"div", attributes:{class:"empty-attribute"}}
  }

  for (let element of elementsOfLayer) {
    if (element){
      htmlElement = createHtmlElement(element, layerConfig)
      newLayer.appendChild(htmlElement);
    }
  }
  return newLayer
}


function createHtmlElement(element, layer){
  // Creates an html element with it's attributes
  // it's children and text node

  console.log(element)

  let eName = element.name
  let eAtts = element.attributes
  let eChildren = element.children
  let eText = element.textNode
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




// Use the received layer configuration to draw the described figures with its respective border and fill color
function drawMandalaLayer(layer){
    //console.log('layer:', layer.name,'\nstroke:',layer.strokeColor,'\nfill:', layer.fillColor,'\nfigure: ', layer.figureName, '\nsettings: ', layer.figureSettings)
    if (layer.strokeColor){stroke(layer.strokeColor);
    } else {noStroke();}

    if (layer.fillColor){fill(layer.fillColor);
    } else {noFill();}

    drawFigures(layer.figureName, layer.figureSettings)
}

// Run the function that creates a figure
function drawFigures(figureName, figureSettings){
  figures[figureName](figureSettings)
}

// Contains the figures name with its correspondent function
const figures = {
  'line': function lines({total, size, distance=0}){
    for (line=0; line < total; line++){
      let angle = (360 /total)*line;
      try {
        polarLine(angle, size, distance);
      } catch (error) {
        console.error(error);
      }
    }
  },
  'circle': function circles({total, radius, distance=0}){
    try {
      polarEllipses(total, radius, radius, distance);
    } catch (error) {
      console.error(error);
    }
  },
  'triangle': function triangle({total, radius, distance=0}){
    try {
      polarTriangles(total, radius, distance);
    } catch (error) {
      console.error(error);
    }
  },
  'square':  function square({total, radius, distance=0}){
    try {
      //polarSquares(total, radius, distance);
    } catch (error) {
      console.error(error);
    }
    //Not working for a problem with the original library :(
    //polarSquares(8,4,160);
    //polarSquares(total, radius, distance);
    //maybe let's consider rectangles!
  }
}

function figuresNames() {return Object.keys(figures)}
function figuresNumber() {return Object.keys(figures).length}

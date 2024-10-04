// This functions allows to create mandalas easily based on a configuration. It uses p5 and p5.polar libraries to do it.

let a;
let b;
let c;
let d;
let backgroundColorInput;
let backgroundColor = "#ffffff"

window.addEventListener("load", startup, false);

function startup() {


  // Allow changing the background color of the canvas
  backgroundColorInput = document.querySelector("#backgroundColorInput");
  backgroundColorInput.addEventListener("input", updateCanvasColor, false);
  backgroundColorInput.select();

  // Set dark background if the user theme is dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    backgroundColor = "#000000"
  }
  
  // read config to create html editable layers
  createLayers();
}

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

//-------------------CONFIG----------------------------

elementsOfLayer = [
  {
    name:"button",
    attributes:{class: "imagedButton"},
    children:[
      {
        name:"img",
        attributes: {
          class:"clickable-button", src:"https://img.icons8.com/?size=100&id=63794&format=png&color=000000",
          alt:"less"
        },
      }
    ]
  },
  {
    name:"input",
    attributes:{type:"text", id:"figureNumber", name:"figureNumber", value:"3"},
  },
  {
    name:"button",
    attributes:{class: "imagedButton"},
    children:[
      {
        name:"img",
        attributes: {
          class:"clickable-button", src:"https://img.icons8.com/?size=100&id=63796&format=png&color=000000",
          alt:"more"
        },
      }
    ]
  },
  {
    name:"select",
    attributes:{name:"figureName", id:"figureName", class:"clickable-button"},
    children:[
      {
        name:"option",
        attributes:{value:"triangle", class:"clickable-button"},
        textNode: "Triangles"
      },
      {
        name:"option",
        attributes:{value:"circle", class:"clickable-button"},
        textNode: "Circles"
      },
      {
        name:"option",
        attributes:{value:"line", class:"clickable-button"},
        textNode: "Lines"
      },
      {
        name:"option",
        attributes:{value:"square", class:"clickable-button"},
        textNode: "Squares"
      },
    ]
  },
  {
    name:"label",
    attributes:{for:"borderColor"},
    textNode: "Border"
  },
  {
    name:"input",
    attributes:{type:"color", id:"borderColor", name:"borderColor", value:"#e66465", class:"clickable-button"},
  },
  {
    name:"label",
    attributes:{for:"fillColor"},
    textNode: "Fill"
  },
  {
    name:"input",
    attributes:{type:"color", id:"fillColor", name:"fillColor", value:"#e66465", class:"clickable-button"},
  },
  {
    name:"button",
    attributes:{type:"button", class:"plus-button"},
    textNode: "+"
  },
]

function createHtmlElement(element){
  // Creates an html element with it's attributes
  // it's children and text node
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

function createLayers() {
  let layers = document.getElementById("layers");
 
  // create layer iterando en la config

  
    //create elements usando la config del layer!!!
  
  for (let element of elementsOfLayer) {
    let newLayer = document.createElement('div');
    htmlElement = createHtmlElement(element)
    newLayer.appendChild(htmlElement);
  }
  layers.appendChild(newLayer);
}


//-------------------DRAWING----------------------------

// Creates the space to draw
function setup()
{
  createCanvas(900,900);
  windowResized()
  frameRate(100);
}

// Iterates trough configuration to draw each layer of the mandala
function draw() {
  const layers = config.layers
  background(backgroundColor);
  setCenter(width/2, height/2);
  layers.forEach((layer) => {
    drawLayer(layer)
  })
}

// Use the received layer configuration to draw the described figures with its respective border and fill color
function drawLayer(layer){
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

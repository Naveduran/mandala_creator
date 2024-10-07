// This functions allows to create mandalas easily based on a configuration. It uses p5 and p5.polar libraries to do it.

let backgroundColorInput;
let backgroundColor = "#ffffff"

const initialConfig = {
  size: 900,
  layers: [
    {
      id: 0,
      name:'Lines',
      strokeColor: 'hsla(130, 0%, 50%, 1)',
      fillColor: null,
      figureName: 'line',
      figureSettings: {
        total: 4,
        size: 180
      },
    },
    {
      id: 1,
      name:'Circle 1',
      strokeColor: null,
      fillColor: 'hsla(239, 100%, 65%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        total: 14,
        radius: 50,
        distance: 165
      },
    },
    {
      id: 2,
      name:'Circle 2',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 72%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        total: 10,
        radius: 35,
        distance: 135
      },
    },
    {
      id: 3,
      name:'Circle 3',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 81%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        radius: 60,
        total: 10,
        distance: 80
      },
    },
    {
      id: 4,
      name:'Circle 4',
      strokeColor: null,
      fillColor: 'hsla(54, 86%, 83%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        radius: 30,
        total: 10,
        distance: 80
      },
    },
    {
      id: 5,
      name:'Circle 5',
      strokeColor: null,
      fillColor: 'hsla(300, 100%, 90%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        total: 5,
        radius: 40,
        distance: 35
      },
    },
    {
      id: 6,
      name:'Details 1',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'circle',
      figureSettings: {
        total: 12,
        radius: 8,
        distance: 40
      },
    },
    {
      id: 7,
      name:'Circle 6',
      strokeColor: null,
      fillColor: 'hsla(269, 72%, 86%, 0.4)',
      figureName: 'circle',
      figureSettings: {
        total: 5,
        radius: 20,
        distance: 35
      },
    },
    {
      id: 8,
      name:'Details 2',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      figureSettings: {
        total: 4,
        radius: 6,
        distance: 60
      },
    },
    {
      id: 9,
      name:'Details 3',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      figureSettings: {
        total: 4,
        radius: 10,
        distance: 175
      },
    },
    {
      id: 10,
      name:'Details 4',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      figureSettings: {
        total: 8,
        radius: 2,
        distance: 80
      },
    },
    {
      id: 11,
      name:'Details 5',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      figureSettings: {
        total: 4,
        radius: 5,
        distance: 150
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
    layers.appendChild(drawHtmlLayer(layerConfig));
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
  console.log(layerConfig)
  let layerStructure = ` <div class="layer" id=${layerConfig.id}>
    <div class="layer-column-a">
      <button class="imagedButton">
        <img class="clickable-button" src="https://img.icons8.com/?size=100&id=25019&format=png&color=000000" alt="move"/>
      </button>
    </div>
    <div class="layer-column-b">
      <div class="layer-column-b-row-1">
        <div class="layer-column-b-row-1-column-a">
          <label class="row-a"> Fill 
          <input type="text" data-coloris id="fillColor${layerConfig.id}" name="fillColor" class="color-picker" value=${layerConfig.fillColor} style="background-color: ${layerConfig.fillColor}"></label>
          <label class="row-a"> Border
          <input type="text" data-coloris id="borderColor${layerConfig.id}", name="borderColor" class="color-picker", value=${layerConfig.strokeColor} style="background-color: ${layerConfig.strokeColor}"></label>
          <label class="row-a"> Quantity <input type="number" id="figureNumber${layerConfig.id}" name="figureNumber" value=${layerConfig.figureSettings.total}></input></label>
        </div>
        <div class="layer-column-b-row-1-column-b">
          <select name="figureName" id="figureName${layerConfig.id}" class="clickable-button" value=${layerConfig.figureName}>
            <option value="triangle" >
              &#9651; 
            </option>
            <option value="circle" >
              &#9711; 
            </option>
            <option value="line" >
               /
            </option>
            <option value="square" >
              &#9634; 
            </option>
          </select>
          <button class="imagedButton">
            <img class="clickable-button" src="https://img.icons8.com/?size=100&id=13758&format=png&color=000000" alt="visibility"/>
          </button>
        </div>
      </div>
      <div class="layer-column-b-row-2">
        <label> Size <input type="range" min="1" max="800" id="figureRadius${layerConfig.id}" name="figureRadius" value=${layerConfig.figureSettings.radius}></input></label>
        <label> Distance <input type="range" min="1" max="800" id="figureDistance${layerConfig.id}" name="figureDistance" value=${layerConfig.figureSettings.distance}></input></label>
      </div>
    </div>
  </div> `

  //console.log(layerStructure)
  let newLayer = document.createElement('div');
  newLayer.setAttribute("class","layer");
  newLayer.innerHTML = layerStructure
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

Coloris({
  forceAlpha: true,
  format: 'hsl',
  onChange: (color, input) => {
    console.log(color, input, typeof(color))
    input.setAttribute(
      'style',
      `background-color:${color}`
    )
  }
});
// This functions allows to create mandalas easily based on a configuration. It uses p5 and p5.polar libraries to do it.

let backgroundColorInput;
let backgroundColor = "#ffffff"
let a

const initialConfig = {
  size: 900,
  layers: [
    {
      name:'Lines',
      strokeColor: 'hsla(130, 0%, 50%, 1)',//OK
      fillColor: null,//OK
      figureName: 'line',
      total: 4,
      radius: 180,
      distance: 0
    },
    {
      name:'Circle 1',
      strokeColor: null,
      fillColor: 'hsla(239, 100%, 65%, 0.5)',
      figureName: 'circle',
      total: 14,
      radius: 50,
      distance: 165
    },
    {
      name:'Circle 2',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 72%, 0.5)',
      figureName: 'circle',
      total: 10,
      radius: 35,
      distance: 135
      
    },
    {
      name:'Circle 3',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 81%, 0.5)',
      figureName: 'circle',
      radius: 60,
      total: 10,
      distance: 80
      
    },
    {
      name:'Circle 4',
      strokeColor: null,
      fillColor: 'hsla(54, 86%, 83%, 0.5)',
      figureName: 'circle',
      radius: 30,
      total: 10,
      distance: 80
    },
    {
      name:'Circle 5',
      strokeColor: null,
      fillColor: 'hsla(300, 100%, 90%, 0.5)',
      figureName: 'circle',
      total: 5,
      radius: 40,
      distance: 35
      
    },
    {
      name:'Details 1',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'circle',
      total: 12,
      radius: 8,
      distance: 40
    },
    {
      name:'Circle 6',
      strokeColor: null,
      fillColor: 'hsla(269, 72%, 86%, 0.4)',
      figureName: 'circle',
      total: 5,
      radius: 20,
      distance: 35
    },
    {
      name:'Details 2',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      total: 4,
      radius: 6,
      distance: 60
    },
    {
      name:'Details 3',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      total: 4,
      radius: 10,
      distance: 175
    },
    {
      name:'Details 4',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      total: 8,
      radius: 2,
      distance: 80
    },
    {
      name:'Details 5',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      total: 4,
      radius: 5,
      distance: 150
    },
  ]
}

// we work over config, and we touch initialConfig only to save a permanent version

let history = [initialConfig]
let currentIndex = 0
let lastChange = 0;
let delay = 20;

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
  console.log(history[currentIndex].layers)
  createCanvas(900,900);
  windowResized()
  frameRate(1);
  // Allow changing the background color of the canvas
  backgroundColorInput = document.querySelector("#backgroundColorInput");
  backgroundColorInput.addEventListener("input", updateCanvasColor, false);
  backgroundColorInput.select();

  // Set dark background if the user theme is dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    backgroundColor = "#000000"
  }

  setupHtmlLayers()
}

// Iterates trough configuration to draw each layer of the mandala
function draw() {
  background(backgroundColor);
  setCenter(width/2, height/2);
  history[currentIndex].layers.forEach((layerConfig) => {
    drawMandalaLayer(layerConfig)
  })
}

function setupHtmlLayers() {
  let layersHtml = document.getElementById("layers");
  let layersConfig = history[currentIndex].layers
  let totalLayers = layersConfig.length

  for (let index = 0; index < totalLayers; index++) {
    layersHtml.appendChild(
      drawHtmlLayer(
        layersConfig[index],
        index,
        totalLayers
      )
    )
  }

}

function drawHtmlLayer(layerConfig, layerId, totalLayers){
  let upButtonHtml = `<button class="imagedButton"  title="Move up" onclick="moveLayer(${layerId}, 'up')" >
        <img class="clickable-button" src="https://img.icons8.com/?size=100&id=19162&format=png&color=000000" alt="move up"/>
      </button>`
  let downButtonHtml = `<button class="imagedButton" title="Move down" onclick="moveLayer(${layerId}, 'down')">
  <img class="clickable-button" src="https://img.icons8.com/?size=100&id=19161&format=png&color=000000" alt="move down"/>
</button>`
  let layerStructure = `
    <div class="layer-column-a">
      ${layerId > 0 ? upButtonHtml : ''}
      ${layerId < totalLayers -1 ? downButtonHtml : ''}
    </div>
    <div class="layer-column-b">
      <div class="layer-column-b-row-1">
        <div class="layer-column-b-row-1-column-a">
          <label class="row-a"> Fill 
          <input type="text" data-coloris id="fillColor-${layerId}" name="fillColor" class="color-picker" value="${layerConfig.fillColor}" style="background-color: ${layerConfig.fillColor}" title="Color inside the figure"></label>
          <label class="row-a"> Border
          <input type="text" data-coloris id="strokeColor-${layerId}", name="strokeColor" class="color-picker", value="${layerConfig.strokeColor}" style="background-color: ${layerConfig.strokeColor}" title="Border color"></label>

          <label class="row-a"> Quantity <input type="number" id="figureNumber-${layerId}" name="figureNumber" value="${layerConfig.total}" onchange="onChangeQuantity(${layerId}, value)" title="Number of figures"></input></label>
        </div>
        <div class="layer-column-b-row-1-column-b">
          <select name="figureName" id="figureName-${layerId}" class="clickable-button" value="${layerConfig.figureName}" onchange="onChangeDefault(${layerId}, 'figureName', value)" title="Figure">
            <option value="triangle" ${layerConfig.figureName ==='triangle' ? "selected": ""}>
              &#9651; 
            </option>
            <option value="circle" ${layerConfig.figureName ==='circle' ? "selected": ""}>
              &#9711; 
            </option>
            <option value="line" ${layerConfig.figureName ==='line' ? "selected": ""}>
              &nbsp;/
            </option>
            <option value="square" ${layerConfig.figureName ==='square' ? "selected": ""}>
              &#9634; 
            </option>
          </select>
          <div class="layer-buttons">
          <button class="imagedButton" title="Show/hide this layer">
            <img class="clickable-button" src="https://img.icons8.com/?size=100&id=13758&format=png&color=000000" alt="visibility"/>
          </button>
          <button class="imagedButton" title="Remove Layer" onclick="removeLayer(${layerId})"><img src="https://img.icons8.com/?size=100&id=74176&format=png&color=000000" alt="remove this layer" class="clickable-button"  onclick="removeLayer(${layerId})" title="Remove layer"/></button>
          </div>
        </div>
      </div>
      <div class="layer-column-b-row-2">
        <label> Radius <input type="range" min="0" max="250" id="figureRadius${layerId}" name="figureRadius" value=${layerConfig.radius} onchange="onChangeDefault(${layerId}, 'radius', value)" title="Figure Size"></input></label>

        <label> Distance <input type="range" min="0" max="400" id="figureDistance${layerId}" name="figureDistance" value=${layerConfig.distance} onchange="onChangeDefault(${layerId}, 'distance', value)" title="Distance from mandala's center to figure's center"></input></label>
      </div>
    </div>`

  let newLayer = document.createElement('div');
  newLayer.setAttribute("class", "layer");
  newLayer.setAttribute("id", layerId);
  newLayer.innerHTML = layerStructure
  return newLayer
}

// Use the received layer configuration to draw the described figures with its respective border and fill color
function drawMandalaLayer(layer){
    if (layer.strokeColor){stroke(layer.strokeColor);
    } else {noStroke();}

    if (layer.fillColor){fill(layer.fillColor);
    } else {noFill();}

    drawFigures(layer.figureName, layer)
}

// Run the function that creates a figure
function drawFigures(figureName, layer){
  figures[figureName](layer)
}

// Contains the figures name with its correspondent function
const figures = {
  'line': function lines(layer){
    for (line=0; line < layer.total; line++){
      let angle = (360 /layer.total)*line;
      try {
        polarLine(angle, layer.radius, layer.distance);
      } catch (error) {
        console.error(error);
      }
    }
  },
  'circle': function circles(layer){
    try {
      polarEllipses(layer.total, layer.radius, layer.radius, layer.distance);
    } catch (error) {
      console.error(error);
    }
  },
  'triangle': function triangle(layer){
    try {
      polarTriangles(layer.total, layer.radius, layer.distance);
    } catch (error) {
      console.error(error);
    }
  },
  'square':  function square(layer){
    try {
      //polarSquares(layer.total, layer.radius, layer.distance);
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
  // accesibility configuration for color picker:
  a11y: {
    open: 'Open color picker',
    close: 'Close color picker',
    clear: 'Clear the selected color',
    marker: 'Saturation: {s}. Brightness: {v}.',
    hueSlider: 'Hue slider',
    alphaSlider: 'Opacity slider',
    input: 'Color value field',
    format: 'Color format',
    swatch: 'Color swatch',
    instruction: 'Saturation and brightness selector. Use up, down, left and right arrow keys to select.'
  },
  onChange: (color, input) => onChangeColor(color, input)
});

function onChangeColor(color, input){
  // bug: it is triggered too much times
  // this if reduced the amount but not enough
  if (lastChange >= (Date.now() - delay)){
    return;
  }
  lastChange = Date.now();

  let attribute = input.name
  let figureId = input.id.slice(input.id.indexOf("-") + 1)

  let newConfig = history[currentIndex]
  newConfig.layers[figureId][attribute] = color
  saveOnHistory(newConfig)

  input.setAttribute('style',`background-color:${color}`)
}

function onChangeDefault(figureId, attribute, value){
  let newConfig = history[currentIndex]
  newConfig.layers[figureId][attribute] = value
  saveOnHistory(newConfig)
}

function onChangeQuantity(figureId, value){
  let newConfig = history[currentIndex]
  newConfig.layers[figureId].total = value
  console.log('a', history[currentIndex].layers[0])
  saveOnHistory(newConfig)
  console.log('a', history[currentIndex].layers[0])
}

function undo() {
  console.log("in undo", history.length)
  console.log(document.getElementById("layers"))
  if (currentIndex > 0) {
    console.log("lets undo")
    currentIndex -= 1
    draw()
    drawHtmlAgain()
  }
}

function redo() {
  console.log("in redo")
  if (History.length > currentIndex) {
    console.log("lets redo")
    currentIndex += 1
  }
}

function saveOnHistory(newConfig) {
  history[currentIndex + 1] = newConfig
  currentIndex += 1
  draw()
  drawHtmlAgain()
}

function drawHtmlAgain(){
  let oldLayers = document.getElementById("layers")
  let newLayers = document.createElement('div');
  newLayers.setAttribute("class", "layers");
  newLayers.setAttribute("id", "layers");
  oldLayers.replaceWith(newLayers)

  setupHtmlLayers()
}

function cleanAll(){
  let newConfig = history[currentIndex]
  let oneLayer = history[currentIndex].layers[0]
  newConfig.layers = [oneLayer]
  saveOnHistory(newConfig)
}

function removeLayer(layerId){
  let newConfig = history[currentIndex]
  let layers = newConfig.layers

  if (layerId == 0) {
    layers.shift();
  } else if (layerId + 1== layers.length){
    layers.pop()
  } else {
    layers.splice(layerId, 1)
  }
  newConfig.layers = layers
  saveOnHistory(newConfig)
}

/*
function moveLayer(layerId, direction){
  // save config and item
  //The copyWithin() method overwrites the existing values.
  let newConfig = history[currentIndex]
  let item = newConfig.layers[layerId]

  if (direction == 'down') {
    let nextItem = newConfig.layers[layerId + 1]
    newConfig.layers[layerId] = nextItem
    newConfig.layers[layerId + 1] = item
  } else if (direction == 'up') {
    let previousItem = newConfig.layers[layerId - 1]
    newConfig.layers[layerId - 1] = item
    newConfig.layers[layerId] = previousItem
  }
  saveOnHistory(newConfig)
}*/

function createNewLayer(){
  let newConfig = history[currentIndex]
  let oneLayer = history[currentIndex].layers[0]
  newConfig.layers.push(oneLayer)
  saveOnHistory(newConfig)
}
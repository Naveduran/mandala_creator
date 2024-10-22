// This functions allows to create mandalas and play with them easily based on a configuration. It uses p5 and p5.polar libraries to do it.

let backgroundInput
let languageInput

const initialConfig = {
  size: 900,
  background: '#ffffff',
  layers: [
    {
      name:'Lines',
      strokeColor: 'hsla(130, 0%, 50%, 1)',//OK
      fillColor: null,//OK
      figureName: 'line',
      total: 4,
      radius: 180,
      distance: 0,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Circle 1',
      strokeColor: null,
      fillColor: 'hsla(239, 100%, 65%, 0.5)',
      figureName: 'circle',
      total: 14,
      radius: 50,
      distance: 165,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Circle 2',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 72%, 0.5)',
      figureName: 'circle',
      total: 10,
      radius: 35,
      distance: 135,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Circle 3',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 81%, 0.5)',
      figureName: 'circle',
      radius: 60,
      total: 10,
      distance: 80,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Circle 4',
      strokeColor: null,
      fillColor: 'hsla(54, 86%, 83%, 0.5)',
      figureName: 'circle',
      radius: 30,
      total: 10,
      distance: 80,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Circle 5',
      strokeColor: null,
      fillColor: 'hsla(300, 100%, 90%, 0.5)',
      figureName: 'circle',
      total: 5,
      radius: 40,
      distance: 35,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Details 1',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'circle',
      total: 12,
      radius: 8,
      distance: 40,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Circle 6',
      strokeColor: null,
      fillColor: 'hsla(269, 72%, 86%, 0.4)',
      figureName: 'circle',
      total: 5,
      radius: 20,
      distance: 35,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Details 2',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      total: 4,
      radius: 6,
      distance: 60,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Details 3',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      total: 4,
      radius: 10,
      distance: 175,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Details 4',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      total: 8,
      radius: 2,
      distance: 80,
      visibility: 1,
      strokeWidth: 1
    },
    {
      name:'Details 5',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      total: 4,
      radius: 5,
      distance: 150,
      visibility: 1,
      strokeWidth: 1
    },
  ]
}

// We work over config, and we touch initialConfig only to save a permanent version to allow 
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
function updateCanvasColor(e) {
  let newConfig = structuredClone(history[currentIndex])

  backgroundInput.value = e.target.value
  newConfig.background = e.target.value
  saveOnHistory(newConfig)
}

// Runs once, Creates the space to draw
function setup()
{
  //Set mandala canvas
  let canva = document.getElementById('myCanvas')
  createCanvas(width, width, P2D, canva);
  windowResized()
  frameRate(1);

  // Allow changing the background color of the canvas
  backgroundInput = document.querySelector("#backgroundColorInput");
  backgroundInput.addEventListener("input", updateCanvasColor, false);
  backgroundInput.value = history[currentIndex].background;

  // Allow change page language
  languageInput = document.querySelector("#pageLanguage");
  languageInput.addEventListener("change", updateLanguage, false);

  // Set dark background if the user theme is dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    backgroundColor = "#000000"
  }
  setupHtmlLayers()
}

// Iterates trough configuration to draw each layer of the mandala
function draw() {
  background(history[currentIndex].background);
  setCenter(width/2, height/2);
  history[currentIndex].layers.forEach((layerConfig) => {
    if(layerConfig.visibility){
      drawMandalaLayer(layerConfig)
    }
  })
  backgroundInput.value = history[currentIndex].background;
}

function setupHtmlLayers() {
  let layersHtml = document.getElementById("layers");
  let layersConfig = history[currentIndex].layers
  let totalLayers = layersConfig.length

  for (let index = 0; index < totalLayers; index++) {
    layersHtml.appendChild(
      drawHtmlLayer(layersConfig[index], index, totalLayers))
  }
}

function drawHtmlLayer(layerConfig, layerId, totalLayers){
  const preferredLanguage = localStorage.getItem('language') || 'en';
  let upButtonHtml = ` 
    <button class="imagedButton" data-i18n="upTitle" title="${languages[preferredLanguage].upTitle}" onclick="moveLayer(${layerId}, 'up')" >
      <img class="clickable-button"  data-i18n="upTitle" src="https://img.icons8.com/?size=100&id=19162&format=png&color=000000" alt="${languages[preferredLanguage].upTitle}"/>
    </button>`
  let downButtonHtml = `
    <button data-i18n="downTitle" class="imagedButton" title="${languages[preferredLanguage].downTitle}" onclick="moveLayer(${layerId}, 'down')">
      <img data-i18n="downTitle" class="clickable-button" src="https://img.icons8.com/?size=100&id=19161&format=png&color=000000" alt="${languages[preferredLanguage].downTitle}"/>
    </button>`
  let layerStructure = `
<div class="layer-column-a">
  ${layerId > 0 ? upButtonHtml : ''}
  ${layerId < totalLayers -1 ? downButtonHtml : ''}
  <button class="imagedButton" data-i18n="visibilityTitle" title="${languages[preferredLanguage].visibilityTitle}">
    <img class="clickable-button" src="https://img.icons8.com/?size=100&id=13758&format=png&color=000000" data-i18n="visibilityTitle"
    alt=${languages[preferredLanguage].visibilityTitle}/>
  </button>
  <button class="imagedButton" data-i18n= "removeTitle" title="${languages[preferredLanguage].removeTitle}" onclick="removeLayer(${layerId})">
    <img src="https://img.icons8.com/?size=100&id=74176&format=png&color=000000" class="clickable-button" onclick="removeLayer(${layerId})" data-i18n="removeTitle" alt="${languages[preferredLanguage].removeTitle}"/>
  </button>
</div>
<div class="layer-column-b">
  <div class="layer-row">
    <label data-i18n="fillLabel" for="fillColor-${layerId}"> ${languages[preferredLanguage].fillLabel}</label>
      <input class="quantity-input" data-i18n="quantityTitle" type="number" id="figureNumber-${layerId}" name="figureNumber" value="${layerConfig.total}" onchange="onChangeQuantity(${layerId}, value)" title="${languages[preferredLanguage].quantityTitle}"></input>
      <select name="figureName" id="figureName-${layerId}" class="clickable-button" value="${layerConfig.figureName}" data-i18n="figureTitle" onchange="onChangeDefault(${layerId}, 'figureName', value)" title="${languages[preferredLanguage].figureTitle}">
        <option value="triangle" ${layerConfig.figureName ==='triangle' ? "selected": ""} data-i18n="triangleTitle" 
        title=${languages[preferredLanguage].triangleTitle}>&nbsp;&#9651;</option>
        <option value="circle" ${layerConfig.figureName ==='circle' ? "selected": ""} data-i18n="triangleTitle" 
        title="${languages[preferredLanguage].triangleTitle}">&#9711;</option>
        <option value="line" ${layerConfig.figureName ==='line' ? "selected": ""} data-i18n="lineTitle" 
        title="${languages[preferredLanguage].lineTitle}">&nbsp;&nbsp;/</option>
        <option value="square" ${layerConfig.figureName ==='square' ? "selected": ""} data-i18n="squareTitle" 
        title="${languages[preferredLanguage].squareTitle}">&nbsp;&#9634;</option>
      </select>
      <input data-i18n="fillTitle" type="text" data-coloris id="fillColor-${layerId}" name="fillColor" class="color-picker" value="${layerConfig.fillColor}" style="background-color: ${layerConfig.fillColor}" title="${languages[preferredLanguage].fillTitle}">
  </div>
  <div class="layer-row">
    <label data-i18n="borderLabel" for="strokeColor-${layerId}"> ${languages[preferredLanguage].borderLabel} </label>
      <input type="number" min="0" max="4" id="strokeWidth-${layerId}" name="strokeWidth" value=${layerConfig.strokeWidth}
      data-i18n="strokeWidth" title="${languages[preferredLanguage].strokeWidth}"></input>
      <input data-i18n="borderTitle" type="text" data-coloris id="strokeColor-${layerId}" name="strokeColor" class="color-picker" value="${layerConfig.strokeColor}" style="background-color: ${layerConfig.strokeColor}" title="${languages[preferredLanguage].borderTitle}">
  </div>
  <div class="layer-row">
    <label data-i18n="radiusLabel" for="figureRadius${layerId}"> ${languages[preferredLanguage].radiusLabel} </label>
    <input data-i18n="radiusTitle" type="number" id="figureRadius${layerId}" name="figureRadius" value="${layerConfig.radius}" oninput="onChangeDefault(${layerId}, 'radius', value)" title="${languages[preferredLanguage].radiusTitle}"></input>
    <input class="input-slider" type="range" min="0" max="250" id="figureRadius${layerId}" name="figureRadius" value="${layerConfig.radius}" onchange="onChangeDefault(${layerId}, 'radius', value)" data-i18n="radiusTitle" title="${languages[preferredLanguage].radiusTitle}"></input>
  </div>
  <div class="layer-row">
    <label data-i18n="distanceLabel" for="figureDistance${layerId}"> ${languages[preferredLanguage].distanceLabel}</label>
    <input data-i18n="distanceTitle" type="number" id="figureDistance${layerId}" name="figureDistance" value="${layerConfig.distance}" oninput="onChangeDefault(${layerId}, 'distance', value)" title="${languages[preferredLanguage].distanceTitle}"></input>
    <input class="input-slider" type="range" min="0" max="400" id="figureDistance${layerId}" name="figureDistance" value=${layerConfig.distance} onchange="onChangeDefault(${layerId}, 'distance', value)" data-i18n="distanceTitle" title="${languages[preferredLanguage].distanceTitle}"></input>
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

// Run the function that creates each figure
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
      polarPolygons(layer.total, 4, layer.radius, layer.distance)
    } catch (error) {
      console.error(error);
    }
  }
}

// Update the history when the color of an input changes
function onChangeColor(color, input){
  // BUG: it is triggered too much times
  // This if reduced the amount but not enough
  /*
  if (lastChange >= (Date.now() - delay)){
    return;
  }; lastChange = Date.now();
  */
  let figureId = input.id.slice(input.id.indexOf("-") + 1)
  let newConfig = structuredClone(history[currentIndex])

  newConfig.layers[figureId][input.name] = color
  saveOnHistory(newConfig)
  input.setAttribute('style',`background-color:${color}`)
}

// Update the history when the ammount of figures of a layers changes
function onChangeQuantity(figureId, value){
  console
  let newConfig = structuredClone(history[currentIndex])
  newConfig.layers[figureId].total = value
  saveOnHistory(newConfig)
}

// Update the history when an attribute of a layer changes
function onChangeDefault(figureId, attribute, value){
  let newConfig = structuredClone(history[currentIndex])
  newConfig.layers[figureId][attribute] = value
  saveOnHistory(newConfig)
}

// Apply the configuration of the previous index in the history of changes
function undo() {
  // BUG: HTML LAYERS DONT CHANGE
  if (currentIndex > 0) {
    let newConfig = structuredClone(history[currentIndex - 1])
    saveOnHistory(newConfig)
  }
}

// Apply the configuration of the next index in the history of changes
function redo() {
  // BUG: HTML LAYERS DONT CHANGE
  if (History.length > currentIndex) {
    currentIndex += 1
  }
}

// Save a new configuration in the history and update manndala and html
function saveOnHistory(newConfig) {
  history[currentIndex + 1] = newConfig
  currentIndex += 1
  draw()
  drawHtmlAgain()
}

// Replace the old html layers with new ones
function drawHtmlAgain(){
  let oldLayers = document.getElementById("layers")
  let newLayers = document.createElement('div');
  newLayers.setAttribute("class", "layers");
  newLayers.setAttribute("id", "layers");
  oldLayers.replaceWith(newLayers)
  setupHtmlLayers()
}

// Remove all layers except one
function cleanAll(){
  let newConfig = structuredClone(history[currentIndex])
  newConfig.layers = []
  saveOnHistory(newConfig)
}

// Remove a layer based on it's position
function removeLayer(layerId){
  let newConfig = structuredClone(history[currentIndex])
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

// Save current layers and reassign them to change the order
function moveLayer(layerId, direction){
  let newConfig = structuredClone(history[currentIndex])
  let layers = newConfig.layers
  let item = layers[layerId]

  if (direction == 'down') {
    let nextItem = layers[layerId + 1]
    layers[layerId] = nextItem
    layers[layerId + 1] = item
  } else if (direction == 'up') {
    let previousItem = layers[layerId - 1]
    layers[layerId - 1] = item
    layers[layerId] = previousItem
  }
  saveOnHistory(newConfig)
}

// Creates a new layer and save it in the history
function createNewLayer(){
  let newConfig = structuredClone(history[currentIndex])
  let oneLayer = {
    name:'Lines',
    strokeColor: null,
    fillColor: 'hsla(0, 6%, 48%, 0.48)',
    figureName: 'circle',
    total: 3,
    radius: 30,
    distance: 90,
    visibility: 0
  }
  newConfig.layers.push(oneLayer)
  saveOnHistory(newConfig)
}

// Download an image as jpg
function downloadAsImage(){
  saveCanvas(`mandala`, 'jpg')//'jpg,png, webp'
}


// Write json in local storage
function saveInLocalStorage(){
  let json = JSON.stringify(history[currentIndex])
  localStorage.setItem("mandala", json);
}

// Load configuration from local storage
function getFromLocalStorage(){
  let newConfig = JSON.parse(localStorage.getItem("mandala"));
  saveOnHistory(newConfig);
}

function updateLanguage(e){
  let newLanguage = e.target.value.toLowerCase();
  localStorage.setItem('language', newLanguage);
  updateContent(newLanguage);
}

// Function to update content based on selected language
function updateContent(newLanguage) {
  let langData = languages[newLanguage]
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (element.localName == 'label'){
      element.innerHTML = langData[key];
    } else if (element.localName == 'alt'){
      element.title = langData[key];
    } else {
      element.alt = langData[key];
    }
  });
}

// Set the configuration of color pickers that *allows transparency!*
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

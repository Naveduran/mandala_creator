// This functions allows to create mandalas and play with them easily based on a configuration. It uses p5 and p5.polar libraries to do it.

let history = [initialConfig];
let currentIndex = 0;
let backgroundInput;
let languageInput;

// Resize the canvas when the browser's size changes.
function windowResized() {
  if (windowHeight > windowWidth){ // phone
    resizeCanvas(windowWidth - 18, windowWidth - 18);
  } else { // desktop
    resizeCanvas(windowHeight - 18, windowHeight - 18);
  }
}

// Use the rgb values of the color picker to set the mandala background
function updateCanvasColor(e) {
  let newConfig = structuredClone(history[currentIndex]);

  backgroundInput.value = e.target.value;
  newConfig.background = e.target.value;
  saveOnHistory(newConfig);
}

// Runs once, Creates the space to draw
function setup() {
  //Set mandala canvas
  let canva = document.getElementById('myCanvas');
  createCanvas(width, width, P2D, canva);
  windowResized();
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
    backgroundColor = "#000000";
  }
  setupHtmlLayers();
}

// Iterates trough configuration to draw each layer of the mandala
function draw() {
  background(history[currentIndex].background);
  setCenter(width/2, height/2);
  history[currentIndex].layers.forEach((layerConfig) => {
    if (layerConfig.visibility) {
      drawMandalaLayer(layerConfig);
    }
  })
  backgroundInput.value = history[currentIndex].background;
}

function setupHtmlLayers() {
  let layersHtml = document.getElementById("layers");
  let layersConfig = history[currentIndex].layers;
  let totalLayers = layersConfig.length;

  for (let index = 0; index < totalLayers; index++) {
    layersHtml.appendChild(
      drawHtmlLayer(layersConfig[index], index, totalLayers));
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

  let visibilityButtonOn = `<button class="imagedButton" data-i18n="visibilityTitle"
    title="${languages[preferredLanguage].visibilityTitle}" onclick="onChangeDefault(${layerId}, 'visibility', 0)">
    <img class="clickable-button" src="https://img.icons8.com/?size=100&id=13758&format=png&color=000000" data-i18n="visibilityTitle" alt=${languages[preferredLanguage].visibilityTitle}/>
  </button>`

  let visibilityButtonOff = `<button class="imagedButton" data-i18n="visibilityTitle"
    title="${languages[preferredLanguage].visibilityTitle}" onclick="onChangeDefault(${layerId}, 'visibility', 1)">
    <img class="clickable-button" src="https://img.icons8.com/?size=100&id=34271&format=png&color=000000" data-i18n="visibilityTitle" alt=${languages[preferredLanguage].visibilityTitle}/>
  </button>`

  let fillColorInput = `<input data-i18n="fillTitle" type="text" data-coloris id="fillColor-${layerId}" name="fillColor" class="color-picker" value="${layerConfig.fillColor}" style="background-color: ${layerConfig.fillColor}" title="${languages[preferredLanguage].fillTitle}">`

  let layerStructure = `
    <div class="layer-column-a">
      ${layerId > 0 ? upButtonHtml : ''}
      ${layerId < totalLayers -1 ? downButtonHtml : ''}
      ${layerConfig.visibility ? visibilityButtonOn : visibilityButtonOff}
      <button class="imagedButton" data-i18n= "removeTitle" title="${languages[preferredLanguage].removeTitle}" onclick="removeLayer(${layerId})">
        <img src="https://img.icons8.com/?size=100&id=74176&format=png&color=000000" class="clickable-button" onclick="removeLayer(${layerId})" data-i18n="removeTitle" alt="${languages[preferredLanguage].removeTitle}"/>
      </button>
    </div>
    <div class="layer-column-b">
      <div class="layer-row">
        <label data-i18n="fillLabel" for="fillColor-${layerId}"> ${languages[preferredLanguage].fillLabel}</label>
          <input class="quantity-input" data-i18n="quantityTitle" type="number" id="figureNumber-${layerId}" name="figureNumber" value="${layerConfig.total}" onchange="onChangeDefault(${layerId}, 'total', value)" title="${languages[preferredLanguage].quantityTitle}"></input>
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
          ${layerConfig.figureName !== 'line' ? fillColorInput : ''}
      </div>
      <div class="layer-row">
        <label data-i18n="strokeLabel" for="strokeWidth-${layerId}"> ${languages[preferredLanguage].strokeLabel} </label>
          <input type="number" min="0" max="4" id="strokeWidth-${layerId}" name="strokeWidth" value=${layerConfig.strokeWidth}
          data-i18n="strokeWidth" onchange="onChangeDefault(${layerId}, 'strokeWidth', value)" title="${languages[preferredLanguage].strokeWidthTitle}"></input>
          <p></p>
          <input data-i18n="strokeTitle" type="text" data-coloris id="strokeColor-${layerId}" name="strokeColor" class="color-picker" value="${layerConfig.strokeColor}" style="background-color: ${layerConfig.strokeColor}" title="${languages[preferredLanguage].strokeColorTitle}">
      </div>
      <div class="layer-row">
        <label data-i18n="radiusLabel" for="figureRadius${layerId}"> ${languages[preferredLanguage].radiusLabel} </label>
        <input data-i18n="radiusTitle" type="number" id="figureRadius-${layerId}" name="figureRadius" value="${layerConfig.radius}" oninput="onChangeDefault(${layerId}, 'radius', value)" title="${languages[preferredLanguage].radiusTitle}"></input>
        <input class="input-slider" type="range" min="0" max="250" id="figureRadius-${layerId}" name="figureRadius" value="${layerConfig.radius}" onchange="onChangeDefault(${layerId}, 'radius', value)" data-i18n="radiusTitle" title="${languages[preferredLanguage].radiusTitle}"></input>
      </div>
      <div class="layer-row">
        <label data-i18n="distanceLabel" for="figureDistance${layerId}"> ${languages[preferredLanguage].distanceLabel}</label>
        <input data-i18n="distanceTitle" type="number" id="figureDistance-${layerId}" name="figureDistance" value="${layerConfig.distance}" oninput="onChangeDefault(${layerId}, 'distance', value)" title="${languages[preferredLanguage].distanceTitle}"></input>
        <input class="input-slider" type="range" min="0" max="400" id="figureDistance-${layerId}" name="figureDistance" value=${layerConfig.distance} onchange="onChangeDefault(${layerId}, 'distance', value)" data-i18n="distanceTitle" title="${languages[preferredLanguage].distanceTitle}"></input>
      </div>
      <div class="layer-row">
        <label data-i18n="angleLabel" for="figureAngle${layerId}"> ${languages[preferredLanguage].angleLabel}</label>
        <input data-i18n="distanceTitle" type="number" min=0 max=180 id="figureDistance${layerId}" name="figureDistance" value="${layerConfig.angle}" oninput="onChangeDefault(${layerId}, 'angle', value)" title="${languages[preferredLanguage].angleTitle}"></input>
        <input class="input-slider" type="range" min=0 max=180 list="markers" id="figureAngle${layerId}" name="figureAngle" value=${layerConfig.angle} onchange="onChangeDefault(${layerId}, 'angle', value)" data-i18n="angleTitle" title="${languages[preferredLanguage].angleTitle}"></input>
      </div>
    </div>`

  let newLayer = document.createElement('div');
  newLayer.setAttribute("class", "layer");
  newLayer.setAttribute("id", layerId);
  newLayer.innerHTML = layerStructure;
  return newLayer;
}

// Use the received layer configuration to draw the described figures with its respective border and fill color
function drawMandalaLayer(layer){
  strokeWeight(layer.strokeWidth * 2)
  if (layer.strokeColor){
    stroke(layer.strokeColor);
  } else {
    noStroke();
  }

  if (layer.fillColor){
    fill(layer.fillColor);
  } else {
    noFill();
  }

  drawFigures(layer.figureName, layer);
}

// Run the function that creates each figure
function drawFigures(figureName, layer) {
  figures[figureName](layer);
}

// Update the history when the color of an input changes
function onChangeColor(color, input) {
  // BUG: it is triggered too much times
  let figureId = input.id.slice(input.id.indexOf("-") + 1);
  let newConfig = structuredClone(history[currentIndex]);

  newConfig.layers[figureId][input.name] = color;
  saveOnHistory(newConfig);
  input.setAttribute('style',`background-color:${color}`);
}

// Update the history when an attribute of a layer changes
function onChangeDefault(figureId, attribute, value) {
  let newConfig = structuredClone(history[currentIndex]);
  newConfig.layers[figureId][attribute] = value;
  saveOnHistory(newConfig);
}

// Apply the configuration of the previous index in the history of changes
function undo() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    draw();
    drawHtmlAgain();
  }
}

// Apply the configuration of the next index in the history of changes
function redo() {
  if (history.length > currentIndex) {
    currentIndex += 1;
    draw();
    drawHtmlAgain();
  }
}

// Save a new configuration in the history and update manndala and html
function saveOnHistory(newConfig) {
  if (history.length - currentIndex > 1) { // after an undo
    let newHistory = history.slice(0, currentIndex);
    history = newHistory;
    currentIndex = newHistory.length - 1;
  }
  history[currentIndex + 1] = newConfig;
  currentIndex += 1;
  draw();
  drawHtmlAgain();
}

// Replace the old html layers with new ones
function drawHtmlAgain(){
  let oldLayers = document.getElementById("layers");
  let newLayers = document.createElement('div');
  newLayers.setAttribute("class", "layers");
  newLayers.setAttribute("id", "layers");
  oldLayers.replaceWith(newLayers);
  setupHtmlLayers();
}

// Remove all layers except one
function cleanAll() {
  let newConfig = structuredClone(history[currentIndex]);
  newConfig.layers = [];
  saveOnHistory(newConfig);
}

// Remove a layer based on it's position
function removeLayer(layerId) {
  let newConfig = structuredClone(history[currentIndex]);
  let layers = newConfig.layers;
  if (layerId == 0) {
    layers.shift();
  } else if (layerId + 1== layers.length){
    layers.pop();
  } else {
    layers.splice(layerId, 1);
  }
  newConfig.layers = layers;
  saveOnHistory(newConfig);
}

// Save current layers and reassign them to change the order
function moveLayer(layerId, direction){
  let newConfig = structuredClone(history[currentIndex]);
  let layers = newConfig.layers;
  let item = layers[layerId];

  if (direction == 'down') {
    let nextItem = layers[layerId + 1];
    layers[layerId] = nextItem;
    layers[layerId + 1] = item;
  } else if (direction == 'up') {
    let previousItem = layers[layerId - 1];
    layers[layerId - 1] = item;
    layers[layerId] = previousItem;
  }
  saveOnHistory(newConfig);
}

// Creates a new layer and save it in the history
function createNewLayer(){
  let newConfig = structuredClone(history[currentIndex]);
  newConfig.layers.push(oneLayer);
  saveOnHistory(newConfig);
}

// Download an image as jpg
function downloadAsImage(){
  saveCanvas(`mandala`, 'jpg'); // 'jpg, png, webp'
}

// Write json in local storage
function saveInLocalStorage() {
  let json = JSON.stringify(history[currentIndex]);
  localStorage.setItem("mandala", json);
}

// Load configuration from local storage
function getFromLocalStorage() {
  let newConfig = JSON.parse(localStorage.getItem("mandala"));
  saveOnHistory(newConfig);
}

// Cambiar lenguaje y guardar la preferencia en el localstorage
function updateLanguage(e) {
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

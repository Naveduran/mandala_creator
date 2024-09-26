// This functions allows to create mandalas easily based on a configuration. It uses p5 and p5.polar libraries to do it.

// Creates the space to draw
function setup()
{
	createCanvas(900, 900);
}

// Iterates trough configuration to draw each layer of the mandala
function draw() {
  const layers = config.layers
  background(0,0,0);
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

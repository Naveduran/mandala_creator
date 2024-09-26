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

    drawFigures[layer.figureName](layer.figureSettings)
}

// Translate the figure name into a function that can draw the respective figures using the required parameters
const drawFigures = {
  'line': function lines({total, size, distance=0}){
    for (line=0; line < total; line++){
      let angle = (360 /total)*line;
      polarLine(angle, size, distance);
    }
  },
  'circle': function circles({total, radius, distance=0}){
    polarEllipses(total, radius, radius, distance);
  },
  'triangle': function triangle({total, radius, distance=0}){
    polarTriangles(total, radius, distance);
  },
  'square':  function square({total, radius, distance=0}){
    //Not working for a problem with the original library :(
    //polarSquares(8,4,160);
    //polarSquares(total, radius, distance);
    //maybe let's consider rectangles!
  }
}

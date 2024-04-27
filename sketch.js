const example1 = {
  size: 900,
  layers: [
    {
      name:'Lines',
      strokeColor: 'hsla(130, 0%, 50%, 1)',
      fillColor: null,
      figureName: 'line',
      figureSettings: {
        total: 4,
        size: 360
      },
    },
    {
      name:'Circle 1',
      strokeColor: null,
      fillColor: 'hsla(239, 100%, 65%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        total: 14,
        radius: 100,
        distance: 330
      },
    },
    {
      name:'Circle 2',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 72%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        total: 10,
        radius: 70,
        distance: 270
      },
    },
    {
      name:'Circle 3',
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 81%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        radius: 120,
        total: 10,
        distance: 160
      },
    },
    {
      name:'Circle 4',
      strokeColor: null,
      fillColor: 'hsla(54, 86%, 83%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        radius: 60,
        total: 10,
        distance: 160
      },
    },
    {
      name:'Circle 5',
      strokeColor: null,
      fillColor: 'hsla(300, 100%, 90%, 0.5)',
      figureName: 'circle',
      figureSettings: {
        total: 5,
        radius: 80,
        distance: 70
      },
    },
    {
      name:'Details 1',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'circle',
      figureSettings: {
        total: 12,
        radius: 15,
        distance: 80
      },
    },
    {
      name:'Circle 6',
      strokeColor: null,
      fillColor: 'hsla(269, 72%, 86%, 0.4)',
      figureName: 'circle',
      figureSettings: {
        total: 5,
        radius: 40,
        distance: 70
      },
    },
    {
      name:'Details 2',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      figureSettings: {
        total: 4,
        radius: 12,
        distance: 120
      },
    },
    {
      name:'Details 3',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      figureSettings: {
        total: 4,
        radius: 20,
        distance: 350
      },
    },
    {
      name:'Details 4',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      figureSettings: {
        total: 8,
        radius: 4,
        distance: 160
      },
    },
    {
      name:'Details 5',
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      figureSettings: {
        total: 4,
        radius: 10,
        distance: 300
      },
    },
  ]
}

function setup()
{
	createCanvas(900, 900);
}

functionsForFigures = {
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
    //polarSquares(8,4,160);
    //polarSquares(total, radius, distance);
  }
}

function draw()
{
  setCenter(width/2, height/2);
  const layers = example1.layers
  background(0,0,0);
  layers.forEach((layer) => {
    //console.log('layer:', layer.name,'\nstroke:',layer.strokeColor,'\nfill:', layer.fillColor,'\nfigure: ', layer.figureName, '\nsettings: ', layer.figureSettings)
    if (layer.strokeColor){stroke(layer.strokeColor);
    } else {noStroke();}

    if (layer.fillColor){fill(layer.fillColor);
    } else {noFill();}

    functionsForFigures[layer.figureName](layer.figureSettings)
  })
}

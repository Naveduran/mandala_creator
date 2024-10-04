
function setup()
{
	//create a canvas for the robot
	createCanvas(900, 900);

}

function draw()
{
  setCenter(width/2, height/2);
  //colors
  let linesColor = 'hsla(130, 0%, 50%, 1)'
  let circle1Color = 'hsla(239, 100%, 65%, 0.5)'
  let circle2Color = 'hsla(240, 94%, 72%, 0.5)'
  let circle3Color = 'hsla(240, 94%, 81%, 0.5)'
  let circle4Color = 'hsla(54, 86%, 83%, 0.5)'
  let circle5Color = 'hsla(300, 100%, 90%, 0.5)'
  let circle6Color = 'hsla(269, 72%, 86%, 0.4)'
  let detailsColor = 'hsla(319, 99%, 69%, 0.55)'

  background(0,0,0)

  stroke(linesColor);
  polarLine(0, 360, 0);
  polarLine(45, 360, 0);
  polarLine(90, 360, 0);
  polarLine(135, 360, 0);

  noStroke()
  fill(circle1Color);
  polarEllipses(14, 100, 100, 330);

  fill(circle2Color);
  polarEllipses(10, 70, 70, 270);

  fill(circle3Color);
  polarEllipses(10, 120, 120, 160);

  fill(circle4Color);
  polarEllipses(10, 60, 60, 160);

  fill(circle5Color);
  polarEllipses(5, 80, 80, 70);

  fill(detailsColor);
  polarEllipses(12, 15, 15, 80);

  fill(circle6Color);
  polarEllipses(5, 40, 40, 70);

  fill(detailsColor);
  polarTriangles(4, 12, 120);
  polarTriangles(4, 20, 350);
  polarSquares(8, 4, 160);
  polarSquares(4, 10, 300);
}


const initialConfig = {
  size: 900,
  layers: [
    {
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

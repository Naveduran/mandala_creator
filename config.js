
const emptyConfig = {
  size: 900,
  layers: [
  ]
}

function addLayer() {
  // to config
  config.layers.concat({
      name:'new layer'.concat(figuresNumber()),
      strokeColor: null,
      fillColor: 'hsla(239, 100%, 65%, 0.5)',
      figureName:  figuresNames()[Math.floor(Math.random() * figuresNumber)],
      figureSettings: {
        total: [10, 20, 30][Math.floor(Math.random() * 3)],
        radius: [30, 80, 150][Math.floor(Math.random() * 3)],
        distance: [100, 200, 300][Math.floor(Math.random() * 3)]
      },
  })

  //to html

  
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

const config = initialConfig

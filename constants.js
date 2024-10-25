
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

const initialConfig = {
  size: 900,
  background: '#ffffff',
  layers: [
    {
      name:'Lines',
      strokeWidth: 1,
      strokeColor: 'hsla(130, 0%, 50%, 1)',
      fillColor: null,
      figureName: 'line',
      total: 4,
      radius: 180,
      distance: 0,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Circle 1',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(239, 100%, 65%, 0.5)',
      figureName: 'circle',
      total: 14,
      radius: 50,
      distance: 165,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Circle 2',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 72%, 0.5)',
      figureName: 'circle',
      total: 10,
      radius: 35,
      distance: 135,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Circle 3',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(240, 94%, 81%, 0.5)',
      figureName: 'circle',
      radius: 60,
      total: 10,
      distance: 80,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Circle 4',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(54, 86%, 83%, 0.5)',
      figureName: 'circle',
      radius: 30,
      total: 10,
      distance: 80,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Circle 5',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(300, 100%, 90%, 0.5)',
      figureName: 'circle',
      total: 5,
      radius: 40,
      distance: 35,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Details 1',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'circle',
      total: 12,
      radius: 8,
      distance: 40,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Circle 6',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(269, 72%, 86%, 0.4)',
      figureName: 'circle',
      total: 5,
      radius: 20,
      distance: 35,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Details 2',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      total: 4,
      radius: 6,
      distance: 60,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Details 3',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'triangle',
      total: 4,
      radius: 10,
      distance: 175,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Details 4',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      total: 8,
      radius: 2,
      distance: 80,
      visibility: 1,
      strokeWidth: 1,
    },
    {
      name:'Details 5',
      strokeWidth: 0,
      strokeColor: null,
      fillColor: 'hsla(319, 99%, 69%, 0.55)',
      figureName: 'square',
      total: 4,
      radius: 5,
      distance: 150,
      visibility: 1,
      strokeWidth: 1,
    },
  ]
}

// The default layer when a new layer adding is required
const oneLayer = {
  name:'Three gray circles',
  strokeColor: null,
  fillColor: 'hsla(0, 6%, 48%, 0.48)',
  figureName: 'circle',
  total: 3,
  radius: 30,
  distance: 90,
  visibility: 0,
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

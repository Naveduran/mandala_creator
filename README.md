# Mandala Creator

Mandala creator allows creating symetric images based on geometric patterns with multiple layers. It is a web application made with vanilla javascript and is based on [p5]() and [polar]() libraries.

Just click or slide to select forms, colors and sizes of each layer of figures to create your own mandalas.

Click here to make your own [Mandala](https://naveduran.github.io/mandala_creator/)

## Functionalities

- Default mandala example
- Responsive design for mobile, tablet and desktop
- Dark and light theme according to user system preference
- Mandala background can be saved
- Available in English, Spanish and Chinese
- Mandalas can be downloaded as jpg images
- A history of changes allows to undo and redo multiple times
- Transparent colors are admitted in the mandala figures thanks to [Coloris color picker](https://github.com/mdbassit/Coloris)
- Buttons, selectors and sliders have tooltips to improve usability
- One or all layers can be removed and new layers added
- A layer can be sent forwards or backwards
- A layer can be made of triangles, circles, squares, or lines
- A layer can be shown or hidden 
- By default a new layer is hidden until user show it
- Configuration can be written in numbers to allow accuracy on sizes and distances

## Future possible functionalities

- Allow other polygons
- Save and load mandala configuration in a file
- Work on multiple mandalas using tabs and local storage instead of memory
- Conditional format undo and redo buttons
- Pre-charge the mandala drawing 
- Improving [Accesibility](https://wave.webaim.org/), and check screen reader functionalities
- Allow changing the angle of each layer (requires to draw each figure instead of using polar)
- Automatic testing with [mocha](https://mochajs.org/)

## Reported bugs

- a pair number of lines is drawn as half of them, but darker 4,6,8
- too much trigger of save history when pick colors

## Credits

Thanks to [Monica](https://www.linkedin.com/in/monica-vera-duran-91b46b278/) and [Nicolas](https://www.linkedin.com/in/nicolasopf/) for playing and testing this app when it was yet an idea. Thanks to [icons8]() for free icons.

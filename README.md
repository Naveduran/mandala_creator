# Mandala Creator

Mandala creator allows creating symetric images based on geometric patterns with multiple layers. It is a web application made with vanilla javascript and is based on [p5](https://p5js.org/) and [polar](https://github.com/liz-peng/p5.Polar) libraries.

Just click or slide to select forms, colors and sizes of each layer of figures to create your own mandalas.

Click here to make your own [Mandala](https://naveduran.github.io/mandala_creator/). Have fun!

## Functionalities

- Default mandala example
- Responsive design for mobile, tablet and desktop
- Dark and light theme according to user system preference
- Mandala background can be saved
- Available in English, Spanish and Chinese
- Mandalas can be downloaded as jpg images
- A history of changes allows to undo and redo multiple times
- Transparent colors are admitted in the mandala figures
- Buttons, selectors and sliders have tooltips to improve usability
- One or all layers can be removed and new layers added
- A layer can be sent forwards or backwards
- A layer can be made of lines, triangles, circles, squares, and polygons until 10 sides
- A layer can be shown or hidden
- By default a new layer is hidden until user show it
- Configuration can be written in numbers to allow accuracy on sizes and distances
- Each layer can have a different angle

## Future possible functionalities

- Allow other polygons
- Save and load mandala configuration in a file
- Work on multiple mandalas using tabs and local storage instead of memory
- Pre-charge the mandala drawing
- Check screen reader functionalities and [accesibility](https://wave.webaim.org/)
- Automatic testing with [mocha](https://mochajs.org/)
- Allow borders to have multiple colors

## Reported bugs

- Undo and redo buttons should have conditional format
- A pair number of lines is drawn as half of them, but darker 4,6,8
- Picking a color can trigger multiple changes in history

## Credits

Thanks to [Monica](https://www.linkedin.com/in/monica-vera-duran-91b46b278/) and [Nicolas](https://www.linkedin.com/in/nicolasopf/) for playing and testing this app when it was yet an idea. 

Thanks to [p5](https://p5js.org/) to inspire artists to create their own tools top make art, and make it easier and accesible for them.

Thanks to [polar](https://github.com/liz-peng/p5.Polar) for abstracting the math to create geometric patterns.
Thanks to [Coloris](https://github.com/mdbassit/Coloris) for the color picker with alpha channel.
Thanks to [icons8](https://icons8.com/) for free icons.


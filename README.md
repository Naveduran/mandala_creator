# Mandala Creator

Select forms and color and a number of layers to create your own mandalas.

Test it!

Click here to make your own [Mandala](https://naveduran.github.io/mandala_creator/)
> This project first version is currently in progress, some core functionalities can be unavailable.

## Credits

Thanks to [Monica](https://www.linkedin.com/in/monica-vera-duran-91b46b278/) for testing and playing for this app when it was yet an idea.

## Progress

- OK Crear mandala por defecto
- OK levantar requerimientos
- OK crear html básico
- OK buscar letra bonita para el título
- OK buscar iconos en icons8
- OK arrows, selects y colores senalar con dedo
- OK construir mandala inicial
      >OK separate config in another file
      >OK study modules
      >OK study cors
      >OK for each leer "initial config" para crear el mandala
      >OK modify size to fit smaller screen sizes
- OK crear boton guardar en archivo y cargar de archivo
- OK crear css
      >OK cel
      >OK tablet
      >OK pc
      >OK ultragrande
      >OK si mas ancho que largo, poner controles al lado izquierdo
- OK habilitar dark theme
      >OK disminuir la cantidad de lugares en donde se cambian los colores
      >OK set colors for dark and light theme
      >OK get dark-light theme preference from user system and apply automatically
- OK habilitar cambiar background
      >OK crear variable
      >OK crear event listener para el input y la funcion que corre cuando se detona el evento
      >OK cambiar el background del canvas
- OK encerrar imagen de flechas dentro de botones
- OK en layer, cambiar div por form
- OK cambiar ubicacion del boton de background
- OK enviar lenguaje al footer
- OK encerrar imagenes de line saving en botones
- OK crear los botones de los layers de acuerdo a la config inicial
      >OK leer la configuracion para ver los detalles de cada layer
      >OK crear una funcion que genere codigo html X
      >OK traer layers by id
      >OK crear input de cantidad de figuras con sus botones
      >OK crear select de tipo de figura
      >OK crear selector de color de borde
      >OK crear selector de color de figura
      >OK crear boton para generar nueva layer
      >OK remove static layer
- OK permitir cambiar tamanio de las figuras
- OK permitir cambiar distancia de las figuras
- OK debuggear why no se muestra el COLOR en el fillcolor
- OK ponerle limite al numero, radio, y distancia de las figuras
      >OK quedan descartados porque es mas usable con sliders
- OK crear un mandala default con colores legibles en formato rgb
      >OK research
      >OK ya no es necesario porque es mejor un color picker con rgba o hsla
- OK Habilitar alpha channel para los color picker?
      >OK general research
      >OK play with https://github.com/mdbassit/Coloris
- OK asignar ids unicos a cada elemento html del main
- OK rehacer el layout para ser mas usable y ajustable a phone y pcs
      >OK mockup
      >OK cambiar input number por sliders
      >OK cambiar select por figure selector
- OK centrar el mandala
- OK volver a poner la configuracion del mandala default
- OK poner tooltip a los botones de la primera linea
- OK hacer que se muestre el color que viene de la config en el colorpicker
- OK set history saving to make multiple redo and undo
      >OK design solution plan
      >OK create variables
      >OK undo if currentIndex > 0
      >OK redo executed only if History.length > currentIndex
- OK hacer que se muestre el valor en el select de los tipos de figura
      >OK entender el problema
      >OK añadir 'selected' como atributo de la opcion que coincide con el value
- OK definir rangos para sliders de tamanio y distancia
- OK move add layer button to bottom
- OK add trash button
- OK hacer que la configuracion de una layer genere cambios en el mandala
      > OK onChange save in history
      > OK increment index
      > OK color
      > OK quantity
      > OK sliders
      > OK figure
- OK permitir borrar una layer
      >OK anadir icono
      >OK crear funcion removeLayer() y tener en cuenta los ids
- OK allow add new layer at the end
      > OK icono
      > OK crear funcion createNewLayer()
-OK permitir cambiar el orden de las layers
      > OK icono
      > OK cambiar a dos iconos, uno fleccha arriba y otro hacia abajo
      > OK crear funcion moveLayer() y tener en cuenta los ids
- OK allow download image saveCanvas()
- OK write comments for all the functions
- OK refix layout for phone and desktop with changes in p5
- OK BUG HTML undo and redo for using shallow copy of history, solved with structuredClone() method
- OK write-read files for user load and save progress in pc
      > OK cannot use fs to write in library because no modules if not server 
      > OK allowed save a version in local storage
      > OK disable functions
- OK guardar el background del mandala en la config
- OK hacer que se muestre backgroundColor que viene de la config en el colorpicker
- OK bug change squares for polygons en la config de polar



## Testing discoveries

- OK add a layer duplicates behavior of previous one

- too much trigger of save history when pick colors

- only allows to undo two times
- remove next indexes when save changes after an undo

- a pair number of lines is drawn as half of them, but darker 4,6,8

- describe all functions

## Extras

- permitir espanol, ingles y chino
      > OK check https://medium.com/@nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505
      > OK remover opciones de otros idiomas
      > OK json para ingles, español y chino
      > OK separar los textos de otros tags manteniendo el estilo
      > id para todas las etiquetas de texto
      > traduccion de tooltips
      > funcion que se active al seleccionar len guaje 
      >> cambiar el contenido de cada id
      >> guardar el lenguage seleccionado en el local storage

- conditional format for undo a redo buttons

- M Find buggs with screen reader and accesibility tools
      >https://wave.webaim.org/

- Visibility button functionality
      > tooltip
- unittests
      > first test file and framework with mocha
      > https://mochajs.org/
- run in a server to allow saving multiple versions and show images of each saved version
- allow other polygons

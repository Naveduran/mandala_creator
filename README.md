# Mandala Creator

Select forms and color and a number of layers to create your own mandalas.

Test it!

Click here to make your own [Mandala](https://naveduran.github.io/mandala_creator/)
> This project first version is currently in progress, some core functionalities can be unavailable.

## Credits

Thanks to [Monica Vera](https://www.linkedin.com/in/monica-vera-duran-91b46b278/) for testing and playing for this app when it was yet an idea.

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
*finded bug in color picker... its triggered too much
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

- permitir borrar una layer
      > anadir icono
      > crear funcion removeLayer() y tener en cuenta los ids

- permitir cambiar el orden de las layers
      > OK icono
      > crear funcion reorgLayer() y tener en cuenta los ids

- allow add new layer at the end
- remove next indexes when redo
- conditional format for undo a redo buttons
- hacer que se muestre backgroundColor que viene del tema en el colorpicker
- BUG too much trigger of save history when pick colors 
- BUG change squares for rectangles en la config de polar
- allow download image
- allow saving configuration


## Extras

- traducir a otros idiomas (O)
- M Find buggs with screen reader and accesibility tools
      >https://wave.webaim.org/

- poner tooltip al ojito de visibilidad
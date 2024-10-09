
# Mandala Creator

Select forms and color and a number of layers to create your own mandalas.

-Test it! 

Click here to make your own [Mandala](https://naveduran.github.io/mandala_creator/)

## Credits

Thanks to [Monica Vera Duran](https://www.linkedin.com/in/monica-vera-duran-91b46b278/) for testing and playing for this app when it was yet an idea.

## Progress

- OK Crear mandala por defecto
- OK levantar requerimientos
- OK crear html básico
- OK buscar letra bonita para el título
- OK buscar iconos en icons8
- OK arrows, selects y colores senalar con dedo
- OK construir mandala inicial/n
      OK separate config in another file/n
      OK study modules/n
      OK study cors/n
      OK for each leer "initial config" para crear el mandala/n
      OK modify size to fit smaller screen sizes/n
- OK crear boton guardar en archivo y cargar de archivo
- OK crear css/n
      OK cel/n
      OK tablet/n
      OK pc/n
      OK ultragrande/n
      OK si mas ancho que largo, poner controles al lado izquierdo/n
- OK habilitar dark theme/n
      OK disminuir la cantidad de lugares en donde se cambian los colores/n
      OK set colors for dark and light theme/n
      OK get dark-light theme preference from user system and apply automatically/n
- OK habilitar cambiar background/n
      OK crear variable /n
      OK crear event listener para el input y la funcion que corre cuando se detona el evento/n
      OK cambiar el background del canvas/n
- OK encerrar imagen de flechas dentro de botones
- OK en layer, cambiar div por form
- OK cambiar ubicacion del boton de background
- OK enviar lenguaje al footer
- OK encerrar imagenes de line saving en botones
- OK crear los botones de los layers de acuerdo a la config inicial/n
      OK leer la configuracion para ver los detalles de cada layer/n
      OK crear una funcion que genere codigo html X/n
      OK traer layers by id/n
      OK crear input de cantidad de figuras con sus botones/n
      OK crear select de tipo de figura/n
      OK crear selector de color de borde/n
      OK crear selector de color de figura/n
      OK crear boton para generar nueva layer/n
      OK remove static layer

- OK permitir cambiar tamanio de las figuras
- OK permitir cambiar distancia de las figuras
- OK debuggear why no se muestra el COLOR en el fillcolor
- OK ponerle limite al numero, radio, y distancia de las figuras/n
      OK quedan descartados porque es mas usable con sliders

- OK crear un mandala default con colores legibles en formato rgb/n
      OK research/n
      OK ya no es necesario porque es mejor un color picker con rgba o hsla 

- OK Habilitar alpha channel para los color picker?/n
      OK general research/n
      OK play with https://github.com/mdbassit/Coloris

- OK asignar ids unicos a cada elemento html del main 

- OK rehacer el layout para ser mas usable y ajustable a phone y pcs/n
      OK mockup/n
      OK cambiar input number por sliders/n
      OK cambiar select por figure selector

- OK centrar el mandala
- OK volver a poner la configuracion del mandala default
- OK poner tooltip a los botones de la primera linea

- set history saving to make multiple redo and undo
      OK design solution plan
      OK create variables

      OK undo if currentIndex > 0
      OK redo active only if History.length > currentIndex
      onChange save in history, increment history and remove next indexes
            - color
            - sliders
            - quantity
            - figure




- conditional format for undo a redo buttons
      - undo active only if currentIndex > 0
      - redo active only if History.length > currentIndex
      - add functions to the buttons and test

- hacer que la configuracion de una layer genere cambios en el mandala

- definir rangos para tamanio y distancia

- hacer que se muestre el color que viene de la config en el colorpicker
- hacer que se muestre backgroundColor que viene del tema en el colorpicker
- hacer que se muestre el valor en el select de los tipos de figura

- M change squares for rectangles en la config de polar

- remove distance and radius if figure type is lines, y anadir size


## Extras

- H allow reorganize layers
      OK search icon
      OK get it into layers automatic creation system
      - make it work
- traducir a otros idiomas (O)
- M Find buggs with screen reader and accesibility tools
      https://wave.webaim.org/

- poner tooltip al ojito de visibilidad

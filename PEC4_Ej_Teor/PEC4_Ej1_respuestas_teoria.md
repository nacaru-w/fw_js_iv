## PEC 4 Ej 1: respuestas

¿Qué realiza cada una de las siguientes opcinoes de Angular CLI?

* `ng new`: el comando `ng` crea un nuevo _workspace_ de Angular. 
* `ng generate`: este comando genera o modifica archivos según una esquemática. Una esquemática es un generador de código que utiliza una plantilla que soporta lógica compleja. Estas se organizan en colecciones (_collections_).
    * `component`: este comando crea la definición de un nuevo componente genérico en el proyecto. Tiene como argumento el nombre del componente.
    * `directive`: este comando crea una nueva directiva. Las directivas de atributo son reglas de estilo que se aplican a los componentes deseados.
    * `enum`: este comando te permite declarar `enum`s. `enum` es una característica de TypeScript que te permite declarar una serie de constantes.
    * `guard`: este comando te permite crear una `guard` de ruta que sirve para decidir si la ruta o no puede ser activada. 
    * `interface`: este comando te permite crear una `interface` de TS en el proyecto. Como ya se vio en la PEC anterior, las interfaces permiten asignar una serie de tipos, forzando a usarlos a las clases que las usan.
    * `pipe`: este comando te permite generar un `pipe`, que son funciones simples que transforman `string`s, fechas, u otros tipos de datos para su visualización.
    * `service`: este comante te permite crear un `service`. Se trata de una categoría ampmlia que comprende cualquier valor, función, o característica que se necesita en la aplicación. Normalmente se trata de clases qeu tienen un propósito específico. 
* `ng serve`: crea un servidor local en el que ejecutar el proyecto de Angular. Si se le pasa el argumento `--open`, abre el servidor directamente en el navegador por defecto.
* `ng test`: comando que se usa para ejecutar las unidades de _test_ del proyecto.
* `ng version`: muestra información sobrel a versión de angular, node, el gestor de paquetes y el sistema operativo del proyecto.


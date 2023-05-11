## PEC 4 Ej 2: respuestas

__¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce?__

El comando a utilizar para realizar esta acción es `ng new ecommerce`.

__Explica brevemente la estructura y ficheros que ha generado Angular CLI__

* Ficheros de configuración en la raíz del proyecto:
    * `tsconfing.app.json`: es una archivo de configuración de TypeScript. Extiende el archivo tsconfig.json y describe opciones de configuración específicas del código de la aplicación. 
    * `angular.json`: es un archivo de configuración del CLI de Angular. Define la estructura del proyecto y describe diferentes aspectos del mismo como el nombre, la versión... y permite configurar _scripts_ o _tests_, entre otras cosas.
    * `package.json`: es el archivo de configuración de npm. Aquí se listan las dependencias del proyecto, así como los scripts de la consola que sirven para ejecutar diferentes acciones dentro del mismo.
    * `.editorconfig`: se trata del archivo de configuración de edición del código. Cuando un editor de código compatible abre un archivo, el editor aplica una serie de configuraciones de estilo y código.
    * `.gitignore`: se trata de un archivo de configuración de Git que sirve para indicar qué archivos deberían ser ignorados a la hora de realizar un _commit_.
    * `tsconfig.json`: se trata del archivo de configuración de TypeScript.
    * `package-lock.json`: se trata de un archivo de configuración de npm que indica información sobre las dependencias que contiene el proyecto.
    * `tsconfig.spec.json`: se trata de un archivo de configuración de TypeScript para los archivos de test.   
* Directorio `node_modules`: se trata del directorio en el que se encuentran los archivos de las dependencias instaladas en el proyecto.
* Directorio src:
    * `index.html`: se trata del archivo `html` principal del proyecto. 
    * `main.ts`: se trata del archivo TypeScript principal del proyecto.
    * `styles.css`: se trata de la hoja de estilos del proyecto. Aquí se redactan los estilos que se aplicarán al html de `index.html`.
    * `test.ts`: este archivo no se encuentra entre los que se han generado en mi proyecto de Angular, pero puedo suponer que es el archivo en el que se alojan los tests del proyecto, escritos en TypeScript.
    * `polyfills.ts`: de forma similar al punto interior, este archivo no se encuentra entre los que Angular ha generado en el proyecto. Supongo, por el nombre, que se trata de un archivo en el que se carga código que adapta el código JS a navegadores más antiguos.
    * Directorio `environments`: tampoco se encuentra entre lo creado por Angular, pero supongo que contendría configuración específica del entorno.
    * Directorio `assets`: este se usa para alojar archivos de imagen, fuentes, etc. que se usarán en el proyecto.
    * Directorio `app`: este contiene el código principal de la aplicación, tras su compilación.
        * Ficheros `app.component.*`: contiene el componente raíz de la aplicación, que renderiza la vista inicial de la misma.
        * Fichero `app.module.ts`: define el módulo raíz de la aplicación, responsable del arranque de la misma, así como de importar el resto de módulos y componentes.
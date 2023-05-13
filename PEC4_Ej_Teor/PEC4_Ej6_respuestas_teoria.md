__¿Cuáles son los `style encapsulation` de los componentes? Pon un ejemplo de uso de cada uno de ellos.__

Se refiere al hecho de que en Angular, por defecto, los estilos asignados a los componentes no afectan a los elementos circundantes a o descendientes de esos componentes. Angular sin embargo, tiene la opción de cambiar esta configuración, a través de la especificación de un atributo `encapsulation` en el elemento. Este atributo de encapsulación se puede dar de diversas siguientes formas, según los valores que tome:

* `ViewEncapsulation.Emulated`: Angular emulará el comportamiento del `shadow DOM` añadiéndole un atributo único al elemento padre del componetne y encapsulando los estilos al componente del que es atributo. Esto significa que el estilo aplicado en la hoja de estilos del componente solo se aplicará a los elementos interiores de la plantilla del componente, y no se aplicará a otras partes de la aplicación. Un ejemplo de uso de este tipo de encapsulamiento podría darse en un ítem de una tienda de Ecommerce, el cual queremos que posea estilos específicos que no afecten al código adyacente.

* `ViewEncapsulation.Native`: al contrario del método anterior, que usa el _scoping_ para encapsular los estilos, esta forma utiliza el `shadow DOM` nativo del navegador para realizarlo. Esto significa que se require soporte para `shadow DOM` nativo por parte del navegador, lo cual no ocurre en navegadores más antiguos. Ya que el método anterior implica la generación de más reglas CSS que tienen que ser procesadas por el navegador, el método de encapsulamiento nativo produce mejores resultados en cuanto a rendimiento. Un ejemplo de uso sería una situación parecida al caso anterior, en al que se requiere de un tiempo de carga menor, por ejemplo, casos en los que se deban cargar una gran cantidad de componentes a la vez, como podría serlo en una página de una universidad en la que se genera una ficha por cada alumno de un aula.

* `ViewEncapsulation.None`: este método de encapsulación utiliza CSS global, por lo que, en realidad, no se realiza ningún tipo de encapsulación. Esto puede ser útil cuando se diseñe un componente con componentes hijos que queremos que posean estilos similares a los del padre. Por ejemplo, cuando estamos diseñando un componente para un artículo de un proyecto de ecommerce, y queremos diseñar un componente dentro de ese componente específicamente para englobar las características del artículo, es posible que queramos que ciertos aspectos del estilo del componente padre se reflejen en el hijo.

__¿Qué es el `shadow DOM`?__

Se trata de un estándar web que permite encapsular el código de marcado, estilso y comportamiento de un componente web de forma que pueda ser usado en uan página sin afectar a otras partes de la misma. Funciona creando un árbol paralelo para cada componente, que se considera como una parte separada del DOM y que se adjunta al documento principal en algún punto del mismo.

__¿Qué es el `changeDetection`?__

De forma predeterminada, Angular comprueba cada _binding_ en la interfaz para ver si necesita actualizar algún elemento cada vez que se dan cambios en los valores del componene. Cuando la aplicación posee un tamaño superior, esto puede aceptar al rendimiento si se hace de forma generalizada, por lo que Angular ofrece la opción de decidir si necesita actualizar la UI para ese componente. Esto se realiza a través del atributo `changeDetection`.

__¿Qué diferencias existen entre las estrategias `Default` y `OnPush`? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.__



__Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los `hooks OnChanges`, `OnInit`, `AfterViewInit` y `OnDestroy`, puesto que son los más utilizados.__
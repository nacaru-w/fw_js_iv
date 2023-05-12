
__Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural `NgFor`__:

* `index`: crea una variable que almacena el índice de la `for` _loop_ que crea Angular. 
* `even`: crea una variable que se aplicará a aquellos elementos del arrary que tengan un índice par.
* `odd`: crea una variable que se aplicará a aquellos elmeentos del array con un índice impar.
* `first`: crea una variable que se aplicará al primer elemento del array.
* `last`: crea una variable que se aplicará al último ítem del array.

__¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.__

`trackBy` toma una función que tiene dos arugmentos: un índice y el ítem. Si esta se le pasa a la directiva `NgFor`, utilizará el valor que devuelve la función para decidir cómo identificaar elementos individuales de la misma. Se usa cuando existe una lista de elementos que cambia con frecuencia, y evita que las diferentes modificaciones sobre la misma afecten demasiado al rendimiento.

Como ejemplo, habría primero que implementar una función en la clase del archivo `.components.ts` del componente. Por ejemplo:

```ts
  trackArticleByID (index: number, article: any) {
    return article.id;
  }
```

Esta función devuelve el valor `id` de cara artículo, que podría asignarse mediante un generador de UUID, por ejemplo. Habría que implementar la función en el archivo `.components.html`, por ejemplo:

```html
<div>
  <div *ngFor="let element of articles; trackBy: trackArticleByID">{{ item }}</div>
</div>
```

Esto permitiría a Angular llamar a esta función para identificar cada ítem individualmente, en lugar de usar el objeto de referencia. Así, Angular podrá decidir si reutilizar elementos del DOM en caso de que tengamos que actualizar el número de artículos que se hallan en el servidor.

Esto puede tener muchos ejemplos de aplicación: una lista de productos que se pretende actualizar en un sistema de compraventa, la lista de usuarios que aparecen como conectados a un sistema, las fichas de las asignaturas que se han seleccionado que aparecen en la pantall de confirmación en un sistema de matriculación universitaria, etc...

__¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.__

Angular no permite ejecutar dos directivas estructurales sobre el mismo elemento. Si se realiza, saltará un error: `Can't have multiple template bindings on one element`. 

Esto ocurre porque las directivas manipulan la estructura del DOM. Cuando se usan múltples directivas estructurales en el mismo elemento, puede causar conflictos y ambiguedad sobre cómo el DOM debería estructurarse. Angular, por tanto, no sabe cuál debería priorizarse ante la otra. La solución a estos casos es usar _nesting_.
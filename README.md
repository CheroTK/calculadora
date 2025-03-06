# calculadora
-- Que hace document.querySelector(".display"); ?

 es un método que permite seleccionar un elemento en el DOM utilizando un selector CSS. En este caso, se busca el primer elemento que tenga la clase "display"

 -- Que hace const buttons = document.querySelectorAll("button"); ?

 selecciona todos los elementos que coincidan con el selector CSS pasado como argumento, en este caso todos los elementos <button>. Devuelve una NodeList (similar a un array) que contiene todos los botones encontrados en el HTML. 

 -- Que hace buttonText = button.textContent; ?

 devuelve el texto que está dentro del elemento button, que luego es utilizada para verificar qué botón fue presionado.

 -- Que hace y como funciona buttons.forEach((button) => { ...} ?

  recorre todos los botones seleccionados y les añade un evento de clic.

  -- Que hace y como funciona button.addEventListener("click", () => { } )

   se encarga de manejar lo que ocurre cuando un botón es presionado, ejecutando una función cuando se hace clic en el botón.

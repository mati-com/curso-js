// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* Sintaxis de Javascript 
-Es case sensitive
  -Numero no es lo mismo que numero
-Es de tipado débil o dinámico
  -Las variables son del tipo del dato que almacenen
-Las sentencias terminan  con ;
  -No es obligatorio pero es muy recomendable
-Los bloques finalizan con }
  -De forma opcional se puede añadir un ; despues de la }
*/
/* Variables y constantes Scope o Ámbito
-Una variables es un espacio que reservamos en memoria para almacenar un dato que podrá cambiar durante la ejecución de nuestro programa
  -La palabra reservada para declarar variables es "let" no es recomendable usar "var"
-Las variables se pueden: declarar, inicializar y modificar.
-Una constante  es un espacio de nuestro programa
  -La palabra reservada para declarar constante es "const"
-El scope o ámbito es la zona donde existe nuestra variable o constante  
*/
/*Declaración, inicialización y modificación
-Una variable se declara con la siguiente estructura:
  - let numero;
-Una variable se inicializa con la siguiente estructura:
  - numero = 5;
-Se puede declarar e iniciar en la misma sentencia:
  - let numero = 5;
-Para modificar una valor de una variable existente:
  -numero = 3;
-Las constantes solo admiten la declaración e inicialización en la misma sentencia
  -const PI = 3.14;
*/
/* Tipos de Datos en Javascript 
-Primitivos
  -Numeros -> let numero =5;
  -String(cadenas)-> let palabra = 'hola'; let palabra = "hola";
  -Boolean -> let respuesta  = true; let respuesta = false;
  -Undefined
  -Null
  -Symbol
  
*/
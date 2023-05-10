// Declaración de variables
let alturaCm = 168;
let alturaMetros = 1.68;
let pesoKg = 70.5;
let alturaMetrosRedondeada = Math.ceil(alturaMetros);
let pesoKgRedondeado = Math.floor(pesoKg);
let maxValorJs = Number.MAX_SAFE_INTEGER;
let maxValorJsMasUno = maxValorJs + 1;

// Comprobación del valor máximo de JavaScript
let esIgual = maxValorJsMasUno === maxValorJs;

// Impresión de resultados
console.log(`Altura en centímetros: ${alturaCm}`);
console.log(`Altura en metros: ${alturaMetros}`);
console.log(`Peso en kilogramos: ${pesoKg}`);
console.log(`Altura en metros redondeada hacia arriba: ${alturaMetrosRedondeada}`);
console.log(`Peso en kilogramos redondeado hacia abajo: ${pesoKgRedondeado}`);
console.log(`El máximo valor que se puede obtener en JavaScript + 1 es igual al máximo valor que se puede obtener en JavaScript: ${esIgual}`);

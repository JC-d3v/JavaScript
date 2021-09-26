// TIP: date  :objeto que perimite trabajar con tiempo desde 01/01/1970 UTC

let time = new Date();

// TIP: --.getDate() : dia del mes en numero
console.log(`--.getDate()`, time.getDate());

// TIP: --.getDay() : dia de la semane en nro
console.log(`--.getDay()`, time.getDay());

// TIP: --.getMonth() : el mes del año en numero
console.log(`--.getMonth() : `, time.getMonth());

// TIP: --.getFullYear() : El año completo
console.log(`--.getFullYear() : `, time.getFullYear());

// TIP: --.getHours() : hora
console.log(`--.getHours() : `, time.getHours());

// TIP: --.getMinutes() : minutos
console.log(`--.getMinutes() : `, time.getMinutes());

// TIP: --.getSeconds() : Segundos
console.log(`--.getSeconds() : `, time.getSeconds());

// TIP: --.getMilliseconds() : milisegundos
console.log(`--.getMilliseconds (): `, time.getMilliseconds());

// TIP: --.toString() : fecha y hora en cadena
console.log(`--.toString (): `, time.toString());

// TIP: --.toDateString() : fecha en cadena
console.log(`--.toDateString() : `, time.toDateString());

// TIP: --.toTimeString() : hora en cadena
console.log(`--.toTimeString() : `, time.toTimeString());

// TIP: --.toLocaleString() fecha y hora corta en cadena
console.log(`--.toLocaleString() : `, time.toLocaleString());

// TIP: --.toLocaleTimeString() : hora local en cadena
console.log(`--.toLocaleTimeString() : `, time.toLocaleTimeString());

// TIP: --.toLocaleDateString() : fecha local en cadena
console.log(`--.toLocaleDateString() : `, time.toLocaleDateString());

// TIP: --.getTimezoneOffset() : devuleve el desplazamiento en minutos de la hora zona horaria UTC (240/60 =4horas)
console.log(`--.getTimezoneOffset() : `, time.getTimezoneOffset());

// TIP: --.getUTCDate() : retorna el dia del mes en UTC (1-31)
console.log(`--.getUTCDate() : `, time.getUTCDate());

// TIP: --.getUTCHours() : retorna la hora del dia en UTC (1-23)
console.log(`--.getUTCHours() : `, time.getUTCHours());

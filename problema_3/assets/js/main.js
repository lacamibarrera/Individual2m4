import Cliente from "./cliente";

let impuestoCliente2 = new impuesto(800, 50)
let cliente2 = new Cliente("pedro", impuestoCliente2);






console.log(cliente2.getNombre, impuestoCliente2.getCalculo)
console.log(cliente2)
console.log(cliente2.calcularImpuesto())
//cam : creamos la clase cliente, con los parametros que nos pide el problema
//y le agregamos los set y get de la info que necesitamos
class Cliente {
    constructor(nombre, monto_bruto_anual, deducciones) {
      this.nombre = nombre;
      this.monto_bruto_anual = monto_bruto_anual;
      this.deducciones = deducciones;
    }
  
    getNombre() {
      return "Cliente: " + this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getMontoBrutoAnual() {
      return " Monto Bruto Anual : " + this.monto_bruto_anual;
    }
  
    setMontoBrutoAnual(monto_bruto_anual) {
      this.monto_bruto_anual = monto_bruto_anual;
    }
  
    getDeducciones() {
      return "Deducciones : " + this.deducciones;
    }
  
    setDeducciones(deducciones) {
      this.deducciones = deducciones;
    }
  // esta funcion toma los datos de la clase cliente y va a hacer el calculo
  // del impuesto segun la formula de la guia
  // pasamos el 25% a 0.25 para que el calculo no de error
    calcularImpuestos() {
      return " Su Impuesto es : " + ((this.monto_bruto_anual - this.deducciones) * 0.25);
    }
  }

  // prueba en consola//
  const cliente1 = new Cliente('Juan', 50000, 10000);
  const cliente2 = new Cliente ('Camila', 750000, 50000);

console.log(cliente1.getNombre()); // Juan
console.log(cliente1.getMontoBrutoAnual()); 
console.log(cliente1.getDeducciones());
console.log(cliente1.calcularImpuestos());


console.log(cliente2.getNombre()); // camila 
console.log(cliente2.getMontoBrutoAnual()); 
console.log(cliente2.getDeducciones());
console.log(cliente2.calcularImpuestos());



/**  probando setiando nuevos datos
 * 
cliente1.setNombre('Pedro');
console.log(cliente1.getNombre()); // 


cliente1.setMontoBrutoAnual(60000);
console.log(cliente1.getMontoBrutoAnual()); // cam: por aca me erede jaja pero se puede setiar manual los datos

console.log(cliente1.getDeducciones());


console.log(cliente1.calcularImpuestos()); 

*/

//cliente 

function Cliente(nombre,monto_bruto_anual,deducciones,impuestos) {
    this._nombreCliente = nombre;
    this._monto_bruto_anual = monto_bruto_anual; 
    this._deducciones = deducciones;
    this._calcularImpuestos = impuestos;

}

let Cliente1 = new Cliente("Camila") // test

Object.defineProperty(Cliente.prototype),{
    set: function(nuevoCliente){
        this._nombreCliente = nuevoCliente;
    },
    get: function(){
        return this._nombreCliente;
    }
}



let monto_bruto_anual1 = new _monto_bruto_anual(10000000);//test

let deducciones1 = new Deducciones (500000);

function Impuesto(_calcularImpuestos) {
    this._calcularImpuestos=
    ((monto_bruto_anual-deducciones)*0.25 +"%");
}



console.log(`Impuesto Cliente :  ${this._nombreCliente}  Monto Bruto Anual:    ${this._monto_bruto_anual}  Deducciones :    ${this._deducciones}   Total Impuestos : ${this._calcularImpuestos}`)

//monto bruto y deducciiones estan en pagina impuestos.


// camishh: me base en lo que hicimos en el individual anterior para constriur esto, no se si esta bien 
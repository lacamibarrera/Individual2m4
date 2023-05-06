//cliente 

function Cliente(nombre) {
    this._nombreCliente = nombre;

  
}

let Cliente1 = new Cliente("Camila") // test

Object.defineProperty(Cliente.prototype,'prueba',{
    set: function(nuevoCliente){
        this._nombreCliente = nuevoCliente;
    },
    get: function(){
        return this._cliente
    }
})

Object.monto_bruto_anual(number) {
    this._monto_bruto_anual = // es un number // ;
};

let monto_bruto_anual1 = new monto_bruto_anual(10000000);//test

function Deducciones(number) {
    this._deducciones = deducciones;
};

let deducciones1 = new Deducciones (500000);

function Impuesto(_calcularImpuestos) {
    this._calcularImpuestos=
    ((monto_bruto_anual-deducciones)*0.25 +"%");
}



console.log(`Impuesto Cliente :  ${this._nombreCliente}  Monto Bruto Anual:    ${this._edad}  Deducciones :    ${this._deducciones}   Total Impuestos : ${this._calcularImpuestos}`)

//monto bruto y deducciiones estan en pagina impuestos.
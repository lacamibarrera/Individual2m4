//cliente 

function Cliente(nombre) {
    this._nombreCliente = nombre;

  
}

Object.defineProperty(Cliente.prototype,'prueba',{
    set: function(nuevoCliente){
        this._nombreCliente = nuevoCliente;
    },
    get: function(){
        return this._cliente
    }
})

function(calcularImpuestos){
    
}

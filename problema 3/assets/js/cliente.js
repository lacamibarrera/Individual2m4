//cliente 

Cliente(nombre){
    this.nombre= nombre;
};
ObjectImpuesto(impuesto){
    this.impuesto = ((monto_bruto_anual - deducciones)* 0.25 +"%")
};

get nombre();
set nombre();

calcularImpuestos();


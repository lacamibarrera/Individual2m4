export default class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getNombre() {
        return this.nombre;
    }


    calcularImpuesto() {

        return this.getNombre + "" + (this.impuesto.getDeducciones - this.impuesto.getMonto_bruto_anual)
    }
}

/*class impuesto extends Cliente {
    constructor(nombre, monto_bruto_anual, deducciones) {
        super(nombre);
        this.monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones;
    }

    set setMonto_bruto_anual(monto_bruto_anual) {
        this.monto_bruto_anual = monto_bruto_anual;
    }

    get getMonto_bruto_anual() {
        return this.monto_bruto_anual
    }

    set setDeducciones(deducciones) {
        this.deducciones = deducciones;
    }

    get getDeducciones() {
        return this.deducciones
    }

    get getResultado() {
        return this.nombre + " Su Impuesto es : " + ((this.monto_bruto_anual - this.deducciones) * 0.25);
    }

    calcularImpuestos() {

        return this.nombre + " Su Impuesto es : " + ((this.monto_bruto_anual - this.deducciones) * 0.25);
    }

}*/
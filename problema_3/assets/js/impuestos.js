import Cliente from "./cliente";

class impuesto extends Cliente {
    constructor(monto_bruto_anual, deducciones) {

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

    get getCalculo() {
        return this.getMonto_bruto_anual - this.getDeducciones
    }


}
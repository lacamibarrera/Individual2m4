//cami : cree una funcion o clase contador qye me pide un numero o valor
//parte de cero a infinito, o no se si hay q poner min o max en el input

class Contador {
    constructor(valorInicial = 0) {
      this.valor = valorInicial;
      this.intervalo = null;
    }

// cami: esta el es la funcion que incrementa a partir del valor ingresado
    incrementar() {
      this.valor++;
    }
// cam: esta funcion decrementa.
    decrementar() {
      this.valor--;
    }

// cam: se supone que esto me deberia iniciar un contador, pero no se sin me funciona
//busque la info y creo que asi no deberia mostrar algo en pantalla
//intente pasarlo a un html sin enchular, lo mismo para el Decremento, se deberia iniciar
// apretando el boton "Incrementar o Decrementar" y agregue un boton para que detenga 
// el contador   
    iniciarIncremento() {
      if (this.intervalo === null) {
        this.intervalo = setInterval(() => this.incrementar(), 1000);
      }
    }

    iniciarDecremento() {
      if (this.intervalo === null) {
        this.intervalo = setInterval(() => this.decrementar(), 1000);
      }
    }

    detener() {
      if (this.intervalo !== null) {
        clearInterval(this.intervalo);
        this.intervalo = null;
      }
    }
  }
// cami : deberia ser asi para enlazarlo al html, favor de revisar
  const inicialElement = document.querySelector('#inicial');
  const valorElement = document.querySelector('#valor');
  const incrementarElement = document.querySelector('#incrementar');
  const decrementarElement = document.querySelector('#decrementar');
  const detenerElement = document.querySelector('#detener');
  let contador = new Contador(parseInt(inicialElement.value));
  valorElement.textContent = contador.valor;
  inicialElement.addEventListener('change', () => {
    contador.detener();
    contador = new Contador(parseInt(inicialElement.value));
    valorElement.textContent = contador.valor;
  });
  incrementarElement.addEventListener('click', () => {
    contador.detener();
    contador.iniciarIncremento();
  });
  decrementarElement.addEventListener('click', () => {
    contador.detener();
    contador.iniciarDecremento();
  });
  detenerElement.addEventListener('click', () => {
    contador.detener();
  });
  setInterval(() => {
    valorElement.textContent = contador.valor;
  }, 100);

// Creamos la clase Juego de Dados que parte con 500 //
class JuegoDeDados {
    constructor() {
      this.dinero = 500;
      this.numeroElegido = null;
      this.apuesta = 0;
    }
  // metodo que elige el numero del Dado, el dado tiene 6 lados, por lo que entrega un
  //numero del 1 al 6//
    elegirNumero(numero) {
      if (numero >= 1 && numero <= 6) {
        this.numeroElegido = numero;
      } else {
        console.log('Lanza el Dado');
      }
    }
  // apostar una cantidad de dinero
    apostar(cantidad) {
      if (cantidad > 0 && cantidad <= this.dinero) {
        this.apuesta = cantidad;
      } else {
        console.log('La apuesta debe ser mayor a 0 y menor o igual a tu dinero disponible');
      }
    }
  
    // metodo para lanzar dado y dar alertas si gana o pierde
    lanzarDado() {
      const resultado = Math.floor(Math.random() * 6) + 1;
      if (resultado === this.numeroElegido) {
        this.dinero += this.apuesta * 2;
        alert(`¡Felicidades! Has ganado ${this.apuesta * 2} pesos`);
      } else {
        this.dinero -= this.apuesta;
        alert(`Lo siento, has perdido ${this.apuesta} pesos`);
      }
      this.apuesta = 0;
      if (this.dinero <= 0) {
        alert('Has perdido todo tu dinero. Fin del juego');
      } else if (this.dinero >= 1000) {
        alert('¡Felicidades! Has llegado a los 1000 pesos. Fin del juego');
      }
      return resultado;
    }
  // para jugar de Nuevo
    reiniciar() {
      this.dinero = 500;
      this.numeroElegido = null;
      this.apuesta = 0;
    }
  }
  
  const juego = new JuegoDeDados();
  juego.elegirNumero(3);
  juego.apostar(100);
  const resultado = juego.lanzarDado();
  console.log(`El resultado del lanzamiento es: ${resultado}`);
  juego.reiniciar();
  
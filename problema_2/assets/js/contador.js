
      class Contador {
        constructor() {
          this.valor = 0;
          this.actualizarValorEnPantalla();
          this.botonIncrementar = document.getElementById("boton-incrementar");
          this.botonDecrementar = document.getElementById("boton-decrementar");
          this.botonMostrar = document.getElementById("boton-mostrar");
          this.botonIncrementar.addEventListener("click", () => this.incrementar());
          this.botonDecrementar.addEventListener("click", () => this.decrementar());
          this.botonMostrar.addEventListener("click", () => this.mostrarValor());
        }
        incrementar() {
          this.valor++;
          this.actualizarValorEnPantalla();
        }
        decrementar() {
          if (this.valor > 0) {
            this.valor--;
            this.actualizarValorEnPantalla();
          }
        }
        mostrarValor() {
          alert(`El valor actual del contador es: ${this.valor}`);
        }
        actualizarValorEnPantalla() {
          const valorEnPantalla = document.getElementById("valor-contador");
          valorEnPantalla.innerText = this.valor;
        }
      }
      const contador = new Contador();

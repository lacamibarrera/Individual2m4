
      // Genera un número aleatorio entre 1 y 6
      const tiraDado = () => Math.floor(Math.random() * 6) + 1;

      // Reglas del juego
      const juegaDado = (numero, plata, numeroDado) => {
        if (numero === numeroDado) {
          return plata * 2;
        } else {
          return -plata;
        }
      };

      // Inicia el juego con 500 en el bolsillo
      let bolsillo = 500;
      document.getElementById("saldo").textContent = bolsillo;

      // Agrega un listener al botón de jugar
      document.getElementById("jugar").addEventListener("click", (event) => {
        event.preventDefault();

        // Obtiene el número y la apuesta del formulario
        const numero = parseInt(document.getElementById("numero").value);
        const plata = parseInt(document.getElementById("apuesta").value);

        // Puede apostar como máximo lo que tiene en el bolsillo
        if (plata <= bolsillo) {
          const numeroDado = tiraDado();
          if (numero <= 0 || numero > 6){
            alert("Solo puedes ingresar números entre el 1 y el 6 !")
          } else {
            const result = juegaDado(numero, plata, numeroDado);
            bolsillo += result;  
          

          // Actualiza el saldo y muestra el resultado
          document.getElementById("saldo").textContent = bolsillo;
          document.getElementById("resultado").textContent = `Has apostado ${plata} pesos al número ${numero} y ha salido el número ${numeroDado}. ${result > 0 ? `¡Has ganado ${result} pesos!` : "Lo siento, has perdido la apuesta."} Tu saldo actual es de ${bolsillo} pesos.`;
          
          }

          // Verifica si el juego terminó
          if (bolsillo <= 0) {
            alert("Lo siento, eres pobre y sin suerte.");
          } else if (bolsillo >= 1000) {
            alert("¡Has ganado el juego! Presta luca");
          }

          // Limpia los campos del formulario
          document.getElementById("numero").value = "";
          document.getElementById("apuesta").value = "";
        } else {
          alert("No tienes suficientes pesos para realizar esta apuesta.");
        }
      });

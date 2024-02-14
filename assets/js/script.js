// Función para solicitar un número y validar su rango
const solicitarNumero = (mensaje) => {
    let numero = parseInt(prompt(mensaje)); // Solicita un número al usuario
    if (numero >= 1 && numero <= 20) { // Verifica si el número está dentro del rango permitido
        return numero; // Devuelve el número si está dentro del rango
    } else {
        console.log("Número fuera del rango."); // Muestra un mensaje si el número está fuera del rango
        return null; // Devuelve null para indicar que no se proporcionó un número válido
    }
};

// Función para calcular el factorial de un número
const factorial = (n) => {
    if (n === 0 || n === 1) { // Si el número es 0 o 1, el factorial es 1
        return 1;
    }
    let resultado = 1; // Inicializa el resultado como 1
    for (let i = 2; i <= n; i++) { // Itera desde 2 hasta n inclusive
        resultado *= i; // Multiplica el resultado por cada número en el rango
    }
    return resultado; // Devuelve el resultado del factorial
};

// Función principal que genera las tablas de multiplicar y calcula los factoriales
const generarTablasYFactoriales = () => {
    let numero = solicitarNumero("Ingrese un número entre 1 y 20:"); // Solicita un número
    if (numero !== null) { // Verifica si el número es válido
        let resultadosDiv = document.getElementById("resultados"); // Obtén el elemento donde se mostrarán los resultados
        // Generar y mostrar tablas de multiplicar
        for (let i = 1; i <= numero; i++) { // Itera desde 1 hasta el número ingresado
            resultadosDiv.innerHTML += `${i} x ${numero} = ${i * numero}<br>`; // Agrega la multiplicación al HTML
        }

        // Calcular y mostrar factoriales
        for (let i = 1; i <= numero; i++) { // Itera desde 1 hasta el número ingresado
            resultadosDiv.innerHTML += `Factorial de ${i} es: ${factorial(i)}<br>`; // Agrega el factorial al HTML
        }
    }
};

// Llamada a la función principal
generarTablasYFactoriales();

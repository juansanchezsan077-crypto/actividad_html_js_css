function compras(){
    N1=parseInt(document.getElementById("numero1").value)
    N2=parseInt(document.getElementById("numero2").value)
    Adicion=N1+N2
    //Mostrar en input
    document.getElementById("resultado").value=Adicion
    //Mostrar en H1
    texto=document.getElementById("resultado_texto").textContent
    document.getElementById("resultado_texto").textContent="El total de su compra es: " +Adicion
}


function cuadrado(){
    Medida=parseInt(document.getElementById("cuadrado_1").value)
    resultado_area=Medida*Medida
    resultado_perimetro=Medida*4

    Texto_1=document.getElementById("resultado_Area").textContent
    Texto_2=document.getElementById("resultado_Perimetro").textContent

document.getElementById("resultado_Area").textContent=Texto_1+resultado_area
document.getElementById("resultado_Perimetro").textContent=Texto_2+resultado_perimetro
}


function operaciones(){
    Datos=parseInt(document.getElementById("Operacion").value)
    if (Datos <100 && Datos >0){
    Resultado_D=Math.floor(Datos/10)
    Resultado_U=Datos%10

    Decenas=document.getElementById("resultado_Decenas").textContent
    Unidades=document.getElementById("resultado_Unidades").textContent

document.getElementById("resultado_Decenas").textContent=Decenas+Resultado_D
document.getElementById("resultado_Unidades").textContent=Unidades+Resultado_U
    }
    else{
        console.log("¡Por favor solo ingresar dos digitos!")
    }
}


function Tortilla(){
    Comensales=parseInt(document.getElementById("Cantidad_C").value)
    Papas=200*Comensales
    Huevos=1*Comensales
    Cebollas=60*Comensales

    C_P=document.getElementById("Cantidad_papas").textContent
    C_H=document.getElementById("Cantidad_huevos").textContent
    C_C=document.getElementById("Cantidad_cebolla").textContent

    document.getElementById("Cantidad_papas").textContent=C_P+Papas+" gr"
    document.getElementById("Cantidad_huevos").textContent=C_H+Huevos+" Unidades"
    document.getElementById("Cantidad_cebolla").textContent=C_C+Cebollas+" gr"
}


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentosRestantes = 15;
// Mi bolsa vacía para ir guardando los números que escribo
let misNumerosUsados = [];

function juego() {
    let numeroMio = parseInt(document.getElementById("juego").value);

    // Aquí busco el párrafo del mensaje. Si en el HTML no existe id="mensaje", visual será NULL y me dará error.
    let visual = document.getElementById("mensaje");
    
    // Aquí busco el párrafo de la lista. Si en el HTML no existe id="lista", aquí se rompe el código.
    let visualLista = document.getElementById("lista");

    // Meto el número que acabo de escribir en mi bolsa guardada en memoria
    misNumerosUsados.push(numeroMio);

    intentosRestantes = intentosRestantes - 1;

    // Saco los números de la bolsa, les pongo una coma y los pinto en el párrafo de la web
    visualLista.innerText = "Números que he puesto: " + misNumerosUsados.join(" , ");

    // --- LAS COMPARACIONES ---
    if (numeroMio === numeroSecreto) {
        visual.innerText = "Le atiné al número.";
        visual.style.color = "green";
    } 
    else if (numeroMio < numeroSecreto) {
        visual.innerText = "Casi... el número que buscas es MAYOR. Me quedan: " + intentosRestantes;
        visual.style.color = "orange";
    } 
    else if (numeroMio > numeroSecreto) {
        visual.innerText = "Te pasaste... el número secreto es MENOR. Me quedan: " + intentosRestantes;
        visual.style.color = "orange";
    }

    if (intentosRestantes === 0 && numeroMio !== numeroSecreto) {
        visual.innerText = "Rayos, perdí. El número era: " + numeroSecreto;
        visual.style.color = "red";
    }
}




function Fibonacci() {
    // Traigo el número que el usuario escribió en el input
    let limit = parseInt(document.getElementById("Limite").value);
    
    // Preparo mi lista (array) y los dos primeros números de la serie
    let numeros = [];
    let a = 0; 
    let b = 1;

    // Uso un ciclo que se repita exactamente la cantidad de veces que pidió el usuario
    for (let i = 0; i < limit; i++) {
        // Guardo el número actual en mi lista
        numeros.push(a);

        // AQUÍ ESTÁ EL TRUCO:
        // Calculo el siguiente sumando los dos anteriores
        let siguiente = a + b;
        // Ahora muevo las posiciones: el que era 'b' pasa a ser 'a'
        a = b;
        // Y el nuevo resultado pasa a ser 'b' para la próxima vuelta
        b = siguiente;
    }

    // Busco el título donde voy a mostrar el resultado
    let elementoRespuesta = document.getElementById("Secuencia");
    
    // Escribo el texto base y le pego mi lista de números separados por coma
    elementoRespuesta.textContent = "Los numeros de acuerdo al límite son: " + numeros.join(", ");
}


function comparar(){
    //guardar numeros del usuario
    let num11 = parseInt(document.getElementById("n11").value);
    let num22 = parseInt(document.getElementById("n22").value);

    // Traigo el elemento donde voy a poner el texto de respuesta
    let textoResultado = document.getElementById("resultado1");

    if (num11 > num22) {
        // Si el primero le gana al segundo
        textoResultado.textContent = "El mayor es el primero: " + num11;
    }

    else if (num22 > num11){
        // Si el segundo es el que le gana al primero
        textoResultado.textContent = "El mayor es el segundo: " + num22;
    }

    else {
        //ambos numeros son iguales 
        textoResultado.textContent = "Ambos numeros son iguales";
    }
}


function sacarFactorial(){
    // Traigo el número que escribió el usuario y lo convierto a número entero
    let n = parseInt(document.getElementById("numero_usuario").value);

    // Busco el elemento donde voy a mostrar el texto final
    let visual = document.getElementById("resultado_fac");

    // Primero reviso que el número no sea negativo porque no se puede
    if (n < 0){
        visual.textContent = "No se puede calcular el factorial de un negativo";
        return; // Uso return para que la función se detenga aquí y no haga cuentas
    }

    // Empiezo mi cuenta en 1 porque si empiezo en 0, todo daría 0 al multiplicar
    // Además, el factorial de 0 es 1, así que ya tengo la base
    let total = 1;

    // Uso un ciclo que empiece en 1 y llegue hasta el número que puso el usuario
    for (let i = 1; i <= n; i++) {
        // En cada vuelta voy multiplicando el acumulado por el número actual (i)
        // Ejemplo si n es 3: (1 * 1) -> (1 * 2) -> (2 * 3) = 6
        total = total * i;
    }

    // Al final, escribo el resultado en el párrafo del index
    visual.textContent = "El factorial de " + n + " es: " + total;
    }




    function calcularMultiplos() {
    // Guardo los dos números que pone el usuario en el HTML
    let n1 = parseInt(document.getElementById("n111").value);
    let n2 = parseInt(document.getElementById("n222").value);
    
    // Busco el lugar donde voy a pintar la respuesta
    let visual = document.getElementById("resultado_multiplos");

    // No sé si el usuario puso el menor primero o el mayor primero.
    // Uso Math.min y Math.max para saber siempre quién es el principio y quién el fin.
    let inicio = Math.min(n1, n2);
    let fin = Math.max(n1, n2);

    // Mi bolsa vacía para ir guardando los múltiplos que encuentre
    let listaMultiplos = [];

    //  Empiezo a contar desde el inicio hasta el fin (incluyendo los extremos con <=)
    for (let i = inicio; i <= fin; i++) {
        
        // ¿Cómo sé si es múltiplo de 6? 
        // Si al dividir el número entre 6, el residuo es 0.
        if (i % 6 === 0) {
            // Si pasa la prueba, lo meto a mi bolsa
            listaMultiplos.push(i);
        }
    }

    // Al final, pinto mi bolsa en el HTML separada por comas
    visual.textContent = "Los múltiplos de 6 entre " + inicio + " y " + fin + " son: " + listaMultiplos.join(", ");
}


function clasificarNumeros() {
    //  Mis tres Arreglos vacías preparadas
    let todosLosNumeros = [];
    let pares = [];
    let impares = [];

    //  Busco mis lugares en el HTML para pintar los resultados
    let visualTodos = document.getElementById("resultado_todos");
    let visualPares = document.getElementById("resultado_pares");
    let visualImpares = document.getElementById("resultado_impares");

    // USO UN CICLO para que se repita exactamente 20 veces
    for (let i = 0; i < 20; i++) {
        
        // GENERO UN NÚMERO AL AZAR:
        // Math.random() me da un decimal feo entre 0 y 1. 
        // Lo multiplico por 101 para que llegue hasta 100 y le pongo Math.floor para quitarle los decimales.
        let numeroAzar = Math.floor(Math.random() * 101);

        // Meto el número que salió en mi Arreglo principal
        todosLosNumeros.push(numeroAzar);

        // FILTRO: ¿Es par o impar?
        // Uso el % (módulo). Si al dividir por 2 sobra 0, es PAR.
        if (numeroAzar % 2 === 0) {
            pares.push(numeroAzar);
        } else {
            // Si no es par, pues es IMPAR por descarte
            impares.push(numeroAzar);
        }
    }

    // PINTO TODO EN EL HTML
    visualTodos.textContent = "Los 20 números generados: " + todosLosNumeros.join(", ");
    visualPares.textContent = "Arreglo de PARES: " + pares.join(", ");
    visualImpares.textContent = "Arreglo de IMPARES: " + impares.join(", ");
}




function filtrarMultiplosTres() {
    // Arreglo para los 10 números iniciales
    let listaOriginal = [];
    // Arreglo "limpia" donde solo guardaré los que NO son múltiplos de 3
    let listaFiltrada = [];

    // Busco mis elementos en el HTML para mostrar los resultados
    let visualAntes = document.getElementById("antes_filtro");
    let visualDespues = document.getElementById("despues_filtro");

    // CICLO PARA GENERAR 10 NÚMEROS
    for (let i = 0; i < 10; i++) {
        // PARA EL RANGO (10 a 20):
        // Math.random() * 11 me da un número entre 0 y 10.
        // Al sumarle 10 al final, el rango se mueve y queda entre 10 y 20.
        let numeroAleatorio = Math.floor(Math.random() * 11) + 10;
        
        // Guardo el número en mi primer arreglo
        listaOriginal.push(numeroAleatorio);

        // ¿ES MÚLTIPLO DE 3?
        // Si el residuo NO es 0 (uso !==), significa que no es múltiplo de 3.
        if (numeroAleatorio % 3 !== 0) {
            // Si NO es múltiplo de 3, lo guardo en mi Arreglo original
            listaFiltrada.push(numeroAleatorio);
        }
    }

    // PINTO LOS RESULTADOS
    visualAntes.textContent = "Arreglo original (10-20): " + listaOriginal.join(", ");
    visualDespues.textContent = "Arreglo sin los múltiplos de 3: " + listaFiltrada.join(", ");
}


function calcularTriangulo() {
    // Guardo los 3 lados que puso el usuario
    let a = parseFloat(document.getElementById("lado_a").value);
    let b = parseFloat(document.getElementById("lado_b").value);
    let c = parseFloat(document.getElementById("lado_c").value);

    // Busco mis lugares en el HTML para escribir la respuesta
    let visualTipo = document.getElementById("tipo_triangulo");
    let visualArea = document.getElementById("area_triangulo");

    // DETERMINAR EL TIPO
    let tipo = "";

    if (a === b && b === c) {
        // Si los tres son iguales: EQUILÁTERO
        tipo = "Equilátero (Todos los lados iguales)";
    } 
    else if (a === b || b === c || a === c) {
        // Si al menos dos son iguales: ISÓSCELES
        tipo = "Isósceles (Dos lados iguales)";
    } 
    else {
        // Si ninguno es igual: ESCALENO
        tipo = "Escaleno (Todos los lados diferentes)";
    }

    // ESTIMAR EL ÁREA (Fórmula de Herón)
    // Primero necesito el semiperímetro (la mitad de la suma de los lados)
    let s = (a + b + c) / 2;

    // Aplico la fórmula: Raíz cuadrada de (s * (s-a) * (s-b) * (s-c))
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // PINTO LOS RESULTADOS
    visualTipo.textContent = "Tipo de triángulo: " + tipo;
    // Uso toFixed(2) para que solo me muestre 2 decimales y no un número gigante
    visualArea.textContent = "El área estimada es: " + area.toFixed(2);
}



function procesarPalabras() {
    // el usuario escribió palabras separadas por espacios
    let textoUsuario = document.getElementById("input_palabras").value;
    
    // CONVIERTO EL TEXTO EN UN (ARREGLO)
    // .split(" ") corta el texto cada vez que encuentra un espacio
    let listaPalabras = textoUsuario.split(" ");

    // Mis arreglos para los resultados
    let conteoCaracteres = [];
    let sumaTotal = 0;

    // Busco mis lugares en el HTML
    let visualPalabras = document.getElementById("resultado_palabras");
    let visualConteos = document.getElementById("resultado_conteos");
    let visualTotal = document.getElementById("resultado_total");

    // CICLO PARA RECORRER CADA PALABRA
    for (let i = 0; i < listaPalabras.length; i++) {
        
        // .length me dice cuántas letras tiene la palabra actual
        let largo = listaPalabras[i].length;
        
        // Guardo ese número en mi bolsa de conteos
        conteoCaracteres.push(largo);

        // Voy sumando el largo al total para saber cuánto mide la oración
        sumaTotal = sumaTotal + largo;
    }

    // PINTO LOS RESULTADOS
    visualPalabras.textContent = "Mis palabras son: " + listaPalabras.join(", ");
    visualConteos.textContent = "Cantidad de letras de cada una: " + conteoCaracteres.join(", ");
    visualTotal.textContent = "La oración total tiene " + sumaTotal + " caracteres (sin contar espacios).";
}


function Arreglo_10() {
    // Creo mi arreglo base con 10 números al azar
    let original = [];
    for (let i = 0; i < 10; i++) {
        original.push(Math.floor(Math.random() * 50));
    }

    // Busco mis lugares en el HTML
    let visualOriginal = document.getElementById("original");
    let visualManual = document.getElementById("algoritmica");
    let visualReverse = document.getElementById("funcion_reverse");

    //  ALGORÍTMICA (A MANO)
    let ArregloManual = [];
    // Empiezo el ciclo desde el final (length - 1) 
    // y voy retrocediendo (i--) hasta llegar a 0
    for (let i = original.length - 1; i >= 0; i--) {
        ArregloManual.push(original[i]);
    }

    //  FUNCIÓN (EL ATAJO reversa)
    // Uso [...original] para sacar una copia y que no se me desordene el original
    let ArregloReverse = [...original].reverse();

    // PINTO LOS RESULTADOS
    visualOriginal.textContent = "Original: " + original.join(", ");
    visualManual.textContent = "Invertido a mano: " + ArregloManual.join(", ");
    visualReverse.textContent = "Invertido con .reverse(): " + ArregloReverse.join(", ");
}



function calculadora() {
    //  Guardo los dos números que puso el usuario
    let n1 = parseFloat(document.getElementById("num_uno").value);
    let n2 = parseFloat(document.getElementById("num_dos").value);
    
    //  Busco cuál de los botones "radio" está seleccionado
    // Uso querySelector para buscar el que tiene el "name" de mi grupo y está checado
    let operacion = document.querySelector('input[name="operacion"]:checked').value;

    //  Mi variable para guardar el resultado final
    let resultadoFinal = 0;
    let visual = document.getElementById("resultado_calc");

    //  EL SELECTOR DE OPERACIONES:
    // Uso un "if" para cada caso según lo que diga el .value del botón
    if (operacion === "sumar") {
        resultadoFinal = n1 + n2;
    } 
    else if (operacion === "restar") {
        resultadoFinal = n1 - n2;
    } 
    else if (operacion === "multiplicar") {
        resultadoFinal = n1 * n2;
    } 
    else if (operacion === "dividir") {
        //  No se puede dividir por cero, aviso si pasa
        if (n2 === 0) {
            visual.textContent = "Error: No puedes dividir por 0";
            return; // Me salgo de la función para no romper nada
        }
        resultadoFinal = n1 / n2;
    }

    // PINTO EL RESULTADO
    visual.textContent = "El resultado de la " + operacion + " es: " + resultadoFinal;
}

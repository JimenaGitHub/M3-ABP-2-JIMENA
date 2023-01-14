
// Generando valores de HTML a JS
const quantity=document.querySelector("#currency")

// Llamando id mostrar resultado
const resultQuantity=document.querySelector("#result")

// Función para convertir dólares en pesos
function converter() {
    totalQuantity=(quantity.value * 745)
    resultQuantity.innerHTML= ("$" + totalQuantity + " " + "CLP")

    console.log(totalQuantity)
}


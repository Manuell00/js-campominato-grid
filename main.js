// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// DEFINISCO LE VARIABILI
const gridElement = document.getElementById("grid")
const button = document.getElementById("playButton")
let mioArray = createOrderArray(1, 101)




button.addEventListener("click",
    // Creo la i quadrati all'interno della grid
    // Creo una funzione che generi gli square
    function generateSquare() {
        for (let i = 0; i < mioArray.length; i++) {

            // Utilizzo la funzione CreateGridSquare per creare il blocco square
            const square = createGridSquare("div", "square")

            // Creo degli span che andrà in square con all'interno un numero di arrayNum
            const newSpan = document.createElement("span")
            newSpan.append(mioArray[i]);
            square.append(newSpan)


            // Associarel'evento allo square
            square.addEventListener("click",
                function () {
                    this.classList.add("clicked-true")
                }
            );

            gridElement.append(square)
        }

    }
)









// FUNZIONI

// Creo una funzione per creare un elemento tag e inserirgli una classe e infine ritornarlo
function createGridSquare(tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd)
    return newElement
}

// Creo una semplicissima funzone che generi un array con numeri ordinati della lunghezza desiderata
function createOrderArray(min, max) {

    // Creo un array
    const intArr = []

    for (let i = min; i < max; i++) {
        intArr.push(i)
    }

    return intArr;
}


/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!*/


const grid = document.getElementById('grid');
const button = document.getElementById('button');

const container = document.querySelector('.container');


const rows = 10;
const cols = 10;
const totCell = rows * cols;

//FUNZIONI

const createCell = () => {
    const newCell = document.createElement('div');
    newCell.className = ('cell')
    return newCell;
}

// ADDEVENTLISTENER
button.addEventListener('click', function(){
    container.classList.add('d-show');

})

// SVOLGIMENTO

for(let i = 0; i < totCell; i++){
   
    //creare cella
    const cell = createCell();
    cell.innerText = i +1;

    // al click mettiamo o togliamo la classe clicked
    cell.addEventListener('click', (e) => {
    cell.classList.toggle('clicked');
    console.log(cell)
    })
   
    //aggiungo in pagina la cella
    grid.appendChild(cell);
}
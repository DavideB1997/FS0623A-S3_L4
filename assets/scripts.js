const numeroCelle = 76
const numeriChiamati = []
// const numeriChiamatiUtente = [] //questo se vuoi che i numeri non si ripetono per plancia?



function creazioneCelle(numero){
  const plancia = document.getElementById("contenitoreTombola")
  for(let i = 1; i<=numero;i++){
    const cellaTombola = document.createElement("div")
    const numeroTombola = document.createElement("h3")
    numeroTombola.innerText = i

    cellaTombola.appendChild(numeroTombola)
    plancia.appendChild(cellaTombola)
  }
}

// function cellSelection(){
//   const numeroCelle = 76
//   let randomNum = Math.floor(Math.random()*numeroCelle)
//   const celle = document.querySelectorAll("div  h3")
//   //se randomNum == numeroarrayprecedenti , return
//   const numeriChiamati = []
//   numeriChiamati.push(randomNum)

//   if(randomNum == numeriChiamati){
//     randomNum= Math.floor(Math.random()*numeroCelle)    
//   }
//   console.log(numeriChiamati)

//   celle.forEach(element => {
//     if(element.innerText == randomNum){
//       console.log(`${randomNum} ${element} `)
//       element.parentNode.classList.add("selected")
//     }
//   });
// }


function cellSelection(){
  const celle = document.querySelectorAll("div  h3")
  //se randomNum == numeroarrayprecedenti , return

  let randomNum = checkNumeri(numeriChiamati,numeroCelle);

  celle.forEach(element => {
    if(element.innerText == randomNum){
      console.log(`${randomNum} ${element} `)
      element.parentNode.classList.add("selected")
    }
  });
}

function checkNumeri(array){
  let randomNum 
  do{
    randomNum = Math.floor(Math.random()* numeroCelle)+1
  }while(array.indexOf(randomNum)!==-1)
  
  array.push(randomNum);
  return randomNum;
}

// function creazioneCellaUtente(numero){
//   let numeriChiamatiUtente = [] //questo se vuoi che i numeri si ripetono per plancia
//   const plancia = document.getElementById("plancia")
  
//   for(let i = 1; i<=numero;i++){
//     const cellaTombola = document.createElement("div")
//     const numeroTombola = document.createElement("h3")

//     indexUtente = checkNumeri(numeriChiamatiUtente)

//     numeroTombola.innerText = indexUtente

//     cellaTombola.appendChild(numeroTombola)
//     plancia.appendChild(cellaTombola)
//   }
//   //resetta array numeriChiamatiUtente
//   numeriChiamatiUtente=[] 
//   console.log(numeriChiamatiUtente)
// }


function creazioneCellaUtente(numero){
  let numeriChiamatiUtente = [] //questo se vuoi che i numeri si ripetono per plancia
  const plancia = document.getElementById("plancia")

  let numeroPlance = document.getElementById("numeroPlance").value




  for(let y= 0;y<numeroPlance;y++){
    // numeriChiamatiUtente=[] 
    const tabellina = document.createElement("div")
    tabellina.classList.add("tabellina")
    for(let i = 1; i<=numero;i++){
      const cellaTombola = document.createElement("div")
      const numeroTombola = document.createElement("h3")
  
      indexUtente = checkNumeri(numeriChiamatiUtente)
  
      numeroTombola.innerText = indexUtente
  
      cellaTombola.appendChild(numeroTombola)
      tabellina.appendChild(cellaTombola)
    }
    plancia.appendChild(tabellina)
  }
  console.log(numeriChiamatiUtente)
}




creazioneCelle(numeroCelle);
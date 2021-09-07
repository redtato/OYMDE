// textContent
let teCo = document.querySelector('.textContent');

// innerText
let inTe = document.querySelector('.innerText');

// innerHTML
let inHT = document.querySelector('.innerHTML');

// outerHTML
let ouHT = document.querySelector('.outerHTML');




function IB(nam){
    if(nam === 'teCo'){
        console.log(`textContent: ${teCo.textContent}`);
    }
    else if(nam === 'inTe'){
        console.log(`innerText: ${inTe.innerText}`);
    }
    else if(nam === 'inHT'){
        console.log(`innerHTML: ${inHT.innerHTML}`);
    }
    else if(nam === 'ouHT'){
        console.log(`outerHTML: ${ouHT.outerHTML}`);
    }
    
}
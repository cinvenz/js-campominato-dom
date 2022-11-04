const eleGrid = document.querySelector('.grid')
const eleBtn = document.querySelector('.btn')
const eleContainer = document.querySelector('.container-grid')

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

eleBtn.addEventListener('click', function() {
    let eleSelect = document.getElementById('select').value
    eleGrid.innerHTML = '';
    
    if (document.getElementById('select').value == 'Easy') {
        const arrRandoms = [];
        for (let i = 1; i <= 16; i++) {
            // generare un numero random univoco
            let randomNumber;
            do {
                randomNumber = getRandomInteger(1, 100); // attenzione a non mettere un range minore delle iterazioni del ciclo for
            } while (arrRandoms.includes(randomNumber))
            arrRandoms.push(randomNumber);
        }
        for (let i = 1; i <= 100; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleGrid.append(eleCell);

            eleCell.innerHTML += `<div">${i}</div>`;
            
            eleCell.addEventListener('click', function(){
                if (!arrRandoms.includes(i)) {
                this.classList.toggle('active')
                
                    
                } else {
                this.classList.toggle('activebomb')
                const listCell =  eleGrid.querySelectorAll('.cell');
                    for (let i = 1; i < listCell.length; i++) {
                        if(arrRandoms.includes(i)){
                            listCell[i].classList.add('activebomb')
                        }
                    }

                }
                
            })
        }

       
    
    } else if (document.getElementById('select').value == 'Hard') {
        const arrRandoms = [];
        for (let i = 1; i <= 16; i++) {
            // generare un numero random univoco
            let randomNumber;
            do {
                randomNumber = getRandomInteger(1, 81); // attenzione a non mettere un range minore delle iterazioni del ciclo for
            } while (arrRandoms.includes(randomNumber))
            arrRandoms.push(randomNumber);
        }
        for (let i = 1; i <= 81; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cellhard');
            eleGrid.append(eleCell);

            eleCell.innerHTML += `<div">${i}</div>`;
            
            eleCell.addEventListener('click', function(){
                if (!arrRandoms.includes(i)) {
                this.classList.toggle('active')
                
                    
                } else {
                this.classList.toggle('activebomb')
                const listCell =  eleGrid.querySelectorAll('.cellhard');
                    for (let i = 1; i < listCell.length; i++) {
                        if(arrRandoms.includes(i)){
                            listCell[i].classList.add('activebomb')
                        }
                    }

                }
                
            })
        }

       
               
    } else {
        const arrRandoms = [];
        for (let i = 1; i <= 16; i++) {
            // generare un numero random univoco
            let randomNumber;
            do {
                randomNumber = getRandomInteger(1, 49); // attenzione a non mettere un range minore delle iterazioni del ciclo for
            } while (arrRandoms.includes(randomNumber))
            arrRandoms.push(randomNumber);
        }
        for (let i = 1; i <= 49; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cellcrazy');
            eleGrid.append(eleCell);

            eleCell.innerHTML += `<div">${i}</div>`;
            
            eleCell.addEventListener('click', function(){
                if (!arrRandoms.includes(i)) {
                this.classList.toggle('active')
                
                    
                } else {
                this.classList.toggle('activebomb')
                const listCell =  eleGrid.querySelectorAll('.cellcrazy');
                    for (let i = 1; i < listCell.length; i++) {
                        if(arrRandoms.includes(i)){
                            listCell[i].classList.add('activebomb')
                        }
                    }

                }
                
            })
        }
    }

    
});

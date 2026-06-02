const buttons  = document.querySelectorAll('.buttons')
const count = document.querySelector('h2')

let counter = 0;
buttons.forEach((button) =>{
    button.addEventListener('click', function(e) {
        if(e.target.innerHTML === 'Add Value'){
            counter = counter + 1
            count.innerText = counter
        }
        else if (e.target.innerHTML === 'Remove Value'){
            if(counter >0){
            counter = counter - 1;
            count.innerText = counter
            }
        }
    })
})


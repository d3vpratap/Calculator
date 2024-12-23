const div = document.querySelector('div');
const screen = document.getElementById('screen');
const table = document.getElementById('table');
div.classList.add('div');
table.addEventListener('click',(e)=>{
    if(e.target.nodeName === 'BUTTON'){
        console.log(e.target.innerText);
        const btnText = e.target.innerText;
        
        if(btnText === 'C'){ //doubt!
            screen.value = "";
        }
        else if(btnText === 'X'){
            screen.value+= '*';
        }
        else if(btnText === '='){
            try{
                screen.value = eval(screen.value);
            }
            catch(e){
                screen.value = 'Invalid Operation!'
            }  
        }
        else{
            screen.value += btnText;
        }
        
    }        
});
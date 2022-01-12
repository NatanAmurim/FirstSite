const buttonChangeUser = document.querySelector('button');
const header = document.querySelector('h1');

buttonChangeUser.onclick = function(){ setUserName()};
let images = document.querySelectorAll('img');

for (let count = 0; count < images.length; count++) {    
    
    images[count].onclick = function(){
        const typeofimagem = '.jpg';
        let src = images[count].getAttribute('src');     
        let index = src.indexOf(typeofimagem);
        let imageSrc = src.substring(0, index);
            
        if (src.includes('second'))
            images[count].setAttribute('src', imageSrc.replace('-second','') + typeofimagem);
        else        
            images[count].setAttribute('src', imageSrc+'-second'+ typeofimagem);  
    }    
}

function setUserName(){
    
    let name = prompt('Por gentileza, informe seu nome:');    
    if(name)    
    {
        localStorage.setItem('name', name);
        header.textContent = `Olá, ${name}!`;   
    }    
}

if (!localStorage.getItem('name'))
    setUserName();
else{    
    let name = localStorage.getItem('name');
    header.textContent = `Olá, ${name}!`;   
}


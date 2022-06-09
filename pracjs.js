let hellobtn = document.querySelector('button');
hellobtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Did you like my project!!! ');
    // hellobtn.textContent = 'Roll No. 1:' + name;  
}
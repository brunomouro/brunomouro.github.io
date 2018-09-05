var myImage = document.querySelector('img')

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'imagens/logo-site.png'){
        myImage.setAttribute ('src', 'imagens/logo-site2.png')
    }else{
        myImage.setAttribute ('src', 'imagens/logo-site.png')
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Aprendendo a programar é legal, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Aprendendo a programar é legal, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}


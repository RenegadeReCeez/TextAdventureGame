//Lab 9
//Ryan Rendeiro
var inputBox = document.querySelector('#action');
var text = document.querySelector('#descrip');
var preformAction = function (action) {
    switch (action) {
    case 'Dance':
        text.innerHTML='We can dance if we want to, we can leave your friends behind. Cause if your friends don\'t dance and if they don\'t then they are no friends of mine.'
        break;
    case 'Scream':
    
        break;  
    case 'Run': 
        break;
    case 'Hide': 
        break;
    case 'Give up': 
        break;
    case 'Cry':
        break;
    case 'Sleep':
        break;
    case 'Eat': 
        break;
    case 'Find':  
        break;
    case 'Pickup':  
        break;
    case 'Go North': 
        break;
    case 'Go East':
        break;
    case 'Go West':
        break;
    case 'Go South': 
        break;
    case default:
        'can\'t do that'
    }
}        
var title = document.querySelector('header > h1');
title.innerHTML = 'Confusion';
preformAction(inputBox);
var button = document.getElementById('runner');
button.onclick = run;

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {  //event
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
                body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'navy') {
            body.style.backgroundColor = e.target.id;
        }
       if (e.target.id === 'purple') {  
              body.style.backgroundColor = e.target.id;
        }
    })
})
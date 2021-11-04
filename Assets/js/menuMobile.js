document.querySelector('#menu').onclick = showhidden
console.log('Hello World')
function showhidden () {
    document.querySelector('nav').classList.toggle('show');   
}


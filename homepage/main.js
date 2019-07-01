const name = "Damian"
const age = 33;
console.log(`Nazywam się ${name} i mam ${age} lat`);

const about = document.querySelector('.paragraph__Main--js');
about.innerHTML = `Nazywam się ${name} i mam ${age} lat`;

function imie(name, age){
    alert(`Czesc ${name} masz ${age} lat!!!`);
}
const przywitanie = imie(name, age);


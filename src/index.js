
const message = 'hello.';

const h1 = document.querySelector('#main--h1');
const p = document.querySelector('#main--p');

for (let i = 0; i < message.length; i++)
    setTimeout(() => h1.textContent += message[i], i * 100);

setTimeout(() => p.style.opacity = '1', 100 * message.length);

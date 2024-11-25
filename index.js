import logo from "./assets/js.jpeg"
import "./index.css"

console.log('Hello world!');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img_js = document.createElement('img');
img_js.src = logo;

document.body.append(h1);
document.body.append(img_js);

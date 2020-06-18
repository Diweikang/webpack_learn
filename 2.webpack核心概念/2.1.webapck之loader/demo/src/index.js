import concept from '../../imgs/1.loader-concept.png';
import './index.css';

var img = new Image()
img.src = concept
img.classList.add('logo')
var root = document.getElementById('root')
root.append(img)

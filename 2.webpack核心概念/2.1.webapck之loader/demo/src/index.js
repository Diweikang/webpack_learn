import concept from '../../imgs/1.loader-concept.png';
import './index.scss';
import createAvator from './createAvatar';

createAvator()

var img = new Image()
img.src = concept
img.classList.add('logo')
var root = document.getElementById('root')
root.append(img)

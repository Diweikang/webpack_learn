import concept from '../../imgs/1.loader-concept.png';
import style from './index.scss';
function createAvatar () {
  var img = new Image()
  img.src = concept
  img.classList.add(style.logo)
  var root = document.getElementById('root')
  root.append(img)
}

export default createAvatar;
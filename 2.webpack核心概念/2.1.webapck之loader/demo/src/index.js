import concept from '../../imgs/1.loader-concept.png';
console.log(concept)    // 'ca4c744f04b42d8b4f26cc0da469e898.png'

var img = new Image()
img.src = concept
var root = document.getElementById('root')
root.append(img)

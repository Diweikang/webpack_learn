// import a from 'a';
// import b from 'b'; 


// import test from './test.js';
// console.log(test.name);

import _ from 'lodash';
// import moment from 'moment';

var element = document.createElement('div');
element.innerHTML = _.join(['Dell', 'Lee'], '-');
document.body.appendChild(element);
// console.log(moment)

// function getComponent() {
// 	return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 		return element;
// 	})
// }

// getComponent().then(element => {
// 	document.body.appendChild(element);
// });

import * as _ from 'lodash';

function component() {
  const element: HTMLDivElement = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
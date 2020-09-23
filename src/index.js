import {getID, getClass,create} from './help'

import { generateLi } from './li'

import data from './../data'

const root = getID('root')

const ul = create('ul', {class: 'list'})

const list = data.map((item) => ul.append(generateLi(item)))
ul.append(list)
root.append(ul)

ul.onclick = eventHandler;

function eventHandler(event){
      console.dir(event);
      if(event.target.parentNode.tagName === 'LI'){
          alert(event.target.innerText)
      }
}

// const heading = getID('heading')
// const headingArr = [heading.innerText, 'This is Change Text']
// const containerColor = getClass('containerColor')
// let terms = false;
// setInterval(() => {

//     if(terms){
//         heading.innerText = headingArr[0];
//         // heading.style.color = 'red';
//         terms = false
//     }else{
//         heading.innerText = headingArr[1]
//         // heading.style.color = 'yellow';
//         terms = true
//     }
    
// },3000)


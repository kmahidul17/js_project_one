import { create } from './help'

export function generateLi(data){

    const li = create('li', {class: 'list-item'});
    const h2 = create('h2')
    const span = create('span')

    h2.innerText = `Name: ${data.name}`;
    span.innerText = `Price: ${data.price}`;

    li.append(h2)
    li.append(span)

    return li;
    
}

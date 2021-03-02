//console.log('Xxx');

let paragraphs = document.querySelectorAll('p');
let paragraph3 =  paragraphs[2];

paragraph3.style.border = '4px solid red';
paragraph3.style.padding = '60px;';


let logo = document.querySelector('img');
logo.setAttribute('src', 'https://cdn.mos.cms.futurecdn.net/2LDXhWbsWQ3VWreWPsrahn.jpg');


let list = document.querySelectorAll('li');

for (loop = 0; loop < list.length; loop++) {
  list[loop].style.border = `4px ${((loop % 2) == 0?'solid':'dashed')} ${((loop % 5) == 0?'blue':'red')}`;
  //list[loop].style.fontSize = `${((loop % 4) == 0?'12':'20')}px;`;
}

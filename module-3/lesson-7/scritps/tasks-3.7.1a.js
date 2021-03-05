//console.log('xxx');

let buttons = document.querySelectorAll('button.selection');

let allImages = document.querySelectorAll('main .image-selections .images')

function toggleActiveClass (active) {
  buttons.forEach(function(button) {
    button.classList.remove('active');
  })

  active.classList.add('active');

}


function toggleImages(dataClass) {

  if (dataClass === 'all') {
    allImages.forEach(function(image) {
      image.style.display = 'flex';
    });
  } else {
    allImages.forEach(function(image) {
      if (image.dataset.class === dataClass) {
        image.style.display = 'flex';
      } else {
        image.style.display = 'none';
      }
      
    });
  }
} // end of toggleImages function



dynamicContent = [
  ['Colours', 'https://images.unsplash.com/photo-1614850715776-a749a85b4144?fit=crop&w=400&q=60', 'Colours'],
  ['Building', 'https://images.unsplash.com/photo-1614793319738-bde496bbe85e?w=400&q=60', 'class room'],
  ['Firework', 'https://images.unsplash.com/photo-1614681978598-2e8ac06aed27?fit=crop&w=400&q=60', 'Firework display'],
  ['Firework', 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?fit=crop&w=400&q=60', 'Firework display'],
  ['Firework', 'https://images.unsplash.com/photo-1548386135-b47fa5a79ae6?fit=crop&w=400&q=60', 'Firework display'],
  ['Firework', 'https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?fit=crop&w=400&q=60', 'Firework display'],
  ['Firework', 'https://images.unsplash.com/photo-1549534077-1b4f31dd59ea?fit=crop&w=400&q=60', 'Firework display'],
  ['Firework', 'https://images.unsplash.com/photo-1539193143244-c83d9436d633?fit=crop&w=400&q=60', 'Firework display'],
  ['Firework', 'https://images.unsplash.com/photo-1607729398053-3d30cbb2ecb4?fit=crop&w=400&q=60', 'Firework display'],
  ['Geography', 'https://images.unsplash.com/photo-1614837617300-3d6ee784aa59?fit=crop&w=400&q=60', 'Mountain view'],
  ['Glasses', 'https://images.unsplash.com/photo-1614747232202-338305307295?&fit=crop&w=400&q=60', 'Glasses'],

];

//console.log(dynamicContent[2][2]);

let imageSelector = document.querySelector('.selection-container');
let imageDisplay = document.querySelector('.image-selections');

for (let loop = 0; loop < dynamicContent.length; loop++) {
  //console.log(dynamicContent[loop][2]);

  className = dynamicContent[loop][0];

  // loop through buttons to check if exists
  buttonExist = false;
  document.querySelectorAll('button.selection').forEach(function(button) {
    if (button.dataset.class === className) {
      buttonExist = true;
    }
  });

  // when button not exist add new
  if (!buttonExist) {
    let newButton = document.createElement('button');
    newButton.innerHTML = className;
    newButton.setAttribute('class', 'selection');
    newButton.setAttribute('data-class', className);
    imageSelector.appendChild(newButton);
  }

  newDivImage = document.createElement('div');
  newDivImage.setAttribute('class', 'images');
  newDivImage.setAttribute('data-class', className);
  newImage = document.createElement('img');
  newImage.src = dynamicContent[loop][1];
  newImage.alt = dynamicContent[loop][2];
  newDivImage.appendChild(newImage);
  imageDisplay.appendChild(newDivImage);
}


allImages = document.querySelectorAll('main .image-selections .images')


buttons = document.querySelectorAll('button.selection');

buttons.forEach(function(button) {
  button.addEventListener('click', function () {
    toggleActiveClass(button);
    toggleImages(button.dataset.class);
  });
});


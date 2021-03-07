staticContent = [
  ['Colours', 'https://images.unsplash.com/photo-1614850715776-a749a85b4144?fit=crop&w=400&q=60', 'Colours Green to red slanted'],
  ['Building', 'https://images.unsplash.com/photo-1614793319738-bde496bbe85e?w=400&q=60', 'class room'],
  ['Eggs', 'https://images.unsplash.com/photo-1585507252242-11fe632c26e8?fit=crop&w=400&q=60', 'Eggs with faces'],
  ['Firework', 'https://images.unsplash.com/photo-1614681978598-2e8ac06aed27?fit=crop&w=400&q=60', 'Firework display - City with buildings'],
  ['Firework', 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?fit=crop&w=400&q=60', 'Firework display - Circles'],
  ['Firework', 'https://images.unsplash.com/photo-1548386135-b47fa5a79ae6?fit=crop&w=400&q=60', 'Firework display - City distance'],
  ['Glasses', 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?fit=crop&w=400&q=60', 'Glasses Street'],
  ['Firework', 'https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?fit=crop&w=400&q=60', 'Firework display - White and yellow'],
  ['Firework', 'https://images.unsplash.com/photo-1549534077-1b4f31dd59ea?fit=crop&w=400&q=60', 'Firework display - over city'],
  ['Eggs', 'https://images.unsplash.com/photo-1591981131950-2ed961d0490e?fit=crop&w=400&q=60', 'Baking'],
  ['Firework', 'https://images.unsplash.com/photo-1539193143244-c83d9436d633?fit=crop&w=400&q=60', 'Firework display - White'],
  ['Firework', 'https://images.unsplash.com/photo-1607729398053-3d30cbb2ecb4?fit=crop&w=400&q=60', 'Firework display - Orange and white'],
  ['Colours', 'https://images.unsplash.com/photo-1519686997393-7bdb73d6c54d?fit=crop&w=400&q=60', 'Jelly beans'],
  ['Geography', 'https://images.unsplash.com/photo-1614837617300-3d6ee784aa59?fit=crop&w=400&q=60', 'Mountain view'],
  ['Glasses', 'https://images.unsplash.com/photo-1614747232202-338305307295?fit=crop&w=400&q=60', 'Glasses shadows'],
  ['Colours', 'https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?fit=crop&w=400&q=60', 'Colour strips'],
  ['Glasses', 'https://images.unsplash.com/photo-1517948430535-1e2469d314fe?fit=crop&w=400&q=60', 'Glasses and chart'],
  ['Eggs', 'https://images.unsplash.com/photo-1491524062933-cb0289261700?fit=crop&w=400&q=60', 'Eggs in bowl'],  
];




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


function addButton(buttonName) {
  
  // loop through buttons to check if exists
  let buttonExist = false;
  let imageSelector = document.querySelector('.selection-container');
  
  document.querySelectorAll('button.selection').forEach(function(button) {
    if (button.dataset.class === buttonName) {
      buttonExist = true;
    }
  });

  //when button not exist add new
  if (!buttonExist) {
    let newButton = document.createElement('button');
    newButton.innerHTML = buttonName;
    newButton.setAttribute('class', 'selection');
    newButton.setAttribute('data-class', buttonName);
    imageSelector.appendChild(newButton);
  }
}



//console.log(dynamicContent[2][2]);



function addDynamicContent(dynamicContent) {
//  let imageSelector = document.querySelector('.selection-container');
  let imageDisplay = document.querySelector('.image-selections');

  for (let loop = 0; loop < dynamicContent.length; loop++) {
    //console.log(dynamicContent[loop][2]);

    className = dynamicContent[loop][0];
    addButton(className);

    newDivImage = document.createElement('div');
    newDivImage.setAttribute('class', 'images');
    newDivImage.setAttribute('data-class', className);
    newImage = document.createElement('img');
    newImage.src = dynamicContent[loop][1];
    newImage.alt = dynamicContent[loop][2];

    newImage.addEventListener('mouseover', function() {
      document.getElementById('imageDescription').innerHTML = dynamicContent[loop][2];
    })
  

    newDivImage.appendChild(newImage);
    imageDisplay.appendChild(newDivImage);
  }
}



function main() {
  
  addDynamicContent(staticContent);

  allImages = document.querySelectorAll('main .image-selections .images')
  buttons = document.querySelectorAll('button.selection');

  buttons.forEach(function(button) {
    button.addEventListener('click', function () {
      toggleActiveClass(button);
      toggleImages(button.dataset.class);
      document.getElementById('imageDescription').innerHTML = button.innerHTML;
    });

});

}



main();
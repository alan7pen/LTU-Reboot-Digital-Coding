let myRecipe = {
  recipeTitle: 'Beans on toast',
  servings: 2,
  ingredients: [
    'Baked beans',
    '2x slices of Bread',
    '2x Cheese slices'
  ],
  directions: [
    'Put 2x bread in toaster, setting 3',
    'Open tin of beans',
    'Beans into Microwave, 2 minutes',
    'Put toast on plate',
    'Cover with beans',
    'Place cheese slice over beans',
    'Place into microwave for 30 seconds',
    'Leave to stand for 1 minute',
    'Crack on and eat it !!!'
  ]
}

function displayRecipe(recipe)
{
  console.log(`Recipe for: ${recipe.recipeTitle}`);

  message = `Serves: ${recipe.servings} ${(recipe.servings==1)?'person':'people'}`;
  
  console.log(message);

  console.log('Ingredients:')
  for(listIngredients = 0; listIngredients < recipe.ingredients.length; listIngredients++) {
    console.log(`     ${recipe.ingredients[listIngredients]}`);
  }

  console.log('Directions:')
  for(listDirections = 0; listDirections < recipe.directions.length; listDirections++) {
    console.log(`     ${recipe.directions[listDirections]}`);
  }
}

displayRecipe(myRecipe);


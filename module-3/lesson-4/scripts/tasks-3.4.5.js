let myRecipe = {
  recipeTitle: 'Beans on toast with cheese',
  servings: 2,
  ingredients: [
    'Baked beans',
    '4x slices of bread',
    '4x Cheese slices',
    'Pepper'
  ],
  directions: [
    'Put 2x bread in toaster, setting 3',
    'Open tin of beans',
    'Beans into jug and into microwave, 2 minutes',
    'Put 2x toast on each plate',
    'Cover with some beans',
    'Place 2x cheese slice over beans',
    'Place into each plate into microwave for 30 seconds',
    'Leave to stand for 1 minute',
    'Sprinkle some pepper over it',
    'Crack on and get your laughing tackle round it !!!'
  ],
  letsCook: function() {
    
    console.log(`Recipe for: ${this.recipeTitle}`);
    console.log(`Serves: ${this.servings} ${(this.servings == 1)?'person':'people'}`);
  
    console.log(`Ingredients (${this.ingredients.length} item${(this.ingredients.length > 1)?'s':''}):`)
    for(listIngredients = 0; listIngredients < this.ingredients.length; listIngredients++) {
      console.log(`     ${this.ingredients[listIngredients]}`);
    }
  
    console.log('Directions:')
    for(listDirections = 0; listDirections < this.directions.length; listDirections++) {
      console.log(`     ${this.directions[listDirections]}`);
    }
  }
  
  
}

myRecipe.letsCook();

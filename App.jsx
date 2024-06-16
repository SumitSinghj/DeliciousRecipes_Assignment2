import React, { useState } from 'react';
import RecipeTitle from './components/RecipeTitle';
import IngredientList from './components/IngredientList';
import InstructionList from './components/InstructionList';
import Tips from './components/Tips'; 
import { recipes } from './data/recipes'; // Import recipe data


function Style() {
  // ... your component logic
  return (
    <AppContainer>
      <h2>Select a Recipe:</h2>
      {/* ... rest of your recipe display code */}
    </AppContainer>
  );
}




function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]); // Initial recipe

  const handleRecipeChange = (event) => {
    const selectedRecipeIndex = event.target.value;
    setSelectedRecipe(recipes[selectedRecipeIndex]);
  };
  

  return (
    <div className="recipe-container">
      <h2>Select a Recipe:</h2>
      <select value={selectedRecipe.title} onChange={handleRecipeChange}>
        {recipes.map((recipe, index) => (
          <option key={index} value={index}>
            {recipe.title}
          </option>
        ))}
      </select>

      <RecipeTitle title={selectedRecipe.title} />
      <h2>Ingredients:</h2>
      <IngredientList ingredients={selectedRecipe.ingredients} />
      <h2>Instructions:</h2>
      <InstructionList instructions={selectedRecipe.instructions} />
      <h2>Tips:</h2>
      <Tips tip={selectedRecipe.tip} /> {/* Optional */}
    </div>
  );
}

export default App;





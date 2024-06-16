import React from 'react';

function IngredientList({ ingredients }) {
  return (
    <ul className="ingredients">
      {ingredients.map((ingredient) => (
        <li key={ingredient} className="ingredient-item">
          {ingredient}
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;

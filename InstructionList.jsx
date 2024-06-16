import React from 'react';

function InstructionList({ instructions }) {
  return (
    <ol className="instructions">
      {instructions.map((instruction, index) => (
        <li key={index} className="instruction-step">
          {instruction}
        </li>
      ))}
    </ol>
  );
}

export default InstructionList;

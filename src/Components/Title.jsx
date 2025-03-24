import React from 'react';
import '../App.css'; // Assuming you are using external CSS for styles

const Title = () => {
  const text = 'ISMIAL HASAN';
  
  return (
    <h1 className="text-5xl font-bold">
      {text.split('').map((char, index) => (
        char === ' ' ? (
          // If it's a space, render a space character styled with a span tag
          <span key={index} className="space"> </span>
        ) : (
          <span key={index} className={`char char-${index}`}>{char}</span>
        )
      ))}
    </h1>
  );
};

export default Title;

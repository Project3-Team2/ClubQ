// rfce tab
import React from 'react';

// creating an external React component and we want to style it
function Button({ className, buttonLabel }) {
  return <button className={className}> {buttonLabel} </button>;
}

export default Button;
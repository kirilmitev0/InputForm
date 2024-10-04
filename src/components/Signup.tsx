import React, { useState } from 'react';
import '../Styles/FormStyle.css'; 

const Signup: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleFocus = () => {
    setIsAnimated(true);
  };

  const handleBlur = () => {
    setIsAnimated(false);
  };

  return (
    <div className="signup">
      <form className={`form ${isAnimated ? 'animate' : ''}`}>
        <h2>Signup</h2>
        <input type="text" placeholder="Username" onFocus={handleFocus} onBlur={handleBlur} required />
        <input type="email" placeholder="Email" onFocus={handleFocus} onBlur={handleBlur} required />
        <input type="password" placeholder="Password" onFocus={handleFocus} onBlur={handleBlur} required />
        <input type="password" placeholder="Repeat Password" onFocus={handleFocus} onBlur={handleBlur} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
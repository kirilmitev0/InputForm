import React, { useState } from 'react';
import '../Styles/FormStyle.css'; 

const Login: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleFocus = () => {
    setIsAnimated(true);
  };

  const handleBlur = () => {
    setIsAnimated(false);
  };

  return (
    <div className="login">
      <form className={`form ${isAnimated ? 'animate' : ''}`}>
        <h2>Login</h2>
        <input type="email" placeholder="email" onFocus={handleFocus} onBlur={handleBlur} required />
        <input type="password" placeholder="Password" onFocus={handleFocus} onBlur={handleBlur} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
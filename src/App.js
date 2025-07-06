import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="app">
      <h1>🔐 Show/Hide Password</h1>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="checkbox">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
    </div>
  );
}

export default App;

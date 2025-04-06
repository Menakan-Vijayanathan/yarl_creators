// components/Login.tsx
import React, { useState } from 'react';
import { Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER } from './Data';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      navigate('/APricing');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f2f0] to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="flex items-center justify-center mb-8">
          <Newspaper className="text-[#f19335] w-12 h-12" />
          <h1 className="text-3xl font-bold ml-2">Roar CMS</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f19335]"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f19335]"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f19335] text-white py-2 rounded-lg hover:bg-[#d97d1d] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

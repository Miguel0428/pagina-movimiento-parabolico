import React from 'react';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/parabolic-motion', label: 'Movimiento Parabólico' },
    { path: '/kinematics', label: 'Cinemática' },
    { path: '/sports-physics', label: 'Física en Deportes' },
  ];

  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Activity className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">Física en el Deporte</h1>
        </div>
        <nav className="flex justify-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-200 hover:bg-blue-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
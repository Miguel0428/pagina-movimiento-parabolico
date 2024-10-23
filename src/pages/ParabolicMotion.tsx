import React from 'react';
import { Calculator } from '../components/Calculator';

export function ParabolicMotion() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Movimiento Parabólico Detallado</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Componentes del Movimiento</h3>
            <p className="text-gray-700 mb-4">
              El movimiento parabólico se puede descomponer en dos movimientos independientes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Movimiento horizontal (MRU)</li>
              <li>Movimiento vertical (MRUA)</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200&auto=format&fit=crop"
              alt="Trayectoria parabólica"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">Variables Importantes</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Velocidad Inicial (v₀)</h4>
            <p className="text-gray-700">Velocidad con la que se lanza el objeto</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Ángulo de Lanzamiento (θ)</h4>
            <p className="text-gray-700">Ángulo con respecto a la horizontal</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Gravedad (g)</h4>
            <p className="text-gray-700">Aceleración gravitacional (9.81 m/s²)</p>
          </div>
        </div>
      </section>

      <Calculator />
    </div>
  );
}
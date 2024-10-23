import React from 'react';

export function PhysicsExplanation() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Movimiento Parabólico en el Deporte</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Conceptos Básicos</h3>
          <p className="text-gray-700 mb-4">
            El movimiento parabólico es un tipo de movimiento bidimensional que resulta de la 
            combinación de un movimiento horizontal uniforme y un movimiento vertical uniformemente 
            acelerado debido a la gravedad.
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Ecuaciones Principales:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Posición horizontal: x = v₀ cos(θ) t</li>
              <li>Posición vertical: y = v₀ sin(θ) t - (1/2)gt²</li>
              <li>Alcance máximo: R = (v₀² sin(2θ))/g</li>
              <li>Altura máxima: h = (v₀² sin²(θ))/(2g)</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1470&auto=format&fit=crop"
            alt="Tiro parabólico en el baloncesto"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">
            En el baloncesto, cada tiro libre sigue una trayectoria parabólica perfecta, 
            donde factores como el ángulo inicial y la velocidad determinan si la pelota 
            entrará en la canasta.
          </p>
        </div>
      </div>
    </section>
  );
}
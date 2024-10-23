import React from 'react';

export function SportsPhysics() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Fenómenos Físicos en el Deporte</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Fútbol</h3>
            <img
              src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1200&auto=format&fit=crop"
              alt="Tiro libre en fútbol"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Efecto Magnus</h4>
            <p className="text-gray-700 mb-4">
              Cuando un balón gira mientras se mueve por el aire, crea una diferencia
              de presión que hace que la pelota se curve.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tiros libres curvos</li>
              <li>Centros con efecto</li>
              <li>Disparos con rosca</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Baloncesto</h3>
            <img
              src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=1200&auto=format&fit=crop"
              alt="Tiro de baloncesto"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Tiro Parabólico</h4>
            <p className="text-gray-700 mb-4">
              El ángulo óptimo de lanzamiento varía según la distancia y altura del jugador.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tiros libres</li>
              <li>Tiros de 3 puntos</li>
              <li>Rebotes</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Factores Físicos en el Deporte</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Resistencia del Aire</h4>
              <p className="text-gray-700">Afecta la trayectoria y velocidad del objeto</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Rotación</h4>
              <p className="text-gray-700">Genera efectos y cambios en la trayectoria</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Fricción</h4>
              <p className="text-gray-700">Influye en el movimiento y el control</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
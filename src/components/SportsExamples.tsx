import React from 'react';

export function SportsExamples() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Ejemplos en el Deporte</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Fútbol</h3>
          <img 
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1471&auto=format&fit=crop"
            alt="Tiro libre en fútbol"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">
            En un tiro libre, el jugador debe considerar:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Velocidad inicial del balón</li>
            <li>Ángulo de tiro</li>
            <li>Distancia a la portería</li>
            <li>Efecto Magnus por rotación</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Baloncesto</h3>
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1490&auto=format&fit=crop"
            alt="Tiro de baloncesto"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">
            En un tiro a canasta, se debe considerar:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Altura del jugador</li>
            <li>Distancia al aro</li>
            <li>Ángulo óptimo de tiro (45-52°)</li>
            <li>Velocidad inicial requerida</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
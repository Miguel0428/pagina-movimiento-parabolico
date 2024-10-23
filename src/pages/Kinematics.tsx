import React from 'react';

export function Kinematics() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Cinemática: Fundamentos y Experimentos</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Conceptos Fundamentales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Posición y Desplazamiento</h4>
              <p className="text-gray-700">
                La posición es la ubicación de un objeto respecto a un punto de referencia,
                mientras que el desplazamiento es el cambio en la posición.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Velocidad y Aceleración</h4>
              <p className="text-gray-700">
                La velocidad es la tasa de cambio de la posición, y la aceleración
                es la tasa de cambio de la velocidad.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Experimentos Clásicos</h3>
          <div className="space-y-6">
            <div className="bg-white border border-blue-100 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Experimento de Galileo</h4>
              <p className="text-gray-700 mb-4">
                Galileo demostró que objetos de diferentes masas caen a la misma velocidad
                en ausencia de resistencia del aire.
              </p>
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop"
                alt="Experimento de caída libre"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="bg-white border border-blue-100 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Plano Inclinado</h4>
              <p className="text-gray-700 mb-4">
                Este experimento permitió estudiar el movimiento acelerado y establecer
                las bases de las leyes del movimiento.
              </p>
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop"
                alt="Plano inclinado"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
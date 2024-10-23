import React, { useState } from 'react';

interface CalculationResult {
  maxHeight: number;
  range: number;
  timeOfFlight: number;
  steps: string[];
}

export function Calculator() {
  const [velocity, setVelocity] = useState('');
  const [angle, setAngle] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateTrajectory = (v0: number, theta: number): CalculationResult => {
    const g = 9.81;
    const thetaRad = (theta * Math.PI) / 180;
    
    const maxHeight = (v0 * v0 * Math.sin(thetaRad) * Math.sin(thetaRad)) / (2 * g);
    const range = (v0 * v0 * Math.sin(2 * thetaRad)) / g;
    const timeOfFlight = (2 * v0 * Math.sin(thetaRad)) / g;

    const steps = [
      `1. Velocidad inicial (v₀) = ${v0} m/s`,
      `2. Ángulo (θ) = ${theta}°`,
      `3. Altura máxima = v₀² × sin²(θ) ÷ (2g) = ${maxHeight.toFixed(2)} m`,
      `4. Alcance = v₀² × sin(2θ) ÷ g = ${range.toFixed(2)} m`,
      `5. Tiempo de vuelo = 2 × v₀ × sin(θ) ÷ g = ${timeOfFlight.toFixed(2)} s`
    ];

    return {
      maxHeight,
      range,
      timeOfFlight,
      steps
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const v0 = parseFloat(velocity);
    const theta = parseFloat(angle);
    
    if (isNaN(v0) || isNaN(theta)) {
      alert('Por favor ingrese valores válidos');
      return;
    }

    setResult(calculateTrajectory(v0, theta));
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Calculadora de Trayectoria</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleCalculate} className="mb-6">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Velocidad Inicial (m/s)
              </label>
              <input
                type="number"
                value={velocity}
                onChange={(e) => setVelocity(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Ángulo (grados)
              </label>
              <input
                type="number"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Calcular
          </button>
        </form>

        {result && (
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Resultados:</h3>
            <div className="space-y-2">
              {result.steps.map((step, index) => (
                <p key={index} className="text-gray-700">{step}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
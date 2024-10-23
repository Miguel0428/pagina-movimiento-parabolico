import React from 'react';
import { PhysicsExplanation } from '../components/PhysicsExplanation';
import { SportsExamples } from '../components/SportsExamples';
import { Calculator } from '../components/Calculator';

export function Home() {
  return (
    <>
      <PhysicsExplanation />
      <SportsExamples />
      <Calculator />
    </>
  );
}
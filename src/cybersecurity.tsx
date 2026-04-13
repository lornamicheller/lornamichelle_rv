import React from 'react';
import { createRoot } from 'react-dom/client';
import Grainient from './components/Grainient';

const bgRoot = document.getElementById('grainient-bg-root');
if (bgRoot) {
  const root = createRoot(bgRoot);
  root.render(
    <Grainient
      color1="#000000"
      color2="#143b42"
      color3="#000000"
      timeSpeed={0.8}
      colorBalance={0.04}
      warpStrength={1.5}
      warpFrequency={6}
      warpSpeed={4}
      warpAmplitude={60}
      blendAngle={0}
      blendSoftness={0.05}
      rotationAmount={500}
      noiseScale={2.5}
      grainAmount={0.15}
      grainScale={2}
      grainAnimated={true}
      contrast={1.5}
      gamma={1}
      saturation={1}
      centerX={0}
      centerY={0}
      zoom={0.9}
    />
  );
}

import React, { useRef, useEffect } from 'react';
import { officesData } from '../../data/officesData';
import type { OfficeLocation } from '../../types';

interface InteractiveGlobe3DProps {
  selectedOffice: OfficeLocation;
  onSelectOffice: (office: OfficeLocation) => void;
}

export const InteractiveGlobe3D: React.FC<InteractiveGlobe3DProps> = ({
  selectedOffice
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let rotationAngle = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 500;
      canvas.height = canvas.parentElement?.clientHeight || 500;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      rotationAngle += 0.005;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;

      ctx.clearRect(0, 0, w, h);

      // Globe Atmosphere Glow
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.25);
      grad.addColorStop(0, 'rgba(0, 212, 255, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Globe Base Circle
      ctx.fillStyle = '#0B1118';
      ctx.strokeStyle = '#00D4FF';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#00D4FF';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Latitude Lines
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 20) {
        const rLat = radius * Math.cos((lat * Math.PI) / 180);
        const yLat = cy + radius * Math.sin((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(cx, yLat, rLat, rLat * 0.2, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude Rotating Lines
      for (let lon = 0; lon < 360; lon += 30) {
        const curLon = ((lon + rotationAngle * 50) % 360) * (Math.PI / 180);
        const rx = radius * Math.sin(curLon);
        if (Math.cos(curLon) > 0) {
          ctx.beginPath();
          ctx.ellipse(cx, cy, Math.abs(rx), radius, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Render Office Hotspots
      officesData.forEach((office) => {
        const radLat = (office.lat * Math.PI) / 180;
        const radLng = ((office.lng + rotationAngle * 60) * Math.PI) / 180;

        const x = cx + radius * Math.cos(radLat) * Math.sin(radLng);
        const y = cy - radius * Math.sin(radLat);
        const z = radius * Math.cos(radLat) * Math.cos(radLng);

        if (z > -10) {
          const isSelected = selectedOffice.id === office.id;

          ctx.fillStyle = isSelected ? '#FF8C00' : '#00D4FF';
          ctx.shadowColor = isSelected ? '#FF8C00' : '#00D4FF';
          ctx.shadowBlur = isSelected ? 20 : 10;

          ctx.beginPath();
          ctx.arc(x, y, isSelected ? 8 : 5, 0, Math.PI * 2);
          ctx.fill();

          if (isSelected) {
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px Orbitron, monospace';
            ctx.fillText(office.city.toUpperCase(), x + 12, y + 4);
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [selectedOffice]);

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />
    </div>
  );
};

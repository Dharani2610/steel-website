import React, { useRef, useEffect } from 'react';
import type { StoryStage } from '../../types';

interface MainConstructionCanvasProps {
  currentStage: StoryStage;
  scrollProgress: number;
}

export const MainConstructionCanvas: React.FC<MainConstructionCanvasProps> = ({
  currentStage,
  scrollProgress
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let sparkFrame = 0;
    const render = () => {
      sparkFrame += 0.05;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2 + 50;

      ctx.fillStyle = '#05070B';
      ctx.fillRect(0, 0, width, height);

      drawBlueprintGrid(ctx, width, height, sparkFrame);

      const stageFactor = currentStage + scrollProgress;

      drawConcreteFoundations(ctx, centerX, cy(centerY), stageFactor);
      drawSteelColumns(ctx, centerX, cy(centerY), stageFactor);
      drawPrimaryBeams(ctx, centerX, cy(centerY), stageFactor);
      drawSecondaryFraming(ctx, centerX, cy(centerY), stageFactor);
      drawDiagonalBracing(ctx, centerX, cy(centerY), stageFactor);

      if (currentStage === 7) {
        drawConnectionZoomDetail(ctx, centerX, cy(centerY));
      }

      if (currentStage === 8) {
        drawShopDrawingHUD(ctx, width, height);
      }

      if (currentStage === 9) {
        drawBimCoordinationOverlay(ctx, centerX, cy(centerY), sparkFrame);
      }

      if (currentStage === 10) {
        drawFabricationProcess(ctx, centerX, cy(centerY), sparkFrame);
      }

      if (currentStage === 11) {
        drawCraneErectionRig(ctx, centerX, cy(centerY), sparkFrame);
      }

      if (currentStage === 12) {
        drawIlluminatedBuildingClimax(ctx, centerX, cy(centerY), sparkFrame);
      }

      drawLaserHUD(ctx, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    function cy(val: number) { return val; }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [currentStage, scrollProgress]);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

/* --- Helper Drawing Functions --- */

function drawBlueprintGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number
) {
  const horizon = height * 0.65;
  ctx.save();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.15)';
  ctx.lineWidth = 1;

  for (let x = -width; x < width * 2; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(width / 2 + (x - width / 2) * 0.1, horizon);
    ctx.stroke();
  }

  for (let y = horizon; y < height; y += 20) {
    const opacity = (y - horizon) / (height - horizon);
    ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.25})`;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  const scanY = horizon + ((Math.sin(time) + 1) / 2) * (height - horizon);
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00D4FF';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(0, scanY);
  ctx.lineTo(width, scanY);
  ctx.stroke();

  ctx.restore();
}

function drawConcreteFoundations(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  stageFactor: number
) {
  if (stageFactor < 1.5) return;
  const opacity = Math.min(1, (stageFactor - 1.5) * 2);

  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = '#1e293b';
  ctx.strokeStyle = '#8C99A5';
  ctx.lineWidth = 1.5;

  const footings = [
    { x: cx - 180, y: cy + 40 },
    { x: cx - 60, y: cy + 60 },
    { x: cx + 60, y: cy + 60 },
    { x: cx + 180, y: cy + 40 }
  ];

  footings.forEach((f) => {
    ctx.beginPath();
    ctx.rect(f.x - 30, f.y - 15, 60, 30);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#00D4FF';
    ctx.shadowColor = '#00D4FF';
    ctx.shadowBlur = 5;
    ctx.fillRect(f.x - 18, f.y - 8, 4, 4);
    ctx.fillRect(f.x + 14, f.y - 8, 4, 4);
    ctx.fillRect(f.x - 18, f.y + 4, 4, 4);
    ctx.fillRect(f.x + 14, f.y + 4, 4, 4);
  });

  ctx.restore();
}

function drawSteelColumns(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  stageFactor: number
) {
  if (stageFactor < 2.5) return;
  const heightProgress = Math.min(1, (stageFactor - 2.5) * 1.5);
  const columnH = 220 * heightProgress;

  ctx.save();
  const columnPositions = [-180, -60, 60, 180];

  columnPositions.forEach((offsetX) => {
    const x = cx + offsetX;
    const baseY = cy + (offsetX === -180 || offsetX === 180 ? 40 : 60);

    const grad = ctx.createLinearGradient(x - 12, 0, x + 12, 0);
    grad.addColorStop(0, '#8C99A5');
    grad.addColorStop(0.5, '#475569');
    grad.addColorStop(1, '#1e293b');

    ctx.fillStyle = grad;
    ctx.strokeStyle = '#00D4FF';
    ctx.lineWidth = 1;

    ctx.fillRect(x - 10, baseY - columnH, 20, columnH);
    ctx.strokeRect(x - 10, baseY - columnH, 20, columnH);

    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(x - 18, baseY - 6, 36, 6);

    if (heightProgress > 0.8 && heightProgress < 1) {
      ctx.fillStyle = '#FF8C00';
      ctx.shadowColor = '#FF8C00';
      ctx.shadowBlur = 10;
      for (let i = 0; i < 4; i++) {
        const sparkX = x + (Math.random() - 0.5) * 20;
        const sparkY = baseY - 6 + (Math.random() - 0.5) * 10;
        ctx.fillRect(sparkX, sparkY, 2, 2);
      }
    }
  });

  ctx.restore();
}

function drawPrimaryBeams(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  stageFactor: number
) {
  if (stageFactor < 3.5) return;
  const beamProgress = Math.min(1, (stageFactor - 3.5) * 1.5);
  const colH = 220;

  ctx.save();
  ctx.strokeStyle = '#00D4FF';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00D4FF';
  ctx.shadowBlur = 8;

  const yLevel = cy + 50 - colH;
  const totalLength = 360;
  const currentLen = totalLength * beamProgress;

  ctx.fillStyle = '#475569';
  ctx.fillRect(cx - 180, yLevel - 6, currentLen, 12);
  ctx.strokeRect(cx - 180, yLevel - 6, currentLen, 12);

  if (beamProgress > 0.2) {
    ctx.fillStyle = '#FF8C00';
    ctx.shadowColor = '#FF8C00';
    ctx.shadowBlur = 12;
    for (let i = 0; i < 6; i++) {
      const sx = cx - 180 + Math.random() * currentLen;
      ctx.fillRect(sx, yLevel + (Math.random() - 0.5) * 12, 3, 3);
    }
  }

  ctx.restore();
}

function drawSecondaryFraming(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  stageFactor: number
) {
  if (stageFactor < 4.5) return;
  const progress = Math.min(1, (stageFactor - 4.5) * 1.5);
  const yLevel = cy + 50 - 220;

  ctx.save();
  ctx.strokeStyle = 'rgba(140, 153, 165, 0.7)';
  ctx.lineWidth = 1;

  for (let x = cx - 160; x <= cx + 160; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, yLevel);
    ctx.lineTo(x, yLevel - 60 * progress);
    ctx.stroke();
  }

  ctx.restore();
}

function drawDiagonalBracing(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  stageFactor: number
) {
  if (stageFactor < 5.5) return;
  const progress = Math.min(1, (stageFactor - 5.5) * 1.5);
  const yBottom = cy + 50;
  const yTop = cy + 50 - 220;

  ctx.save();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = '#FF8C00';
  ctx.shadowBlur = 10;

  ctx.globalAlpha = progress;

  ctx.beginPath();
  ctx.moveTo(cx - 180, yBottom);
  ctx.lineTo(cx - 60, yTop);
  ctx.moveTo(cx - 60, yBottom);
  ctx.lineTo(cx - 180, yTop);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx + 60, yBottom);
  ctx.lineTo(cx + 180, yTop);
  ctx.moveTo(cx + 180, yBottom);
  ctx.lineTo(cx + 60, yTop);
  ctx.stroke();

  ctx.restore();
}

function drawConnectionZoomDetail(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number
) {
  ctx.save();

  ctx.fillStyle = 'rgba(11, 17, 24, 0.9)';
  ctx.strokeStyle = '#00D4FF';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00D4FF';
  ctx.shadowBlur = 20;

  const boxW = 420;
  const boxH = 260;
  const bx = cx - boxW / 2;
  const by = cy - 140;

  ctx.fillRect(bx, by, boxW, boxH);
  ctx.strokeRect(bx, by, boxW, boxH);

  ctx.fillStyle = '#334155';
  ctx.fillRect(cx - 40, by + 20, 80, boxH - 40);
  ctx.strokeRect(cx - 40, by + 20, 80, boxH - 40);

  ctx.fillStyle = '#FF8C00';
  ctx.fillRect(cx + 40, by + 70, 16, 120);

  ctx.fillStyle = '#475569';
  ctx.fillRect(cx + 56, by + 80, 120, 100);

  ctx.fillStyle = '#00D4FF';
  const boltY = [by + 85, by + 115, by + 145, by + 175];
  boltY.forEach((y) => {
    ctx.fillRect(cx + 36, y, 10, 10);
    ctx.fillRect(cx + 48, y, 10, 10);
  });

  ctx.strokeStyle = '#00D4FF';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx + 42, by + 90);
  ctx.lineTo(cx + 180, by + 35);
  ctx.lineTo(cx + 260, by + 35);
  ctx.stroke();

  ctx.fillStyle = '#00D4FF';
  ctx.font = 'bold 11px Orbitron, monospace';
  ctx.fillText('HIGH-STRENGTH A325 BOLTS (8x)', cx + 185, by + 28);

  ctx.strokeStyle = '#FF8C00';
  ctx.beginPath();
  ctx.moveTo(cx + 48, by + 130);
  ctx.lineTo(cx - 120, by + 200);
  ctx.lineTo(cx - 200, by + 200);
  ctx.stroke();

  ctx.fillStyle = '#FF8C00';
  ctx.fillText('AWS D1.1 FILLET WELD 5/16"', cx - 195, by + 192);

  ctx.restore();
}

function drawShopDrawingHUD(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.save();
  const hudW = 380;
  const hudH = 260;
  const x = width - hudW - 40;
  const y = height / 2 - 130;

  ctx.fillStyle = 'rgba(5, 7, 11, 0.92)';
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.shadowColor = '#00D4FF';
  ctx.shadowBlur = 15;

  ctx.fillRect(x, y, hudW, hudH);
  ctx.strokeRect(x, y, hudW, hudH);

  ctx.fillStyle = '#00D4FF';
  ctx.font = 'bold 12px Space Grotesk, sans-serif';
  ctx.fillText('SHOP DRAWING # DWG-C101-REV3', x + 16, y + 26);

  ctx.strokeStyle = 'rgba(140, 153, 165, 0.3)';
  ctx.beginPath();
  ctx.moveTo(x + 16, y + 36);
  ctx.lineTo(x + hudW - 16, y + 36);
  ctx.stroke();

  ctx.strokeStyle = '#8C99A5';
  ctx.lineWidth = 1;
  ctx.strokeRect(x + 20, y + 50, 160, 120);

  ctx.strokeStyle = '#FF8C00';
  ctx.beginPath();
  ctx.moveTo(x + 20, y + 185);
  ctx.lineTo(x + 180, y + 185);
  ctx.stroke();
  ctx.fillStyle = '#FF8C00';
  ctx.font = '10px Orbitron, monospace';
  ctx.fillText('L = 6,450 mm', x + 65, y + 198);

  ctx.fillStyle = '#ffffff';
  ctx.font = '11px Inter, sans-serif';
  ctx.fillText('MEMBER: W14x132 (A992 STEEL)', x + 200, y + 65);
  ctx.fillText('WEIGHT: 1,280 kg', x + 200, y + 88);
  ctx.fillText('SURFACE AREA: 14.2 m²', x + 200, y + 111);
  ctx.fillText('HOLES: 16x Ø 24mm', x + 200, y + 134);

  ctx.restore();
}

function drawBimCoordinationOverlay(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  time: number
) {
  ctx.save();
  const y = cy - 60;

  ctx.strokeStyle = '#00D4FF';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - 140, y - 80, 280, 160);

  ctx.fillStyle = 'rgba(255, 140, 0, 0.4)';
  ctx.strokeStyle = '#FF8C00';
  ctx.fillRect(cx - 180, y - 20, 360, 30);
  ctx.strokeRect(cx - 180, y - 20, 360, 30);

  const pulse = (Math.sin(time * 4) + 1) / 2;
  ctx.fillStyle = '#ef4444';
  ctx.shadowColor = '#ef4444';
  ctx.shadowBlur = 20 * pulse;
  ctx.beginPath();
  ctx.arc(cx - 140, y - 10, 12, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 10px Orbitron, monospace';
  ctx.fillText('CLASH DETECTED', cx - 190, y - 30);

  ctx.restore();
}

function drawFabricationProcess(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  time: number
) {
  ctx.save();

  const beamX = cx - 180 + ((time * 40) % 240);
  ctx.fillStyle = '#475569';
  ctx.fillRect(beamX, cy - 20, 140, 30);
  ctx.strokeStyle = '#00D4FF';
  ctx.strokeRect(beamX, cy - 20, 140, 30);

  ctx.fillStyle = '#FF8C00';
  ctx.fillRect(cx - 10, cy - 80, 20, 50);

  ctx.fillStyle = '#FF8C00';
  ctx.shadowColor = '#FF8C00';
  ctx.shadowBlur = 15;

  for (let i = 0; i < 15; i++) {
    const px = cx + (Math.random() - 0.5) * 30;
    const py = cy - 20 + Math.random() * 30;
    ctx.fillRect(px, py, 3, 3);
  }

  ctx.restore();
}

function drawCraneErectionRig(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  time: number
) {
  ctx.save();
  const craneX = cx + 220;
  const craneY = cy - 240;

  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(craneX, cy + 60);
  ctx.lineTo(craneX, craneY);
  ctx.lineTo(craneX - 320, craneY);
  ctx.stroke();

  const cableX = cx - 40 + Math.sin(time) * 10;
  ctx.strokeStyle = '#00D4FF';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cableX, craneY);
  ctx.lineTo(cableX, cy - 60);
  ctx.stroke();

  ctx.fillStyle = '#334155';
  ctx.fillRect(cableX - 60, cy - 60, 120, 16);
  ctx.strokeRect(cableX - 60, cy - 60, 120, 16);

  ctx.restore();
}

function drawIlluminatedBuildingClimax(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  time: number
) {
  ctx.save();

  ctx.fillStyle = 'rgba(0, 212, 255, 0.06)';
  ctx.beginPath();
  ctx.moveTo(cx, cy - 280);
  ctx.lineTo(cx - 300, 0);
  ctx.lineTo(cx + 300, 0);
  ctx.closePath();
  ctx.fill();

  const floors = 12;
  const floorH = 22;
  const towerW = 180;

  for (let f = 0; f < floors; f++) {
    const y = cy + 40 - f * floorH;
    const w = towerW - f * 4;
    const x = cx - w / 2;

    ctx.fillStyle = 'rgba(11, 17, 24, 0.9)';
    ctx.strokeStyle = '#00D4FF';
    ctx.lineWidth = 1.5;
    ctx.fillRect(x, y, w, floorH);
    ctx.strokeRect(x, y, w, floorH);

    ctx.fillStyle = '#00D4FF';
    ctx.shadowColor = '#00D4FF';
    ctx.shadowBlur = 6;

    for (let win = x + 10; win < x + w - 10; win += 18) {
      if (Math.random() > 0.15) {
        ctx.fillRect(win, y + 4, 10, 12);
      }
    }
  }

  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy + 40 - floors * floorH);
  ctx.lineTo(cx, cy - 300);
  ctx.stroke();

  const pulse = (Math.sin(time * 6) + 1) / 2;
  ctx.fillStyle = '#FF8C00';
  ctx.shadowColor = '#FF8C00';
  ctx.shadowBlur = 25 * pulse;
  ctx.beginPath();
  ctx.arc(cx, cy - 300, 8, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawLaserHUD(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  ctx.save();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(40, 100);
  ctx.lineTo(40, 40);
  ctx.lineTo(100, 40);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width - 40, 100);
  ctx.lineTo(width - 40, 40);
  ctx.lineTo(width - 100, 40);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(40, height - 100);
  ctx.lineTo(40, height - 40);
  ctx.lineTo(100, height - 40);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width - 40, height - 100);
  ctx.lineTo(width - 40, height - 40);
  ctx.lineTo(width - 100, height - 40);
  ctx.stroke();

  ctx.restore();
}

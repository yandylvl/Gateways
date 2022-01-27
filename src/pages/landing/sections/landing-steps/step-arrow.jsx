import "./step-arrow.scss";
import React, { useEffect, useRef } from "react";

const StepArrow = (props) => {
  useEffect(() => canvasArrowsDraw());

  const canvas = useRef(null);

  const canvasArrowsDraw = () => {
    const color = props.color;

    if (canvas.current.getContext) {
      const ctx = canvas.current.getContext("2d");

      ctx.beginPath();
      ctx.arc(
        105,
        271,
        270,
        Math.PI + Math.PI / 2.67,
        Math.PI + (Math.PI / 3.2) * 2,
        false
      ); // Mouth (clockwise)
      ctx.strokeStyle = color;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(210, 22);
      ctx.lineTo(201, 16);
      ctx.lineTo(199, 21);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
  };
  return (
    <canvas ref={canvas} className="canvas-arrow" width="210" height="23">
      Next step
      <div></div>
    </canvas>
  );
};

export default StepArrow;

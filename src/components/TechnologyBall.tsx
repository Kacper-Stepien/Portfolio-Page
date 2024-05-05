import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface TechnologyBallProps {
  content: ReactNode;
  x: number;
  y: number;
  size: number;
  yvelocity: number;
  xvelocity: number;
  color: string;
  containerWidth: number;
  containerHeight: number;
}

const TechnologyBall: FC<TechnologyBallProps> = ({
  content,
  x,
  y,
  size,
  xvelocity,
  yvelocity,
  color,
  containerWidth,
  containerHeight,
}) => {
  const [position, setPosition] = useState({ x, y });
  const [velocity, setVelocity] = useState({ x: xvelocity, y: yvelocity });
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      let newX = position.x + velocity.x;
      let newY = position.y + velocity.y;

      if (newX + size >= containerWidth || newX <= 0) {
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          x: -prevVelocity.x,
        }));
        newX = newX <= 0 ? 0 : containerWidth - size;
      }

      if (newY + size >= containerHeight || newY <= 0) {
        setVelocity((prevVelocity) => ({
          ...prevVelocity,
          y: -prevVelocity.y,
        }));
        newY = newY <= 0 ? 0 : containerHeight - size;
      }

      setPosition({ x: newX, y: newY });
    };

    const intervalId = setInterval(updatePosition, 16);

    return () => clearInterval(intervalId);
  }, [position, velocity, containerWidth, containerHeight, size]);

  useEffect(() => {
    if (ballRef.current) {
      ballRef.current.style.left = `${position.x}px`;
      ballRef.current.style.top = `${position.y}px`;
    }
  }, [position, containerWidth, containerHeight]);

  return (
    <div
      ref={ballRef}
      className={`absolute rounded-full  flex items-center justify-center`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${color}`,
      }}
    >
      {content}
    </div>
  );
};

export default TechnologyBall;

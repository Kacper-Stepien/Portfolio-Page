import { useEffect, useRef, useState } from "react";
import TechnologyBall from "./TechnologyBall";
import technologies from "../utils/TechnologiesArray";

const TechnologyBackground = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [ballsKey, setBallsKey] = useState(0);
  const [boxRendered, setBoxRendered] = useState(false);

  const renderBalls = () => {
    if (!boxRef.current) return null;
    const divWidth = boxRef.current?.clientWidth || window.innerWidth;
    const divHeight = boxRef.current?.clientHeight || window.innerHeight;

    console.log(divWidth, divHeight);

    return technologies.map((technology, index) => (
      <TechnologyBall
        key={index}
        content={technology.icon}
        x={Math.floor(Math.random() * divWidth)}
        y={Math.floor(Math.random() * divHeight)}
        size={55}
        xvelocity={Math.random() * 2 - 1}
        yvelocity={Math.random() * 2 - 1}
        color={technology.color}
        containerWidth={divWidth}
        containerHeight={divHeight}
      />
    ));
  };

  useEffect(() => {
    const handleResize = () => {
      setBallsKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [boxRef]);

  useEffect(() => {
    if (boxRef.current && !boxRendered) {
      setBoxRendered(true);
    }
  }, [boxRef, boxRendered]);

  return (
    <div ref={boxRef} className="w-full h-full bg-dark relative">
      {boxRef && renderBalls()}
    </div>
  );
};

export default TechnologyBackground;

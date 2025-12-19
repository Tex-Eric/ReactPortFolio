import useMediaQuery from "../../Utils/useMediaQuery";
import { ButtonTypo01Style, ButtonbiasStyleShape, ButtonbiasStyleShapeActive } from "./ButtonbiasStyle";
import React, { useState } from 'react';


function Buttonbias({write, newFunction, gridColumn, gridRow, isSkew, dimension }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 640px)');

    const isActiveStyle = (Active) => (
        Active ? ButtonbiasStyleShapeActive(gridColumn, gridRow, isSkew) : ButtonbiasStyleShape(isHovered, gridColumn, gridRow, isSkew)
    );
    const handleClick = () => newFunction && newFunction();

  return (
    <div style={isActiveStyle(isActive)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)+setIsActive(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onClick={handleClick}
        >
        <p style={ButtonTypo01Style(isDesktop)}>{write}</p>
    </div>
  );
}

export default Buttonbias;

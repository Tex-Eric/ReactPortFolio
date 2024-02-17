import ButtonbiasBackground from "./ButtonbiasBackground";
import { ButtonbiasStyleShape } from "./ButtonbiasStyle";
import React from 'react';


function Buttonbias({write}) {

  return (
    <div style={ButtonbiasStyleShape}>
        <ButtonbiasBackground/>
        <p>{write}</p>
    </div>
  );
}

export default Buttonbias;

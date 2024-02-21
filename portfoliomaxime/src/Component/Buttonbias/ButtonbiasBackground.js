function ButtonbiasBackground({dimension}) {
    const positionFixed = {
        position: "absolute",
        zIndex: '-1'
    }

    const objectFit ={
        objectFit:'cover'
    }

    const test = {
        transformOrigin: "center",
        transformBox: "fill-box",
        width: "100%",
        height: "100%",
        transform: `scale(${dimension})`
    }

    const dimensionFunction = (did) => {
        if(did === 1){
            return {x1:"0", x2:"2000"}
        } else if (did === 1.5){
            return {x1:"500", x2:"1500"}
        } else if (did === 2){
            return {x1:"750", x2:"1250"}
        } else if (did === 3){
            return {x1:"875", x2:"1300"}
        }else if (did === 4){
            return {x1:"900", x2:"1250"}
        }else if (did === 5){
            return {x1:"950", x2:"1225"}
        }
    }
    const dimensions = dimensionFunction(dimension);
    const dimensionsx1 = dimensions.x1;
    const dimensionsx2 = dimensions.x2;

    return (
      <div style={positionFixed}>
        <div style={objectFit}>
        <svg style={test} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2000 4000">
            <defs>
                <linearGradient id="linear-gradient" x1={dimensionsx1} y1="1000" x2={dimensionsx2} y2="1000" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#005f83"/>
                    <stop offset="0.08" stop-color="#00587e"/>
                    <stop offset="0.43" stop-color="#003e6e"/>
                    <stop offset="0.75" stop-color="#002e64"/>
                    <stop offset="1" stop-color="#002961"/>
                </linearGradient>
            </defs>
            <rect style={test} fill="url(#linear-gradient)" width="2000" height="4000"/>
        </svg>
        </div>
      </div>
    );
  }
  
  export default ButtonbiasBackground;
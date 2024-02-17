function ButtonbiasBackground() {
    const positionFixed = {
        position: "absolute",
        zIndex: '-1',
    }

    const objectFit ={
        objectFit:'cover'
    }

    const test = {
        transformOrigin: "center",
        transformBox: "fill-box",
        width: "100%",
        height: "100%",
        transform: "scale(1.1)"
    }

    return (
      <div style={positionFixed}>
        <div style={objectFit}>
        <svg style={test} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2000 2000">
            <defs>
                <linearGradient id="linear-gradient" y1="1000" x2="2000" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#005f83"/>
                    <stop offset="0.08" stop-color="#00587e"/>
                    <stop offset="0.43" stop-color="#003e6e"/>
                    <stop offset="0.75" stop-color="#002e64"/>
                    <stop offset="1" stop-color="#002961"/>
                </linearGradient>
            </defs>
            <rect style={test} fill="url(#linear-gradient)" width="2000" height="2000"/>
        </svg>
        </div>
      </div>
    );
  }
  
  export default ButtonbiasBackground;
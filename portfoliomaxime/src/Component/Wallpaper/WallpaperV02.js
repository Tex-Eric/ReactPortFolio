function WallpaperV02() {
    const positionFixed = {
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: '-2',
/*         display: "flex",
        justifyContent: "center",
        alignItems: "center", */
        backgroundColor: '#003349'
    }

/*     const objectFit ={
        objectFit:'cover'
    } */

/*     const Layer2 = {
        transformOrigin: "center",
        transformBox: "fill-box",
        objectFit: "contain",
        width: "100%",
        height: "100%",
        transform: "scale(6.5)"
    } */

    return (
      <div style={positionFixed}>
{/*         <div style={objectFit}> */}
            {/* <svg  style={Layer2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 2000">
                <defs>
                <radialGradient id="radial-gradient" cx="284.5" cy="1474.39" fx="235.260518101237" r="2174.55" gradientTransform="translate(-630.06 970.52) rotate(-45.41) scale(1 0.68)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#7283b5"/>
                    <stop offset="0.36" stop-color="#4b6790"/>
                    <stop offset="0.96" stop-color="#003349"/>
                    </radialGradient>
                </defs>
                <rect style={Layer2} fill="url(#radial-gradient)" width="4000" height="2000"/>
            </svg> */}
{/*         </div> */}
      </div>
    );
  }
  
  export default WallpaperV02;

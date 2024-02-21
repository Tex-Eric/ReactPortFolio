function TrueWallpaper001() {
    const positionFixed = {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: '-1',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent" // Ajoutez cette ligne
    }

    const objectFit ={
        objectFit:'cover'
    }

    const Calque001 = {
        animation: "Calque001 20s infinite linear",
        transformOrigin: "center",
        transformBox: "fill-box",
        objectFit: "contain",
        width: "100%",
        height: "100%"
    }

    const styles = `
        @keyframes Calque001 {
            from {
                transform: rotateZ(0deg) scale(1);
            }
            to {
                transform: rotateZ(360deg) scale(1);
            }
        }
    `;

    return (
      <div style={positionFixed}>
        <div style={objectFit}>
            <style>{styles}</style>
            <svg style={Calque001} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.63 77.63" fill="#97a4ab">
                <circle className="cls-10" cx="38.81" cy="38.81" r="38.81"/>
            </svg>
        </div>
      </div>
    );
  }
  
  export default TrueWallpaper001;

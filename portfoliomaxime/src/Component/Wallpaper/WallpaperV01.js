function WallpaperV01() {
    const positionFixed = {
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: '-1',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const objectFit ={
        objectFit:'cover'
    }

    const Rouage = {
        animation: "Rouage 20s infinite linear",
        transformOrigin: "center",
        transformBox: "fill-box",
        objectFit: "contain",
        width: "100%",
        height: "100%"
    }

    const styles = `
        @keyframes Rouage {
            from {
                transform: rotateZ(0deg) scale(1.2);
            }
            to {
                transform: rotateZ(360deg) scale(1.2);
            }
        }
    `;

    return (
      <div style={positionFixed}>
        <div style={objectFit}>
            <style>{styles}</style>
            <svg style={Rouage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1143.98 1143.98" fill="#007dc5">
                <path className="cls-1" d="M1523.38,931.12,1427,896.86A436.52,436.52,0,0,0,1374.87,771l43.92-92.39c29.53-62.13-35.28-126.94-97.41-97.41L1229,625.13A436.52,436.52,0,0,0,1103.14,573l-34.26-96.34c-23.05-64.81-114.71-64.81-137.76,0L896.86,573A436.52,436.52,0,0,0,771,625.13l-92.39-43.92c-62.13-29.53-126.94,35.28-97.41,97.41L625.13,771A436.52,436.52,0,0,0,573,896.86l-96.34,34.26c-64.81,23-64.81,114.71,0,137.76L573,1103.14A436.52,436.52,0,0,0,625.13,1229l-43.92,92.39c-29.53,62.13,35.28,126.94,97.41,97.41L771,1374.87A436.52,436.52,0,0,0,896.86,1427l34.26,96.34c23,64.81,114.71,64.81,137.76,0l34.26-96.34A436.52,436.52,0,0,0,1229,1374.87l92.39,43.92c62.13,29.53,126.94-35.28,97.41-97.41L1374.87,1229A436.52,436.52,0,0,0,1427,1103.14l96.34-34.26C1588.19,1045.83,1588.19,954.17,1523.38,931.12Zm-523.38,357c-159.12,0-288.11-129-288.11-288.11s129-288.11,288.11-288.11,288.11,129,288.11,288.11S1159.12,1288.11,1000,1288.11Z" transform="translate(-428.01 -428.01)"/>
            </svg>
        </div>
      </div>
    );
  }
  
  export default WallpaperV01;
  

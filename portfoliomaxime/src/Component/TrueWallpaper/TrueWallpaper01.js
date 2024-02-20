function TrueWallpaper01() {
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

    const Calque01 = {
        animation: "Calque01 20s infinite linear",
        transformOrigin: "center",
        transformBox: "fill-box",
        objectFit: "contain",
        width: "100%",
        height: "100%"
    }

    const styles = `
        @keyframes Calque01 {
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
            {/* <svg style={Rouage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1143.98 1143.98" fill="#007dc5">
                <path className="cls-1" d="M1523.38,931.12,1427,896.86A436.52,436.52,0,0,0,1374.87,771l43.92-92.39c29.53-62.13-35.28-126.94-97.41-97.41L1229,625.13A436.52,436.52,0,0,0,1103.14,573l-34.26-96.34c-23.05-64.81-114.71-64.81-137.76,0L896.86,573A436.52,436.52,0,0,0,771,625.13l-92.39-43.92c-62.13-29.53-126.94,35.28-97.41,97.41L625.13,771A436.52,436.52,0,0,0,573,896.86l-96.34,34.26c-64.81,23-64.81,114.71,0,137.76L573,1103.14A436.52,436.52,0,0,0,625.13,1229l-43.92,92.39c-29.53,62.13,35.28,126.94,97.41,97.41L771,1374.87A436.52,436.52,0,0,0,896.86,1427l34.26,96.34c23,64.81,114.71,64.81,137.76,0l34.26-96.34A436.52,436.52,0,0,0,1229,1374.87l92.39,43.92c62.13,29.53,126.94-35.28,97.41-97.41L1374.87,1229A436.52,436.52,0,0,0,1427,1103.14l96.34-34.26C1588.19,1045.83,1588.19,954.17,1523.38,931.12Zm-523.38,357c-159.12,0-288.11-129-288.11-288.11s129-288.11,288.11-288.11,288.11,129,288.11,288.11S1159.12,1288.11,1000,1288.11Z" transform="translate(-428.01 -428.01)"/>
            </svg> */}
            <svg style={Calque01} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.63 284.83">
    <defs>
        <radialGradient id="radial-gradient" cx="162.56" cy="145.72" r="38.81" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#a5a9ad"/>
        <stop offset="0.21" stop-color="#a0a7ac"/>
        <stop offset="0.47" stop-color="#91a2ab"/>
        <stop offset="0.75" stop-color="#789aa8"/>
        <stop offset="1" stop-color="#5c90a5"/>
        </radialGradient>
        <radialGradient id="radial-gradient-2" cx="1001.81" cy="996.47" r="47.81" gradientUnits="userSpaceOnUse">
        <stop offset="0.81" stop-color="#a5a9ad"/>
        <stop offset="0.88" stop-color="#90a2ab"/>
        <stop offset="1" stop-color="#5c90a5"/>
        </radialGradient>
        <radialGradient id="radial-gradient-3" cx="1001.81" cy="996.47" r="79.31" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#a5a9ad"/><stop offset="0.25" stop-color="#a1a8ad"/>
        <stop offset="0.48" stop-color="#97a4ab"/>
        <stop offset="0.69" stop-color="#859ea9"/>
        <stop offset="0.9" stop-color="#6b95a7"/>
        <stop offset="1" stop-color="#5c90a5"/>
        </radialGradient>
        <radialGradient id="radial-gradient-4" cx="1001.81" cy="996.47" r="131.06" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient" x1="928.84" y1="881.37" x2="915.63" y2="858.5" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#a5a9ad"/><stop offset="0.01" stop-color="#a2a8ad"/>
        <stop offset="0.14" stop-color="#889faa"/>
        <stop offset="0.28" stop-color="#7498a8"/>
        <stop offset="0.45" stop-color="#6794a6"/>
        <stop offset="0.65" stop-color="#5e91a5"/>
        <stop offset="1" stop-color="#5c90a5"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="891.82" y1="918.06" x2="875.55" y2="889.88" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient-3" x1="1070.87" y1="878.56" x2="1083.84" y2="856.1" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient-4" x1="906.24" y1="1093.4" x2="881.57" y2="1107.64" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient-5" x1="1081.72" y1="1106.63" x2="1095.32" y2="1130.18" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient-6" x1="865.32" y1="998.87" x2="839.25" y2="998.87" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient-7" x1="923.58" y1="1108.44" x2="898.1" y2="1123.15" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="linear-gradient-8" x1="1111.18" y1="1078.76" x2="1125.37" y2="1103.32" gradientUnits="userSpaceOnUse"/>
    </defs>
    <circle class="cls-1" cx="162.56" cy="145.72" r="38.81"/>
    <path class="cls-2" d="M1001.81,948.66a47.81,47.81,0,1,0,47.81,47.81A47.81,47.81,0,0,0,1001.81,948.66Zm0,91.31a43.5,43.5,0,1,1,43.5-43.5A43.51,43.51,0,0,1,1001.81,1040Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-3" d="M1001.81,917.16a79.31,79.31,0,1,0,79.31,79.31A79.31,79.31,0,0,0,1001.81,917.16Zm0,136.87a57.56,57.56,0,1,1,57.57-57.56A57.56,57.56,0,0,1,1001.81,1054Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-4" d="M1001.81,865.41a131.06,131.06,0,1,0,131.07,131.06A131.06,131.06,0,0,0,1001.81,865.41Zm0,224.25A93.19,93.19,0,1,1,1095,996.47,93.2,93.2,0,0,1,1001.81,1089.66Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-5" d="M937.91,875.25l-11.57-22.78a162.22,162.22,0,0,0-20.85,13l15.08,20.63A138.38,138.38,0,0,1,937.91,875.25Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-6" d="M901.2,903.48l-18.29-17.85a164.53,164.53,0,0,0-16,20.12l21,14.57A137.88,137.88,0,0,1,901.2,903.48Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-7" d="M1079,883.24l14.39-21.11a161.81,161.81,0,0,0-19.45-11.38l-11.34,22.9A138.06,138.06,0,0,1,1079,883.24Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-8" d="M898.16,1086.08l-19.53,16.47a165,165,0,0,0,11.56,12.09l17.64-18.48A139.39,139.39,0,0,1,898.16,1086.08Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-9" d="M1072.64,1113.77l13.33,21.81a164.12,164.12,0,0,0,18.25-12.86l-16.36-19.63A138.06,138.06,0,0,1,1072.64,1113.77Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-10" d="M864.8,996.47q0-3.39.17-6.74l-25.48-2c-.16,2.9-.24,5.83-.24,8.77,0,4.57.2,9.1.57,13.57l25.5-1.66Q864.81,1002.49,864.8,996.47Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-11" d="M913.5,1101.21l-17.08,19q6,5.13,12.56,9.69l15.08-20.63Q918.59,1105.49,913.5,1101.21Z" transform="translate(-839.25 -850.75)"/>
    <path class="cls-12" d="M1111.51,1078.57c-2.31,3.08-4.74,6-7.29,8.91l19,17.08q4.58-5.13,8.72-10.65Z" transform="translate(-839.25 -850.75)"/>
</svg>
        </div>
      </div>
    );
  }
  
  export default TrueWallpaper01;
  


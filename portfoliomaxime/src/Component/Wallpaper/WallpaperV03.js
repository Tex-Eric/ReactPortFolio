function WallpaperV03() {
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

    const svgMetallicHeart = {
        objectFit: "contain",
        width: "100%",
        height: "100%",
        scale: "7"
    }

    const styles = `
         .part01 {
           animation: rotateSlow 40s linear infinite;
           transform-origin: center;
           transform-box: fill-box;
         }

         .part02 {
           animation: InversRotateSlow 10s linear infinite;
           transform-origin: center;
           transform-box: fill-box;
         }

         .part05 {
           animation: rotateSlow 5s linear infinite;
           transform-origin: center;
           transform-box: fill-box;
         }

         .part07 {
           animation: rotateSlow 10s linear infinite;
           transform-origin: center;
           transform-box: fill-box;
         }

         .part09 {
            animation: pulse 0.5s ease-in-out infinite;
            transform-origin: center;
            transform-box: fill-box;
          }

           @keyframes rotateSlow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes InversRotateSlow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }

            @keyframes pulse {
              0%, 100% {
                transform: scale(2);
                opacity: 0.9;
              }
              25% {
                transform: scale(1.95);
                opacity: 0.8;
              }
              50% {
                transform: scale(2.05);
                opacity: 1;
              }
              75%, 78% {
                transform: scale(1.95);
                opacity: 0.8;
              }
              77% {
                transform: scale(1.5);
                opacity: 0.5;
              }
            }
    `;

    return (
      <div style={positionFixed}>
        <div style={objectFit}>
            <style>{styles}</style>
            <svg style={svgMetallicHeart} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080">
                <defs >
                    <radialGradient id="radial-gradient" cx="960" cy="576" r="1290.98" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#212342"/>
                        <stop offset="1" stopColor="#0d1319"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cx="955.68" cy="541.81" r="18.77" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#a5a8ac"/>
                        <stop offset="0.21" stopColor="#a0a6ac"/>
                        <stop offset="0.47" stopColor="#91a1aa"/>
                        <stop offset="0.74" stopColor="#7899a8"/>
                        <stop offset="1" stopColor="#5b8fa5"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-3" cx="955.68" cy="541.81" r="23.12" gradientUnits="userSpaceOnUse">
                        <stop offset="0.81" stopColor="#a5a8ac"/>
                        <stop offset="0.88" stopColor="#90a1aa"/>
                        <stop offset="1" stopColor="#5b8fa5"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-4" cx="955.68" cy="541.81" r="38.35" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#a5a8ac"/>
                        <stop offset="0.25" stopColor="#a1a7ac"/>
                        <stop offset="0.48" stopColor="#97a3ab"/>
                        <stop offset="0.69" stopColor="#859da9"/>
                        <stop offset="0.89" stopColor="#6b94a7"/>
                        <stop offset="1" stopColor="#5b8fa5"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-5" cx="955.68" cy="541.81" r="63.37" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#d2d7d8"/>
                        <stop offset="0.23" stopColor="#cfd5d7"/>
                        <stop offset="0.41" stopColor="#c5cfd3"/>
                        <stop offset="0.57" stopColor="#b5c5cc"/>
                        <stop offset="0.72" stopColor="#9eb7c2"/>
                        <stop offset="0.86" stopColor="#80a6b5"/>
                        <stop offset="1" stopColor="#5c90a6"/>
                        <stop offset="1" stopColor="#5b8fa5"/>
                    </radialGradient>
                    <linearGradient id="linear-gradient" x1="920.39" y1="486.16" x2="914.01" y2="475.1" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#a5a8ac"/>
                        <stop offset="0.02" stopColor="#a1a6ac"/>
                        <stop offset="0.15" stopColor="#879ea9"/>
                        <stop offset="0.29" stopColor="#7397a7"/>
                        <stop offset="0.45" stopColor="#6693a6"/>
                        <stop offset="0.65" stopColor="#5d90a5"/>
                        <stop offset="1" stopColor="#5b8fa5"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="902.49" y1="503.9" x2="894.63" y2="490.27"  href="#linear-gradient"/>
                    <linearGradient id="linear-gradient-3" x1="989.07" y1="484.8" x2="995.34" y2="473.94"  href="#linear-gradient"/>
                    <linearGradient id="linear-gradient-4" x1="909.47" y1="588.68" x2="897.54" y2="595.56"  href="#linear-gradient"/>
                    <linearGradient id="linear-gradient-5" x1="994.32" y1="595.08" x2="1000.89" y2="606.46"  href="#linear-gradient"/>
                    <linearGradient id="linear-gradient-6" x1="889.68" y1="542.97" x2="877.08" y2="542.97"  href="#linear-gradient"/>
                    <linearGradient id="linear-gradient-7" x1="917.85" y1="595.95" x2="905.53" y2="603.06"  href="#linear-gradient"/>
                    <linearGradient id="linear-gradient-8" x1="1008.56" y1="581.6" x2="1015.42" y2="593.48"  href="#linear-gradient"/>
                    <radialGradient id="radial-gradient-6" cx="509.2" cy="271.67" r="0.24" gradientTransform="translate(-58.88 -442.64) scale(1.04 1.85)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#212241"/>
                        <stop offset="1" stopColor="#10151a"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-7" cx="509.2" cy="793.38" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-8" cx="1437.07" cy="271.67" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-9" cx="1437.07" cy="793.38" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-14" cx="955.68" cy="437.61" r="2.68"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-15" cx="954.1" cy="434.86" r="2.68" gradientTransform="translate(-132.08 408.91) rotate(-22.5)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-16" cx="953.7" cy="431.71" r="2.68" gradientTransform="translate(-97.63 837.23) rotate(-45)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-17" cx="954.53" cy="428.65" r="2.68" gradientTransform="matrix(0.38, -0.92, 0.92, 0.38, 98.11, 1219.77)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-18" cx="956.47" cy="426.14" r="2.68" gradientTransform="translate(425.34 1498.28) rotate(-90)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-19" cx="959.22" cy="424.56" r="2.68" gradientTransform="translate(834.25 1630.37) rotate(-112.5)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-20" cx="962.37" cy="424.16" r="2.68" gradientTransform="translate(1262.58 1595.91) rotate(-135)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-21" cx="965.43" cy="424.99" r="2.68" gradientTransform="translate(1645.11 1400.17) rotate(-157.5)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-22" cx="967.95" cy="426.93" r="2.68" gradientTransform="translate(1923.62 1072.94) rotate(180)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-23" cx="969.52" cy="429.68" r="2.68" gradientTransform="translate(2055.71 664.03) rotate(157.5)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-24" cx="969.93" cy="432.83" r="2.68" gradientTransform="translate(2021.26 235.71) rotate(135)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-25" cx="969.1" cy="435.89" r="2.68" gradientTransform="matrix(-0.38, 0.92, -0.92, -0.38, 1825.51, -146.83)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-26" cx="967.15" cy="438.4" r="2.68" gradientTransform="translate(1498.28 -425.34) rotate(90)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-27" cx="964.4" cy="439.98" r="2.68" gradientTransform="translate(1089.38 -557.43) rotate(67.5)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-28" cx="961.25" cy="440.38" r="2.68" gradientTransform="translate(661.05 -522.98) rotate(45)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-29" cx="958.19" cy="439.55" r="2.68" gradientTransform="translate(278.51 -327.23) rotate(22.5)"  href="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-34" cx="955.54" cy="541.64" r="232" gradientTransform="translate(-14.15 26.19) rotate(-1.55)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.88" stopColor="#2e4157"/>
                        <stop offset="0.97" stopColor="#102432"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-35" cx="972.64" cy="370.57" r="12.22" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#bfbebe"/>
                        <stop offset="1" stopColor="#939598"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-36" cx="935.86" cy="370.83" r="12.26"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-37" cx="899.95" cy="377.77" r="12.84"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-38" cx="866.48" cy="391.88" r="12.99"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-39" cx="836.9" cy="412.54" r="12.7"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-40" cx="813.68" cy="439.57" r="12.92"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-41" cx="796.72" cy="471.57" r="12.96"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-42" cx="786.7" cy="506.64" r="12.57"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-43" cx="784.02" cy="543.25" r="11.82"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-44" cx="787.24" cy="579.79" r="12.6"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-45" cx="797.82" cy="614.68" r="12.97"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-46" cx="815.31" cy="646.38" r="12.9"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-47" cx="839.03" cy="672.94" r="12.73"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-48" cx="868.96" cy="693.12" r="13"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-49" cx="902.68" cy="706.69" r="12.82"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-50" cx="938.72" cy="713.05" r="12.22"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-51" cx="975.5" cy="712.8" r="12.26"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-52" cx="1011.41" cy="705.86" r="12.84"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-53" cx="1044.88" cy="691.75" r="12.99"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-54" cx="1074.46" cy="671.08" r="12.7"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-55" cx="1097.68" cy="644.05" r="12.92"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-56" cx="1114.64" cy="612.05" r="12.96"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-57" cx="1124.66" cy="576.98" r="12.57"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-58" cx="1127.34" cy="540.38" r="11.82"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-59" cx="1124.12" cy="503.83" r="12.6"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-60" cx="1113.53" cy="468.95" r="12.97"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-61" cx="1096.05" cy="437.25" r="12.9"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-62" cx="1072.33" cy="410.68" r="12.73"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-63" cx="1042.4" cy="390.5" r="13"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-64" cx="1008.68" cy="376.94" r="12.82"  href="#radial-gradient-35"/>
                    <radialGradient id="radial-gradient-73" cx="955.68" cy="541.81" r="362.28" gradientTransform="matrix(1, 0, 0, 1, 0, 0)"  href="#radial-gradient-34"/>
                    <radialGradient id="radial-gradient-74" cx="955.68" cy="541.81" r="317.4" gradientUnits="userSpaceOnUse">
                        <stop offset="0.9" stopColor="#255475"/>
                        <stop offset="0.99" stopColor="#143d56"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-79" cx="499.86" cy="275.22" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-80" cx="499.86" cy="796.94" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-81" cx="1427.73" cy="275.22" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-82" cx="1427.73" cy="796.94" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-83" cx="514.19" cy="269.77" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-84" cx="514.19" cy="791.48" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-85" cx="1442.06" cy="269.77" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-86" cx="1442.06" cy="791.48" r="0.24"  href="#radial-gradient-6"/>
                    <radialGradient id="radial-gradient-87" cx="954.8" cy="543.52" r="604.98" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" stopOpacity="0.5"/>
                        <stop offset="0.34" stopColor="#979a9d" stopOpacity="0.29"/>
                        <stop offset="0.63" stopColor="#4c5155" stopOpacity="0.13"/>
                        <stop offset="0.86" stopColor="#1e2429" stopOpacity="0.04"/>
                        <stop offset="1" stopColor="#0d1319" stopOpacity="0"/>
                    </radialGradient>
                </defs>
                <g  id="Part01" className="part01">
                    <circle cx="955.68" cy="541.81" r="18.77" style={{ fill: "url(#radial-gradient-2)" }}/>
                    <path d="M955.68,518.69a23.12,23.12,0,1,0,23.12,23.12A23.12,23.12,0,0,0,955.68,518.69Zm0,44.15a21,21,0,1,1,21-21A21,21,0,0,1,955.68,562.84Z" style={{ fill: "url(#radial-gradient-3)" }}/>
                    <path d="M955.68,503.46A38.35,38.35,0,1,0,994,541.81,38.35,38.35,0,0,0,955.68,503.46Zm0,66.18a27.83,27.83,0,1,1,27.83-27.83A27.83,27.83,0,0,1,955.68,569.64Z" style={{ fill: "url(#radial-gradient-4)" }}/>
                    <path d="M955.68,478.44a63.37,63.37,0,1,0,63.37,63.37A63.37,63.37,0,0,0,955.68,478.44Zm0,108.43a45.06,45.06,0,1,1,45.06-45.06A45.05,45.05,0,0,1,955.68,586.87Z" style={{ fill: "url(#radial-gradient-5)" }}/>
                    <path d="M924.78,483.2l-5.59-11a77.45,77.45,0,0,0-10.08,6.31l7.29,10A65.93,65.93,0,0,1,924.78,483.2Z" style={{ fill: "url(#linear-gradient)" }}/>
                    <path d="M907,496.85l-8.84-8.63a78.13,78.13,0,0,0-7.74,9.73l10.15,7A66.48,66.48,0,0,1,907,496.85Z" style={{ fill: "url(#linear-gradient-2)" }}/>
                    <path d="M993,487.06l7-10.2a78.2,78.2,0,0,0-9.41-5.51l-5.48,11.08A65.16,65.16,0,0,1,993,487.06Z" style={{ fill: "url(#linear-gradient-3)" }}/>
                    <path d="M905.56,585.14l-9.44,8a77.23,77.23,0,0,0,5.59,5.85l8.53-8.94A67.26,67.26,0,0,1,905.56,585.14Z" style={{ fill: "url(#linear-gradient-4)" }}/>
                    <path d="M989.93,598.53l6.44,10.54a77.78,77.78,0,0,0,8.82-6.22l-7.91-9.49A67.4,67.4,0,0,1,989.93,598.53Z" style={{ fill: "url(#linear-gradient-5)" }}/>
                    <path d="M889.43,541.81c0-1.09,0-2.18.08-3.26l-12.32-1c-.07,1.41-.11,2.82-.11,4.24q0,3.32.27,6.56l12.33-.8C889.52,545.67,889.43,543.75,889.43,541.81Z" style={{ fill: "url(#linear-gradient-6)" }}/>
                    <path d="M913,592.46l-8.26,9.19c1.94,1.66,4,3.22,6.07,4.69l7.3-10Q915.44,594.53,913,592.46Z" style={{ fill: "url(#linear-gradient-7)" }}/>
                    <path d="M1008.72,581.51c-1.12,1.49-2.29,2.92-3.53,4.31l9.19,8.26q2.22-2.49,4.22-5.15Z" style={{ fill: "url(#linear-gradient-8)" }}/>
                    <rect x="471.28" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-6)" }}/>
                    <rect x="471.28" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-7)" }}/>
                    <rect x="1437.82" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-8)" }}/>
                    <rect x="1437.82" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-9)" }}/>
                </g>
                <g  id="Part02" className="part02">
                    <polygon points="945.02 416.83 943.58 416.97 973.09 376.31 972 376.42 942.5 417.08 941.05 417.22 940.63 422.64 946.5 422.06 945.02 416.83" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="895.11 431.97 893.85 432.69 904.27 383.54 903.32 384.08 892.9 433.23 891.64 433.94 893.46 439.06 898.58 436.15 895.11 431.97" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="855.67 466.1 854.81 467.27 844.34 418.13 843.69 419.01 854.17 468.15 853.31 469.31 857.05 473.25 860.54 468.51 855.67 466.1" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="833.52 513.32 833.21 514.74 803.66 474.11 803.43 475.18 832.98 515.8 832.67 517.22 837.69 519.29 838.95 513.54 833.52 513.32" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="832.5 565.47 832.79 566.89 789.27 541.8 789.49 542.87 833.01 567.96 833.3 569.38 838.73 569.23 837.54 563.46 832.5 565.47" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="852.77 613.53 853.62 614.71 803.65 609.49 804.28 610.37 854.25 615.59 855.1 616.77 860 614.43 856.56 609.64 852.77 613.53" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="890.84 649.18 892.09 649.92 844.32 665.47 845.26 666.02 893.03 650.47 894.28 651.2 897.8 647.07 892.72 644.09 890.84 649.18" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="940.12 666.27 941.56 666.43 904.24 700.08 905.33 700.2 942.64 666.56 944.08 666.72 945.62 661.51 939.76 660.85 940.12 666.27" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="992.09 661.84 993.47 661.4 973.06 707.31 974.1 706.98 994.5 661.08 995.89 660.63 995.17 655.25 989.56 657.03 992.09 661.84" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="1037.76 636.66 1038.85 635.7 1038.88 685.93 1039.69 685.21 1039.66 634.97 1040.74 634.01 1037.9 629.38 1033.49 633.29 1037.76 636.66" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="1069.24 595.07 1069.84 593.75 1090.3 639.63 1090.75 638.64 1070.29 592.76 1070.89 591.44 1066.41 588.37 1063.98 593.73 1069.24 595.07" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="1081.09 544.28 1081.1 542.83 1118.45 576.42 1118.46 575.33 1081.1 541.74 1081.11 540.29 1075.77 539.3 1075.73 545.2 1081.09 544.28" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="1071.25 493.06 1070.67 491.73 1118.46 507.22 1118.02 506.23 1070.23 490.73 1069.65 489.4 1064.37 490.68 1066.73 496.07 1071.25 493.06" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="1041.43 450.26 1040.36 449.29 1090.32 444.01 1089.51 443.27 1039.55 448.56 1038.48 447.58 1034.17 450.89 1038.53 454.86 1041.43 450.26" style={{ fill: "#2b4b5e" }}/>
                    <polygon points="996.78 423.3 995.4 422.85 1038.9 397.7 1037.86 397.36 994.37 422.5 992.99 422.05 990.4 426.82 996 428.68 996.78 423.3" style={{ fill: "#2b4b5e" }}/>
                    <rect x="471.28" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-6)" }}/>
                    <rect x="471.28" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-7)" }}/>
                    <rect x="1437.82" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-8)" }}/>
                    <rect x="1437.82" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-9)" }}/>
                </g>
                <g  id="Part03" className="part02">
                    <path d="M1074.74,548.72l3.11.33c.14-2.4.22-4.81.22-7.24q0-3.09-.15-6.15l-3.07.33-1.28-12.18,3.13-.33a123.11,123.11,0,0,0-2.71-13.1l-3,1-3.78-11.64,3-1a121.88,121.88,0,0,0-5.39-12.25l-2.69,1.55-6.12-10.6,2.73-1.58A125.08,125.08,0,0,0,1051,465l-2.28,2.06-8.19-9.09,2.32-2.1a124.15,124.15,0,0,0-9.9-9l-1.81,2.49-9.9-7.19,1.85-2.54a119.92,119.92,0,0,0-11.56-6.76l-1.26,2.83-11.18-5,1.29-2.9a122.06,122.06,0,0,0-12.72-4.18l-.64,3-12-2.54.66-3.08a121.19,121.19,0,0,0-13.31-1.45v3.08H950.1v-3.13a123.93,123.93,0,0,0-13.31,1.32l.64,3-12,2.55-.66-3.1a119.83,119.83,0,0,0-12.75,4.09l1.26,2.83-11.18,5-1.28-2.88A123.29,123.29,0,0,0,889.23,439l1.82,2.5-9.9,7.19-1.84-2.53a122.41,122.41,0,0,0-10,8.91l2.29,2.06-8.19,9.09-2.33-2.1a125,125,0,0,0-7.92,10.79l2.67,1.55-6.12,10.6L847,485.5a120.53,120.53,0,0,0-5.5,12.2l3,1-3.78,11.64-3-1a117.79,117.79,0,0,0-2.83,13.08l3.07.32-1.28,12.17-3.11-.32c-.14,2.39-.22,4.8-.22,7.23q0,3.09.15,6.15l3.07-.32,1.28,12.17-3.13.33a121.35,121.35,0,0,0,2.71,13.11l3-1,3.79,11.64-3,1a123.06,123.06,0,0,0,5.39,12.26l2.69-1.56,6.12,10.6-2.73,1.58a125,125,0,0,0,7.83,10.85l2.29-2.06,8.19,9.1-2.32,2.09a120.62,120.62,0,0,0,9.9,9l1.81-2.49,9.9,7.19L888.32,644a125.36,125.36,0,0,0,11.55,6.76l1.27-2.84,11.18,5L911,655.8A119,119,0,0,0,923.75,660l.64-3,12,2.54-.66,3.08A121.19,121.19,0,0,0,949,664v-3.08h12.23v3.13a121.36,121.36,0,0,0,13.32-1.32l-.64-3,12-2.54.66,3.09a122.11,122.11,0,0,0,12.75-4.08l-1.26-2.84,11.18-5,1.28,2.88a123.29,123.29,0,0,0,11.62-6.65l-1.82-2.5,9.9-7.19,1.84,2.53a124.18,124.18,0,0,0,10-8.9l-2.29-2.07,8.19-9.09,2.33,2.1a123.51,123.51,0,0,0,7.92-10.79l-2.68-1.54,6.12-10.6,2.74,1.57a119.54,119.54,0,0,0,5.5-12.2l-2.95-1,3.78-11.64,3,1a120.79,120.79,0,0,0,2.83-13.09l-3.07-.32Zm-37.3,23.35L1033,584.32l-7-.27a82.24,82.24,0,0,1-41.89,34.71l-.9,6.7-12.82,2.29L957.54,630l-3.31-6.25a81.62,81.62,0,0,1-51-18.92L897,607.45l-8.39-10-8.4-10,3.75-6a82.27,82.27,0,0,1-9.1-53.63l-5.36-4.13,4.42-12.25,4.43-12.25,7,.26a82.28,82.28,0,0,1,41.89-34.71l.9-6.69,12.82-2.3,12.82-2.29,3.3,6.25a81.62,81.62,0,0,1,51,18.92l6.27-2.58,8.39,10,8.4,10-3.75,6a82.24,82.24,0,0,1,9.1,53.62l5.36,4.14Z" style={{fill:"#1b2833", stroke:"#2d475b", strokeMiterlimit:10, strokeWidth:"2px" }}/>
                    <path
                        d="M1066.94,548.65l.12-12.74,5.7.05q-.3-6-1.17-11.74l-5.66,1.15-2.54-12.49,5.61-1.14a116.65,116.65,0,0,0-3.59-11.24l-5.31,2.31L1055,491.12l5.24-2.28a114.82,114.82,0,0,0-5.86-10.24l-4.7,3.35-7.39-10.38,4.63-3.31a116.94,116.94,0,0,0-7.85-8.79l-3.89,4.24-9.39-8.62,3.85-4.2q-4.58-3.72-9.51-7l-2.92,5-11-6.47,2.9-4.94a116.8,116.8,0,0,0-10.75-4.85l-1.84,5.49-12.09-4.05,1.82-5.42a115.77,115.77,0,0,0-11.53-2.5l-.66,5.73-12.66-1.44.65-5.66q-3.2-.18-6.42-.18c-1.8,0-3.59.05-5.38.13l.55,5.72-12.68,1.22-.55-5.69q-5.88.91-11.55,2.39l1.73,5.52-12.15,3.83-1.72-5.46a117.06,117.06,0,0,0-10.8,4.76l2.84,5-11.09,6.27-2.81-5a116.09,116.09,0,0,0-9.57,6.9l3.82,4.31L876.77,463,873,458.72q-4.17,4.17-7.93,8.73l4.63,3.43-7.59,10.24-4.58-3.39a117.23,117.23,0,0,0-6,10.18l5.26,2.4-5.29,11.59-5.21-2.37q-2.12,5.48-3.69,11.2l5.64,1.26-2.76,12.44-5.58-1.24q-.91,5.77-1.27,11.73l5.76.05-.12,12.74-5.7-.05q.3,6,1.17,11.74l5.66-1.15L848,570.74l-5.6,1.14A114.9,114.9,0,0,0,846,583.12l5.3-2.31,5.08,11.69-5.24,2.28A117.24,117.24,0,0,0,856.94,605l4.71-3.35L869,612.05l-4.64,3.31q3.72,4.59,7.86,8.8l3.89-4.24,9.39,8.61-3.85,4.2q4.57,3.72,9.51,7l2.92-5,11,6.47-2.9,4.93A115.61,115.61,0,0,0,913,651l1.84-5.49,12.09,4L925.06,655c3.77,1,7.62,1.85,11.53,2.49l.66-5.73,12.66,1.44-.65,5.67q3.19.17,6.42.17,2.7,0,5.37-.12l-.54-5.73L973.19,652l.55,5.69q5.88-.92,11.55-2.39l-1.74-5.52,12.16-3.83,1.72,5.46a117,117,0,0,0,10.8-4.75l-2.85-5,11.1-6.28,2.81,5a116.09,116.09,0,0,0,9.57-6.9l-3.82-4.31,9.55-8.44,3.78,4.27q4.17-4.17,7.93-8.73l-4.63-3.43,7.58-10.24,4.59,3.4a117.4,117.4,0,0,0,6-10.19l-5.26-2.39,5.29-11.6,5.21,2.38q2.12-5.49,3.69-11.21l-5.64-1.25,2.76-12.45,5.57,1.24a115.89,115.89,0,0,0,1.28-11.73Zm-13.56,12.1-1.66,7.82-5.73,1.64a94.27,94.27,0,0,1-5.76,14.17l3,5.72-4.52,6.6-4.53,6.59-6-.68a94.78,94.78,0,0,1-10.71,10.87l.58,6.45-6.7,4.36-6.71,4.36-5.22-2.9a95.25,95.25,0,0,1-14.09,6l-1.92,6.15-7.87,1.46-7.86,1.47-3.73-4.7c-2.73.24-5.5.37-8.3.37q-3.51,0-7-.26l-4.15,5-7.83-1.66-7.82-1.65-1.64-5.74a93.23,93.23,0,0,1-14.17-5.76l-5.72,3-6.6-4.53-6.59-4.53.68-5.95A95.69,95.69,0,0,1,884,603.63l-6.45.58-4.36-6.7-4.36-6.71,2.9-5.22a94.8,94.8,0,0,1-6-14.09l-6.15-1.92-1.46-7.87-1.47-7.86,4.7-3.73c-.24-2.73-.37-5.5-.37-8.3q0-3.51.26-7l-5-4.15,1.66-7.83,1.65-7.82,5.74-1.64a93.23,93.23,0,0,1,5.76-14.17l-3-5.72,4.53-6.59,4.53-6.6,5.95.68a95.69,95.69,0,0,1,10.72-10.87l-.58-6.44,6.7-4.37,6.71-4.36,5.22,2.9A94.76,94.76,0,0,1,926,451.92l1.92-6.16,7.87-1.46,7.86-1.47,3.73,4.7c2.73-.24,5.5-.37,8.3-.37q3.51,0,7,.26l4.15-5,7.83,1.66,7.82,1.66,1.64,5.73a94.27,94.27,0,0,1,14.17,5.76l5.72-3,6.59,4.52,6.6,4.53-.68,6A94.78,94.78,0,0,1,1027.35,480l6.45-.58,4.36,6.71,4.36,6.7-2.9,5.23a94.64,94.64,0,0,1,6,14.08l6.16,1.92,1.46,7.87,1.47,7.86-4.7,3.73c.24,2.74.37,5.5.37,8.3q0,3.51-.26,7l5,4.15Z"
                        style={{ fill:"#2c475b", stroke:"#3f6575", strokeMiterlimit:10, strokeWidth:"2px" }}
                        />
                    <circle cx="955.68" cy="437.61" r="2.68" style={{ fill: "url(#radial-gradient-14)" }}/>
                    <circle cx="915.8" cy="445.54" r="2.68" style={{ fill: "url(#radial-gradient-15)" }}/>
                    <circle cx="882" cy="468.13" r="2.68" style={{ fill: "url(#radial-gradient-16)" }}/>
                    <circle cx="859.41" cy="501.94" r="2.68" style={{ fill: "url(#radial-gradient-17)" }}/>
                    <circle cx="851.48" cy="541.81" r="2.68" style={{ fill: "url(#radial-gradient-18)" }}/>
                    <circle cx="859.41" cy="581.69" r="2.68" style={{ fill: "url(#radial-gradient-19)" }}/>
                    <circle cx="882" cy="615.49" r="2.68" style={{ fill: "url(#radial-gradient-20)" }}/>
                    <circle cx="915.8" cy="638.08" r="2.68" style={{ fill: "url(#radial-gradient-21)" }}/>
                    <circle cx="955.68" cy="646.01" r="2.68" style={{ fill: "url(#radial-gradient-22)" }}/>
                    <circle cx="995.55" cy="638.08" r="2.68" style={{ fill: "url(#radial-gradient-23)" }}/>
                    <circle cx="1029.36" cy="615.49" r="2.68" style={{ fill: "url(#radial-gradient-24)" }}/>
                    <circle cx="1051.95" cy="581.69" r="2.68" style={{ fill: "url(#radial-gradient-25)" }}/>
                    <circle cx="1059.88" cy="541.81" r="2.68" style={{ fill: "url(#radial-gradient-26)" }}/>
                    <circle cx="1051.95" cy="501.94" r="2.68" style={{ fill: "url(#radial-gradient-27)" }}/>
                    <circle cx="1029.36" cy="468.13" r="2.68" style={{ fill: "url(#radial-gradient-28)" }}/>
                    <circle cx="995.55" cy="445.54" r="2.68" style={{ fill: "url(#radial-gradient-29)" }}/>
                    <rect x="471.28" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-6)" }}/>
                    <rect x="471.28" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-7)" }}/>
                    <rect x="1437.82" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-8)" }}/>
                    <rect x="1437.82" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-9)" }}/>
                </g>
                <g  id="Part04" className="part02">
                    <path d="M1187.55,534.28a86.52,86.52,0,0,1-2.73-14.72,85.48,85.48,0,0,1-.22-15.57q-1.21-7.39-2.88-14.63a90.06,90.06,0,0,1-8.91-29.44q-2.61-6.92-5.63-13.6a90.42,90.42,0,0,1-14.49-27.09q-4-6.36-8.32-12.43a90.73,90.73,0,0,1-19.32-23.54q-5.19-5.53-10.74-10.73a90.86,90.86,0,0,1-23.46-19.28q-6.12-4.39-12.51-8.38a85.88,85.88,0,0,1-13.85-5.95,84.78,84.78,0,0,1-13.15-8.52q-6.71-3-13.62-5.66a90.71,90.71,0,0,1-29.48-8.95q-7.18-1.67-14.52-2.88a90.61,90.61,0,0,1-30.39-3q-6.92-.22-13.92,0l-1.26,0a86.52,86.52,0,0,1-14.72,2.73,85.49,85.49,0,0,1-15.57.22q-7.4,1.22-14.63,2.88a90.25,90.25,0,0,1-29.44,8.91q-6.91,2.61-13.6,5.63a85.94,85.94,0,0,1-12.76,8.31,84.74,84.74,0,0,1-14.33,6.18q-6.36,4-12.43,8.32a91.18,91.18,0,0,1-23.54,19.32q-5.53,5.19-10.73,10.74a87.07,87.07,0,0,1-8.48,12.33,85.4,85.4,0,0,1-10.81,11.13q-4.38,6.12-8.37,12.51a85.88,85.88,0,0,1-6,13.85,84.78,84.78,0,0,1-8.52,13.15q-3,6.71-5.66,13.62a90.71,90.71,0,0,1-9,29.48q-1.67,7.19-2.88,14.52a86.23,86.23,0,0,1-.18,15.16,85.11,85.11,0,0,1-2.8,15.23c-.14,4.61-.16,9.25,0,13.92,0,.42,0,.84,0,1.26a85.6,85.6,0,0,1,2.72,14.72,84.66,84.66,0,0,1,.23,15.57q1.22,7.39,2.88,14.63a85.76,85.76,0,0,1,5.64,14.08,84.44,84.44,0,0,1,3.27,15.36q2.61,6.91,5.63,13.6a85.94,85.94,0,0,1,8.31,12.76,84.74,84.74,0,0,1,6.18,14.33q4,6.36,8.32,12.43a91.18,91.18,0,0,1,19.32,23.54q5.19,5.55,10.74,10.73a87.07,87.07,0,0,1,12.33,8.48,85.4,85.4,0,0,1,11.13,10.81q6.11,4.38,12.5,8.38a85.86,85.86,0,0,1,13.86,5.94A84.06,84.06,0,0,1,860,753.23q6.71,3,13.62,5.65a90.91,90.91,0,0,1,29.48,9q7.18,1.67,14.52,2.88a87.21,87.21,0,0,1,15.16.18,85.11,85.11,0,0,1,15.23,2.8c4.61.14,9.25.16,13.92,0l1.26,0a91,91,0,0,1,30.29-2.95q7.39-1.22,14.63-2.88a86,86,0,0,1,14.07-5.64,84.71,84.71,0,0,1,15.37-3.27q6.92-2.61,13.6-5.63a90.42,90.42,0,0,1,27.09-14.49q6.36-4,12.43-8.31a90.5,90.5,0,0,1,23.54-19.33q5.54-5.19,10.73-10.73A90.68,90.68,0,0,1,1144.24,677q4.4-6.11,8.38-12.5a86,86,0,0,1,6-13.86,84.78,84.78,0,0,1,8.52-13.15q3-6.71,5.66-13.62a90.91,90.91,0,0,1,9-29.48q1.66-7.18,2.88-14.52a90.61,90.61,0,0,1,3-30.39q.23-6.91,0-13.92C1187.58,535.12,1187.56,534.7,1187.55,534.28ZM960.44,717.72a176,176,0,1,1,171.15-180.66A176,176,0,0,1,960.44,717.72Z" style={{ fill: "url(#radial-gradient-34)" }}/>
                    <polygon points="988.11 365.92 957.63 362.89 957.17 367.49 965.05 368.27 964.21 376.8 971.56 377.53 978.92 378.26 979.77 369.74 987.65 370.52 988.11 365.92" style={{ fill: "url(#radial-gradient-35)" }}/>
                    <polygon points="950.83 363.02 920.38 366.39 920.89 370.99 928.77 370.12 929.71 378.63 937.06 377.82 944.41 377 943.46 368.49 951.34 367.62 950.83 363.02" style={{ fill: "url(#radial-gradient-36)" }}/>
                    <polygon points="913.77 367.94 884.68 377.56 886.14 381.95 893.66 379.46 896.35 387.6 903.37 385.27 910.39 382.95 907.7 374.82 915.22 372.33 913.77 367.94" style={{ fill: "url(#radial-gradient-37)" }}/>
                    <polygon points="878.53 380.45 852.09 395.91 854.42 399.91 861.26 395.9 865.59 403.3 871.97 399.57 878.35 395.84 874.02 388.44 880.87 384.44 878.53 380.45" style={{ fill: "url(#radial-gradient-38)" }}/>
                    <polygon points="846.67 400.02 824.02 420.64 827.13 424.06 832.99 418.72 838.76 425.06 844.22 420.08 849.69 415.11 843.92 408.77 849.78 403.44 846.67 400.02" style={{ fill: "url(#radial-gradient-39)" }}/>
                    <polygon points="819.57 425.78 801.7 450.66 805.46 453.36 810.08 446.92 817.04 451.92 821.35 445.92 825.66 439.91 818.7 434.91 823.33 428.48 819.57 425.78" style={{ fill: "url(#radial-gradient-40)" }}/>
                    <polygon points="798.42 456.61 786.11 484.67 790.35 486.53 793.53 479.27 801.38 482.71 804.35 475.94 807.32 469.17 799.47 465.73 802.65 458.47 798.42 456.61" style={{ fill: "url(#radial-gradient-41)" }}/>
                    <polygon points="784.14 491.17 777.94 521.17 782.47 522.11 784.07 514.35 792.46 516.08 793.96 508.84 795.46 501.6 787.07 499.87 788.67 492.11 784.14 491.17" style={{ fill: "url(#radial-gradient-42)" }}/>
                    <polygon points="777.36 527.94 777.53 558.58 782.16 558.55 782.11 550.63 790.68 550.58 790.64 543.19 790.6 535.79 782.03 535.84 781.99 527.92 777.36 527.94" style={{ fill: "url(#radial-gradient-43)" }}/>
                    <polygon points="778.38 565.32 784.91 595.25 789.43 594.26 787.74 586.52 796.11 584.69 794.53 577.47 792.95 570.25 784.58 572.08 782.89 564.33 778.38 565.32" style={{ fill: "url(#radial-gradient-44)" }}/>
                    <polygon points="787.14 601.67 799.75 629.59 803.97 627.68 800.7 620.46 808.51 616.93 805.47 610.2 802.42 603.46 794.62 606.99 791.35 599.76 787.14 601.67" style={{ fill: "url(#radial-gradient-45)" }}/>
                    <polygon points="803.27 635.4 821.41 660.09 825.14 657.35 820.44 650.96 827.35 645.89 822.97 639.93 818.59 633.98 811.69 639.05 806.99 632.66 803.27 635.4" style={{ fill: "url(#radial-gradient-46)" }}/>
                    <polygon points="826.06 665.05 848.93 685.42 852.01 681.97 846.09 676.7 851.79 670.3 846.27 665.38 840.75 660.47 835.05 666.86 829.13 661.59 826.06 665.05" style={{ fill: "url(#radial-gradient-47)" }}/>
                    <polygon points="854.51 689.3 881.13 704.47 883.41 700.46 876.53 696.53 880.77 689.09 874.35 685.43 867.93 681.77 863.69 689.21 856.8 685.29 854.51 689.3" style={{ fill: "url(#radial-gradient-48)" }}/>
                    <polygon points="887.39 707.11 916.57 716.42 917.98 712.01 910.43 709.61 913.03 701.45 905.99 699.2 898.94 696.95 896.34 705.12 888.79 702.71 887.39 707.11" style={{ fill: "url(#radial-gradient-49)" }}/>
                    <polygon points="923.25 717.7 953.73 720.74 954.19 716.13 946.3 715.35 947.15 706.82 939.8 706.09 932.44 705.36 931.59 713.88 923.71 713.1 923.25 717.7" style={{ fill: "url(#radial-gradient-50)" }}/>
                    <polygon points="960.53 720.6 990.98 717.23 990.47 712.63 982.59 713.51 981.65 704.99 974.3 705.8 966.95 706.62 967.89 715.13 960.02 716 960.53 720.6" style={{ fill: "url(#radial-gradient-51)" }}/>
                    <polygon points="997.59 715.68 1026.68 706.06 1025.22 701.67 1017.7 704.16 1015.01 696.03 1007.99 698.35 1000.97 700.67 1003.66 708.8 996.14 711.3 997.59 715.68" style={{ fill: "url(#radial-gradient-52)" }}/>
                    <polygon points="1032.83 703.17 1059.27 687.71 1056.94 683.72 1050.1 687.72 1045.77 680.32 1039.39 684.05 1033.01 687.78 1037.33 695.18 1030.49 699.18 1032.83 703.17" style={{ fill: "url(#radial-gradient-53)" }}/>
                    <polygon points="1064.69 683.61 1087.34 662.98 1084.23 659.56 1078.37 664.9 1072.6 658.56 1067.14 663.54 1061.67 668.52 1067.44 674.85 1061.58 680.19 1064.69 683.61" style={{ fill: "url(#radial-gradient-54)" }}/>
                    <polygon points="1091.79 657.84 1109.66 632.96 1105.9 630.26 1101.28 636.7 1094.32 631.7 1090.01 637.71 1085.7 643.71 1092.66 648.71 1088.03 655.15 1091.79 657.84" style={{ fill: "url(#radial-gradient-55)" }}/>
                    <polygon points="1112.94 627.01 1125.24 598.95 1121.01 597.1 1117.83 604.35 1109.98 600.91 1107.01 607.68 1104.04 614.45 1111.89 617.89 1108.7 625.15 1112.94 627.01" style={{ fill: "url(#radial-gradient-56)" }}/>
                    <polygon points="1127.21 592.45 1133.42 562.45 1128.89 561.51 1127.29 569.27 1118.9 567.54 1117.4 574.78 1115.9 582.02 1124.29 583.75 1122.69 591.51 1127.21 592.45" style={{ fill: "url(#radial-gradient-57)" }}/>
                    <polygon points="1133.99 555.68 1133.83 525.04 1129.2 525.07 1129.25 533 1120.68 533.04 1120.72 540.43 1120.76 547.83 1129.33 547.78 1129.37 555.71 1133.99 555.68" style={{ fill: "url(#radial-gradient-58)" }}/>
                    <polygon points="1132.98 518.3 1126.45 488.37 1121.93 489.36 1123.62 497.1 1115.25 498.93 1116.83 506.15 1118.4 513.37 1126.77 511.55 1128.46 519.29 1132.98 518.3" style={{ fill: "url(#radial-gradient-59)" }}/>
                    <polygon points="1124.22 481.95 1111.61 454.04 1107.39 455.94 1110.65 463.16 1102.85 466.69 1105.89 473.43 1108.94 480.16 1116.74 476.63 1120.01 483.86 1124.22 481.95" style={{ fill: "url(#radial-gradient-60)" }}/>
                    <polygon points="1108.09 448.22 1089.95 423.54 1086.22 426.27 1090.92 432.66 1084.01 437.73 1088.39 443.69 1092.77 449.65 1099.67 444.57 1104.37 450.96 1108.09 448.22" style={{ fill: "url(#radial-gradient-61)" }}/>
                    <polygon points="1085.3 418.58 1062.42 398.2 1059.35 401.66 1065.27 406.93 1059.57 413.32 1065.09 418.24 1070.61 423.16 1076.31 416.76 1082.23 422.03 1085.3 418.58" style={{ fill: "url(#radial-gradient-62)" }}/>
                    <polygon points="1056.85 394.32 1030.23 379.15 1027.94 383.17 1034.83 387.09 1030.59 394.53 1037.01 398.19 1043.43 401.85 1047.67 394.41 1054.56 398.34 1056.85 394.32" style={{ fill: "url(#radial-gradient-63)" }}/>
                    <polygon points="1023.97 376.51 994.78 367.2 993.38 371.61 1000.93 374.01 998.33 382.18 1005.37 384.42 1012.41 386.67 1015.02 378.51 1022.57 380.91 1023.97 376.51" style={{ fill: "url(#radial-gradient-64)" }}/>
                    <path d="M955.68,350.61c-105.6,0-191.2,85.6-191.2,191.2S850.08,733,955.68,733s191.2-85.6,191.2-191.2S1061.28,350.61,955.68,350.61Zm-.88,372.1A179.19,179.19,0,1,1,1134,543.52,179.19,179.19,0,0,1,954.8,722.71Z" style={{ fill: "#255475" }}/>
                    <path d="M955.68,339.19c-111.91,0-202.63,90.71-202.63,202.62s90.72,202.63,202.63,202.63,202.62-90.72,202.62-202.63S1067.59,339.19,955.68,339.19Zm0,401.44c-109.8,0-198.82-89-198.82-198.82S845.88,343,955.68,343s198.82,89,198.82,198.82S1065.48,740.63,955.68,740.63Z" style={{ fill: "#9aa2a9" }}/>
                    <path d="M954.19,326C835.37,326,739,422.32,739,541.14s96.33,215.15,215.15,215.15S1169.34,660,1169.34,541.14,1073,326,954.19,326Zm0,426.25c-116.59,0-211.1-94.52-211.1-211.11S837.6,330,954.19,330s211.1,94.51,211.1,211.1S1070.78,752.25,954.19,752.25Z" style={{ fill: "#9aa2a9" }}/>
                    <path d="M985.74,325.06a2,2,0,0,0,1.46-1.46c.14-1.19-1.39-2.36-3.42-2.62s-3.81.51-4,1.71a2,2,0,0,0,1,1.77l-8.11-1-1.56,12.59,8.28,1L981,324.56a5.35,5.35,0,0,0,2.21.74,5.5,5.5,0,0,0,2.29-.16L984,337.63l8.28,1,1.56-12.6Z" style={{ fill: "#255475" }}/>
                    <path d="M940,323.55a2,2,0,0,0,1.12-1.74c-.1-1.19-1.85-2-3.89-1.84s-3.62,1.29-3.52,2.49a2,2,0,0,0,1.4,1.51l-8.14.71,1.1,12.64,8.31-.72L935.31,324a5.48,5.48,0,0,0,2.31.26,5.41,5.41,0,0,0,2.21-.64l1.08,12.55,8.31-.72-1.09-12.64Z" style={{ fill: "#255475" }}/>
                    <path d="M895,331.57a2,2,0,0,0,.74-1.92c-.35-1.15-2.23-1.6-4.19-1s-3.27,2-2.92,3.16a2,2,0,0,0,1.68,1.19l-7.82,2.39,3.7,12.14,8-2.43L890.48,333a5.46,5.46,0,0,0,2.32-.22,5.63,5.63,0,0,0,2-1.08l3.67,12,8-2.44-3.7-12.14Z" style={{ fill: "#255475" }}/>
                    <path d="M852.6,348.79a2,2,0,0,0,.32-2c-.59-1.05-2.51-1.1-4.31-.11s-2.78,2.65-2.2,3.71a2,2,0,0,0,1.9.81l-7.15,4,6.14,11.1,7.3-4-6.11-11a5.86,5.86,0,0,0,4-2.18l6.09,11,7.3-4-6.14-11.11Z" style={{ fill: "#255475" }}/>
                    <path d="M814.72,374.44a2,2,0,0,0-.11-2.06c-.79-.91-2.69-.56-4.24.79s-2.17,3.17-1.38,4.08a2,2,0,0,0,2,.4L804.84,383l8.32,9.59,6.3-5.47-8.26-9.53a5.53,5.53,0,0,0,2-1.14,5.65,5.65,0,0,0,1.41-1.81l8.25,9.51,6.3-5.47-8.31-9.58Z" style={{ fill: "#255475" }}/>
                    <path d="M783,407.4a2,2,0,0,0-.54-2c-1-.72-2.74,0-4,1.66s-1.46,3.55-.5,4.27a2,2,0,0,0,2.07,0l-4.93,6.52,10.13,7.65,5-6.66-10.07-7.6a5.54,5.54,0,0,0,1.75-1.54,5.71,5.71,0,0,0,1-2.07l10,7.59,5-6.65-10.13-7.65Z" style={{ fill: "#255475" }}/>
                    <path d="M758.83,446.24a2,2,0,0,0-.94-1.84c-1.09-.5-2.68.59-3.55,2.45s-.69,3.78.4,4.29a2,2,0,0,0,2-.45l-3.46,7.4,11.5,5.37,3.53-7.55-11.42-5.34a6,6,0,0,0,1.93-4.1l11.41,5.33,3.53-7.55-11.49-5.38Z" style={{ fill: "#255475" }}/>
                    <path d="M743.26,489.26a2,2,0,0,0-1.3-1.6c-1.17-.27-2.5,1.13-3,3.13s.11,3.84,1.28,4.11a2,2,0,0,0,1.87-.86l-1.84,8,12.36,2.86,1.89-8.12-12.29-2.85a5.69,5.69,0,0,0,1-2.12,5.6,5.6,0,0,0,.07-2.29l12.27,2.84,1.88-8.12-12.36-2.87Z" style={{ fill: "#255475" }}/>
                    <path d="M737,534.57a2,2,0,0,0-1.61-1.29c-1.2,0-2.21,1.62-2.25,3.67s.91,3.74,2.11,3.76a2,2,0,0,0,1.66-1.24l-.15,8.18,12.69.23.15-8.34L737,539.31a5.67,5.67,0,0,0,.51-2.28,5.61,5.61,0,0,0-.41-2.25l12.59.23.16-8.34-12.69-.24Z" style={{ fill: "#255475" }}/>
                    <path d="M740.25,580.2a2,2,0,0,0-1.84-.93c-1.18.23-1.82,2-1.43,4.06s1.66,3.46,2.84,3.24a2,2,0,0,0,1.36-1.55l1.55,8,12.47-2.41-1.59-8.19-12.38,2.39a5.67,5.67,0,0,0,0-2.33,5.59,5.59,0,0,0-.86-2.12L752.75,578l-1.58-8.19-12.46,2.41Z" style={{ fill: "#255475" }}/>
                    <path d="M752.94,624.15a2,2,0,0,0-2-.53c-1.1.47-1.35,2.38-.55,4.27s2.35,3.05,3.45,2.58a2,2,0,0,0,1-1.8l3.19,7.52,11.69-5-3.26-7.68-11.61,4.92a5.85,5.85,0,0,0-1.75-4.18l11.6-4.91-3.26-7.68-11.68,4.95Z" style={{ fill: "#255475" }}/>
                    <path d="M774.49,664.5a2,2,0,0,0-2.06-.1c-1,.69-.83,2.61.34,4.29s2.93,2.49,3.92,1.8a2,2,0,0,0,.61-2l4.68,6.7,10.4-7.27-4.77-6.83-10.34,7.22a5.75,5.75,0,0,0-.93-2.14,5.87,5.87,0,0,0-1.65-1.59L785,657.4l-4.78-6.84-10.4,7.27Z" style={{ fill: "#255475" }}/>
                    <path d="M804,699.49a2,2,0,0,0-2,.33c-.82.88-.27,2.73,1.23,4.13s3.38,1.83,4.2.95a2,2,0,0,0,.19-2.06l6,5.58,8.67-9.27-6.1-5.7-8.61,9.22a5.85,5.85,0,0,0-3.3-3.11l8.6-9.2-6.09-5.7L798,693.94Z" style={{ fill: "#255475" }}/>
                    <path d="M840.06,727.59a2,2,0,0,0-1.93.75c-.62,1,.31,2.72,2.06,3.78s3.69,1.08,4.31,0a2,2,0,0,0-.24-2l7,4.22,6.55-10.87-7.15-4.31L844.16,730a5.51,5.51,0,0,0-1.72-1.58,5.85,5.85,0,0,0-2.16-.78l6.5-10.79-7.15-4.3-6.54,10.88Z" style={{ fill: "#255475" }}/>
                    <path d="M881.21,747.57a2,2,0,0,0-1.73,1.13c-.39,1.14.86,2.6,2.8,3.27s3.84.29,4.23-.84a2,2,0,0,0-.66-2l7.72,2.67,4.14-12-7.88-2.72L885.71,749a5.85,5.85,0,0,0-4.28-1.49l4.12-11.91-7.89-2.72-4.14,12Z" style={{ fill: "#255475" }}/>
                    <path d="M925.62,758.56a2,2,0,0,0-1.46,1.46c-.15,1.2,1.39,2.37,3.42,2.62s3.81-.51,4-1.7a2,2,0,0,0-1-1.78l8.11,1,1.55-12.59-8.27-1-1.55,12.52a5.86,5.86,0,0,0-4.5-.57l1.55-12.5-8.28-1-1.56,12.6Z" style={{ fill: "#255475" }}/>
                    <path d="M971.34,760.07a2,2,0,0,0-1.12,1.74c.1,1.19,1.84,2,3.89,1.84s3.62-1.29,3.52-2.48a2,2,0,0,0-1.4-1.52l8.14-.71-1.1-12.64L975,747l1.09,12.56a5.9,5.9,0,0,0-4.52.38l-1.08-12.55-8.31.72,1.09,12.64Z" style={{ fill: "#255475" }}/>
                    <path d="M1016.37,752.05a2,2,0,0,0-.73,1.93c.35,1.15,2.23,1.59,4.19,1s3.27-2,2.92-3.16a2,2,0,0,0-1.68-1.19l7.82-2.38-3.7-12.15-8,2.44,3.67,12.06a5.62,5.62,0,0,0-2.32.22,5.79,5.79,0,0,0-2,1.08l-3.67-12-8,2.43,3.7,12.14Z" style={{ fill: "#255475" }}/>
                    <path d="M1058.76,734.83a2,2,0,0,0-.32,2c.58,1.06,2.51,1.1,4.31.11s2.78-2.65,2.2-3.7a2,2,0,0,0-1.9-.82l7.15-4-6.14-11.1-7.3,4,6.11,11a5.86,5.86,0,0,0-4,2.18l-6.09-11-7.3,4,6.14,11.1Z" style={{ fill: "#255475" }}/>
                    <path d="M1096.64,709.18a2,2,0,0,0,.11,2.07c.79.9,2.69.55,4.24-.8s2.17-3.17,1.38-4.08a2,2,0,0,0-2-.4l6.18-5.36L1098.2,691l-6.3,5.46,8.26,9.53a5.53,5.53,0,0,0-2,1.15,5.64,5.64,0,0,0-1.4,1.81l-8.26-9.52-6.3,5.47,8.32,9.59Z" style={{ fill: "#255475" }}/>
                    <path d="M1128.36,676.22a2,2,0,0,0,.54,2c1,.73,2.74,0,4-1.65s1.47-3.56.51-4.28a2,2,0,0,0-2.07,0l4.93-6.52-10.13-7.65-5,6.66,10.07,7.6a5.84,5.84,0,0,0-2.75,3.61l-10.05-7.59-5,6.66,10.13,7.64Z" style={{ fill: "#255475" }}/>
                    <path d="M1152.53,637.38a2,2,0,0,0,.94,1.84c1.09.51,2.68-.59,3.55-2.45s.69-3.78-.4-4.29a2,2,0,0,0-2,.46l3.46-7.41-11.5-5.37-3.53,7.55,11.42,5.34a5.85,5.85,0,0,0-1.93,4.1l-11.41-5.33-3.53,7.56,11.49,5.37Z" style={{ fill: "#255475" }}/>
                    <path d="M1168.1,594.37a2,2,0,0,0,1.3,1.6c1.17.27,2.5-1.13,3-3.13s-.11-3.85-1.28-4.12a2,2,0,0,0-1.87.87l1.84-8-12.36-2.86-1.89,8.12,12.29,2.85a5.54,5.54,0,0,0-1,2.12,5.6,5.6,0,0,0-.07,2.29l-12.27-2.84-1.88,8.12,12.36,2.87Z" style={{ fill: "#255475" }}/>
                    <path d="M1174.38,549.05a2,2,0,0,0,1.61,1.3c1.2,0,2.21-1.63,2.24-3.68s-.9-3.73-2.1-3.76a2,2,0,0,0-1.66,1.24l.15-8.17-12.69-.24-.15,8.34,12.61.23a5.84,5.84,0,0,0-.1,4.54l-12.59-.24-.16,8.34,12.69.24Z" style={{ fill: "#255475" }}/>
                    <path d="M1171.11,503.42a2,2,0,0,0,1.84.94c1.18-.23,1.82-2.05,1.43-4.07s-1.66-3.46-2.84-3.23a2,2,0,0,0-1.36,1.55l-1.56-8L1156.16,493l1.59,8.19,12.38-2.39a5.35,5.35,0,0,0,0,2.33,5.59,5.59,0,0,0,.86,2.12l-12.36,2.39,1.58,8.19,12.46-2.41Z" style={{ fill: "#255475" }}/>
                    <path d="M1158.42,459.47a2,2,0,0,0,2,.53c1.1-.47,1.35-2.38.55-4.27s-2.35-3-3.45-2.58a2,2,0,0,0-1,1.8l-3.19-7.52-11.69,4.95,3.25,7.68,11.62-4.92a5.7,5.7,0,0,0,.46,2.29,5.58,5.58,0,0,0,1.29,1.89l-11.6,4.91,3.25,7.68,11.69-5Z" style={{ fill: "#255475" }}/>
                    <path d="M1136.87,419.12a2,2,0,0,0,2.06.1c1-.69.83-2.61-.34-4.29s-2.93-2.49-3.92-1.8a2,2,0,0,0-.61,2l-4.68-6.7L1119,415.67l4.78,6.84,10.34-7.23a5.52,5.52,0,0,0,.93,2.14,5.61,5.61,0,0,0,1.65,1.59l-10.32,7.21,4.78,6.84,10.4-7.27Z" style={{ fill: "#255475" }}/>
                    <path d="M1107.4,384.13a2,2,0,0,0,2-.33c.82-.88.27-2.73-1.23-4.13s-3.38-1.82-4.2-.95a2,2,0,0,0-.19,2.06l-6-5.58-8.66,9.28,6.09,5.69,8.61-9.22a5.6,5.6,0,0,0,1.36,1.9,5.5,5.5,0,0,0,2,1.21l-8.6,9.2,6.09,5.7,8.67-9.28Z" style={{ fill: "#255475" }}/>
                    <path d="M1071.3,356a2,2,0,0,0,1.93-.75c.62-1-.31-2.72-2.07-3.78s-3.68-1.08-4.3-.05a2,2,0,0,0,.24,2.05l-7-4.22-6.55,10.88,7.15,4.3,6.5-10.8a5.49,5.49,0,0,0,1.72,1.57,5.62,5.62,0,0,0,2.16.78l-6.5,10.79,7.15,4.3,6.54-10.87Z" style={{ fill: "#255475" }}/>
                    <path d="M1030.15,336.05a2,2,0,0,0,1.73-1.13c.39-1.14-.87-2.6-2.81-3.27s-3.83-.29-4.22.84a2,2,0,0,0,.66,2l-7.72-2.67-4.15,12,7.89,2.72,4.11-11.92a5.63,5.63,0,0,0,2,1.18,5.52,5.52,0,0,0,2.27.32l-4.11,11.9,7.89,2.72,4.14-12Z" style={{ fill: "#255475" }}/>
                    <rect x="471.28" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-6)" }}/>
                    <rect x="471.28" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-7)" }}/>
                    <rect x="1437.82" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-8)" }}/>
                    <rect x="1437.82" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-9)" }}/>
                </g>
                <g id="Part05" className="part05">
                    <path d="M955.68,133c-225.77,0-408.79,183-408.79,408.78s183,408.79,408.79,408.79,408.78-183,408.78-408.79S1181.44,133,955.68,133Zm0,809.41c-221.26,0-400.63-179.37-400.63-400.63S734.42,141.19,955.68,141.19,1356.3,320.55,1356.3,541.81,1176.94,942.44,955.68,942.44Z"  style={{ fill: "#386e8e" }}/>
                    <polygon points="955.01 136.33 936.51 136.33 936.51 157.01 940.05 161.62 942.77 161.62 942.77 200.43 946.58 200.43 946.76 161.62 950.93 161.62 955.01 157.01 959.09 161.62 963.26 161.62 963.44 200.43 967.25 200.43 967.25 161.62 969.97 161.62 973.5 157.01 973.5 136.33 955.01 136.33"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="870.72 145.33 852.63 149.18 856.93 169.41 861.34 173.18 864 172.62 872.07 210.57 875.8 209.78 867.9 171.79 871.99 170.92 875.02 165.56 879.97 169.22 884.04 168.35 892.29 206.27 896.01 205.48 887.95 167.53 890.61 166.96 893.11 161.72 888.81 141.49 870.72 145.33"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="790.14 171.66 773.25 179.19 781.66 198.08 786.76 200.85 789.25 199.74 805.03 235.19 808.51 233.64 792.89 198.12 796.7 196.42 798.55 190.55 804.15 193.11 807.96 191.41 823.91 226.78 827.39 225.24 811.61 189.79 814.09 188.68 815.45 183.03 807.04 164.14 790.14 171.66"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="716.8 214.17 701.84 225.04 713.99 241.77 719.56 243.42 721.76 241.82 744.57 273.21 747.65 270.98 724.99 239.48 728.37 237.03 728.96 230.9 734.97 232.23 738.34 229.78 761.29 261.06 764.37 258.82 741.57 227.43 743.77 225.84 743.92 220.03 731.76 203.3 716.8 214.17"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="653.9 270.99 641.52 284.74 656.89 298.57 662.68 299.03 664.5 297.01 693.34 322.98 695.89 320.14 667.17 294.05 669.96 290.95 669.27 284.83 675.42 284.88 678.21 281.78 707.17 307.61 709.72 304.78 680.88 278.82 682.7 276.8 681.64 271.09 666.27 257.25 653.9 270.99"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="604.19 339.65 594.94 355.67 612.85 366.01 618.61 365.25 619.97 362.9 653.57 382.3 655.48 379 621.97 359.44 624.05 355.83 622.1 350 628.13 348.77 630.22 345.15 663.91 364.4 665.81 361.1 632.21 341.7 633.57 339.35 631.35 333.98 613.44 323.64 604.19 339.65"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="569.84 417.15 564.12 434.74 583.79 441.13 589.27 439.19 590.11 436.61 627.01 448.6 628.19 444.98 591.34 432.81 592.63 428.85 589.51 423.54 595.15 421.09 596.44 417.12 633.4 428.94 634.58 425.32 597.67 413.33 598.51 410.74 595.22 405.95 575.55 399.56 569.84 417.15"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="552.35 500.1 550.42 518.49 570.99 520.65 575.94 517.62 576.22 514.91 614.81 518.97 615.21 515.18 576.64 510.94 577.08 506.8 572.92 502.26 577.93 498.68 578.37 494.54 616.97 498.41 617.37 494.62 578.78 490.57 579.07 487.86 574.85 483.87 554.28 481.7 552.35 500.1"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="552.49 584.87 554.43 603.26 574.99 601.1 579.21 597.1 578.92 594.39 617.51 590.34 617.12 586.55 578.51 590.43 578.07 586.28 573.06 582.7 577.22 578.16 576.78 574.02 615.35 569.78 614.95 565.99 576.36 570.05 576.08 567.34 571.13 564.31 550.56 566.47 552.49 584.87"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="570.25 667.75 575.97 685.34 595.64 678.95 598.93 674.16 598.09 671.58 634.99 659.59 633.82 655.96 596.86 667.78 595.57 663.82 589.92 661.36 593.05 656.06 591.76 652.09 628.6 639.93 627.43 636.3 590.52 648.3 589.68 645.71 584.21 643.77 564.54 650.16 570.25 667.75"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="604.86 745.13 614.11 761.15 632.02 750.81 634.24 745.44 632.88 743.09 666.49 723.69 664.58 720.39 630.89 739.63 628.8 736.02 622.77 734.79 624.72 728.96 622.64 725.34 656.15 705.78 654.25 702.49 620.64 721.89 619.28 719.53 613.52 718.78 595.61 729.12 604.86 745.13"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="654.8 813.63 667.18 827.37 682.54 813.54 683.6 807.82 681.78 805.8 710.62 779.84 708.07 777.01 679.12 802.84 676.32 799.74 670.17 799.79 670.86 793.67 668.07 790.58 696.79 764.48 694.24 761.65 665.4 787.61 663.59 785.59 657.79 786.05 642.42 799.88 654.8 813.63"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="717.89 870.25 732.85 881.12 745.01 864.39 744.86 858.58 742.66 856.98 765.46 825.59 762.38 823.35 739.43 854.63 736.05 852.18 730.04 853.51 729.45 847.39 726.08 844.94 748.74 813.44 745.66 811.2 722.85 842.59 720.65 840.99 715.08 842.64 702.93 859.38 717.89 870.25"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="791.37 912.51 808.27 920.03 816.68 901.14 815.32 895.49 812.84 894.38 828.62 858.93 825.14 857.39 809.19 892.76 805.38 891.06 799.78 893.62 797.93 887.75 794.12 886.05 809.74 850.53 806.26 848.98 790.48 884.43 787.99 883.32 782.89 886.09 774.48 904.99 791.37 912.51"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="872.03 938.57 890.12 942.41 894.42 922.19 891.92 916.94 889.26 916.38 897.33 878.42 893.61 877.63 885.36 915.55 881.28 914.68 876.33 918.34 873.3 912.98 869.22 912.12 877.11 874.12 873.39 873.33 865.32 911.29 862.66 910.72 858.24 914.5 853.94 934.72 872.03 938.57"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="956.35 947.29 974.85 947.29 974.85 926.61 971.31 922 968.59 922 968.59 883.2 964.78 883.2 964.6 922 960.43 922 956.35 926.61 952.27 922 948.1 922 947.92 883.2 944.11 883.2 944.11 922 941.39 922 937.86 926.61 937.86 947.29 956.35 947.29"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1040.64 938.29 1058.73 934.44 1054.43 914.22 1050.02 910.44 1047.36 911.01 1039.29 873.05 1035.56 873.85 1043.45 911.84 1039.37 912.7 1036.34 918.06 1031.39 914.4 1027.31 915.27 1019.07 877.35 1015.34 878.14 1023.41 916.1 1020.75 916.66 1018.25 921.91 1022.55 942.13 1040.64 938.29"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1121.22 911.96 1138.11 904.44 1129.7 885.55 1124.6 882.77 1122.11 883.88 1106.33 848.43 1102.85 849.98 1118.47 885.5 1114.66 887.2 1112.81 893.07 1107.2 890.52 1103.39 892.21 1087.45 856.84 1083.97 858.39 1099.75 893.84 1097.27 894.94 1095.91 900.59 1104.32 919.48 1121.22 911.96"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1194.56 869.45 1209.52 858.58 1197.37 841.85 1191.8 840.2 1189.6 841.8 1166.79 810.41 1163.71 812.65 1186.37 844.14 1182.99 846.6 1182.4 852.72 1176.39 851.39 1173.02 853.84 1150.07 822.56 1146.98 824.8 1169.79 856.19 1167.59 857.79 1167.44 863.6 1179.6 880.33 1194.56 869.45"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1257.46 812.63 1269.83 798.88 1254.47 785.05 1248.67 784.59 1246.86 786.61 1218.02 760.65 1215.47 763.48 1244.18 789.58 1241.39 792.67 1242.09 798.79 1235.93 798.74 1233.14 801.84 1204.19 776.01 1201.64 778.84 1230.47 804.8 1228.66 806.82 1229.71 812.53 1245.08 826.37 1257.46 812.63"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1307.17 743.97 1316.42 727.95 1298.51 717.61 1292.75 718.37 1291.39 720.72 1257.79 701.32 1255.88 704.62 1289.39 724.18 1287.31 727.79 1289.26 733.63 1283.23 734.86 1281.14 738.47 1247.45 719.22 1245.55 722.52 1279.15 741.92 1277.79 744.28 1280.01 749.64 1297.92 759.98 1307.17 743.97"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1341.52 666.47 1347.23 648.88 1327.57 642.49 1322.09 644.43 1321.25 647.02 1284.35 635.02 1283.17 638.65 1320.02 650.81 1318.73 654.78 1321.85 660.08 1316.21 662.54 1314.92 666.5 1277.96 654.68 1276.78 658.3 1313.69 670.3 1312.85 672.88 1316.14 677.67 1335.81 684.06 1341.52 666.47"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1359.01 583.53 1360.94 565.13 1340.37 562.97 1335.42 566 1335.13 568.71 1296.55 564.65 1296.15 568.44 1334.72 572.68 1334.28 576.83 1338.44 581.36 1333.43 584.94 1332.99 589.09 1294.38 585.21 1293.99 589 1332.58 593.05 1332.29 595.76 1336.51 599.76 1357.07 601.92 1359.01 583.53"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1358.87 498.76 1356.93 480.36 1336.37 482.53 1332.15 486.52 1332.44 489.23 1293.85 493.29 1294.24 497.07 1332.85 493.2 1333.29 497.34 1338.3 500.92 1334.14 505.46 1334.58 509.61 1296.01 513.84 1296.4 517.63 1334.99 513.57 1335.28 516.28 1340.23 519.31 1360.8 517.15 1358.87 498.76"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1341.1 415.87 1335.39 398.28 1315.72 404.67 1312.43 409.46 1313.27 412.05 1276.37 424.04 1277.54 427.66 1314.5 415.84 1315.79 419.81 1321.44 422.26 1318.31 427.57 1319.6 431.53 1282.76 443.69 1283.93 447.32 1320.83 435.33 1321.67 437.91 1327.15 439.85 1346.82 433.46 1341.1 415.87"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1306.5 338.49 1297.25 322.47 1279.34 332.81 1277.12 338.18 1278.48 340.53 1244.87 359.94 1246.78 363.23 1280.47 343.99 1282.56 347.6 1288.59 348.83 1286.64 354.67 1288.72 358.28 1255.21 377.84 1257.11 381.13 1290.71 361.73 1292.08 364.09 1297.84 364.85 1315.74 354.51 1306.5 338.49"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1256.56 269.99 1244.18 256.25 1228.82 270.09 1227.76 275.8 1229.58 277.82 1200.74 303.78 1203.29 306.61 1232.24 280.78 1235.03 283.88 1241.19 283.83 1240.49 289.95 1243.29 293.05 1214.57 319.14 1217.12 321.97 1245.95 296.01 1247.77 298.03 1253.57 297.57 1268.93 283.74 1256.56 269.99"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1193.47 213.38 1178.51 202.51 1166.35 219.24 1166.5 225.04 1168.7 226.64 1145.89 258.03 1148.98 260.27 1171.93 228.99 1175.3 231.44 1181.31 230.11 1181.9 236.23 1185.28 238.69 1162.62 270.18 1165.7 272.42 1188.51 241.03 1190.71 242.63 1196.28 240.98 1208.43 224.25 1193.47 213.38"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1119.99 171.12 1103.09 163.59 1094.68 182.48 1096.04 188.13 1098.52 189.24 1082.74 224.69 1086.22 226.24 1102.16 190.86 1105.97 192.56 1111.58 190.01 1113.43 195.88 1117.24 197.57 1101.62 233.09 1105.1 234.64 1120.88 199.2 1123.37 200.3 1128.47 197.53 1136.88 178.64 1119.99 171.12"  style={{ fill: "#5a92a8" }}/>
                    <polygon points="1039.33 145.05 1021.23 141.21 1016.93 161.44 1019.43 166.68 1022.1 167.25 1014.03 205.2 1017.75 205.99 1026 168.07 1030.08 168.94 1035.03 165.28 1038.06 170.64 1042.14 171.51 1034.25 209.5 1037.97 210.29 1046.04 172.34 1048.7 172.9 1053.12 169.13 1057.41 148.9 1039.33 145.05"  style={{ fill: "#5a92a8" }}/>
                    <rect x="471.28" y="60" width="0.5" height="0.9"  style={{ fill: "url(#radial-gradient-6)" }}/>
                    <rect x="471.28" y="1026.14" width="0.5" height="0.9"  style={{ fill: "url(#radial-gradient-7)" }}/>
                    <rect x="1437.82" y="60" width="0.5" height="0.9"  style={{ fill: "url(#radial-gradient-8)" }}/>
                    <rect x="1437.82" y="1026.14" width="0.5" height="0.9"  style={{ fill: "url(#radial-gradient-9)" }}/>
                </g>
                <g id="Part06" className="part02">
                    <path d="M955.68,179.53c-200.08,0-362.28,162.2-362.28,362.28S755.6,904.09,955.68,904.09,1318,741.89,1318,541.81,1155.76,179.53,955.68,179.53Zm0,656.29c-162.38,0-294-131.63-294-294s131.63-294,294-294,294,131.63,294,294S1118.06,835.82,955.68,835.82Z" style={{ fill: "url(#radial-gradient-73)" }}/>
                    <path d="M955.68,224.41c-175.3,0-317.4,142.11-317.4,317.4s142.1,317.4,317.4,317.4,317.4-142.1,317.4-317.4S1131,224.41,955.68,224.41Zm0,617.3c-165.63,0-299.9-134.27-299.9-299.9s134.27-299.89,299.9-299.89,299.89,134.26,299.89,299.89S1121.31,841.71,955.68,841.71Z" style={{ fill: "url(#radial-gradient-74)" }}/>
                    <rect x="937.06" y="246.88" width="4.93" height="4.93" style={{ fill: "#486373" }}/>
                    <polygon points="969.7 250.8 969.7 239.59 941.66 239.59 941.66 250.8 945.87 250.8 947.69 260.51 947.69 311.44 948.91 311.44 948.91 261.73 954.84 261.73 956.52 261.73 962.44 261.73 962.44 311.44 963.67 311.44 963.67 260.51 965.49 250.8 969.7 250.8" style={{ fill: "#2c475b" }}/>
                    <polygon points="956.52 250.52 954.84 250.52 947.92 250.52 950.37 259.56 954.84 259.56 956.52 259.56 960.99 259.56 963.44 250.52 956.52 250.52" style={{ fill: "#486373" }}/>
                    <rect x="969.37" y="246.88" width="4.93" height="4.93" transform="translate(1943.67 498.69) rotate(-180)" style={{ fill: "#486373" }}/>
                    <rect x="950.87" y="239.59" width="9.62" height="7.29" style={{ fill: "#1e2b33" }}/>
                    <rect x="876.36" y="256.72" width="4.93" height="4.93" transform="translate(-34.68 188.38) rotate(-12)" style={{ fill: "#486373" }}/>
                    <polygon points="908.64 254.32 906.31 243.36 878.88 249.19 881.21 260.15 885.33 259.28 889.13 268.4 899.72 318.22 900.92 317.97 890.58 269.34 896.38 268.11 898.02 267.75 903.82 266.52 914.15 315.16 915.35 314.9 904.76 265.08 904.52 255.2 908.64 254.32" style={{ fill: "#2c475b" }}/>
                    <polygon points="895.69 256.79 894.05 257.14 887.27 258.58 891.55 266.92 895.92 265.99 897.57 265.64 901.95 264.71 902.46 255.35 895.69 256.79" style={{ fill: "#486373" }}/>
                    <rect x="907.96" y="250" width="4.93" height="4.93" transform="translate(1853.45 310.12) rotate(168)" style={{ fill: "#486373" }}/>
                    <rect x="888.54" y="246.2" width="9.62" height="7.29" transform="translate(-32.42 191.2) rotate(-12)" style={{ fill: "#1e2b33" }}/>
                    <rect x="819.02" y="278.96" width="4.93" height="4.93" transform="translate(-43.44 358.46) rotate(-24)" style={{ fill: "#486373" }}/>
                    <polygon points="849.64 270.47 845.09 260.23 819.48 271.64 824.03 281.88 827.88 280.16 833.49 288.3 854.21 334.83 855.33 334.33 835.1 288.91 840.52 286.5 842.05 285.81 847.46 283.41 867.69 328.83 868.8 328.33 848.09 281.8 845.8 272.19 849.64 270.47" style={{ fill: "#2c475b" }}/>
                    <polygon points="837.49 275.58 835.96 276.26 829.63 279.08 835.55 286.34 839.63 284.52 841.17 283.84 845.26 282.02 843.82 272.76 837.49 275.58" style={{ fill: "#486373" }}/>
                    <rect x="848.55" y="265.81" width="4.93" height="4.93" transform="translate(1737.56 167.22) rotate(156)" style={{ fill: "#486373" }}/>
                    <rect x="828.95" y="265.62" width="9.62" height="7.29" transform="translate(-37.44 362.4) rotate(-24)" style={{ fill: "#1e2b33" }}/>
                    <rect x="767.57" y="312.63" width="4.93" height="4.93" transform="translate(-38.14 512.79) rotate(-36)" style={{ fill: "#486373" }}/>
                    <polygon points="795.3 298.53 788.71 289.46 766.03 305.94 772.62 315.01 776.02 312.53 783.21 319.33 813.14 360.53 814.13 359.81 784.91 319.59 789.7 316.11 791.06 315.12 795.86 311.63 825.08 351.86 826.07 351.14 796.13 309.94 791.89 301.01 795.3 298.53" style={{ fill: "#2c475b" }}/>
                    <polygon points="784.47 306.05 783.12 307.04 777.51 311.11 784.81 316.98 788.43 314.35 789.79 313.37 793.41 310.74 790.07 301.98 784.47 306.05" style={{ fill: "#486373" }}/>
                    <rect x="793.71" y="293.63" width="4.93" height="4.93" transform="translate(1614.34 67.67) rotate(144)" style={{ fill: "#486373" }}/>
                    <rect x="774.7" y="297.01" width="9.62" height="7.29" transform="translate(-27.85 515.61) rotate(-36)" style={{ fill: "#1e2b33" }}/>
                    <rect x="724.24" y="356.26" width="4.93" height="4.93" transform="translate(-26.14 658.74) rotate(-48)" style={{ fill: "#486373" }}/>
                    <polygon points="747.97 337.27 739.64 329.77 720.89 350.61 729.22 358.11 732.03 354.98 740.47 360.13 778.32 394.21 779.14 393.3 742.19 360.03 746.15 355.63 747.28 354.38 751.24 349.98 788.19 383.25 789.01 382.34 751.16 348.26 745.15 340.4 747.97 337.27" style={{ fill: "#2c475b" }}/>
                    <polygon points="738.95 346.88 737.83 348.13 733.19 353.27 741.55 357.5 744.54 354.18 745.67 352.93 748.66 349.61 743.58 341.74 738.95 346.88" style={{ fill: "#486373" }}/>
                    <rect x="745.86" y="332.25" width="4.93" height="4.93" transform="translate(1497.8 2.57) rotate(132)" style={{ fill: "#486373" }}/>
                    <rect x="728.16" y="338.99" width="9.62" height="7.29" transform="translate(-12.11 658.07) rotate(-48)" style={{ fill: "#1e2b33" }}/>
                    <rect x="690.93" y="407.96" width="4.93" height="4.93" transform="matrix(0.5, -0.87, 0.87, 0.5, -8.74, 805.71)" style={{ fill: "#486373" }}/>
                    <polygon points="709.74 385.01 700.03 379.41 686.01 403.69 695.72 409.29 697.83 405.64 707.15 408.93 751.26 434.39 751.87 433.33 708.81 408.48 711.77 403.34 712.62 401.89 715.58 396.76 758.63 421.62 759.25 420.56 715.14 395.09 707.63 388.66 709.74 385.01" style={{ fill: "#2c475b" }}/>
                    <polygon points="702.91 396.29 702.07 397.74 698.61 403.74 707.66 406.13 709.9 402.26 710.74 400.81 712.98 396.93 706.37 390.29 702.91 396.29" style={{ fill: "#486373" }}/>
                    <rect x="707.09" y="379.97" width="4.93" height="4.93" transform="matrix(-0.5, 0.87, -0.87, -0.5, 1395.53, -40.84)" style={{ fill: "#486373" }}/>
                    <rect x="691.37" y="389.72" width="9.62" height="7.29" transform="translate(7.42 799.6) rotate(-60)" style={{ fill: "#1e2b33" }}/>
                    <rect x="669.1" y="465.44" width="4.93" height="4.93" transform="translate(19.03 962.01) rotate(-72)" style={{ fill: "#486373" }}/>
                    <polygon points="682.26 439.66 671.61 436.19 662.94 462.86 673.6 466.32 674.9 462.31 684.71 463.59 733.14 479.33 733.52 478.16 686.24 462.8 688.07 457.16 688.59 455.56 690.42 449.93 737.7 465.3 738.08 464.13 689.64 448.39 680.96 443.66 682.26 439.66" style={{ fill: "#2c475b" }}/>
                    <polygon points="677.93 452.1 677.41 453.7 675.27 460.28 684.62 460.75 686.01 456.49 686.53 454.9 687.91 450.64 680.07 445.52 677.93 452.1" style={{ fill: "#486373" }}/>
                    <rect x="679.08" y="434.71" width="4.93" height="4.93" transform="translate(1307.93 -75.92) rotate(108)" style={{ fill: "#486373" }}/>
                    <rect x="665.93" y="447" width="9.62" height="7.29" transform="translate(34.88 949.31) rotate(-72)" style={{ fill: "#1e2b33" }}/>
                    <rect x="659.69" y="526.21" width="4.93" height="4.93" transform="translate(67.16 1131.94) rotate(-84)" style={{ fill: "#486373" }}/>
                    <polygon points="666.75 498.82 655.61 497.65 652.67 525.53 663.82 526.7 664.26 522.51 674.11 521.72 724.77 527.04 724.89 525.83 675.45 520.63 676.07 514.74 676.24 513.07 676.86 507.17 726.31 512.37 726.44 511.15 675.78 505.83 666.31 503.01 666.75 498.82" style={{ fill: "#2c475b" }}/>
                    <polygon points="665.1 511.89 664.92 513.57 664.2 520.45 673.45 518.96 673.91 514.51 674.09 512.84 674.56 508.39 665.82 505.01 665.1 511.89" style={{ fill: "#486373" }}/>
                    <rect x="663.07" y="494.07" width="4.93" height="4.93" transform="translate(1228.92 -113.45) rotate(96)" style={{ fill: "#486373" }}/>
                    <rect x="652.95" y="508.32" width="9.62" height="7.29" transform="translate(79.85 1112.62) rotate(-84)" style={{ fill: "#1e2b33" }}/>
                    <rect x="663.13" y="587.61" width="4.93" height="4.93" transform="translate(148.32 1313.7) rotate(-96)" style={{ fill: "#486373" }}/>
                    <polygon points="663.88 559.91 652.73 561.08 655.66 588.97 666.81 587.79 666.37 583.6 675.84 580.78 726.49 575.46 726.37 574.24 676.92 579.44 676.3 573.55 676.12 571.88 675.5 565.98 724.95 560.79 724.82 559.57 674.17 564.89 664.32 564.1 663.88 559.91" style={{ fill: "#2c475b" }}/>
                    <polygon points="664.98 573.05 665.15 574.72 665.88 581.6 674.61 578.22 674.14 573.77 673.97 572.1 673.5 567.65 664.25 566.16 664.98 573.05" style={{ fill: "#486373" }}/>
                    <rect x="659.75" y="555.47" width="4.93" height="4.93" transform="translate(1147.87 -158.97) rotate(84)" style={{ fill: "#486373" }}/>
                    <rect x="653.01" y="571" width="9.62" height="7.29" transform="translate(155.09 1288.93) rotate(-96)" style={{ fill: "#1e2b33" }}/>
                    <rect x="679.25" y="646.95" width="4.93" height="4.93" transform="translate(274.74 1498.44) rotate(-108)" style={{ fill: "#486373" }}/>
                    <polygon points="673.77 620.27 663.11 623.73 671.77 650.39 682.43 646.93 681.13 642.93 689.81 638.2 738.25 622.46 737.87 621.29 690.59 636.66 688.75 631.02 688.24 629.42 686.4 623.79 733.69 608.42 733.31 607.26 684.87 623 675.07 624.27 673.77 620.27" style={{ fill: "#2c475b" }}/>
                    <polygon points="677.58 632.89 678.1 634.49 680.23 641.07 688.08 635.95 686.69 631.69 686.17 630.09 684.79 625.84 675.44 626.3 677.58 632.89" style={{ fill: "#486373" }}/>
                    <rect x="669.26" y="616.22" width="4.93" height="4.93" transform="translate(1052.55 -211.35) rotate(72)" style={{ fill: "#486373" }}/>
                    <rect x="666.1" y="632.29" width="9.62" height="7.29" transform="matrix(-0.31, -0.95, 0.95, -0.31, 273.42, 1470.52)" style={{ fill: "#1e2b33" }}/>
                    <rect x="707.36" y="701.64" width="4.93" height="4.93" transform="translate(454.96 1670.89) rotate(-120)" style={{ fill: "#486373" }}/>
                    <polygon points="695.99 677.25 686.29 682.85 700.3 707.13 710.01 701.53 707.9 697.88 715.41 691.45 759.52 665.98 758.91 664.92 715.85 689.78 712.89 684.65 712.05 683.2 709.08 678.07 752.14 653.21 751.53 652.15 707.42 677.61 698.1 680.9 695.99 677.25" style={{ fill: "#2c475b" }}/>
                    <polygon points="702.34 688.8 703.18 690.26 706.64 696.25 713.25 689.61 711.01 685.74 710.17 684.28 707.93 680.41 698.88 682.81 702.34 688.8" style={{ fill: "#486373" }}/>
                    <rect x="691.2" y="673.66" width="4.93" height="4.93" transform="translate(932.37 -262.67) rotate(60)" style={{ fill: "#486373" }}/>
                    <rect x="691.64" y="689.52" width="9.62" height="7.29" transform="translate(444.38 1642.9) rotate(-120)" style={{ fill: "#1e2b33" }}/>
                    <rect x="746.23" y="749.3" width="4.93" height="4.93" transform="translate(691 1811.17) rotate(-132)" style={{ fill: "#486373" }}/>
                    <polygon points="729.58 728.37 721.25 735.87 740.01 756.7 748.34 749.2 745.52 746.07 751.52 738.22 789.37 704.14 788.55 703.23 751.61 736.5 747.64 732.09 746.52 730.85 742.55 726.44 779.5 693.17 778.68 692.26 740.83 726.34 732.4 731.5 729.58 728.37" style={{ fill: "#2c475b" }}/>
                    <polygon points="738.19 738.34 739.31 739.59 743.95 744.74 749.03 736.87 746.03 733.54 744.91 732.29 741.91 728.97 733.56 733.2 738.19 738.34" style={{ fill: "#486373" }}/>
                    <rect x="724.6" y="725.28" width="4.93" height="4.93" transform="translate(781.39 -299.53) rotate(48)" style={{ fill: "#486373" }}/>
                    <rect x="728.53" y="740.2" width="9.62" height="7.29" transform="translate(671.26 1786.55) rotate(-132)" style={{ fill: "#1e2b33" }}/>
                    <rect x="794.15" y="787.83" width="4.93" height="4.93" transform="translate(976.57 1897.89) rotate(-144)" style={{ fill: "#486373" }}/>
                    <polygon points="773.06 771.38 766.47 780.45 789.15 796.93 795.74 787.86 792.33 785.38 796.57 776.46 826.51 735.25 825.52 734.53 796.29 774.75 791.5 771.27 790.14 770.28 785.35 766.8 814.57 726.58 813.58 725.86 783.65 767.06 776.47 773.86 773.06 771.38" style={{ fill: "#2c475b" }}/>
                    <polygon points="783.55 779.35 784.91 780.34 790.51 784.41 793.85 775.65 790.23 773.02 788.87 772.04 785.25 769.41 777.96 775.28 783.55 779.35" style={{ fill: "#486373" }}/>
                    <rect x="768.01" y="768.83" width="4.93" height="4.93" transform="translate(600.5 -305.57) rotate(36)" style={{ fill: "#486373" }}/>
                    <rect x="775.14" y="782.09" width="9.62" height="7.29" transform="translate(949.11 1879.86) rotate(-144)" style={{ fill: "#1e2b33" }}/>
                    <rect x="849.04" y="815.55" width="4.93" height="4.93" transform="translate(1296.68 1911.65) rotate(-156)" style={{ fill: "#486373" }}/>
                    <polygon points="824.53 804.42 819.97 814.65 845.58 826.06 850.14 815.82 846.29 814.11 848.59 804.49 869.3 757.96 868.18 757.47 847.96 802.89 842.55 800.48 841.01 799.79 835.6 797.38 855.82 751.96 854.71 751.47 833.99 797.99 828.38 806.13 824.53 804.42" style={{ fill: "#2c475b" }}/>
                    <polygon points="836.46 810.03 837.99 810.71 844.31 813.53 845.75 804.27 841.67 802.46 840.13 801.77 836.04 799.95 830.13 807.22 836.46 810.03" style={{ fill: "#486373" }}/>
                    <rect x="819.52" y="802.41" width="4.93" height="4.93" transform="translate(398.44 -264.75) rotate(24)" style={{ fill: "#486373" }}/>
                    <rect x="829.45" y="813.38" width="9.62" height="7.29" transform="translate(1264.08 1902.74) rotate(-156)" style={{ fill: "#1e2b33" }}/>
                    <rect x="908.5" y="831.26" width="4.93" height="4.93" transform="translate(1628.67 1838.62) rotate(-168)" style={{ fill: "#486373" }}/>
                    <polygon points="881.75 826.03 879.42 836.99 906.84 842.82 909.17 831.86 905.05 830.98 905.29 821.1 915.88 771.28 914.68 771.03 904.35 819.66 898.55 818.43 896.91 818.08 891.11 816.85 901.45 768.22 900.25 767.96 889.66 817.78 885.87 826.9 881.75 826.03" style={{ fill: "#2c475b" }}/>
                    <polygon points="894.58 829.04 896.22 829.39 902.99 830.83 902.48 821.48 898.1 820.55 896.46 820.2 892.08 819.27 887.81 827.6 894.58 829.04" style={{ fill: "#486373" }}/>
                    <rect x="876.89" y="824.54" width="4.93" height="4.93" transform="translate(191.16 -164.76) rotate(12)" style={{ fill: "#486373" }}/>
                    <rect x="889.07" y="832.69" width="9.62" height="7.29" transform="translate(1594.35 1840.25) rotate(-168)" style={{ fill: "#1e2b33" }}/>
                    <rect x="969.92" y="834.26" width="4.93" height="4.93" transform="translate(1944.76 1673.45) rotate(-180)" style={{ fill: "#486373" }}/>
                    <polygon points="942.21 835.27 942.21 846.48 970.24 846.48 970.24 835.27 966.03 835.27 964.21 825.56 964.21 774.63 962.99 774.63 962.99 824.34 957.06 824.34 955.38 824.34 949.46 824.34 949.46 774.63 948.24 774.63 948.24 825.56 946.42 835.27 942.21 835.27" style={{ fill: "#2c475b" }}/>
                    <polygon points="955.38 835.55 957.06 835.55 963.99 835.55 961.54 826.51 957.06 826.51 955.38 826.51 950.91 826.51 948.46 835.55 955.38 835.55" style={{ fill: "#486373" }}/>
                    <rect x="937.6" y="834.26" width="4.93" height="4.93" style={{ fill: "#486373" }}/>
                    <rect x="951.41" y="839.19" width="9.62" height="7.29" transform="translate(1912.45 1685.67) rotate(-180)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1030.62" y="824.43" width="4.93" height="4.93" transform="translate(2215.51 1420.92) rotate(168)" style={{ fill: "#486373" }}/>
                    <polygon points="1003.27 831.75 1005.6 842.71 1033.02 836.88 1030.69 825.92 1026.57 826.79 1022.77 817.66 1012.18 767.85 1010.99 768.1 1021.32 816.73 1015.53 817.97 1013.88 818.32 1008.09 819.55 997.75 770.91 996.55 771.17 1007.14 820.99 1007.39 830.87 1003.27 831.75" style={{ fill: "#2c475b" }}/>
                    <polygon points="1016.21 829.28 1017.86 828.93 1024.63 827.49 1020.35 819.15 1015.98 820.08 1014.33 820.43 1009.96 821.36 1009.44 830.72 1016.21 829.28" style={{ fill: "#486373" }}/>
                    <rect x="999.01" y="831.14" width="4.93" height="4.93" transform="translate(-151.43 226.43) rotate(-12)" style={{ fill: "#486373" }}/>
                    <rect x="1013.74" y="832.58" width="9.62" height="7.29" transform="translate(2188.7 1442.41) rotate(168)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1087.95" y="802.19" width="4.93" height="4.93" transform="translate(2413.84 1096.22) rotate(156)" style={{ fill: "#486373" }}/>
                    <polygon points="1062.26 815.6 1066.82 825.84 1092.43 814.43 1087.87 804.2 1084.02 805.91 1078.41 797.77 1057.69 751.24 1056.58 751.74 1076.8 797.16 1071.39 799.57 1069.85 800.25 1064.44 802.66 1044.22 757.24 1043.1 757.74 1063.81 804.27 1066.11 813.88 1062.26 815.6" style={{ fill: "#2c475b" }}/>
                    <polygon points="1074.41 810.49 1075.94 809.81 1082.27 806.99 1076.35 799.73 1072.27 801.55 1070.73 802.23 1066.64 804.05 1068.09 813.31 1074.41 810.49" style={{ fill: "#486373" }}/>
                    <rect x="1058.43" y="815.33" width="4.93" height="4.93" transform="translate(-240.91 502.21) rotate(-24)" style={{ fill: "#486373" }}/>
                    <rect x="1073.33" y="813.16" width="9.62" height="7.29" transform="translate(2395.29 1124.47) rotate(156)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1139.4" y="768.51" width="4.93" height="4.93" transform="translate(2518.83 723.54) rotate(144)" style={{ fill: "#486373" }}/>
                    <polygon points="1116.6 787.54 1123.19 796.61 1145.87 780.13 1139.29 771.06 1135.88 773.54 1128.7 766.74 1098.76 725.54 1097.77 726.26 1126.99 766.48 1122.2 769.97 1120.84 770.95 1116.05 774.43 1086.82 734.21 1085.83 734.93 1115.77 776.13 1120.01 785.06 1116.6 787.54" style={{ fill: "#2c475b" }}/>
                    <polygon points="1127.43 780.02 1128.79 779.03 1134.39 774.96 1127.09 769.09 1123.47 771.72 1122.11 772.71 1118.49 775.34 1121.83 784.09 1127.43 780.02" style={{ fill: "#486373" }}/>
                    <rect x="1113.26" y="787.51" width="4.93" height="4.93" transform="translate(-251.25 806.68) rotate(-36)" style={{ fill: "#486373" }}/>
                    <rect x="1127.58" y="781.77" width="9.62" height="7.29" transform="translate(2510.17 755.23) rotate(144)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1182.73" y="724.88" width="4.93" height="4.93" transform="translate(2518.77 333.25) rotate(132)" style={{ fill: "#486373" }}/>
                    <polygon points="1163.93 748.79 1172.26 756.29 1191.02 735.46 1182.69 727.96 1179.87 731.09 1171.43 725.94 1133.58 691.86 1132.77 692.77 1169.71 726.04 1165.75 730.44 1164.62 731.69 1160.66 736.09 1123.71 702.82 1122.89 703.73 1160.74 737.81 1166.75 745.66 1163.93 748.79" style={{ fill: "#2c475b" }}/>
                    <polygon points="1172.95 739.19 1174.08 737.94 1178.71 732.8 1170.35 728.57 1167.36 731.89 1166.23 733.14 1163.24 736.46 1168.32 744.33 1172.95 739.19" style={{ fill: "#486373" }}/>
                    <rect x="1161.11" y="748.89" width="4.93" height="4.93" transform="translate(-173.38 1113.31) rotate(-48)" style={{ fill: "#486373" }}/>
                    <rect x="1174.12" y="739.79" width="9.62" height="7.29" transform="translate(2520.27 364.78) rotate(132)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1216.04" y="673.19" width="4.93" height="4.93" transform="matrix(-0.5, 0.87, -0.87, -0.5, 2412.89, -41.78)" style={{ fill: "#486373" }}/>
                    <polygon points="1202.16 701.06 1211.87 706.66 1225.89 682.38 1216.18 676.78 1214.08 680.43 1204.75 677.14 1160.64 651.68 1160.03 652.74 1203.09 677.6 1200.13 682.73 1199.29 684.18 1196.33 689.31 1153.27 664.45 1152.66 665.51 1196.76 690.98 1204.27 697.41 1202.16 701.06" style={{ fill: "#2c475b" }}/>
                    <polygon points="1208.99 689.78 1209.83 688.33 1213.3 682.34 1204.24 679.93 1202 683.81 1201.16 685.26 1198.93 689.14 1205.53 695.78 1208.99 689.78" style={{ fill: "#486373" }}/>
                    <rect x="1199.89" y="701.17" width="4.93" height="4.93" transform="translate(-8.19 1393.08) rotate(-60)" style={{ fill: "#486373" }}/>
                    <rect x="1210.91" y="689.05" width="9.62" height="7.29" transform="matrix(-0.5, 0.87, -0.87, -0.5, 2423.48, -13.8)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1237.88" y="615.7" width="4.93" height="4.93" transform="translate(2211.54 -370.45) rotate(108)" style={{ fill: "#486373" }}/>
                    <polygon points="1229.64 646.41 1240.3 649.88 1248.96 623.22 1238.3 619.75 1237 623.76 1227.2 622.48 1178.76 606.74 1178.38 607.91 1225.67 623.27 1223.84 628.91 1223.32 630.5 1221.48 636.14 1174.2 620.77 1173.82 621.94 1222.26 637.68 1230.94 642.41 1229.64 646.41" style={{ fill: "#2c475b" }}/>
                    <polygon points="1233.97 633.97 1234.49 632.37 1236.63 625.79 1227.28 625.32 1225.9 629.58 1225.38 631.17 1223.99 635.43 1231.84 640.55 1233.97 633.97" style={{ fill: "#486373" }}/>
                    <rect x="1227.89" y="646.43" width="4.93" height="4.93" transform="translate(233.02 1618.52) rotate(-72)" style={{ fill: "#486373" }}/>
                    <rect x="1236.35" y="631.77" width="9.62" height="7.29" transform="translate(2229.02 -348.64) rotate(108)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1247.28" y="554.93" width="4.93" height="4.93" transform="translate(1934.72 -627.24) rotate(96)" style={{ fill: "#486373" }}/>
                    <polygon points="1245.15 587.25 1256.3 588.42 1259.23 560.54 1248.08 559.37 1247.64 563.56 1237.79 564.35 1187.14 559.03 1187.01 560.25 1236.45 565.44 1235.84 571.33 1235.66 573 1235.04 578.9 1185.59 573.7 1185.47 574.92 1236.12 580.24 1245.59 583.06 1245.15 587.25" style={{ fill: "#2c475b" }}/>
                    <polygon points="1246.81 574.18 1246.98 572.5 1247.7 565.62 1238.46 567.11 1237.99 571.56 1237.81 573.23 1237.35 577.68 1246.08 581.06 1246.81 574.18" style={{ fill: "#486373" }}/>
                    <rect x="1243.91" y="587.07" width="4.93" height="4.93" transform="translate(529.79 1767.45) rotate(-84)" style={{ fill: "#486373" }}/>
                    <rect x="1249.32" y="570.46" width="9.62" height="7.29" transform="translate(1956.19 -613.15) rotate(96)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1243.85" y="493.53" width="4.93" height="4.93" transform="translate(1609.32 -795.33) rotate(84)" style={{ fill: "#486373" }}/>
                    <polygon points="1248.03 526.16 1259.17 524.99 1256.24 497.11 1245.1 498.28 1245.54 502.47 1236.06 505.29 1185.41 510.61 1185.54 511.83 1234.98 506.63 1235.6 512.52 1235.78 514.2 1236.4 520.09 1186.95 525.28 1187.08 526.5 1237.73 521.18 1247.59 521.97 1248.03 526.16" style={{ fill: "#2c475b" }}/>
                    <polygon points="1246.92 513.02 1246.75 511.35 1246.03 504.47 1237.29 507.85 1237.76 512.3 1237.93 513.97 1238.4 518.42 1247.65 519.91 1246.92 513.02" style={{ fill: "#486373" }}/>
                    <rect x="1247.23" y="525.67" width="4.93" height="4.93" transform="translate(855.08 1826.18) rotate(-96)" style={{ fill: "#486373" }}/>
                    <rect x="1249.27" y="507.78" width="9.62" height="7.29" transform="translate(1631.62 -789.24) rotate(84)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1227.72" y="434.19" width="4.93" height="4.93" transform="translate(1265.32 -868.26) rotate(72)" style={{ fill: "#486373" }}/>
                    <polygon points="1238.13 465.8 1248.79 462.34 1240.13 435.68 1229.47 439.14 1230.77 443.14 1222.09 447.88 1173.65 463.61 1174.03 464.78 1221.32 449.41 1223.15 455.05 1223.67 456.65 1225.5 462.28 1178.21 477.64 1178.59 478.81 1227.03 463.07 1236.83 461.8 1238.13 465.8" style={{ fill: "#2c475b" }}/>
                    <polygon points="1234.33 453.18 1233.81 451.58 1231.67 445 1223.83 450.12 1225.21 454.38 1225.73 455.98 1227.11 460.23 1236.46 459.77 1234.33 453.18" style={{ fill: "#486373" }}/>
                    <rect x="1237.71" y="464.92" width="4.93" height="4.93" transform="matrix(-0.31, -0.95, 0.95, -0.31, 1178.9, 1791.3)" style={{ fill: "#486373" }}/>
                    <rect x="1236.18" y="446.49" width="9.62" height="7.29" transform="translate(1285.61 -869.22) rotate(72)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1199.61" y="379.5" width="4.93" height="4.93" transform="translate(931.83 -850.05) rotate(60)" style={{ fill: "#486373" }}/>
                    <polygon points="1215.91 408.82 1225.62 403.22 1211.6 378.94 1201.89 384.54 1204 388.19 1196.49 394.62 1152.38 420.09 1153 421.15 1196.05 396.29 1199.02 401.42 1199.86 402.87 1202.82 408 1159.76 432.86 1160.37 433.92 1204.48 408.46 1213.8 405.17 1215.91 408.82" style={{ fill: "#2c475b" }}/>
                    <polygon points="1209.56 397.27 1208.72 395.81 1205.26 389.82 1198.65 396.46 1200.89 400.33 1201.73 401.79 1203.97 405.66 1213.02 403.26 1209.56 397.27" style={{ fill: "#486373" }}/>
                    <rect x="1215.77" y="407.48" width="4.93" height="4.93" transform="translate(1472.33 1669.94) rotate(-120)" style={{ fill: "#486373" }}/>
                    <rect x="1210.64" y="389.25" width="9.62" height="7.29" transform="translate(947.99 -856.16) rotate(60)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1160.75" y="331.85" width="4.93" height="4.93" transform="translate(633.31 -753.82) rotate(48)" style={{ fill: "#486373" }}/>
                    <polygon points="1182.32 357.7 1190.65 350.2 1171.89 329.37 1163.57 336.87 1166.38 340 1160.38 347.85 1122.53 381.93 1123.35 382.84 1160.3 349.57 1164.26 353.98 1165.38 355.23 1169.35 359.63 1132.4 392.9 1133.22 393.81 1171.07 359.73 1179.51 354.57 1182.32 357.7" style={{ fill: "#2c475b" }}/>
                    <polygon points="1173.71 347.73 1172.59 346.48 1167.96 341.33 1162.88 349.2 1165.87 352.53 1166.99 353.78 1169.99 357.1 1178.35 352.87 1173.71 347.73" style={{ fill: "#486373" }}/>
                    <rect x="1182.37" y="355.86" width="4.93" height="4.93" transform="translate(1711.36 1478.59) rotate(-132)" style={{ fill: "#486373" }}/>
                    <rect x="1173.75" y="338.58" width="9.62" height="7.29" transform="translate(644.28 -762.61) rotate(48)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1112.82" y="293.32" width="4.93" height="4.93" transform="matrix(0.81, 0.59, -0.59, 0.81, 386.86, -599.06)" style={{ fill: "#486373" }}/>
                    <polygon points="1138.85 314.69 1145.43 305.62 1122.75 289.14 1116.16 298.21 1119.57 300.69 1115.33 309.62 1085.39 350.82 1086.38 351.54 1115.61 311.31 1120.4 314.8 1121.76 315.79 1126.55 319.27 1097.33 359.49 1098.32 360.21 1128.26 319.01 1135.44 312.21 1138.85 314.69" style={{ fill: "#2c475b" }}/>
                    <polygon points="1128.35 306.72 1126.99 305.73 1121.39 301.66 1118.05 310.42 1121.67 313.05 1123.03 314.03 1126.65 316.66 1133.95 310.79 1128.35 306.72" style={{ fill: "#486373" }}/>
                    <rect x="1138.96" y="312.31" width="4.93" height="4.93" transform="translate(1879.84 1240.35) rotate(-144)" style={{ fill: "#486373" }}/>
                    <rect x="1127.14" y="296.69" width="9.62" height="7.29" transform="translate(392.71 -607.98) rotate(36)" style={{ fill: "#1e2b33" }}/>
                    <rect x="1057.93" y="265.59" width="4.93" height="4.93" transform="translate(200.7 -408.13) rotate(24)" style={{ fill: "#486373" }}/>
                    <polygon points="1087.37 281.65 1091.93 271.42 1066.32 260.01 1061.76 270.25 1065.61 271.96 1063.32 281.58 1042.6 328.11 1043.72 328.61 1063.94 283.18 1069.35 285.59 1070.89 286.28 1076.3 288.69 1056.08 334.11 1057.2 334.61 1077.91 288.08 1083.52 279.94 1087.37 281.65" style={{ fill: "#2c475b" }}/>
                    <polygon points="1075.45 276.04 1073.91 275.36 1067.59 272.54 1066.15 281.8 1070.23 283.62 1071.77 284.3 1075.86 286.12 1081.77 278.86 1075.45 276.04" style={{ fill: "#486373" }}/>
                    <rect x="1087.45" y="278.73" width="4.93" height="4.93" transform="translate(1971.23 981.4) rotate(-156)" style={{ fill: "#486373" }}/>
                    <rect x="1072.83" y="265.4" width="9.62" height="7.29" transform="translate(202.6 -415.06) rotate(24)" style={{ fill: "#1e2b33" }}/>
                    <rect x="998.48" y="249.88" width="4.93" height="4.93" transform="translate(74.34 -202.59) rotate(12)" style={{ fill: "#486373" }}/>
                    <polygon points="1030.16 260.04 1032.49 249.08 1005.06 243.25 1002.73 254.21 1006.85 255.09 1006.61 264.97 996.02 314.79 997.22 315.04 1007.56 266.41 1013.35 267.64 1015 267.99 1020.79 269.22 1010.45 317.86 1011.65 318.11 1022.24 268.29 1026.04 259.17 1030.16 260.04" style={{ fill: "#2c475b" }}/>
                    <polygon points="1017.33 257.03 1015.68 256.68 1008.91 255.24 1009.42 264.59 1013.8 265.52 1015.45 265.87 1019.82 266.8 1024.1 258.47 1017.33 257.03" style={{ fill: "#486373" }}/>
                    <rect x="1030.09" y="256.6" width="4.93" height="4.93" transform="translate(1988.67 727.15) rotate(-168)" style={{ fill: "#486373" }}/>
                    <rect x="1013.2" y="246.08" width="9.62" height="7.29" transform="translate(74.17 -206.2) rotate(12)" style={{ fill: "#1e2b33" }}/>
                    <path d="M955.68,179.53c-200.08,0-362.28,162.2-362.28,362.28S755.6,904.09,955.68,904.09,1318,741.89,1318,541.81,1155.76,179.53,955.68,179.53Zm0,716.4c-195.57,0-354.12-158.55-354.12-354.12S760.11,187.69,955.68,187.69,1309.8,346.24,1309.8,541.81,1151.25,895.93,955.68,895.93Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1252,380.05l3.86-2a341.45,341.45,0,0,0-20.44-32.82l-3.61,2.44A339.11,339.11,0,0,1,1252,380.05Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1213.42,323.88l3.45-2.67q-3.69-4.36-7.52-8.6l-3.36,2.78C1208.51,318.18,1211,321,1213.42,323.88Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1225.34,338.79l3.56-2.51q-2.26-3-4.59-6l-3.51,2.59Q1223.11,335.82,1225.34,338.79Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1264.33,405l4-1.77q-3.82-8.61-8.1-17l-3.88,2Q1260.56,396.51,1264.33,405Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1287.63,603.18l4.28.8a344,344,0,0,0,5.65-62.07h-4.36A338.81,338.81,0,0,1,1287.63,603.18Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M763.84,264.07l-2.24-3.74c-4,2.73-7.86,5.56-11.7,8.45l2.4,3.65Q758,268.13,763.84,264.07Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M637.24,654,633,655q2,5.6,4.11,11.1l4.21-1.2Q639.19,659.52,637.24,654Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M618.15,541.81c0-4.54.1-9.06.27-13.56l-4.33-.53q-.29,7-.29,14.09a344.73,344.73,0,0,0,4.11,53.13l4.36-.33A339.13,339.13,0,0,1,618.15,541.81Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M707.85,312.68,705,309.36A343.4,343.4,0,0,0,671.27,352l3.36,2.81A338.74,338.74,0,0,1,707.85,312.68Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M955.68,879.34q-4.44,0-8.85-.12l-.08,4.35c3,.08,5.94.12,8.93.12q5.85,0,11.64-.2l-.18-4.35Q961.43,879.34,955.68,879.34Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M733.18,288l-2.6-3.5q-2.52,2.21-5,4.45l2.67,3.45C729.89,290.92,731.53,289.46,733.18,288Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1244.09,717.24l3.72,2.26q6.09-10,11.5-20.42l-3.87-2Q1250.1,707.37,1244.09,717.24Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1162.33,808.69l2.69,3.42q11.06-8.57,21.37-18l-3-3.18Q1173.25,800.22,1162.33,808.69Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M722.55,297.73l-2.7-3.43q-4.73,4.5-9.28,9.18l2.84,3.33Q717.9,302.19,722.55,297.73Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M1199.8,308.73l3.33-2.82q-10.29-10.8-21.5-20.66l-3.07,3.1Q1189.63,298.07,1199.8,308.73Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M955.68,204.29a337.05,337.05,0,0,1,109.91,18.3l1.53-4.08A344.1,344.1,0,0,0,890.19,206.2l.7,4.3A339.8,339.8,0,0,1,955.68,204.29Z" style={{ fill: "#8ca4aa" }}/>
                    <path d="M832.41,227.51,831,223.37q-5.35,2.1-10.63,4.37l1.52,4.09Q827.14,229.58,832.41,227.51Z" style={{ fill: "#8ca4aa" }}/>
                    <rect x="471.28" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-6)" }}/>
                    <rect x="471.28" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-7)" }}/>
                    <rect x="1437.82" y="60" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-8)" }}/>
                    <rect x="1437.82" y="1026.14" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-9)" }}/>
                </g>
                <g id="Part07" className="part07">
                    <path d="M791.19,548.4q0-6.3.5-12.47a10.86,10.86,0,0,0-9.84-11.7L717,518.44a233.27,233.27,0,0,0-1.93,30c0,115.91,85.41,211.87,196.73,228.39L924.2,712.9a10.85,10.85,0,0,0-8.54-12.71A154.81,154.81,0,0,1,791.19,548.4Z" style={{ fill: "#bec5c7" }}/>
                    <path d="M755,579.34l-43.5,7c.36,2.25.75,4.48,1.17,6.71L756,584.8Q755.48,582.09,755,579.34Z" style={{ fill: "#2c475b" }}/>
                    <path d="M756.91,589.29l-43.08,9.32q.72,3.33,1.53,6.63l42.79-10.54Q757.49,592,756.91,589.29Z" style={{ fill: "#2c475b" }}/>
                    <path d="M753.69,569.3l-43.8,4.77q.36,3.39.82,6.76l43.65-6C754.11,573,753.89,571.15,753.69,569.3Z" style={{ fill: "#2c475b" }}/>
                    <path d="M752.8,539l-44-2.15c-.11,2.26-.18,4.53-.23,6.81l44.05.88C752.65,542.66,752.71,540.81,752.8,539Z" style={{ fill: "#2c475b" }}/>
                    <path d="M752.58,549.09l-44.06.16c0,2.28.05,4.55.12,6.81l44-1.42C752.62,552.8,752.58,551,752.58,549.09Z" style={{ fill: "#2c475b" }}/>
                    <path d="M752.87,559.21l-44,2.47c.13,2.27.28,4.53.47,6.79l43.91-3.73C753.1,562.91,753,561.06,752.87,559.21Z" style={{ fill: "#2c475b" }}/>
                    <path d="M753.55,528.88l-43.84-4.45q-.35,3.38-.58,6.78l43.94,3.19C753.21,532.55,753.36,530.71,753.55,528.88Z" style={{ fill: "#2c475b" }}/>
                    <path d="M867.91,725.38l-17.78,40.33c2.08.91,4.16,1.8,6.27,2.66L873,727.55Q870.44,726.5,867.91,725.38Z" style={{ fill: "#2c475b" }}/>
                    <path d="M906.42,737.73l-9,43.14c2.22.46,4.44.89,6.68,1.29l7.77-43.38C910,738.46,908.22,738.1,906.42,737.73Z" style={{ fill: "#2c475b" }}/>
                    <path d="M858.76,721.05l-19.87,39.34c2,1,4.07,2,6.12,3l18.73-39.89Q861.24,722.3,858.76,721.05Z" style={{ fill: "#2c475b" }}/>
                    <path d="M841.2,711l-23.87,37q2.86,1.85,5.77,3.61l22.8-37.71Q843.53,712.48,841.2,711Z" style={{ fill: "#2c475b" }}/>
                    <path d="M824.79,699.12l-27.61,34.34c1.77,1.43,3.56,2.82,5.37,4.19l26.61-35.12Q827,700.87,824.79,699.12Z" style={{ fill: "#2c475b" }}/>
                    <path d="M849.85,716.24,828,754.49q3,1.68,5.95,3.3l20.8-38.86Q852.26,717.63,849.85,716.24Z" style={{ fill: "#2c475b" }}/>
                    <path d="M832.84,705.26,807.07,741q2.76,2,5.57,3.91l24.74-36.47Q835.09,706.88,832.84,705.26Z" style={{ fill: "#2c475b" }}/>
                    <path d="M762.2,608.83,720.34,622.6q1.06,3.24,2.22,6.44l41.45-15C763.39,612.34,762.78,610.59,762.2,608.83Z" style={{ fill: "#2c475b" }}/>
                    <path d="M765.62,618.36l-41.09,15.95c.83,2.12,1.67,4.22,2.56,6.31l40.61-17.11C767,621.8,766.29,620.09,765.62,618.36Z" style={{ fill: "#2c475b" }}/>
                    <path d="M759.3,599.13l-42.53,11.56q.88,3.3,1.88,6.55l42.18-12.78Q760,601.82,759.3,599.13Z" style={{ fill: "#2c475b" }}/>
                    <path d="M896.56,735.41,885.31,778q3.29.86,6.6,1.64l10-42.92C900.14,736.32,898.34,735.88,896.56,735.41Z" style={{ fill: "#2c475b" }}/>
                    <path d="M877.28,729.23l-15.65,41.2c2.12.81,4.26,1.58,6.4,2.32l14.46-41.63Q879.87,730.21,877.28,729.23Z" style={{ fill: "#2c475b" }}/>
                    <path d="M886.84,732.57l-13.47,42q3.24,1,6.51,2l12.26-42.33C890.36,733.67,888.6,733.14,886.84,732.57Z" style={{ fill: "#2c475b" }}/>
                    <path d="M710.34,518.84l-3.19-.4-4.35,3.44,3.26,2.18,3.65.37,43.84,4.45c.15-1.53.32-3,.51-4.56Z" style={{ fill: "#17303f" }}/>
                    <path d="M709.13,531.21l-3.22-.23-4.17,3.66,3.38,2,3.67.18,44,2.15c.07-1.53.17-3.05.27-4.57Z" style={{ fill: "#17303f" }}/>
                    <path d="M752.61,544.51l-44.05-.88-3.23-.07-4,3.88,3.47,1.83,3.69,0,44.06-.16c0-.23,0-.46,0-.69C752.57,547.1,752.59,545.81,752.61,544.51Z" style={{ fill: "#17303f" }}/>
                    <path d="M752.67,554.64l-44,1.42-3.24.1-3.76,4.08,3.57,1.64,3.67-.2,44-2.47C752.79,557.69,752.72,556.17,752.67,554.64Z" style={{ fill: "#17303f" }}/>
                    <path d="M753.26,564.74l-43.91,3.73-3.21.27L702.6,573l3.64,1.45,3.65-.39,43.8-4.77C753.53,567.79,753.38,566.27,753.26,564.74Z" style={{ fill: "#17303f" }}/>
                    <path d="M754.36,574.81l-43.65,6-3.18.43-3.31,4.46,3.72,1.25,3.6-.58,43.5-7C754.79,577.84,754.57,576.32,754.36,574.81Z" style={{ fill: "#17303f" }}/>
                    <path d="M756,584.8l-43.28,8.3-3.13.6-3.07,4.62,3.77,1.06,3.55-.77,43.08-9.32C756.58,587.8,756.28,586.3,756,584.8Z" style={{ fill: "#17303f" }}/>
                    <path d="M758.15,594.7l-42.79,10.54-3.09.77-2.82,4.77,3.82.86,3.5-.95,42.53-11.56C758.9,597.66,758.52,596.18,758.15,594.7Z" style={{ fill: "#17303f" }}/>
                    <path d="M760.83,604.46l-42.18,12.78-3,.92L713,623.07l3.87.66,3.44-1.13,41.86-13.77C761.73,607.38,761.27,605.93,760.83,604.46Z" style={{ fill: "#17303f" }}/>
                    <path d="M764,614.07l-41.45,15-3,1.08-2.32,5,3.9.46,3.37-1.31,41.09-15.95C765.07,616.94,764.53,615.51,764,614.07Z" style={{ fill: "#17303f" }}/>
                    <path d="M767.7,623.51l-40.61,17.11-2.93,1.23-2,5.16,3.91.25,3.3-1.48,40.2-18.07Q768.59,625.61,767.7,623.51Z" style={{ fill: "#17303f" }}/>
                    <path d="M821.25,696.21l-28.41,33.68-2.08,2.46.52,5.53,3.6-1.55,2.3-2.87,27.61-34.34Q823,697.68,821.25,696.21Z" style={{ fill: "#17303f" }}/>
                    <path d="M829.16,702.53l-26.61,35.12-1.95,2.57.81,5.49,3.51-1.73,2.15-3,25.77-35.74C831.6,704.37,830.38,703.46,829.16,702.53Z" style={{ fill: "#17303f" }}/>
                    <path d="M837.38,708.44l-24.74,36.47-1.8,2.66,1.09,5.44,3.42-1.92,2-3.07,23.87-37C839.92,710.14,838.64,709.3,837.38,708.44Z" style={{ fill: "#17303f" }}/>
                    <path d="M845.9,713.92l-22.8,37.71-1.65,2.74,1.38,5.37,3.31-2.1,1.81-3.15,21.9-38.25C848.52,715.48,847.21,714.71,845.9,713.92Z" style={{ fill: "#17303f" }}/>
                    <path d="M854.7,718.93l-20.8,38.86-1.5,2.81,1.65,5.3,3.21-2.27,1.63-3.24,19.87-39.34C857.4,720.36,856,719.65,854.7,718.93Z" style={{ fill: "#17303f" }}/>
                    <path d="M863.74,723.48,845,763.37l-1.35,2.88,1.93,5.2,3.08-2.43,1.46-3.31,17.78-40.33Q865.81,724.45,863.74,723.48Z" style={{ fill: "#17303f" }}/>
                    <path d="M855.2,771.31l2.2,5.09,3-2.59,1.28-3.38c-1.75-.67-3.5-1.35-5.23-2.06Z" style={{ fill: "#17303f" }}/>
                    <path d="M873,727.55,856.4,768.37c1.73.71,3.48,1.39,5.23,2.06l15.65-41.2Q875.14,728.42,873,727.55Z" style={{ fill: "#17303f" }}/>
                    <path d="M882.49,731.12,868,772.75l-1,3,2.47,5,2.8-2.74,1.11-3.44,13.47-42C885.38,732.1,883.93,731.62,882.49,731.12Z" style={{ fill: "#17303f" }}/>
                    <path d="M892.14,734.19l-12.26,42.33-.88,3.05,2.72,4.84,2.66-2.89.93-3.5,11.25-42.61C895.08,735,893.61,734.61,892.14,734.19Z" style={{ fill: "#17303f" }}/>
                    <path d="M901.94,736.74l-10,42.92-.72,3.1,3,4.68,2.5-3,.75-3.56,9-43.14C904.92,737.42,903.43,737.09,901.94,736.74Z" style={{ fill: "#17303f" }}/>
                    <path d="M911.86,738.78l-7.77,43.38-.56,3.14,3.21,4.53,2.35-3.15.55-3.6,6.74-43.55C914.87,739.3,913.36,739.05,911.86,738.78Z" style={{ fill: "#17303f" }}/>
                    <polygon points="786.54 715.98 793.13 718.18 796.14 691.96 820.51 683 812.13 668.63 781.16 679.38 776.08 672.58 795.15 645.91 783.73 633.8 768.25 654.65 742.24 650.11 742.49 657.05 752.82 662.54 752.98 665.76 733.06 671.11 742.73 677.52 751.64 690.8 756.76 697.65 766.98 709.96 770.39 721.05 781.16 703.46 784.2 704.52 786.54 715.98" style={{ fill: "#2c475b" }}/>
                    <polygon points="755.47 734.51 764.49 732.47 787.54 749.64 792.71 738.91 768.92 719.54 768.76 708.83 789.4 693.39 785.69 688.42 764.76 703.96 756.97 693.38 756.98 693.38 756.77 693.1 756.57 692.83 756.57 692.83 748.64 682.35 769.51 666.72 765.8 661.75 745.12 677.13 734.9 673.92 723.11 645.6 711.36 647.5 721.24 674.49 716.71 682.55 705.74 678.02 693.26 682.72 701.84 696.18 692.26 709.3 696.23 715.38 708.47 706 711.8 710.57 717.43 705.65 723.99 714.59 723.96 714.61 725.39 716.51 726.8 718.43 726.83 718.4 733.53 727.23 727.22 731.23 730.64 735.73 718.16 744.78 722.86 750.32 738.16 744.88 748.62 756.94 756.68 746.32 755.47 734.51" style={{ fill: "#527281" }}/>
                    <polygon points="718.38 683.48 722.64 675.55 735.52 681.89 741.21 689.52 731.62 696.68 726.25 689.49 718.38 683.48" style={{ fill: "#2c475b" }}/>
                    <polygon points="726.51 694.38 724.32 691.44 718.04 687.13 704.53 697.21 711.73 700.49 714.09 703.65 726.51 694.38" style={{ fill: "#2c475b" }}/>
                    <polygon points="755.05 732.64 763.87 730.82 761.46 716.67 755.77 709.04 746.17 716.19 751.54 723.39 755.05 732.64" style={{ fill: "#2c475b" }}/>
                    <polygon points="746.92 721.75 749.12 724.69 751.46 731.93 737.95 742.01 736.85 734.17 734.49 731.01 746.92 721.75" style={{ fill: "#2c475b" }}/>
                    <rect x="461.55" y="66.59" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-79)" }}/>
                    <rect x="461.55" y="1032.73" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-80)" }}/>
                    <rect x="1428.09" y="66.59" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-81)" }}/>
                    <rect x="1428.09" y="1032.73" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-82)" }}/>
                </g>
                <g id="Part08" className="part05">
                    <path d="M1287.82,393.15a351.87,351.87,0,0,1,34.36,152.14c0,134.31-75,251.11-185.29,310.87l22.5,41.64C1284.52,830,1369.5,697.59,1369.5,545.29a399,399,0,0,0-39-172.52Z" style={{ fill: "#1b2833" }}/>
                    <path d="M1250.37,545.29A280.29,280.29,0,0,0,1223,424.07l-7.55,3.6a15.74,15.74,0,0,0-7.81,20.14,258.11,258.11,0,0,1-103.36,316.94,15.74,15.74,0,0,0-5.53,20.86l4,7.37A281.43,281.43,0,0,0,1250.37,545.29Z" style={{ fill: "#1b2833" }}/>
                    <path d="M1250.37,545.29A281.43,281.43,0,0,1,1102.74,793l34.15,63.18c110.34-59.76,185.29-176.56,185.29-310.87a351.87,351.87,0,0,0-34.36-152.14L1223,424.07A280.29,280.29,0,0,1,1250.37,545.29Z" style={{ fill: "#2c475b" }}/>
                    <polygon points="1384.01 375.14 1382.3 370.85 1294.25 405.99 1291.34 398.7 1378.12 364.06 1376.41 359.76 1289.63 394.4 1280.91 397.88 1265.38 404.08 1279.77 440.14 1295.3 433.94 1304.02 430.46 1390.8 395.82 1389.09 391.52 1302.3 426.16 1299.99 420.37 1388.04 385.23 1386.32 380.93 1298.28 416.08 1295.96 410.28 1384.01 375.14" style={{ fill: "#23313a" }}/>
                    <polygon points="1403.65 434.57 1402.55 430.08 1310.47 452.63 1308.61 445 1399.36 422.78 1398.26 418.29 1307.51 440.51 1298.39 442.74 1282.14 446.72 1291.38 484.43 1307.62 480.45 1316.74 478.22 1407.5 455.99 1406.4 451.5 1315.64 473.73 1314.15 467.67 1406.23 445.12 1405.13 440.63 1313.06 463.18 1311.57 457.12 1403.65 434.57" style={{ fill: "#23313a" }}/>
                    <polygon points="1414.83 496.16 1414.37 491.56 1320.04 501.07 1319.26 493.26 1412.22 483.88 1411.76 479.28 1318.79 488.66 1309.46 489.6 1292.81 491.28 1296.71 529.9 1313.35 528.23 1322.69 527.28 1415.66 517.9 1415.19 513.3 1322.22 522.68 1321.6 516.48 1415.92 506.96 1415.45 502.36 1321.13 511.88 1320.51 505.67 1414.83 496.16" style={{ fill: "#23313a" }}/>
                    <polygon points="1417.33 558.7 1417.51 554.08 1322.78 550.37 1323.09 542.53 1416.46 546.18 1416.64 541.56 1323.27 537.91 1313.89 537.54 1297.18 536.89 1295.66 575.68 1312.38 576.33 1321.75 576.7 1415.12 580.35 1415.3 575.73 1321.93 572.08 1322.18 565.85 1416.9 569.55 1417.08 564.93 1322.36 561.23 1322.6 555 1417.33 558.7" style={{ fill: "#23313a" }}/>
                    <polygon points="1411.1 620.98 1411.92 616.43 1318.63 599.58 1320.03 591.85 1411.98 608.46 1412.8 603.91 1320.85 587.3 1311.61 585.64 1295.15 582.66 1288.25 620.86 1304.71 623.84 1313.95 625.5 1405.9 642.12 1406.72 637.57 1314.77 620.96 1315.88 614.82 1409.17 631.67 1409.99 627.12 1316.7 610.27 1317.81 604.13 1411.1 620.98" style={{ fill: "#23313a" }}/>
                    <polygon points="1396.26 681.79 1397.71 677.4 1307.67 647.73 1310.13 640.27 1398.87 669.52 1400.32 665.13 1311.58 635.88 1302.66 632.94 1286.78 627.71 1274.63 664.58 1290.51 669.81 1299.42 672.75 1388.17 702 1389.62 697.6 1300.87 668.36 1302.82 662.43 1392.86 692.11 1394.31 687.71 1304.27 658.04 1306.22 652.12 1396.26 681.79" style={{ fill: "#23313a" }}/>
                    <polygon points="1373.1 739.94 1375.15 735.79 1290.12 693.88 1293.59 686.84 1377.4 728.15 1379.44 724 1295.63 682.69 1287.22 678.54 1272.21 671.15 1255.05 705.97 1270.05 713.36 1278.47 717.51 1362.28 758.82 1364.33 754.68 1280.51 713.36 1283.27 707.77 1368.3 749.68 1370.35 745.54 1285.32 703.62 1288.07 698.03 1373.1 739.94" style={{ fill: "#23313a" }}/>
                    <polygon points="1342.08 794.3 1344.68 790.48 1266.31 737.14 1270.73 730.65 1347.97 783.23 1350.58 779.41 1273.33 726.83 1265.57 721.55 1251.74 712.14 1229.9 744.23 1243.73 753.64 1251.49 758.92 1328.73 811.5 1331.34 807.67 1254.09 755.1 1257.6 749.94 1335.97 803.28 1338.57 799.46 1260.2 746.12 1263.71 740.97 1342.08 794.3" style={{ fill: "#23313a" }}/>
                    <polygon points="1303.79 843.82 1306.9 840.4 1236.72 776.67 1241.99 770.86 1311.17 833.67 1314.28 830.25 1245.1 767.44 1238.15 761.13 1225.77 749.88 1199.68 778.62 1212.06 789.87 1219.01 796.17 1288.18 858.99 1291.29 855.57 1222.12 792.75 1226.31 788.13 1296.49 851.86 1299.6 848.44 1229.41 784.71 1233.61 780.09 1303.79 843.82" style={{ fill: "#23313a" }}/>
                    <polygon points="1256.29 891.15 1259.88 888.25 1200.39 814.44 1206.5 809.51 1265.14 882.26 1268.74 879.36 1210.1 806.61 1204.21 799.31 1193.71 786.29 1163.49 810.65 1173.99 823.67 1179.88 830.98 1238.52 903.72 1242.12 900.82 1183.48 828.08 1188.33 824.16 1247.83 897.96 1251.43 895.06 1191.93 821.26 1196.79 817.34 1256.29 891.15" style={{ fill: "#23313a" }}/>
                    <polygon points="1200.27 929.62 1204.34 927.45 1159.68 843.83 1166.61 840.13 1210.63 922.55 1214.71 920.37 1170.69 837.95 1166.27 829.67 1158.39 814.92 1124.14 833.21 1132.02 847.96 1136.44 856.24 1180.46 938.66 1184.54 936.48 1140.52 854.06 1146.02 851.12 1190.68 934.74 1194.76 932.56 1150.1 848.94 1155.6 846 1200.27 929.62" style={{ fill: "#23313a" }}/>
                    <rect x="476.48" y="56.48" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-83)" }}/>
                    <rect x="476.48" y="1022.62" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-84)" }}/>
                    <rect x="1443.01" y="56.48" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-85)" }}/>
                    <rect x="1443.01" y="1022.62" width="0.5" height="0.9" style={{ fill: "url(#radial-gradient-86)" }}/>
                </g>
                <g id="Part09" className="part09">
                    <circle cx="954.8" cy="543.52" r="468.62" style={{ fill: "url(#radial-gradient-87)" }}/>
                </g>
            </svg>
        </div>
      </div>
    );
  }
  
  export default WallpaperV03;
  

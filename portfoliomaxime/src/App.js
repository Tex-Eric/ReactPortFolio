import React, {useState} from 'react'
import Intro from "./Page/Intro/Intro";
import WallpaperV01 from "./Component/Wallpaper/WallpaperV01";
import WallpaperV02 from "./Component/Wallpaper/WallpaperV02";
import MenuBottun from './Page/MenuBottun/MenuBottun';
import InWork from './Page/InWork/InWork';
import MenuArt from './Page/MenuArt/MenuArt';
import MenuProg from './Page/MenuProg/MenuProg';
import Tool from './Page/Tool/Tool';
import Parcours from './Page/Parcours/Parcours';
import Description from './Page/Description/Description';


function App() {
  const [pageActive, setPageActive] = useState(null);

  const pageIsMenuButton = () =>{return setPageActive("MenuBottun")}
  const pageIsMenuArt = () =>{return setPageActive("MenuArt")}
  const pageIsMenuProg = () =>{return setPageActive("MenuProg")}
  const pageIsToolInfo = () =>{return setPageActive("ToolInfo")}
  const pageIsToolDev = () =>{return setPageActive("ToolDev")}
  const pageIsParcours = () =>{return setPageActive("Parcours")}
  const pageIsDescription = () =>{return setPageActive("Description")}
  const pageIsInWork = () =>{return setPageActive("InWork")}
  const pageIsIntro = () =>{return setPageActive(null)}

  const pageIsActive = (pageActive) => {
      if(pageActive === "MenuBottun"){
        return <MenuBottun 
        pageIsMenuArt={pageIsMenuArt} 
        pageIsMenuProg={pageIsMenuProg}
        pageIsToolInfo={pageIsToolInfo}
        pageIsToolDev={pageIsToolDev}
        pageIsParcours={pageIsParcours}
        pageIsDescription={pageIsDescription}
        pageIsInWork={pageIsInWork} 
        pageIsIntro={pageIsIntro}/>;
      } else if (pageActive === "MenuArt"){
        return <MenuArt pageIsIntro={pageIsMenuButton} />
      } else if (pageActive === "MenuProg"){
        return <MenuProg pageIsIntro={pageIsMenuButton} />
      } else if (pageActive === "ToolInfo"){
        return <Tool pageIsIntro={pageIsMenuButton} isInf={true} />
      } else if (pageActive === "ToolDev"){
        return <Tool pageIsIntro={pageIsMenuButton} isInf={false} />
      } else if (pageActive === "Parcours"){
        return <Parcours pageIsIntro={pageIsMenuButton} />
      } else if (pageActive === "Description"){
        return <Description pageIsIntro={pageIsMenuButton} />
      } else if (pageActive === "InWork"){
        return <InWork pageIsIntro={pageIsMenuButton}/>;
      } else{
        return<Intro pageIsMenuButton={pageIsMenuButton}/>;
      }
  };

  return (
    <div >
      <WallpaperV01/>
      <WallpaperV02/>
      {pageIsActive(pageActive)}
    </div>
  );
}

export default App;

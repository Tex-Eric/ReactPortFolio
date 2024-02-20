import React, {useState} from 'react'
import Intro from "./Page/Intro/Intro";
import WallpaperV01 from "./Component/Wallpaper/WallpaperV01";
import WallpaperV02 from "./Component/Wallpaper/WallpaperV02";
import MenuBottun from './Page/MenuBottun/MenuBottun';
import InWork from './Page/InWork/InWork';
import MenuArt from './Page/MenuArt/MenuArt';
import MenuProg from './Page/MenuProg/MenuProg';


function App() {
  const [pageActive, setPageActive] = useState(null);

  const pageIsMenuButton = () =>{return setPageActive("MenuBottun")}
  const pageIsMenuArt = () =>{return setPageActive("MenuArt")}
  const pageIsMenuProg = () =>{return setPageActive("MenuProg")}
  const pageIsInWork = () =>{return setPageActive("InWork")}
  const pageIsIntro = () =>{return setPageActive(null)}

  const pageIsActive = (pageActive) => {
      if(pageActive === "MenuBottun"){
        return <MenuBottun pageIsMenuArt={pageIsMenuArt} pageIsMenuProg={pageIsMenuProg} pageIsInWork={pageIsInWork} pageIsIntro={pageIsIntro}/>;
      } else if (pageActive === "MenuArt"){
        return <MenuArt pageIsIntro={pageIsIntro} />
      } else if (pageActive === "MenuProg"){
        return <MenuProg pageIsIntro={pageIsIntro} />
      } else if (pageActive === "InWork"){
        return <InWork pageIsIntro={pageIsIntro}/>;
      } else{
        return<Intro pageIsMenuButton={pageIsMenuButton}/>;
      }
  };

  return (
    <div>
      <WallpaperV01/>
      <WallpaperV02/>
      {pageIsActive(pageActive)}
    </div>
  );
}

export default App;

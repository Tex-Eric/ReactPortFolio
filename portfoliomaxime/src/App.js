import React, {useState} from 'react'
import Intro from "./Page/Intro/Intro";
import WallpaperV01 from "./Component/Wallpaper/WallpaperV01";
import WallpaperV02 from "./Component/Wallpaper/WallpaperV02";
import MenuBottun from './Page/MenuBottun/MenuBottun';
import InWork from './Page/InWork/InWork';


function App() {
  const [pageActive, setPageActive] = useState(null);

  const pageIsMenuButton = () =>{return setPageActive("MenuBottun")}
  // const pageIsMenuArt = () =>{return setPageActive("MenuArt")}
  const pageIsInWork = () =>{return setPageActive("InWork")}
  const pageIsIntro = () =>{return setPageActive(null)}

  const pageIsActive = (pageActive) => {
      if(pageActive === "MenuBottun"){
        return <MenuBottun  pageIsInWork={pageIsInWork} pageIsIntro={pageIsIntro}/>;
      } else if (pageActive === "MenuArt"){
        return 'toto'
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

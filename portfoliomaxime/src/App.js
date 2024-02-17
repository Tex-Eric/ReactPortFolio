import React, {useState} from 'react'
import Intro from "./Page/Intro/Intro";
import WallpaperV01 from "./Component/Wallpaper/WallpaperV01";
import WallpaperV02 from "./Component/Wallpaper/WallpaperV02";
import MenuBottun from './Page/MenuBottun/MenuBottun';


function App() {
  const [isMenuBottun, setIsMenuBottun] = useState(false);

  const pageIsMenuButton = () =>{return setIsMenuBottun(true)}

  const pageIsActive = (isMenuBottun) => {
      if(isMenuBottun){
        return <MenuBottun/>;
      }else{
        return<Intro pageIsMenuButton={pageIsMenuButton}/>;
      }
  };

  return (
    <div>
      <WallpaperV01/>
      <WallpaperV02/>
      {pageIsActive(isMenuBottun)}
    </div>
  );
}

export default App;

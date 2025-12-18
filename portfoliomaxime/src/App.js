import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./Page/Intro/Intro";
import WallpaperV01 from "./Component/Wallpaper/WallpaperV01";
import WallpaperV02 from "./Component/Wallpaper/WallpaperV02";
import MenuBottun from './Page/MenuBottun/MenuBottun';
/* import InWork from './Page/InWork/InWork'; */
import MenuArt from './Page/MenuArt/MenuArt';
import MenuProg from './Page/MenuProg/MenuProg';
import Tool from './Page/Tool/Tool';
import Parcours from './Page/Parcours/Parcours';
import Description from './Page/Description/Description';
import Bonus from './Page/Bonus/Bonus';


function App() {
  return (
    <Router >
      <WallpaperV01/>
      <WallpaperV02/>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/menu" element={<MenuBottun />} />
        <Route path="/art" element={<MenuArt />} />
        <Route path="/prog" element={<MenuProg />} />
        <Route path="/tool/info" element={<Tool isInf={true} />} />
        <Route path="/tool/dev" element={<Tool isInf={false} />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/description" element={<Description />} />
        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </Router>
  );
}

export default App;

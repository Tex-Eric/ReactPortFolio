import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../Utils/useMediaQuery";
import {IntroGlobalStyle, Typo01Style, Typo02Style} from "./IntroStyle";


function Intro() {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const navigate = useNavigate();
    const buttonWrite = 'Voir plus';

  return (
      <div style={IntroGlobalStyle(isDesktop)}>
        <p style={Typo01Style(isDesktop)}>Bienvenue sur mon site</p>
        <p style={Typo02Style(isDesktop)}>Je suis Maxime</p>
        <Buttonbias write={buttonWrite} newFunction={() => navigate("/menu")} isSkew={true} dimension={1}/>
      </div>
  );
}

export default Intro;

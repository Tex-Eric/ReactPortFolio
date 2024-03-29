import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import {IntroGlobalStyle, Typo01Style, Typo02Style} from "./IntroStyle";


function Intro({pageIsMenuButton}) {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = 'Voir plus';

  return (
      <div style={IntroGlobalStyle(isDesktop)}>
        <p style={Typo01Style(isDesktop)}>Bienvenue sur mon site</p>
        <p style={Typo02Style(isDesktop)}>Je suis Maxime</p>
        <Buttonbias write={buttonWrite} newFunction={pageIsMenuButton} isSkew={true} dimension={1}/>
      </div>
  );
}

export default Intro;

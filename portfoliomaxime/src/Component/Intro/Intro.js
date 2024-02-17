import useMediaQuery from "../../Utils/useMediaQuery";
import {IntroGlobalStyle, Typo01Style, Typo02Style} from "./IntroStyle";


function Intro() {
    const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <div>
      <div style={IntroGlobalStyle(isDesktop)}>
        <p style={Typo01Style(isDesktop)}>Bienvenu sur mon site</p>
        <p style={Typo02Style(isDesktop)}>Je suis Maxime</p>
      </div>
    </div>
  );
}

export default Intro;

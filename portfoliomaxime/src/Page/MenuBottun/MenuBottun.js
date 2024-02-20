import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import { MenuBottunGrid01, MenuBottunGrid02, MenuBottunGrid03, MenuBottunGrid04 } from "./MenuBottunStyle";

function MenuBottun({pageIsMenuArt, pageIsInWork, pageIsIntro}) {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    
    const text = {
        art: "Art",
        prog: "Programmation",
        info: "Outil Infographie",
        dev: "Outil Developpement",
        parc: "Parcours",
        desc: "Description",
        bonus: "Bonus",
        return: '← retour'
    };

    return (
      <>
        <div style={{width: '100px',margin:'10px'}}>
          <Buttonbias write={text.return} newFunction={pageIsIntro} isSkew={true}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', overflow: 'hidden' }}>
            {isDesktop ? (
                <div style={MenuBottunGrid01}>
                    <Buttonbias write={text.art} newFunction={pageIsMenuArt} gridColumn={"1"} gridRow={"1/6"} dimension={5} />
                    <Buttonbias write={text.prog} newFunction={pageIsInWork} gridColumn={"2"} gridRow={"1/3"} dimension={5} />
                    <Buttonbias write={text.info} newFunction={pageIsInWork} gridColumn={"2"} gridRow={"3"} dimension={5} />
                    <Buttonbias write={text.dev} newFunction={pageIsInWork} gridColumn={"2"} gridRow={"4"} dimension={5} />
                    <div style={MenuBottunGrid02}>
                        <Buttonbias write={text.parc} newFunction={pageIsInWork} gridColumn={"1"} gridRow={"1"} dimension={3} />
                        <Buttonbias write={text.desc} newFunction={pageIsInWork} gridColumn={"2"} gridRow={"1"} dimension={3} />
                        <Buttonbias write={text.bonus} newFunction={pageIsInWork} gridColumn={"3"} gridRow={"1"} dimension={3} />
                    </div>
                </div>
            ) : (
                <div style={MenuBottunGrid03}>
                    <Buttonbias write={text.art} newFunction={pageIsMenuArt} gridColumn={"1/3"} gridRow={"1/3"} isSkew={true} dimension={3} />
                    <Buttonbias write={text.prog} newFunction={pageIsInWork} gridColumn={"1/3"} gridRow={"3/4"} isSkew={true} dimension={3} />
                    <Buttonbias write={text.info} newFunction={pageIsInWork} gridColumn={"1"} gridRow={"4"} isSkew={true} dimension={2} />
                    <Buttonbias write={text.dev} newFunction={pageIsInWork} gridColumn={"2/3"} gridRow={"4"} isSkew={true} dimension={2} />
                    <div style={MenuBottunGrid04}>
                        <Buttonbias write={text.parc} newFunction={pageIsInWork} gridColumn={"1"} gridRow={"1"} dimension={2} />
                        <Buttonbias write={text.desc} newFunction={pageIsInWork} gridColumn={"2"} gridRow={"1"} dimension={2} />
                        <Buttonbias write={text.bonus} newFunction={pageIsInWork} gridColumn={"3"} gridRow={"1"} dimension={2} />
                    </div>
                </div>
            )}
        </div>
      </>
    );
}

export default MenuBottun;

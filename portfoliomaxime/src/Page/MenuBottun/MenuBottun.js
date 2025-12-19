import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../Utils/useMediaQuery";
import { MenuBottunGrid01, MenuBottunGrid02, MenuBottunGrid03, MenuBottunGrid04 } from "./MenuBottunStyle";

function MenuBottun({pageIsMenuArt, pageIsMenuProg, pageIsToolInfo, pageIsToolDev, pageIsParcours, pageIsDescription, pageIsInWork, pageIsIntro}) {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const navigate = useNavigate();
    
    const text = {
        art: "Art",
        prog: "Programmation",
        info: "Outil Infographie",
        dev: "Outil Développement",
        parc: "Parcours",
        desc: "Description",
        bonus: "Bonus",
        return: '← retour'
    };

    return (
      <>
        <div style={{width: '100px', padding:'10px'}}>
          <Buttonbias write={text.return} newFunction={() => navigate("/")} isSkew={true} dimension={3}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', overflow: 'hidden' }}>
            {isDesktop ? (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: "0"
                    }}>
                        <p style={{
                        fontFamily: "Electrolize,sans-serif,Arial,Verdana",
                        fontSize: "25px",
                        fontWeight: "700",
                        color: "#FFFFFF",
                        margin:'10px 0 50px 0'
                    }}>Cliquez sur un boutton pour voir son contenu.</p>
                    </div>
                    <div style={MenuBottunGrid01}>
                        <Buttonbias write={text.art} newFunction={() => navigate("/art")} gridColumn={"1"} gridRow={"1/6"} dimension={5} />
                        <Buttonbias write={text.prog} newFunction={() => navigate("/prog")} gridColumn={"2"} gridRow={"1/3"} dimension={5} />
                        <Buttonbias write={text.info} newFunction={() => navigate("/tool/info")} gridColumn={"2"} gridRow={"3"} dimension={5} />
                        <Buttonbias write={text.dev} newFunction={() => navigate("/tool/dev")} gridColumn={"2"} gridRow={"4"} dimension={5} />
                        <div style={MenuBottunGrid02}>
                            <Buttonbias write={text.parc} newFunction={() => navigate("/parcours")} gridColumn={"1"} gridRow={"1"} dimension={3} />
                            <Buttonbias write={text.desc} newFunction={() => navigate("/description")} gridColumn={"2"} gridRow={"1"} dimension={3} />
                            <Buttonbias write={text.bonus} newFunction={() => navigate("/bonus")} gridColumn={"3"} gridRow={"1"} dimension={3} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: "0"
                    }}>
                        <p style={{
                        fontFamily: "Electrolize,sans-serif,Arial,Verdana",
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#FFFFFF",
                        margin:'0 25px 25px 25px',
                        textAlign: "center"
                    }}>Cliquez sur un boutton pour voir son contenu.</p>
                    </div>
                    <div style={MenuBottunGrid03}>
                        <Buttonbias write={text.art} newFunction={() => navigate("/art")} gridColumn={"1/3"} gridRow={"1/3"} isSkew={true} dimension={3} />
                        <Buttonbias write={text.prog} newFunction={() => navigate("/prog")} gridColumn={"1/3"} gridRow={"3/4"} isSkew={true} dimension={3} />
                        <Buttonbias write={text.info} newFunction={() => navigate("/tool/info")} gridColumn={"1"} gridRow={"4"} isSkew={true} dimension={2} />
                        <Buttonbias write={text.dev} newFunction={() => navigate("/tool/dev")} gridColumn={"2/3"} gridRow={"4"} isSkew={true} dimension={2} />
                        <div style={MenuBottunGrid04}>
                            <Buttonbias write={text.parc} newFunction={() => navigate("/parcours")} gridColumn={"1"} gridRow={"1"} dimension={2} />
                            <Buttonbias write={text.desc} newFunction={() => navigate("/description")} gridColumn={"2"} gridRow={"1"} dimension={2} />
                            <Buttonbias write={text.bonus} newFunction={() => navigate("/bonus")} gridColumn={"3"} gridRow={"1"} dimension={2} />
                        </div>
                    </div>
                </>
            )}
        </div>
      </>
    );
}

export default MenuBottun;

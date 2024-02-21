import { useState } from "react";
import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import { ParcoursGrid01, ParcoursGrid02, ParcoursGridChoice, ParcoursGridText, ParcoursLinkText, ParcoursMobileGridChoice, ParcoursMobileGridText, ParcoursMobileLinkText, ParcoursMobileTextText, ParcoursMobileTitleText, ParcoursTextText, ParcoursTitleText } from "./ParcoursStyle";

function Parcours({pageIsIntro}) {
    const [parcoursActive, setParcoursActive] = useState(null);
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const textReturn = '← retour';

    const text = {
        one: "2017-2020",
        two: "2020-2021",
        three: "2023-2026",
        return: '← retour'
    };

    const parcoursIs20172020 = () =>{return setParcoursActive("2017-2020")}
    const parcoursIs20202021 = () =>{return setParcoursActive("2020-2023")}
    const parcoursIs20232026 = () =>{return setParcoursActive("2023-2026")}

    const parcoursShow = (parcoursActive) =>{
        if(parcoursActive === "2017-2020"){
            return {
                title: "École ESMI/Brassart",
                smallTitle:"École de graphiste et de multimédia",
                text: "C'est au cours de ces 3 années que j'ai appris les arts graphiques, les bases de l'illustration et les diverses logiciels vue précédemment."
            }
        }else if (parcoursActive === "2020-2023"){
            return {
                title: "École 3iS Bordeaux",
                smallTitle:"École de film et du jeux vidéo",
                text: "Dernière année d'infographie avec la spécialité jeux vidéo et intégration. J'ai pu travailler sur le rig et le skin de personnage 3D et leurs animations."
            }
        }else if (parcoursActive === "2023-2026"){
            return {
                title: "École ETNA",
                smallTitle:"École de développeurs web en alternance",
                text: "Formation pour devenir développeur Web, je suis en alternance à ACENSI où j'apprends la création de site internet ou d'application."
            }
        }else{
            return {
                title: "",
                smallTitle:"",
                text: "← Choisie une date"
            }
        }
    }
    const parcoursDescription = parcoursShow(parcoursActive);

    return (
      <>
        <div style={{width: '100px',margin:'10px'}}>
          <Buttonbias write={textReturn} newFunction={pageIsIntro} isSkew={true} dimension={2}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', overflow: 'hidden' }}>
            {isDesktop ? (
                <div style={ParcoursGrid01}>
                    <Buttonbias write={text.one} newFunction={parcoursIs20172020} gridColumn={"1"} gridRow={"1"} dimension={2} />
                    <Buttonbias write={text.two} newFunction={parcoursIs20202021} gridColumn={"1"} gridRow={"2"} dimension={2} />
                    <Buttonbias write={text.three} newFunction={parcoursIs20232026} gridColumn={"1"} gridRow={"3"} dimension={2} />
                    {parcoursActive?(
                        <div style={ParcoursGridText}>
                            <p style={ParcoursTitleText}>{parcoursDescription.title}</p>
                            <p style={ParcoursTextText}>{parcoursDescription.smallTitle}</p>
                            <p style={ParcoursLinkText}>{parcoursDescription.text}</p>
                        </div>
                        ):(
                        <div style={ParcoursGridChoice}>
                            <p style={ParcoursTextText}>{parcoursDescription.text}</p>
                            </div>
                    )}
                </div>
            ) : (
                <div style={ParcoursGrid02}>
                    <Buttonbias write={text.one} newFunction={parcoursIs20172020} gridColumn={"1"} gridRow={"1"}  dimension={2} />
                    <Buttonbias write={text.two} newFunction={parcoursIs20202021} gridColumn={"1"} gridRow={"2"}  dimension={2} />
                    <Buttonbias write={text.three} newFunction={parcoursIs20232026} gridColumn={"1"} gridRow={"3"}  dimension={2} />
                    {parcoursActive?(
                        <div style={ParcoursMobileGridText}>
                            <p style={ParcoursMobileTitleText}>{parcoursDescription.title}</p>
                            <p style={ParcoursMobileTextText}>{parcoursDescription.smallTitle}</p>
                            <p style={ParcoursMobileLinkText}>{parcoursDescription.text}</p>
                        </div>
                        ):(
                        <div style={ParcoursMobileGridChoice}>
                            <p style={ParcoursMobileLinkText}>{parcoursDescription.text}</p>
                            </div>
                    )}
                </div>
            )}
        </div>
      </>
    );
}

export default Parcours;

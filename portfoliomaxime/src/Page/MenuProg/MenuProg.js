import { useState } from "react";
import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import { ProgGrid01, ProgGrid02, ProgGridChoice, ProgGridText, ProgLinkText, ProgMobileGridChoice, ProgMobileGridText, ProgMobileLinkText, ProgMobileTextText, ProgMobileTitleText, ProgTextText, ProgTitleText } from "./MenuProgStyle";

function MenuProg({pageIsIntro}) {
    const [progActive, setProgActive] = useState(null);
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const textReturn = '← retour';

    const text = {
        one: "Front-end",
        two: "Back-end et DataBase",
        three: "Autre"
    };

    const progIsFront = () =>{return setProgActive("Front-end")}
    const progIsBack = () =>{return setProgActive("Back-end et DataBase")}
    const progIsAutre = () =>{return setProgActive("Autre")}

    const progShow = (progActive) =>{
        if(progActive === "Front-end"){
            return {
                title: "Langage et Framework du Front",
                smallTitle:"HTML, CSS, JavaScipt, React, Redux, Axios, testJest et Cypress",
                text: "Je suis spécialisé dans la création d'interfaces utilisateur dynamiques et réactives. Grâce à une expertise en HTML, CSS et JavaScript, ainsi que dans les frameworks tels que React et les outils comme Redux, Axios, Jest et Cypress, je suis capable de concevoir et de mettre en œuvre des expériences web, centrées sur l'utilisateur."
            }
        }else if (progActive === "Back-end et DataBase"){
            return {
                title: "Langage et Framework du Back et DataBase",
                smallTitle:"JavaScript express, fastify, Sequelize, MySQL, PostgreSQL, Redis et testJest",
                text: "Pour le Back-end, je maîtrise les technologies de JavaScript avec Express et Fastify, ainsi que des outils comme Sequelize pour l'interaction avec les bases de données relationnelles telles que MySQL et PostgreSQL, Redis pour le stockage de données en cache. Grâce  à l'utilisation de testJest, je suis capable de créer des applications robustes, évolutives et sécurisées, répondant aux besoins fonctionnels et aux exigences."
            }
        }else if (progActive === "Autre"){
            return {
                title: "Web Design et infographie",
                smallTitle:"Figma, suite Adobe, suite Autodesk et méthode agile",
                text: "J'ai aussi des compétences en Web designer et graphisme, je suis compétent dans l'utilisation d'outils de conception tels que Figma et les suites Adobe et Autodesk pour créer des interfaces utilisateur intuitives et attrayantes. Ma connaissance de la méthode agile me permet de travailler de manière collaborative et efficace, en m'adaptant rapidement aux besoins du projet."
            }
        }else{
            return {
                title: "",
                smallTitle:"",
                text: "← Choisie une case"
            }
        }
    }
    const progDescription = progShow(progActive);

    return (
      <>
        <div style={{width: '100px',margin:'10px'}}>
          <Buttonbias write={textReturn} newFunction={pageIsIntro} isSkew={true} dimension={2}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', overflow: 'hidden' }}>
            {isDesktop ? (
                <div style={ProgGrid01}>
                    <Buttonbias write={text.one} newFunction={progIsFront} gridColumn={"1"} gridRow={"1"} dimension={2} />
                    <Buttonbias write={text.two} newFunction={progIsBack} gridColumn={"1"} gridRow={"2"} dimension={2} />
                    <Buttonbias write={text.three} newFunction={progIsAutre} gridColumn={"1"} gridRow={"3"} dimension={2} />
                    {progActive?(
                        <div style={ProgGridText}>
                            <p style={ProgTitleText}>{progDescription.title}</p>
                            <p style={ProgTextText}>{progDescription.smallTitle}</p>
                            <p style={ProgLinkText}>{progDescription.text}</p>
                        </div>
                        ):(
                        <div style={ProgGridChoice}>
                            <p style={ProgTextText}>{progDescription.text}</p>
                            </div>
                    )}
                </div>
            ) : (
                <div style={ProgGrid02}>
                    <Buttonbias write={text.one} newFunction={progIsFront} gridColumn={"1"} gridRow={"1"}  dimension={2} />
                    <Buttonbias write={text.two} newFunction={progIsBack} gridColumn={"1"} gridRow={"2"}  dimension={2} />
                    <Buttonbias write={text.three} newFunction={progIsAutre} gridColumn={"1"} gridRow={"3"}  dimension={2} />
                    {progActive?(
                        <div style={ProgMobileGridText}>
                            <p style={ProgMobileTitleText}>{progDescription.title}</p>
                            <p style={ProgMobileTextText}>{progDescription.smallTitle}</p>
                            <p style={ProgMobileLinkText}>{progDescription.text}</p>
                        </div>
                        ):(
                        <div style={ProgMobileGridChoice}>
                            <p style={ProgMobileLinkText}>{progDescription.text}</p>
                            </div>
                    )}
                </div>
            )}
        </div>
      </>
    );
}

export default MenuProg;

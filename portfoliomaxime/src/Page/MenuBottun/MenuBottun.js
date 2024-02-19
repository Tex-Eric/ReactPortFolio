import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import { MenuBottunGrid01, MenuBottunGrid02, MenuBottunGrid03, MenuBottunGrid04 } from "./MenuBottunStyle";

function MenuBottun() {
  const isDesktop = useMediaQuery('(min-width: 640px)');
    const textArt = "Art";
    const textProg = "Programmation";
    const textInfo = "Outil Infographie";
    const textDev = "Outil Developpement";
    const textParc = "Parcour";
    const textDesc = "Description";
    const textBonus = "Bonus";

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100vh',overflow: 'hidden'}}>
    {isDesktop ? (
      <div style={MenuBottunGrid01}>
        <Buttonbias write={textArt} gridColumn={"1"} gridRow={"1/6"} dimension={5}/>
        <Buttonbias write={textProg} gridColumn={"2"} gridRow={"1/3"} dimension={5}/>
        <Buttonbias write={textInfo} gridColumn={"2"} gridRow={"3"} dimension={5}/>
        <Buttonbias write={textDev} gridColumn={"2"} gridRow={"4"}  dimension={5}/>
        <div style={MenuBottunGrid02}>
          <Buttonbias write={textParc} gridColumn={"1"} gridRow={"1"}  dimension={3}/>
          <Buttonbias write={textDesc} gridColumn={"2"} gridRow={"1"}  dimension={3}/> 
          <Buttonbias write={textBonus} gridColumn={"3"} gridRow={"1"}  dimension={3}/>
        </div>
      </div>) : (
        <div style={MenuBottunGrid03}>
        <Buttonbias write={textArt} gridColumn={"1/3"} gridRow={"1/3"} isSkew={true}  dimension={3}/>
        <Buttonbias write={textProg} gridColumn={"1/3"} gridRow={"3/4"} isSkew={true} dimension={3}/>
        <Buttonbias write={textInfo} gridColumn={"1"} gridRow={"4"} isSkew={true} dimension={2}/>
        <Buttonbias write={textDev} gridColumn={"2/3"} gridRow={"4"} isSkew={true} dimension={2}/>
        <div style={MenuBottunGrid04}>
          <Buttonbias write={textParc} gridColumn={"1"} gridRow={"1"} dimension={2}/>
          <Buttonbias write={textDesc} gridColumn={"2"} gridRow={"1"} dimension={2}/> 
          <Buttonbias write={textBonus} gridColumn={"3"} gridRow={"1"} dimension={2}/>
        </div>
      </div>
      )}
    </div>
  );
}

export default MenuBottun;

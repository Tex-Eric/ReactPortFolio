import Buttonbias from "../../Component/Buttonbias/Buttonbias";

function MenuBottun() {
    const textArt = "Art";
    const textProg = "Programmation";
    const textInfo = "Outil Infographie";
    const textDev = "Outil Developpement";
    const textParc = "Parcour";
    const textDesc = "Description";
    const textBonus = "Bonus";

  return (
    <div>
        <Buttonbias write={textArt}/>
        <Buttonbias write={textProg}/>
        <Buttonbias write={textInfo}/>
        <Buttonbias write={textDev}/>
        <Buttonbias write={textParc}/>
        <Buttonbias write={textDesc}/>
        <Buttonbias write={textBonus}/>
    </div>
  );
}

export default MenuBottun;

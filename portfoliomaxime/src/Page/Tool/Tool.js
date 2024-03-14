import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import DataDev from "../../Data/DataToolDev/DataToolDev.json";
import DataInfo from "../../Data/DataToolInf/DataTollInf.json";
import DataInfoBonus from "../../Data/DataToolInf/DataToolInfBonus.json";
import React from "react";
import useMediaQuery from "../../Utils/useMediaQuery";
import { ToolComponent, ToolDivImage, ToolImage, ToolMobileComponent, ToolMobileDivImage, ToolMobileImage, ToolMobileTextText, ToolMobileTitleText, ToolMobileVue, ToolTextText, ToolTitleText, ToolVue } from "./ToolStyle";
import { ToolInfComponentLeft, ToolInfMobileComponentLeft, ToolInfMobileVue, ToolInfVue, ToolInfoFirstImage, ToolInfoImage, ToolInfoMobileFirstImage, ToolInfoMobileText, ToolInfoMobileTextText, ToolInfoMobileTextTitle, ToolInfoText, ToolInfoTextText, ToolInfoTextTitle, ToolInfoobileImage } from "./ToolInfoStyle";

function Tool({pageIsIntro, isInf}) {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = '← retour';

    const titleInfo = `Mes outils d'infographie`;
    const titleDev = 'Mes outils de développement';

    const Datas = isInf ? DataInfo: DataDev;
    const title = isInf ? titleInfo: titleDev;

  return (
    <>
        <div style={{width: '100px', padding:'10px'}}>
          <Buttonbias write={buttonWrite} newFunction={pageIsIntro} isSkew={true} dimension={1}/>
        </div>
        {isDesktop? (
            <div style={ToolVue}>
            <p style={ToolTitleText}>{title}</p>
            {isInf ? (
                    <div style={ToolInfVue}>
                        {DataInfoBonus.map((data, index) => (
                             <React.Fragment key={index}>
                             <div style={ToolInfComponentLeft}>
                             {data.id % 2 === 0 ? (
                                <>
                                    <div style={ToolInfoText(data.id % 2 !== 0)}>
                                        <p style={ToolInfoTextTitle}>{data.title}</p>
                                        <p style={ToolInfoTextText}>{data.text}</p>
                                    </div>
                                    <div style={ToolInfoImage(data.id % 2 !== 0)}>
                                        <img src={process.env.PUBLIC_URL + data.img01}
                                        alt={data.img01} title={data.img01}
                                        style={ToolInfoFirstImage(data.id % 2 !== 0)}/>
                                    </div>
                                </>
                                ) : (
                                <>
                                    <div style={ToolInfoImage(data.id % 2 !== 0)}>
                                        <img src={process.env.PUBLIC_URL + data.img01}
                                        alt={data.img01} title={data.img01}
                                        style={ToolInfoFirstImage(data.id % 2 !== 0)}/>
                                    </div>
                                    <div style={ToolInfoText(data.id % 2 !== 0)}>
                                        <p style={ToolInfoTextTitle}>{data.title}</p>
                                        <p style={ToolInfoTextText}>{data.text}</p>
                                    </div>
                                </>
                                )}
                            </div>
                            </React.Fragment>
                        ))}
                    </div>
                ) : null}
                {isInf ? <p style={ToolTitleText}>Autre outils</p>:null}
            <div style={ToolComponent}>
                {Datas.map((data, index)=>(
                <div style={ToolDivImage}>
                    <React.Fragment key={index}>
                    <img src={process.env.PUBLIC_URL + data.link}
                    alt={data.link} title={data.link}
                    style={ToolImage}/>
                    <p style={ToolTextText}>{data.title}</p>
                    </React.Fragment>
                </div>
                ))}
            </div>
        </div>
        ) :(
            <div style={ToolMobileVue}>
                <p style={ToolMobileTitleText}>{title}</p>
                {isInf ? (
                    <div style={ToolInfMobileVue}>
                        {DataInfoBonus.map((data, index) => (
                             <React.Fragment key={index}>
                             <div style={ToolInfMobileComponentLeft}>
                                <>
                                    <div style={ToolInfoobileImage(data.id % 2 !== 0)}>
                                        <img src={process.env.PUBLIC_URL + data.img01}
                                        alt={data.img01} title={data.img01}
                                        style={ToolInfoMobileFirstImage(data.id % 2 !== 0)}/>
                                    </div>
                                    <div style={ToolInfoMobileText(data.id % 2 !== 0)}>
                                        <p style={ToolInfoMobileTextTitle}>{data.title}</p>
                                        <p style={ToolInfoMobileTextText}>{data.text}</p>
                                    </div>
                                </>
                            </div>
                            </React.Fragment>
                        ))}
                    </div>
                ) : null}
                {isInf ? <p style={ToolTitleText}>Autre outils</p>:null}
                <div style={ToolMobileComponent}>
                    {Datas.map((data, index)=>(
                    <div style={ToolMobileDivImage}>
                        <React.Fragment key={index}>
                        <img src={process.env.PUBLIC_URL + data.link}
                        alt={data.link} title={data.link}
                        style={ToolMobileImage}/>
                        <p style={ToolMobileTextText}>{data.title}</p>
                        </React.Fragment>
                    </div>
                    ))}
                </div>
            </div>
        )}
    </>
  );
}

export default Tool;

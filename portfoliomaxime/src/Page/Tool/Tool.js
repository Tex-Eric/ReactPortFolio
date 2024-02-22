import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import DataDev from "../../Data/DataToolDev/DataToolDev.json";
import DataInfo from "../../Data/DataToolInf/DataTollInf.json";
import React from "react";
import useMediaQuery from "../../Utils/useMediaQuery";
import { ToolComponent, ToolDivImage, ToolImage, ToolMobileComponent, ToolMobileDivImage, ToolMobileImage, ToolMobileTextText, ToolMobileTitleText, ToolMobileVue, ToolTextText, ToolTitleText, ToolVue } from "./ToolStyle";

function Tool({pageIsIntro, isInf}) {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = '← retour';

    const titleInfo = `Mes outils d'infographie`;
    const titleDev = 'Mes outils de développement';

    const Datas = isInf ? DataInfo: DataDev;
    const title = isInf ? titleInfo: titleDev;

  return (
    <>
        <div style={{width: '100px',margin:'10px'}}>
          <Buttonbias write={buttonWrite} newFunction={pageIsIntro} isSkew={true} dimension={1}/>
        </div>
        {isDesktop? (
            <div style={ToolVue}>
            <p style={ToolTitleText}>{title}</p>
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

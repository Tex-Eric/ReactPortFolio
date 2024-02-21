import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import { DescriptionComponentLeft, DescriptionFirstImage, DescriptionImage, DescriptionLinkText, DescriptionText, DescriptionTextText, DescriptionTitleText, DescriptionVue } from "./DescriptionStyle";
import Datas from "../../Data/DataDescription/DataDescription.json"
import React from "react";
import useMediaQuery from "../../Utils/useMediaQuery";
import { DescriptionMobileComponentLeft, DescriptionMobileFirstImage, DescriptionMobileImage, DescriptionMobileLinkText, DescriptionMobileText, DescriptionMobileTextText, DescriptionMobileTitleText, DescriptionMobileVue } from "./DescriptionStyleMobile";

function Description({pageIsIntro}) {
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = '← retour';

  return (
    <>
        <div style={{width: '100px',margin:'10px'}}>
          <Buttonbias write={buttonWrite} newFunction={pageIsIntro} isSkew={true} dimension={1}/>
        </div>
        {isDesktop?(<div style={DescriptionVue}>
            {Datas.map((data, index)=>(
                <React.Fragment key={index}>
                <div style={DescriptionComponentLeft}> 
                <div style={DescriptionImage(data.id % 2 !== 0)}>
                            <img src={process.env.PUBLIC_URL + data.firstImage}
                            alt={data.firstImage} title={data.firstImage}
                            style={DescriptionFirstImage(data.id % 2 !== 0)}/>
                        </div>
                        <div style={DescriptionText(data.id % 2 !== 0)}>
                            <p style={DescriptionTitleText}>{data.title}</p>
                            <p style={DescriptionTextText}>{data.text}</p>
                            <p href={data.link} style={DescriptionLinkText}>Contact : {data.link}</p>
                            <a href={process.env.PUBLIC_URL + data.PDFImage}
                            target="_blank" rel="noopener noreferrer"
                            style={DescriptionLinkText}>Open PDF</a>
                        </div>
                </div>
                </React.Fragment>
                
            ))}
        </div>):(<div style={DescriptionMobileVue}>
            {Datas.map((data, index)=>(
                <React.Fragment key={index}>
                <div style={DescriptionMobileComponentLeft}>
                            <div style={DescriptionMobileImage(data.id % 2 !== 0)}>
                                <img src={process.env.PUBLIC_URL + data.firstImage}
                                alt={data.firstImage} title={data.firstImage}
                                style={DescriptionMobileFirstImage(data.id % 2 !== 0)}/>
                            </div>
                            <div style={DescriptionMobileText(data.id % 2 !== 0)}>
                                <p style={DescriptionMobileTitleText}>{data.title}</p>
                                <p style={DescriptionMobileTextText}>{data.text}</p>
                                <p href={data.link} style={DescriptionMobileLinkText}>Contact : {data.link}</p>
                                <a href={process.env.PUBLIC_URL + data.PDFImage}
                                target="_blank" rel="noopener noreferrer"
                                style={DescriptionMobileLinkText}>Open PDF</a>
                            </div>
                </div>
                </React.Fragment>
                
            ))}
        </div>)}
    </>
  );
}

export default Description;

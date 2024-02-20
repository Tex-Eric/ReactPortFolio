import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import { MenuArtComponentLeft, MenuArtFirstImage, MenuArtImage, MenuArtLinkText, MenuArtSecondtImage, MenuArtText, MenuArtTextText, MenuArtTitleText, MenuArtVue } from "./MenuArtStyle";
import Datas from "../../Data/DataArt/DataArt.json"
import React from "react";

function MenuArt({pageIsIntro}) {
    // const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = '← retour';

  return (
    <>
        <div style={{width: '100px',margin:'10px'}}>
          <Buttonbias write={buttonWrite} newFunction={pageIsIntro} isSkew={true}/>
        </div>
        <div style={MenuArtVue}>
            {Datas.map((data, index)=>(
                <React.Fragment key={index}>
                <div style={MenuArtComponentLeft}>
                    {data.id % 2 === 0 ? (
                        <>
                        <div style={MenuArtText(data.id % 2 !== 0)}>
                            <p style={MenuArtTitleText}>{data.title}</p>
                            <p style={MenuArtTextText}>{data.text}</p>
                            <a href={data.link} style={MenuArtLinkText}>{data.link}</a>
                        </div>
                        <div style={MenuArtImage(data.id % 2 !== 0)}>
                            <img src={process.env.PUBLIC_URL + data.firstImage}
                            alt={data.firstImage} title={data.firstImage}
                            style={MenuArtFirstImage(data.id % 2 !== 0)}/>
                            {/* {data.secondImage.map((dataSecondImage, i)=>(
                                <img src={process.env.PUBLIC_URL + dataSecondImage}
                                alt={dataSecondImage} title={dataSecondImage}
                                style={MenuArtSecondtImage(i+1, data.id % 2 !== 0,)}/>
                            ))} */}
                        </div>
                    </>
                    ) : (
                        <>
                            <div style={MenuArtImage(data.id % 2 !== 0)}>
                                <img src={process.env.PUBLIC_URL + data.firstImage}
                                alt={data.firstImage} title={data.firstImage}
                                style={MenuArtFirstImage(data.id % 2 !== 0)}/>
                                {/* {data.secondImage.map((dataSecondImage, i)=>(
                                    <img src={process.env.PUBLIC_URL + dataSecondImage}
                                    alt={dataSecondImage} title={dataSecondImage}
                                    style={MenuArtSecondtImage(i+1, data.id % 2 !== 0,)}/>
                                ))} */}
                            </div>
                            <div style={MenuArtText(data.id % 2 !== 0)}>
                                <p style={MenuArtTitleText}>{data.title}</p>
                                <p style={MenuArtTextText}>{data.text}</p>
                                <a href={data.link} style={MenuArtLinkText}>{data.link}</a>
                            </div>
                        </>
                    )}
                </div>
                </React.Fragment>
                
            ))}
        </div>
    </>
  );
}

export default MenuArt;

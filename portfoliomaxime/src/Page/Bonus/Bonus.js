import React, {useState} from 'react'
import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import DataBDIntro from "../../Data/DataBD/DataBDIntro/DataBDIntro.json"
import DataBDPLT from "../../Data/DataBD/DataBDPLT/DataBDPLT.json"
import DataBDALT from "../../Data/DataBD/DataBDALT/DataBDALT.json"
import { MenuBDMobileFirstImage, MenuBDMobileImage,  MenuBDMobileText, MenuBDMobileTextText, MenuBDMobileTitleText, MenuBonusMobileComponentLeft, MenuBonusMobileVue } from './BonusMobileStyle';

function Bonus({pageIsIntro}){
    const [BDActive, setBDActive] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = '← retour';
    const buttonWrite02 = '← Bonus';
    const buttonWrite03 = '← Lire';
    const dataMap =(BD)=>{
        if(BD ==='DataBDALT')
        return DataBDALT;
        else if(BD ==='DataBDPLT')
        return DataBDPLT
    };
    return(
        <>
            <div style={{width: '100px', padding:'10px'}}>
            <Buttonbias write={buttonWrite} newFunction={pageIsIntro} isSkew={true} dimension={1}/>
            </div>
            {BDActive?(
                <div style={{width: '100px', padding:'10px'}}>
                <Buttonbias write={buttonWrite02} newFunction={() => {setBDActive(null); setCurrentPage(0);}} isSkew={true} dimension={1}/>
                </div>
                ):null
            }
        {isDesktop ? (
            <p>Page Bonus</p>
        ) : (
        BDActive ? (
            <div style={{backgroundColor:"#001924", padding:"30px", height: "100%", border:"2px solid #B2E2F2", borderRadius:"5px"}}>
                <div>
                        <img src={process.env.PUBLIC_URL + dataMap(BDActive)[currentPage].page}
                            alt={dataMap(BDActive)[currentPage].page} title={dataMap(BDActive)[currentPage].page}
                            style={MenuBDMobileFirstImage(true)}
                            onClick={() => {
                                if (currentPage === dataMap(BDActive).length - 1) { // si on est à la dernière page
                                    setCurrentPage(0); // remettre currentPage à 0
                                    setBDActive(null); // remettre BDActive à null
                                } else {
                                    setCurrentPage(currentPage + 1); // sinon, passer à la page suivante
                                }
                            }}
                        />
                </div>
        </div>
    ) : (
        <div style={MenuBonusMobileVue}>
            {DataBDIntro.map((data, index) => (
                <React.Fragment key={index}>
                    <div style={MenuBonusMobileComponentLeft}>
                        <div style={MenuBDMobileImage(true)}>
                            <img src={process.env.PUBLIC_URL + data.Couv}
                                alt={data.Couv} title={data.Couv}
                                style={MenuBDMobileFirstImage(true)}/>
                        </div>
                        <div style={MenuBDMobileText(true)}>
                            <p style={MenuBDMobileTitleText}>{data.Title}</p>
                            <p style={MenuBDMobileTextText}>{data.Description}</p>
                            <Buttonbias write={buttonWrite03} newFunction={() => setBDActive(data.Link)} isSkew={true} dimension={1}/>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
)}

    </>
    );
}

export default Bonus;
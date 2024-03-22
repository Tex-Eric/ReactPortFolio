import React, {useState} from 'react'
import Buttonbias from "../../Component/Buttonbias/Buttonbias";
import useMediaQuery from "../../Utils/useMediaQuery";
import DataBDIntro from "../../Data/DataBD/DataBDIntro/DataBDIntro.json"
import DataBDPLT from "../../Data/DataBD/DataBDPLT/DataBDPLT.json"
import DataBDALT from "../../Data/DataBD/DataBDALT/DataBDALT.json"
import DataBDMS0 from "../../Data/DataBD/DataBDMS0/DataBDMS0.json"
import { MenuBDMobileFirstImage, MenuBDMobileImage,  MenuBDMobileLeftImage,  MenuBDMobileText, MenuBDMobileTextText, MenuBDMobileTitleText, MenuBonusMobileComponentLeft, MenuBonusMobileVue } from './BonusMobileStyle';
import { MenuBDFirstImage, MenuBDImage, MenuBDLeftImage, MenuBDText, MenuBDTextText, MenuBDTitleText, MenuBonusComponentLeft, MenuBonusVue } from './BonusStyle';

function Bonus({pageIsIntro}){
    const [BDActive, setBDActive] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [zoom, setZoom] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const buttonWrite = '← retour';
    const buttonWrite02 = '← Bonus';
    const buttonWrite03 = 'Lire →';
    const dataMap =(BD)=>{
        if(BD ==='DataBDALT')
        return DataBDALT;
        else if(BD ==='DataBDPLT')
        return DataBDPLT;
        else if(BD ==='DataMS0')
        return DataBDMS0;
    };
    return(
        <>
            <div style={{width: '100px', padding:'10px'}}>
            <Buttonbias write={buttonWrite} newFunction={pageIsIntro} isSkew={true} dimension={1}/>
            </div>
            {BDActive?(
                <div style={{width: '100px', padding:'10px'}}>
                <Buttonbias write={buttonWrite02} newFunction={() => {setBDActive(null); setCurrentPage(1); setZoom(false);}} isSkew={true} dimension={1}/>
                </div>
                ):null
            }
        {isDesktop ? (
            BDActive ? (
                <div style={{backgroundColor:"#001924", padding:"30px", height: "75%", border:"2px solid #B2E2F2", borderRadius:"5px", display: "flex", justifyContent:"center", gap:"20px", flexDirection: "column", alignItems: 'center', flexWrap: 'wrap'}}>
                            <img src={process.env.PUBLIC_URL + dataMap(BDActive)[currentPage-1].page}
                                alt={dataMap(BDActive)[currentPage-1].page} title={dataMap(BDActive)[currentPage-1].page}
                                style={MenuBDLeftImage(zoom)}
                                onClick={() => {
                                    if (zoom === false) {
                                        setZoom(true); 
                                    } else {
                                        setZoom(false);
                                    }
                                }}
                            />
                            <div style={{display: "flex", justifyContent:"center", gap:"20px", flexDirection: "row", alignItems: 'center',}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill='#B2E2F2'
                            onClick={() => {
                                if (currentPage === 1) { // si on est à la dernière page
                                    setCurrentPage(1); // remettre currentPage à 0
                                    setBDActive(null); // remettre BDActive à null
                                } else {
                                    setCurrentPage(currentPage - 1); // sinon, passer à la page suivante
                                }
                            }}>
                                  <circle cx="12" cy="12" r="10" fill="none" stroke="#B2E2F2" stroke-width="1" />
                                  <path d="M15 18l-6-6 6-6" stroke="#B2E2F2" stroke-width="1" stroke-linecap="round" />
                                </svg>
                                <p style={MenuBDTextText} >{currentPage} / {dataMap(BDActive).length}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill='#B2E2F2'
                                onClick={() => {
                                    if (currentPage === dataMap(BDActive).length) { // si on est à la dernière page
                                        setCurrentPage(1); // remettre currentPage à 0
                                        setBDActive(null); // remettre BDActive à null
                                    } else {
                                        setCurrentPage(currentPage + 1); // sinon, passer à la page suivante
                                    }
                                }}>
                                  <circle cx="12" cy="12" r="10" fill="none" stroke="#B2E2F2" stroke-width="1" />
                                  <path d="M9 6l6 6-6 6" stroke="#B2E2F2" stroke-width="1" stroke-linecap="round" />
                                </svg>
                            </div>
            </div>
        ) : (
            <div style={MenuBonusVue}>
                {DataBDIntro.map((data, index) => (
                    <React.Fragment key={index}>
                        <div style={MenuBonusComponentLeft}>
                            <div style={MenuBDImage(true)}>
                                <img src={process.env.PUBLIC_URL + data.Couv}
                                    alt={data.Couv} title={data.Couv}
                                    style={MenuBDFirstImage(true)}/>
                            </div>
                            <div style={MenuBDText(true)}>
                                <p style={MenuBDTitleText}>{data.Title}</p>
                                <p style={MenuBDTextText}>{data.Description}</p>
                                <Buttonbias write={buttonWrite03} newFunction={() => setBDActive(data.Link)} isSkew={true} dimension={1}/>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        )
        ) : (
        BDActive ? (
            <div style={{backgroundColor:"#001924", padding:"15px", height: "100%", border:"2px solid #B2E2F2", borderRadius:"5px", display: "flex", justifyContent:"ce,ter", gap:"20px", flexDirection: "column", alignItems: 'center', flexWrap: 'wrap'}}>
                        <img src={process.env.PUBLIC_URL + dataMap(BDActive)[currentPage-1].page}
                            alt={dataMap(BDActive)[currentPage-1].page} title={dataMap(BDActive)[currentPage-1].page}
                            style={MenuBDMobileLeftImage(zoom)}
                            onClick={() => {
                                if (zoom === false) {
                                    setZoom(true); 
                                } else {
                                    setZoom(false);
                                }
                            }}
                        />
                        <div style={{display: "flex", justifyContent:"center", gap:"20px", flexDirection: "row", alignItems: 'center',}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill='#B2E2F2'
                            onClick={() => {
                                if (currentPage === 1) { // si on est à la dernière page
                                    setCurrentPage(1); // remettre currentPage à 0
                                    setBDActive(null); // remettre BDActive à null
                                } else {
                                    setCurrentPage(currentPage - 1); // sinon, passer à la page suivante
                                }
                            }}>
                                  <circle cx="12" cy="12" r="10" fill="none" stroke="#B2E2F2" stroke-width="1" />
                                  <path d="M15 18l-6-6 6-6" stroke="#B2E2F2" stroke-width="1" stroke-linecap="round" />
                                </svg>
                                <p style={MenuBDTextText} >{currentPage} / {dataMap(BDActive).length}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill='#B2E2F2'
                                onClick={() => {
                                    if (currentPage === dataMap(BDActive).length) { // si on est à la dernière page
                                        setCurrentPage(1); // remettre currentPage à 0
                                        setBDActive(null); // remettre BDActive à null
                                    } else {
                                        setCurrentPage(currentPage + 1); // sinon, passer à la page suivante
                                    }
                                }}>
                                  <circle cx="12" cy="12" r="10" fill="none" stroke="#B2E2F2" stroke-width="1" />
                                  <path d="M9 6l6 6-6 6" stroke="#B2E2F2" stroke-width="1" stroke-linecap="round" />
                                </svg>
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
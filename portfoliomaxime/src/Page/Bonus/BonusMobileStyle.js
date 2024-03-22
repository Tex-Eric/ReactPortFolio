export const MenuBonusMobileVue = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    margin: '30px 0 30px 0',
    gap:'10px'
}
export const MenuBonusMobileComponentLeft = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center'
}
/* ------------------------------------------------------------------- */
export const MenuBDMobileImage = (left) => ({
    border:"5px solid #B2E2F2",
    borderRadius: '2px 2px 2px 2px',
    width: '76%',
    display: 'grid',
    gridTemplateColumns: left? "2fr 1fr" : "1fr 2fr",
    gridTemplateRows:"1fr 1fr 1fr",
    padding: "10px",
    gap:"5px",
    backgroundColor:"#10101C"
});
export const MenuBDMobileFirstImage = (left) => ({
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    /* gridColumn: left? "1" : "2", */
    gridColumn: "1/3",
    gridRow:"1/4"
});
export const MenuBDMobileLeftImage = (zoom) => ({
    objectFit: 'contain',
    height:zoom? "100vh": "65vh",
    cursor:zoom? "zoom-out":"zoom-in",
    maxWidth:zoom? "":"100%"
});

/* ------------------------------------------------------------------- */
export const MenuBDMobileText = (left) => ({
    borderTop:"0px solid #B2E2F2",
    borderRight:"3px solid #B2E2F2",
    borderBottom:"3px solid #B2E2F2",
    borderLeft:"3px solid #B2E2F2", 
    borderRadius:'2px 2px 12px 12px', 
    margin: '0 10px 10px 0' , 
    padding: '0 10px 5px 10px',
    width: '67%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:"rgba(17, 36, 52, 0.9)"
});
export const MenuBDMobileTitleText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "25px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin:'10px 0 0 0'
}
export const MenuBDMobileTextText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "15px",
    color: "#E0E0E0",
}
export const MenuBDMobileLinkText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "15px",
    color: "#B9DEDF",
    overflow:"hidden"
}
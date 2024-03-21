export const MenuBonusVue = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    margin: '40px',
    gap:'20px'
}
export const MenuBonusComponentLeft = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '30%',
}

/* ------------------------------------------------------------------- */
export const MenuBDImage = (left) => ({
    border:"5px solid #B2E2F2",
    borderRadius: '2px 2px 2px 2px',
    width: '300px',
    display: 'grid',
    gridTemplateColumns: left? "2fr 1fr" : "1fr 2fr",
    gridTemplateRows:"1fr 1fr 1fr",
    padding: "10px",
    gap:"5px",
    backgroundColor:"#10101C"
});
export const MenuBDFirstImage = (left) => ({
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    /* gridColumn: left? "1" : "2", */
    gridColumn: "1/3",
    gridRow:"1/4"
});
export const MenuBDLeftImage = (left) => ({
    objectFit: 'contain',
    height: "74vh",
});

/* ------------------------------------------------------------------- */
export const MenuBDText = (left) => ({
    borderTop:"0px solid #B2E2F2",
    borderRight:"3px solid #B2E2F2",
    borderBottom:"3px solid #B2E2F2",
    borderLeft:"3px solid #B2E2F2", 
    borderRadius:'2px 2px 12px 12px', 
    margin: '0 10px 10px 0' , 
    padding: '0 40px 25px 40px',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:"rgba(17, 36, 52, 0.9)"
});
export const MenuBDTitleText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "30px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin:'40px 0 0 0'
}
export const MenuBDTextText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "15px",
    color: "#E0E0E0",
}
export const MenuBDLinkText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "25px",
    color: "#B9DEDF",
    overflow:"hidden"
}
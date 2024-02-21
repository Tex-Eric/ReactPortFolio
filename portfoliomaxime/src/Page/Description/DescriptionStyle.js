export const DescriptionVue = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItem: 'center',
    margin: '40px',
    gap:'40px'


}
export const DescriptionComponentLeft = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItem: 'center',

}
/* ------------------------------------------------------------------- */
export const DescriptionImage = (left) => ({
    border:"5px solid #B2E2F2",
    borderRadius: '2px 2px 2px 2px',
    width: '25%',
    display: 'grid',
    gridTemplateColumns: left? "2fr 1fr" : "1fr 2fr",
    gridTemplateRows:"1fr 1fr 1fr",
    padding: "10px",
    gap:"5px",
    backgroundColor:"#10101C"
});
export const DescriptionFirstImage = (left) => ({
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    /* gridColumn: left? "1" : "2", */
    gridColumn: "1/3",
    gridRow:"1/4"
});
export const DescriptionSecondtImage = (gridColumn, left) => ({
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    gridColumn:left? "2" : "1",
    gridRow:`${gridColumn}`
});
/* ------------------------------------------------------------------- */
export const DescriptionText = (left) => ({
    borderTop:"3px solid #B2E2F2",
    borderRight:left? "3px solid #B2E2F2" : "0px solid #B2E2F2",
    borderBottom:"3px solid #B2E2F2",
    borderLeft: left? "0px solid #B2E2F2" : "3px solid #B2E2F2", 
    borderRadius: left? '2px 2px 100px 2px':'2px 2px 2px 100px', 
    margin: left? '40px 40px 40px 0' : '40px 0 40px 40px' , 
    padding: '0 40px 25px 40px',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:"rgba(17, 36, 52, 0.9)"
});
export const DescriptionTitleText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "30px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin:'40px 0 0 0'
}
export const DescriptionTextText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "25px",
    color: "#E0E0E0",
}
export const DescriptionLinkText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "25px",
    color: "#B9DEDF",
    overflow:"hidden"
}
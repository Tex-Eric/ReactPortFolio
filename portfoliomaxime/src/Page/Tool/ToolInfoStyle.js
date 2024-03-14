export const ToolInfoImage = (left) => ({
    border:"5px solid #B2E2F2",
    borderRadius: '2px 2px 2px 2px',
    width: '95%',
    display: 'grid',
    gridTemplateColumns: left? "2fr 1fr" : "1fr 2fr",
    gridTemplateRows:"1fr 1fr 1fr",
    padding: "10px",
    gap:"5px",
    backgroundColor:"#10101C"
});

export const ToolInfoFirstImage = (left) => ({
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    /* gridColumn: left? "1" : "2", */
    gridColumn: "1/3",
    gridRow:"1/4"
});

export const ToolInfoText = (left) => ({
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
export const ToolInfoTextTitle = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "30px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin:'40px 0 0 0'
}
export const ToolInfoTextText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "25px",
    color: "#E0E0E0",
}

export const ToolInfComponentLeft = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItem: 'center',
}
export const ToolInfVue = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItem: 'center',
    margin: '40px',
    gap:'40px'
}
/*Mobile---------------------------------------------------------------------------*/

export const ToolInfoobileImage = (left) => ({
    border:"5px solid #B2E2F2",
    borderRadius: '2px 2px 2px 2px',
    display: 'grid',
    gridTemplateColumns: left? "2fr 1fr" : "1fr 2fr",
    gridTemplateRows:"1fr 1fr 1fr",
    padding: "10px",
    gap:"5px",
    backgroundColor:"#10101C"
});
export const ToolInfoMobileFirstImage = (left) => ({
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    /* gridColumn: left? "1" : "2", */
    gridColumn: "1/3",
    gridRow:"1/4"
});

export const ToolInfoMobileText = (left) => ({
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
export const ToolInfoMobileTextTitle = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "25px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin:'10px 0 0 0'
}
export const ToolInfoMobileTextText = {
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: "15px",
    color: "#E0E0E0",
}

export const ToolInfMobileComponentLeft = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center'
}
export const ToolInfMobileVue = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    margin: '30px 0 30px 0',
    gap:'10px'
}
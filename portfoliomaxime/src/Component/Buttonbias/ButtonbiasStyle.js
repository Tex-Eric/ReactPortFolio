export const ButtonbiasStyleShape = (isHovered, gridColumn=null, gridRow=null, isSkew=false) => ({
    border: isHovered ? '2px solid #FFFF' : '2px solid #B2E2F2',
    borderRadius: '2px 2px 2px 2px',
    boxShadow: '5px 5px 0px #042E4C',
    padding : '2px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    gridColumn: gridColumn? gridColumn : '1',
    gridRow: gridRow? gridRow : '1',
    transform: isSkew? 'skew(-20deg)' : null,
});

export const ButtonbiasStyleShapeActive = ( gridColumn=null, gridRow=null,  isSkew=false) => ({
    border: '2px solid #FFFF',
    borderRadius: '2px 2px 2px 2px',
    transform: isSkew? ' skew(-20deg) scale(0.98)' : 'scale(0.98)',
    padding : '2px',
    position: 'relative',
    overflow: 'hidden',
    gridColumn: gridColumn? gridColumn : '1',
    gridRow: gridRow? gridRow : '1'
})

export const ButtonTypo01Style = (isDesktop) => ({
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: isDesktop ? "20px" : "15px",
    color: "#FFFFFF",
    margin:0,
    padding: '2px 4px 2px 4px'
});
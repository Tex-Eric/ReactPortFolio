export const ButtonbiasStyleShape = (isHovered, gridColumn=null, gridRow=null, isSkew=false) => ({
    border: isHovered ? '2px solid #FFFF' : '2px solid #B2E2F2',
    borderRadius: '2px 2px 2px 2px',
    boxShadow: '5px 5px 0px #042E4C',
    background: "linear-gradient(100deg,rgba(0, 95, 131, 1) 0%, rgba(0, 88, 126, 1) 8%, rgba(0, 62, 110, 1) 43%, rgba(0, 46, 100, 1) 75%, rgba(0, 41, 97, 1) 100%)",
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
    background: "linear-gradient(100deg,rgba(0, 95, 131, 1) 0%, rgba(0, 88, 126, 1) 8%, rgba(0, 62, 110, 1) 43%, rgba(0, 46, 100, 1) 75%, rgba(0, 41, 97, 1) 100%)",
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
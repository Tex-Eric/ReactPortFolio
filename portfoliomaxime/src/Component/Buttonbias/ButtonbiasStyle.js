export const ButtonbiasStyleShape = (isHovered) => ({
    border: isHovered ? '2px solid #FFFF' : '2px solid #B2E2F2',
    borderRadius: '2px 2px 2px 2px',
    boxShadow: '5px 5px 0px #042E4C',
    transform: 'skew(-20deg)',
    padding : '2px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
});

export const ButtonbiasStyleShapeActive = {
    border: '2px solid #FFFF',
    borderRadius: '2px 2px 2px 2px',
    transform: 'skew(-20deg) scale(0.95)',
    padding : '2px',
    position: 'relative',
    overflow: 'hidden'
}

export const ButtonTypo01Style = (isDesktop) => ({
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: isDesktop ? "10px" : "15px",
    color: "#FFFFFF",
    margin:0,
    padding: '2px 4px 2px 4px'
});
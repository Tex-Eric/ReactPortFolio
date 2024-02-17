export const IntroGlobalStyle = (isDesktop) => ({
    display:'flex',
    flexDirection: 'column',
    justifyContent: isDesktop ? "center" :'center',
    alignItems: isDesktop ? "flex-start" :'center',
    gap: isDesktop ? "5px" :'10px',
    margin: isDesktop ? "0 0 0 20px" : 0,
    height: '100vh'
});

export const Typo01Style = (isDesktop) => ({
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: isDesktop ? "20px" : "28px",
    color: "#FFFFFF",
    margin:isDesktop? 0 : '0 0 10px 0'
});

export const Typo02Style =(isDesktop) => ({
    fontFamily: "Electrolize,sans-serif,Arial,Verdana",
    fontSize: isDesktop ? "35px" :"47px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin:0
});
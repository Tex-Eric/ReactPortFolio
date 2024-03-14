import Buttonbias from "../../Component/Buttonbias/Buttonbias";

function InWork({pageIsIntro}){
const message = 'Page en cours de création, merci de patienter.';
const returnWrite = '← retour';

    return (
        <>
        <div style={{width: '100px', padding:'10px'}}>
          <Buttonbias write={returnWrite} newFunction={pageIsIntro} isSkew={true} dimension={1}/>
      </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh',overflow: 'hidden'}}>
            <p style={{fontFamily: "Electrolize,sans-serif,Arial,Verdana", fontSize: "28px", color: "#FFFFFF", margin:'0 0 10px 0'}}>{message}</p>
        </div>
        </>
    );
}
export default InWork;
import RemoteTeamHub from "../../../../assets/RemoteTeamHub.webp"
function Scard1(){
    return(
        <div className="h-[480px] w-[900px]  bg-[#091E42] bg-cover "
             style={{ backgroundImage: `url(${RemoteTeamHub })` }} >
                
        </div>
    )
}
 import RemoteTeamMeeting from "../../../../assets/RemoteTeamMeetings.webp"
export  function Scard2(){
    return(
        <>
           <div className="h-[480px] w-[800px]  bg-[#091E42] bg-cover "
             style={{ backgroundImage: `url(${RemoteTeamMeeting})` }} >
                
        </div>
        </>
    )
}
import RemoteTeamBonding from "../../../../assets/RemoteTeamBonding.webp"
export  function Scard3(){
    return (
        <>
          <div className="h-[480px] w-[1000px]  bg-[#091E42] bg-cover "
             style={{ backgroundImage: `url(${RemoteTeamBonding})` }} >
                
        </div>
        </>
    )
}

export default Scard1
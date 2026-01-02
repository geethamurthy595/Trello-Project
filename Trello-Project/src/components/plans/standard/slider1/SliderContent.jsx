import ProductManagement from "../../../../assets/slide1.png"
function Scard1(){
    return(
        <div className="h-[500px] w-[800px]  bg-[#091E42] bg-cover "
             style={{ backgroundImage: `url(${ProductManagement})` }} >
                
        </div>
    )
}
 import ProjectManagementAgileSprint from "../../../../assets/slide2.png"
export  function Scard2(){
    return(
        <>
           <div className="h-[500px] w-[800px]  bg-[#091E42] bg-cover "
             style={{ backgroundImage: `url(${ProjectManagementAgileSprint})` }} >
                
        </div>
        </>
    )
}
import ProductManagementFeatureRequests from "../../../../assets/slide3.png"
export  function Scard3(){
    return (
        <>
          <div className="h-[500px] w-[800px]  bg-[#091E42] bg-cover "
             style={{ backgroundImage: `url(${ProductManagementFeatureRequests})` }} >
                
        </div>
        </>
    )
}

export default Scard1

import ProductManagement from "../../../../assets/ProductManagement.webp"
function Scard1(){
    return(
        <div className="h-[570px] w-[800px]  bg-[#091E42] "
             style={{ backgroundImage: `url(${ProductManagement})` }} >
                
        </div>
    )
}
 import ProjectManagementAgileSprint from "../../../../assets/ProjectManagementAgileSprint.webp"
export  function Scard2(){
    return(
        <>
           <div className="h-[570px] w-[800px]  bg-[#091E42] "
             style={{ backgroundImage: `url(${ProjectManagementAgileSprint})` }} >
                
        </div>
        </>
    )
}
import ProductManagementFeatureRequests from "../../../../assets/ProductManagementFeatureRequests.jpg"
export  function Scard3(){
    return (
        <>
          <div className="h-[570px] w-[800px]  bg-[#091E42] "
             style={{ backgroundImage: `url(${ProductManagementFeatureRequests})` }} >
                
        </div>
        </>
    )
}

export default Scard1
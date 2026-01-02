import ProductManagement from "../../../../assets/sprint.jpg"
function Scard1(){
    return(
        <div className="h-[570px] w-[800px]  bg-[#091E42] "
             style={{ backgroundImage: `url(${ProductManagement})` }} >
                
        </div>
    )
}
 import ProjectManagementAgileSprint from "../../../../assets/site.jpg"
export  function Scard2(){
    return(
        <>
           <div className="h-[570px] w-[800px]  bg-[#091E42] "
             style={{ backgroundImage: `url(${ProjectManagementAgileSprint})` }} >
                
        </div>
        </>
    )
}
import ProductManagementFeatureRequests from "../../../../assets/software.jpg"
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
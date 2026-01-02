import ContentImg2 from '../../../assets/ContentImg2.webp'
function SignupHero(){
    return(
        <>
          <div className='flex justicy-center pl-13'>
              <div className="h-[380px]  w-100% bg-white  pl-20 pt-10  ">
              <div className=" text-white  flex flex-row justify-start  max-w-6xl ">
         <div> <img src={ContentImg2} alt="Curated Content" className="max-w-2xl h-75 " /></div>
        <div className="border-2  max-w-4xl h-75 pl-5 pt-10" >
           
          <p className=" mb-6 text-[#091E42] font-normal text-[24px]">
           Trello’s boards, lists, and cards enable teams to go from ideas to action in seconds. Visual and easy-to-use, Trello helps teams bring projects to life and keep them moving forward 
          </p>
          <button className="bg-blue-600 text-white-900 font-medium px-6 py-2 rounded-md hover:bg-blue-900 transition">
            Sign up it's free
          </button>
        </div>
        </div>
       </div>

          </div>
        </>
    )
}
export default SignupHero
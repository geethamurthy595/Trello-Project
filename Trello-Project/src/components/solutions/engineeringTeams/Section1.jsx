import secimg from "../../../assets/sec1img.png"

function Section1(){
    return <>
    <div className="h-[355px] pl-[205px] flex gap-10">
        <div>
        <img className="h-[262px] w-[352px]" src={secimg} alt="Signup" />
        </div>
        <div>
            <p className="text-[24px] font-normal h-[126px] w-700px">Trello’s boards, lists, and cards enable teams to go from ideas <br /> to action in seconds. Visual and easy-to-use, Trello helps teams <br /> bring projects to life and keep them moving forward.</p>
            <button className="border-1 rounded-[5px] bg-blue-600 h-[50px] w-[165px] text-white">Sign Up - It's Free</button>
        </div>
    </div>
    </>
}
export default Section1
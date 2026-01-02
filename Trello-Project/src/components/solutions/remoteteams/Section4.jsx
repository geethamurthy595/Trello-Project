import secimg from "../../../assets/sec4img.png"

function Section4(){
    return <>
    <div className="h-[463px] flex pl-[190px] gap-30 mt-20">
            
            <div>
                <h1 className=" w-[500px] text-[36px] font-medium">Dial in on work happening.</h1>
                 <h1 className=" w-[500px] text-[36px] font-medium">across your remote team.</h1>
                <p className="text-[20px] font-normal h-[90px] w-[442px]">Table View allows distributed teams to stay aligned, connected, and productive—no matter where team members fall on the map.</p><br />
                <p className="underline text-[20px] font-normal text-blue-600">Learn more about Trello views</p>
                
            </div>
            <div>
            <img className="h-[304px] w-[540px]" src={secimg} alt="Signup" />
            </div>
        </div>
    </>
}
export default Section4
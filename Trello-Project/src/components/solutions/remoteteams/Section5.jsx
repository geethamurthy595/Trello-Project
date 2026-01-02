import secimg from "../../../assets/sec5img.webp"

function Section5(){
    return <>
    <div className="h-[530px] pl-[190px] flex gap-80">
            <div>
            <img className="h-[370px] w-[370px]" src={secimg} alt="Signup" />
            </div>
            <div>
                <h1 className="h-[96px] w-[442px] text-[36px] font-medium">Power-Ups Your Remote Team</h1><br />
                <p className="text-[20px] font-normal h-[180px] w-[420px]">Use these Power-Ups to achieve a whole new level of virtual collaboration and remote efficiency.</p>
                <p className="underline text-[20px] font-normal text-blue-600">Explore 150+ Power-Ups</p>
            </div>
        </div>
    </>
}
export default Section5
import secimg from "../../../assets/sec4img.webp"

function Section4(){
    return <>
    <div className="h-[463px] flex pl-[190px] gap-30 mt-20">
            
            <div>
                <h1 className="h-[96px] w-[500px] text-[36px] font-medium">Clear the way for more seamless product launches.</h1><br />
                <p className="text-[20px] font-normal h-[90px] w-[442px]">Empower your Product Management team to move projects across the finish line faster and more easily with Timeline View.</p><br />
                <p className="underline text-[20px] font-normal text-blue-600">Learn more about Trello views</p>
                
            </div>
            <div>
            <img className="h-[304px] w-[540px]" src={secimg} alt="Signup" />
            </div>
        </div>
    </>
}
export default Section4
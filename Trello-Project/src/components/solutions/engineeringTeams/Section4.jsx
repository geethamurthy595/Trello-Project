import secimg from "../../../assets/sec4img.png"

function Section4(){
    return <>
    <div className="h-[463px] flex pl-[190px] gap-30">
            
            <div>
                <h1 className="h-[96px] w-[500px] text-[36px] font-medium">Build things better, together, and on time.</h1><br />
                <p className="text-[20px] font-normal h-[90px] w-[442px]">With Timeline View, your Engineering team can easily sync for sprints and align on project deadlines.</p><br />
                <p className="underline text-[20px] font-normal text-blue-600">Learn more about Trello views</p>
                
            </div>
            <div>
            <img className="h-[304px] w-[540px]" src={secimg} alt="Signup" />
            </div>
        </div>
    </>
}
export default Section4
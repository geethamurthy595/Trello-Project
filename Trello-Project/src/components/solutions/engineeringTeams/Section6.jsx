import secimg from "../../../assets/Butler.svg"

function Section6(){
    return <>
    <div className="h-[463px] flex pl-[206px] gap-30">
                
                <div>
                    <h1 className="h-[96px] w-[500px] text-[36px] font-medium">Move Work Forward, Auto-magically</h1><br />
                    <p className="text-[20px] font-normal h-[90px] w-[410px]">Trello’s built-in automation makes it easy to automate the repetitive, everyday tasks that keep your team from focusing on the work that matters most.</p><br /><br />
                    <p className="underline text-[20px] font-normal text-blue-600">Learn more about Trello views</p>
                    
                </div>
                <div>
                <img className="h-[301px] w-[448px]" src={secimg} alt="Signup" />
                </div>
            </div>
    </>
}
export default Section6
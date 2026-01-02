import secimg from "../../../assets/sec5img.png"

function Section5(){
    return <>
    <div className="h-[530px] pl-[190px] flex gap-80">
            <div>
            <img className="h-[370px] w-[370px]" src={secimg} alt="Signup" />
            </div>
            <div>
                <h1 className="h-[96px] w-[442px] text-[36px] font-medium">Power-Up Your Development Process</h1><br />
                <p className="text-[20px] font-normal h-[180px] w-[420px]">Simple, adaptable, customizable. Make Trello your official engineering hub with Power-Ups like Github, Jira, Gitlab, and Custom Fields. Connect your favorite apps and integrations to Trello and gather all of the information you need to get things done under one roof.</p><br />
                <p className="underline text-[20px] font-normal text-blue-600">Explore 150+ Power-Ups</p>
            </div>
        </div>
    </>
}
export default Section5
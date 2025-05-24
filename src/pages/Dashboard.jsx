import ConversationList from "../components/ConversationList"
import UserProfilePanel from "../components/UserProfilePanel";
import ChatWindow from "../components/ChatWindow";
function Dashboard(){
    return(
        <div className="flex flex-col md:flex-row h-screen">
        {/* left pannel */}

        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r">
           <ConversationList/>
        </div>
{/* middle pannel */}
<div className="w-full md:w-2/4 border-b md:border-b-0 md:border-r p-4">
    <UserProfilePanel/> 
</div>
{/* right pannel */}
<div className="w-full md:w-1/4 p-4">
 <ChatWindow/>
</div>
        </div>
 
    )
}

export default Dashboard;
import conversations from "../data/conversations"

function ConversationList(){
    return(
      <div className="h-full overflow-y-auto bg-white p-4 border-r">
        <h1 className="text-lg font-semibold mb-4">Your inbox</h1>
        <div>
<div className="flex justify-between mb-4 text-sm text-gray-500">
  <h2 className="text-sm text-gray-500"> 8 open </h2>
  <h2 className="text-sm text-gray-500"> wating longest</h2>
</div>

<div>

<ul>
{
  conversations.map((conv)=>(
  <li key={conv.id} className="flex gap-3 p-3 hover:bg-gray-100 rounded-lg transition"> 
    <img src={conv.Avtar} alt="avatar" className="w-10 h-10 rounded-full object-cover"/>
    <div  className="flex-1">
      <div className="flex justify-between items-center">
 <h4  className="font-medium text-sm">{conv.name}</h4>
   <p className="text-xs text-gray-400">{conv.time}</p>
      </div>
   
    <p className="text-sm text-gray-600 mt-1 line-clamp-1">{conv.message}</p>
    </div>
  </li>

  ))}
</ul>

</div>

        </div>
      </div>  
    )}

    export default ConversationList;
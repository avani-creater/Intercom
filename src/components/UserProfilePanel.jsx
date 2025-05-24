function UserProfilePanel(){

    return(
        <div>

          <div className="p-4 border-b">
           < h2 className="text-lg font-semibold">John Doe</h2>
           <p className="text-sm text-gray-500">Customer . 5m ago</p>
            </div> 
<div className=" flex-1 overflow-y-auto p-4 space-y-4">
<div className="bg-gray-100 p-3 rounded-lg">
    <p>Hi, I need help resetting my password. Can you assist?</p>
</div>

<div className="bg-blue-100 p-3 rounded-lg self-end max-w-[70%] ml-auto">
<p>Sure! Please check you email for the reset link.</p>
</div>
</div>

<div className="border-t p-4">
    <textarea placeholder="Reply to John..." className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300" row={3}></textarea>

<div className="flex justify-between items-center mt-2">

    <div className="space-x-2 text-sm text-gray-500">
<button  className="hover:text-black"> 📝 Note</button>
<button  className="hover:text-black"> 🎭 Marcos</button>
<button  className="hover:text-black" > 😊 Emoji</button>
    </div>
      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
            Send
          </button>
</div>
</div>

        </div>
    );
}

export default UserProfilePanel;
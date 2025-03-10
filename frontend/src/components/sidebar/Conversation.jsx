import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zuztand/useConversation"

const Conversation = ({conversation, lastIdx}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
     <div 
      className={`flex gap-4 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
      ${isSelected? "bg-sky-500" : ""}
     `}
        onClick={() => setSelectedConversation(conversation)}
     >
        <div className={`avatar ${isOnline? "online" : ""}`}>
            <div className="w-12 rounded-full">
                <img 
                  src={conversation.profilePic} 
                  alt="user avatar" />
            </div>

        </div>
        <div className="flex flex-col flex-1">  
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200"> {conversation.fullName} </p>
                <span className="text-xl"></span>
            </div>
        </div>
     </div>

     {!lastIdx && <div className="divider my-1 py-0 h-1 bg-gray-700 opacity-25 hover:bg-sky-300"/>} 
    </>
  )
}

export default Conversation


// Starter code for this file


// const Conversation = () => {
//     return (
//       <>
//        <div className="flex gap-4 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online ">
//               <div className="w-12 rounded-full">
//                   <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png" alt="user avatar" />
//               </div>
  
//           </div>
//           <div className="flex flex-col flex-1">  
//               <div className="flex gap-3 justify-between">
//                   <p className="font-bold text-gray-200">John Doe</p>
//                   <span className="text-xl">🎃</span>
//               </div>
//           </div>
//        </div>
//        <div className="divider my-1 py-0 h-1 bg-gray-700 opacity-25 hover:bg-sky-300"/> 
//       </>
//     )
//   }
  
//   export default Conversation
  
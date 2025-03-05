import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zuztand/useConversation";

const Message = ({message}) => {
  const {authUser} = useAuthContext();  
  const {selectedConversation}  = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.shouldShake? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`} >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="profile pic" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`} > {message.message} </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-400"> {formatedTime} </div>

    </div>


    // <div className={`chat ${chatClassName}`}>
    //   <div className="chat-image avatar">
    //     <div className="w-10 rounded-full">
    //         <img src={profilePic} alt="chat avatar" />
    //     </div>
    //   </div>
    //   <div className="chat-header text-xs text-gray-400">
    //     John
    //     <time className="text-xs opacity-50"> 12:46 </time>
    //   </div>
    //   <div className={`chat-bubble text-white ${bubbleBgColor}`}> {message.message} </div>
    //   <div className="chat-footer opacity-50 text-xs text-gray-400">Seen at 12:46</div>
    // </div>
  );
};

export default Message;

// Starter code for this file


// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//             <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png" alt="chat avatar" />
//         </div>
//       </div>
//       <div className="chat-header text-xs text-gray-400">
//         John
//         <time className="text-xs opacity-50"> 12:46 </time>
//       </div>
//       <div className="chat-bubble">Message</div>
//       <div className="chat-footer opacity-50 text-xs text-gray-400">Seen at 12:46</div>
//     </div>
//   )
// }

// export default Message
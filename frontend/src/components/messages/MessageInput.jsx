import { BsSendFill } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {

  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input 
          type="text" 
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-200 text-gray-800" 
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}  
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 border-gray-600 text-gray-800 mt-2">
          {loading? <div className="loading loading-spinner"></div> : <BsSendFill />}
          
        </button>
      </div>

    </form>
  )
}

export default MessageInput

// Starter code for this file

// import { BsSendFill } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full relative">
//         <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-200 text-gray-800" placeholder="Type your message"/>
//         <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 border-gray-600 text-gray-800 mt-2">
//           <BsSendFill />
//         </button>
//       </div>

//     </form>
//   )
// }

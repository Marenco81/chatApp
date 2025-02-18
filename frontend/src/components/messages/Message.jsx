
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png" alt="chat avatar" />
        </div>
      </div>
      <div className="chat-header text-xs text-gray-400">
        John
        <time className="text-xs opacity-50"> 12:46 </time>
      </div>
      <div className="chat-bubble">Message</div>
      <div className="chat-footer opacity-50 text-xs text-gray-400">Seen at 12:46</div>
    </div>
  )
}

export default Message

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
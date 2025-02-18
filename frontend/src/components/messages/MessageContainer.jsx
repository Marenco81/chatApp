import MessageInput from "./MessageInput"
import Messages from "./Messages"


const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
      {/* Header */}
        <div className="bg-slate-200 p-4 py-2 mb-2">
          <span className="label-text">To: </span>
          <span className="text-gray-900 font-bold"> John Doe</span>
        </div>
        <Messages></Messages>
        <MessageInput></MessageInput>
      </>
    </div>
  )
}

export default MessageContainer
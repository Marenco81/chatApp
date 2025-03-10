import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation"

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log('CONVERSATIONS: ', conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">

      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />  
      ))}

      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
      
      {/* <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation> */}
    </div>
  )
}

export default Conversations


// Starter code for this file

// import Conversation from "./Conversation"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation></Conversation>
//       <Conversation></Conversation>
//       <Conversation></Conversation>
//       <Conversation></Conversation>
//       <Conversation></Conversation>
//       <Conversation></Conversation>
//     </div>
//   )
// }

// export default Conversations

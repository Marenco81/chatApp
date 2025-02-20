import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r border-gray-300 p-2 flex flex-col">
      <SearchInput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar

// Starter code for this file

// import Conversations from "./Conversations"
// import LogoutButton from "./LogoutButton"
// import SearchInput from "./SearchInput"

// const Sidebar = () => {
//   return (
//     <div className="border-r border-gray-300 p-2 flex flex-col">
//       <SearchInput/>
//       <div className="divider px-3"></div>
//       <Conversations/>
//       <LogoutButton/>
//     </div>
//   )
// }

// export default Sidebar

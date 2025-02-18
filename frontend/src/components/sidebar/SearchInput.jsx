import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
      <GoSearch className="w-6 h-6 outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput


//Starter code for this file

// import { GoSearch } from "react-icons/go";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
//       <button className="btn btn-circle bg-sky-500 text-white" type="submit">
//       <GoSearch className="w-6 h-6 outline-none"/>
//       </button>
//     </form>
//   )
// }

// export default SearchInput

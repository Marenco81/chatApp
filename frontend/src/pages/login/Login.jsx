
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0" >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
           Login 
           <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text text-gray-300">Username</span>
                </label>
                <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-gray-100" />
            </div>

            <div>
                <label className="label">
                    <span className="text-base label-text text-gray-300">Password</span>
                </label>
                <input 
                    type="password"
                    placeholder="Enter password"
                    className="w-full input input-bordered h-10 bg-gray-100" 
                />
            </div>


            <div>
                <button className="btn btn-block btn-sm mt-8">Login</button>
            </div>

            <a href="#" className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-4 flex justify-end">{"Don't"} have an account?</a>

        </form>
      </div>
    </div>
  )
}

export default Login



// Starter Code for this file

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0" >
//           <h1 className="text-3xl font-semibold text-center text-gray-500">
//              Login 
//              <span className="text-blue-500"> ChatApp</span>
//           </h1>
  
//           <form>
//               <div>
//                   <label className="label p-2">
//                       <span className="text-base label-text text-gray-500">Username</span>
//                   </label>
//                   <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-gray-100" />
//               </div>
  
//               <div>
//                   <label className="label">
//                       <span className="text-base label-text text-gray-500">Password</span>
//                   </label>
//                   <input 
//                       type="password"
//                       placeholder="Enter password"
//                       className="w-full input input-bordered h-10 bg-gray-100" 
//                   />
//               </div>
  
//               <a href="#" className="text-sm text-gray-500 hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account?</a>
  
//               <div>
//                   <button className="btn btn-block btn-sm mt-2">Login</button>
//               </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
  
//   export default Login
  

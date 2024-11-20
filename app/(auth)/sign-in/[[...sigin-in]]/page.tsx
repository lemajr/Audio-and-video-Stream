'use client'

import { SignIn } from "@clerk/nextjs";


const Signin = () => {
 return (
 <div className="flex justify-center items-center h-full">
   <SignIn />
 </div>
 )
};

export default Signin;

'use client';

import { SignIn } from "@clerk/nextjs";


// const Signin = () => {
//  return (
//  <div className="flex justify-center items-center h-full bg-red-500">
//    <SignIn />
//  </div>
//  )
// };

// export default Signin;



import React from "react";
// import { IconAppWindow } from "@tabler/icons-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";


const page = () => {
  return (
    <div className="flex justify-center items-center h-full">
    <BackgroundGradient className="rounded-2xl bg-white dark:bg-zinc-900">
      <SignIn />

    </BackgroundGradient>
  </div>
  )
}

export default page
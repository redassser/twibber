import Link from "next/link"
import React from "react"

import LeftSidebar from "@/components/leftSidebar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar */}
        <LeftSidebar/>
        {/* Infinite Scroll */}
        <main className="ml-[275px] flex w-[600px] h-full flex-col border-l border-r border-gray-600">
          <h1 className="text-2xl font-bold">Home</h1>
        </main>
        {/*  */}
        <section></section>
      </div>
    </div>
  )
}
export default Home;
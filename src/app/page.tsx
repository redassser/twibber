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
        <main className="ml-[275px] flex w-[600px] h-full flex-col border-l-[0.5px] border-r-[0.5px] border-grey-600">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-grey-600 h-32 relative">
            <div className="h-10 w-10 bg-white-400 rounded-full"></div>
            <div className="flex flex-col">
              <input 
                type="text"
                className="w-full h-full bg-transparent outline-none border-none border-b-[0.5px] border-grey-600 p-4" 
                placeholder="What's happening?"
              />
              <div className="w-full flex justify-between items-center">
                <div></div>
                <div className="w-full w-max-[100px]">
                  <button className="font-bold rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-80 transition duration-200">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/*  */}
        <section></section>
      </div>
    </div>
  )
}
export default Home;
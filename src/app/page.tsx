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
        <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[2px] border-r-[2px] border-stone-800">
          <h1 className="text-2xl font-bold p-6">Home</h1>
          <div className="border-t-[2px] border-b-[2px] flex items-stretch space-x-2 px-3 py-3 border-stone-800 relative">
            <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col w-full h-full">
              <input 
                type="text"
                className="w-full h-full bg-trans text-xl placeholder:text-gray-400 outline-none border-none border-b-[0.5px] border-gray-600 p-4" 
                placeholder="What is happening?!"
              />
              <div className="w-full flex justify-between items-center">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="font-bold rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-80 transition duration-200">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({ length: 5 }).map((_,i) => (
                <div key={i} className="border-t-[2px] border-b-[2px] px-4 flex space-x-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"/>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-1">
                      <div>pie</div>
                      <div>@byebyepiepie</div>
                      <div>•</div>
                      <div></div>
                    </div>
                    <div className="text-white text-sm">
                      lorem140
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl">

                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        {/*  */}
        <section></section>
      </div>
    </div>
  )
}
export default Home;
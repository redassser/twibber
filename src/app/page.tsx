import Link from "next/link"
import React from "react"
import {
  BiLogoTwitter, BiSolidHomeAlt2, BiSolidBulb, BiSolidBell,
  BiSolidChat, BiSolidDetail, BiSolidBookmark,
  BiDotsHorizontalRounded, BiSolidUserAccount
} from "react-icons/bi"

const navItems = [
  { title: "", icon: BiLogoTwitter, exclude: true},
  { title: "Home", icon: BiSolidHomeAlt2 },
  { title: "Explore", icon: BiSolidBulb },
  { title: "Notifications", icon: BiSolidBell },
  { title: "Messages", icon: BiSolidChat },
  { title: "Lists", icon: BiSolidDetail },
  { title: "Bookmarks", icon: BiSolidBookmark },
  { title: "Profile", icon: BiSolidUserAccount },
  { title: "More", icon: BiDotsHorizontalRounded },
]

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar */}
        <section className="fixed w-275px flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-screen space-y-4 mt-4">
            {navItems.map((item) => (
              <Link className="hover:bg-white/10 text-xl transition duration-200 rounded-3xl py-2 px-6 flex items-center justify-start w-fit space-x-6" href={"/"+item.title.toLowerCase()} key={item.title}>
                <div><item.icon /></div>
                {!item.exclude && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="w-full rounded-full bg-primary p-4 text-xl text-center hover:bg-opacity-80 transition duration-200">Tweet</button>
          </div>
          <button className="flex items-center space-x-2 m-4 rounded-full p-4 w-full justify-between text-xl text-cetner hover:bg-white/10 transition duration-200">
            <div className="flex items-center space-x-2">
              <div className="rounded-full w-10 h-10 bg-white"></div>
              <div className="text-left">
                <div className="text-sm font-semibold">pie</div>
                <div className="text-xs">@byebyepiepie</div>
              </div>
            </div>
            <div><BiDotsHorizontalRounded/></div>
          </button>
        </section>
        {/* Infinite Scroll */}
        <main></main>
        {/*  */}
        <section></section>
      </div>
    </div>
  )
}
export default page;
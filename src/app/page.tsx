import Link from "next/link"
import React from "react"
import {
  BiLogoTwitter, BiSolidHomeAlt2, BiSolidBulb, BiSolidBell,
  BiSolidChat, BiSolidDetail, BiSolidBookmark,
  BiSolidHappy, BiSolidBadgeCheck, BiSolidUserAccount, BiSolidRuler
} from "react-icons/bi"

const navItems = [
  { title: "Home", icon: BiSolidHomeAlt2 },
  { title: "Explore", icon: BiSolidBulb },
  { title: "Notifications", icon: BiSolidBell },
  { title: "Messages", icon: BiSolidChat },
  { title: "Lists", icon: BiSolidDetail },
  { title: "Bookmarks", icon: BiSolidBookmark },
  { title: "Communities", icon: BiSolidHappy },
  { title: "Verified", icon: BiSolidBadgeCheck },
  { title: "Profile", icon: BiSolidUserAccount },
  { title: "More", icon: BiSolidRuler },
]

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar */}
        <section className="fixed w-72 flex flex-col">
          <Link href={"/"} className="my-4"><BiLogoTwitter/></Link>
          {
            navItems.map((items) => (
              <Link className="bg-white/50 rounded-3xl p-4 flex items-center justify-center space-x-2" href={"/"+items.title.toLowerCase()} key={items.title}>
                <div><items.icon /></div>
                <div>
                  {
                    items.title
                  }
                </div>
              </Link>
            ))
          }
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
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { LuPlus } from "react-icons/lu"
import { MdOutlineLibraryMusic } from "react-icons/md"
import { FaTrash } from "react-icons/fa"

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <aside className={`fixed left-2 top-15 bg-background w-75 rounded-lg h-[90vh] p-2 overflow-y-auto transition-transform duration-500 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between text-primary-text items-center p-2 mb-4">
          <h2 className="font-bold">Your library</h2>
          <Link href="/upload-song">
            <LuPlus size={20} />
          </Link>
        </div>
        <div>
          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover relative group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image src="/images/cover-1.jpeg" alt="cover 1" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
            <div>
              <p className="text-primary-text font-semibold">Midnight Echoes</p>
              <p className="text-secondary-text text-sm">By Neon Skyline</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover relative group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image src="/images/cover-1.jpeg" alt="cover 1" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
            <div>
              <p className="text-primary-text font-semibold">Midnight Echoes</p>
              <p className="text-secondary-text text-sm">By Neon Skyline</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover relative group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image src="/images/cover-1.jpeg" alt="cover 1" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
            <div>
              <p className="text-primary-text font-semibold">Midnight Echoes</p>
              <p className="text-secondary-text text-sm">By Neon Skyline</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover relative group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image src="/images/cover-1.jpeg" alt="cover 1" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
            <div>
              <p className="text-primary-text font-semibold">Midnight Echoes</p>
              <p className="text-secondary-text text-sm">By Neon Skyline</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover relative group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image src="/images/cover-1.jpeg" alt="cover 1" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
            <div>
              <p className="text-primary-text font-semibold">Midnight Echoes</p>
              <p className="text-secondary-text text-sm">By Neon Skyline</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover relative group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image src="/images/cover-1.jpeg" alt="cover 1" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
            <div>
              <p className="text-primary-text font-semibold">Midnight Echoes</p>
              <p className="text-secondary-text text-sm">By Neon Skyline</p>
            </div>
          </div>
        </div>
      </aside>
      <button 
        className="fixed bottom-5 left-5 bg-background w-12 h-12 lg:hidden grid place-items-center text-white rounded-full z-50 cursor-pointer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MdOutlineLibraryMusic />
      </button>
    </div>
  )
}

export default Sidebar
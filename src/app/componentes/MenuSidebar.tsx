import {Home as HomeIcon, Search, Library } from 'lucide-react'
export function MenuSidebar () {
    return (
        <nav className=' space-y-5 mt-10'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <HomeIcon/>
        Home
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search/>
          Search</a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Library/>
          Your Library</a>
      </nav>
    )
}
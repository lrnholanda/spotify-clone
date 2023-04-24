
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight} from 'lucide-react'

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>
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
        <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Transcender</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Agape vibes</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Nostalgia 2000 - 10</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>ethereal voices</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sisyphus</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Chorinho</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Salada de frutas</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Neo-Psychedelic Rock</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Adhd</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>From nice guys</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Fellin' Good</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Psicodélicos legais para flutuar</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Alternative 90s</a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button  className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
        </div>
      </main>
    </div>
    <footer className="bg-zinc-800 border-zinc-700 p-6">
      footer
    </footer>
   </div>
  )
}

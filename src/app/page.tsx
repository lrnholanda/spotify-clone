
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat2} from 'lucide-react'
import Image from 'next/image'

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
        <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
        <div className='grid grid-cols-3 gap-4 mt-6'>
          <a className='bg-white/10 group rounded  flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/images/disco1.jpg" width={104} height={104} alt="capa do album"/>
              <strong>Salada de Frutas</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          <a className='bg-white/10 group rounded  flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/images/disco02.jpg" width={104} height={104} alt="capa do album"/>
          <strong>random songs</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
          </a>
          <a className='bg-white/10 group rounded flex items-center  gap-4  overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/images/disco3.jpg" width={104} height={104} alt="capa do album"/>
          <strong>Sisyphus</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
          </a>
          <a className='bg-white/10 group rounded  flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/images/disco02.jpg" width={104} height={104} alt="capa do album"/>
          <strong>Transcender</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
            </button>
          </a>
          <a className='bg-white/10 group rounded  flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/images/disco1.jpg" width={104} height={104} alt="capa do album"/>
          <strong>brasilidade</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
          </a>
          <a className='bg-white/10 group rounded flex items-center  gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/images/disco04.jpg" width={104} height={104} alt="capa do album"/>
          <strong>Nice Guys</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
          </a>
        </div>

        <h1 className='font-semibold text-2xl mt-10'>Made for Lorena Holanda</h1>
        <div className='grid grid-cols-8 gap-4 mt-4'>
          <a className='bg-white/5 p-3 rounded-md  flex flex-col gap-2  hover:bg-white/10'>
          <Image src="/images/disco1.jpg" className='w-full' width={120} height={120} alt="capa do album"/>
          <strong className='font-semibold'>Daily Mix 1</strong>
          <span className='text-sm text-zinc-500'>bôa, Weyes Blood, FKA twigs e mais</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images/disco1.jpg" className='w-full' width={120} height={120} alt="capa do album"/>
          <strong className='font-semibold'>Daily Mix 2</strong>
          <span className='text-sm text-zinc-500'>PJ Harvey, Banda Eddie, Paramore e mais</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images/disco1.jpg" className='w-full' width={120} height={120} alt="capa do album"/>
          <strong className='font-semibold'>Daily Mix 3</strong>
          <span className='text-sm text-zinc-500'>Fleet Foxes, Andrew Bird e mais</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images/disco1.jpg" className='w-full' width={120} height={120} alt="capa do album"/>
          <strong className='font-semibold'>Daily Mix 4</strong>
          <span className='text-sm text-zinc-500'>Academia da Berlinda, BaianaSystem e mais</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images/disco1.jpg" className='w-full' width={120} height={120} alt="capa do album"/>
          <strong className='font-semibold'>Daily Mix 5</strong>
          <span className='text-sm text-zinc-500'>Fleet Foxes, Andrew Bird e mais</span>
          </a>
        </div>
      </main>
    </div>
    <footer className="bg-zinc-800 border-zinc-700 p-6">
      <div className='flex items-center gap-3'>
      <Image src="/images/disco1.jpg" width={56} height={56} alt="capa do album"/>
      <div className='flex flex-col'>
        <strong className='font-normal'>Dorival</strong>
        <span className='text-xs text-zinc-400'>Academia da Berlinda</span>
      </div>
      </div>
      <div className='flex flex-col items-center'>
        <div>
        <Shuffle/>
        <SkipBack/>
        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto mr-8'>
                <Play/>
        </button>
        <SkipForward/>
        </div>
      </div>
      <div></div>
    </footer>
   </div>
  )
}

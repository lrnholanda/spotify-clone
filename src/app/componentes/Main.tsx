import {ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
export function Main () {
    return (
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
    )
}
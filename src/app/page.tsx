
import { Sidebar } from './componentes/Sidebar'
import { Footer } from './componentes/Footer'
import { Main } from './componentes/Main'

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
       <Sidebar/>
      <Main/>
    </div>
     <Footer/>
   </div>
  )
}


import { PlaylistSidebar } from './PlaylistSidebar'
import { MenuSidebar } from './MenuSidebar'
import { Buttons } from './Buttons'
export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
         <Buttons/> 
         <MenuSidebar/>
         <PlaylistSidebar/>
      </aside>
    )
}
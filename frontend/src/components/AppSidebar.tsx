import { Brain, FileText,Headphones,LayoutGrid, Video, XIcon, Image } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import {
  Avatar,
  AvatarFallback,
} from "./ui/avatar"


const navItems = [
  {label: "All Notes", icon: LayoutGrid, type: "all"},
  {label: "Articles", icon: FileText, type: "article"},
  {label: "Tweets", icon: XIcon, type: "tweet"},
  {label: "Youtube", icon: Video, type: "youtube"},
  {label: "Images", icon: Image, type: "image"},
  {label: "Audio", icon: Headphones, type: "audio"},
]

interface AppSidebarProps {
  activeFilter: string;
  setActiveFilter: (type: string) => void;
  name?: string;
  email?: string;
}


export default function AppSidebar({activeFilter, setActiveFilter, name, email}: AppSidebarProps){
  return(
    <div>
      <Sidebar collapsible="offcanvas" className="border-2">

        <SidebarHeader className="p-6 border-b-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Brain className="w-4 text-black" />
            </div>
            <span className="font-black text-lg tracking-tight">
              Second <span className="text-yellow-500">Brain</span>
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeFilter === item.type;
                  return(
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton 
                        onClick={() => setActiveFilter(item.type)} 
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm border-2 transition-all cursor-pointer
                          ${isActive
                            ? "bg-yellow-400 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black"
                            : "border-transparent hover:border-black hover:bg-yellow-50 text-neutral-600"
                          }
                        `}
                      >
                        
                        <Icon />
                        {item.label}
                        
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t-2">
          <div className="flex items-center gap-3 px-2">
            <div>
              <Avatar className="h-10 w-10 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AvatarFallback className="text-black font-extrabold">
                  {name && name.length!==0 ? name[0].toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="font-black text-sm">
                {name}
              </p>
              <p className="text-xs text-neutral-700">{email}</p>
            </div>
          </div>
          
        </SidebarFooter>

      </Sidebar>
    </div>
  )
}
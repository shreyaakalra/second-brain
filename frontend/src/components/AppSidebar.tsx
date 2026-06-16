import { Brain,LayoutGrid, Video, XIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import {
  Avatar,
  AvatarFallback,
} from "./ui/avatar"


export default function AppSidebar(){
  return(
    <div>
      <Sidebar>

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

                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full h-12 flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm border-2 transition-all cursor-pointer">
                    <LayoutGrid />
                    All Notes
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full h-12 flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm border-2 transition-all cursor-pointer">
                    <Video />
                    Youtube
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full h-12 flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm border-2 transition-all cursor-pointer">
                    <XIcon />
                    Tweets
                  </SidebarMenuButton>
                </SidebarMenuItem>

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t-2 border-black/50">
          <div className="flex items-center gap-3 px-2">
            <div>
              <Avatar className="h-10 w-10 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AvatarFallback className="text-black font-extrabold">
                  U
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="font-black text-sm">abcd</p>
              <p className="text-xs text-neutral-700">abcd@gmail.com</p>
            </div>
          </div>
          
        </SidebarFooter>

      </Sidebar>
    </div>
  )
}
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export default function Dashboard(){
  return(
    <SidebarProvider>

      <div className="flex h-screen w-full bg-neutral-50 overflow-hidden">

        <AppSidebar />

        <div>

          <header className="flex items-center gap-4 px-6 py-4 bg-white">

            <SidebarTrigger className="border-2 border-black rounded-lg p-1.5 hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

            <div>
              <Search />
            </div>

          </header>

        </div>

      </div>

    </SidebarProvider>
  )
}
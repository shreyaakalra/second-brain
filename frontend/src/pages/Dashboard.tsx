import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";

export default function Dashboard(){
  return(
    <SidebarProvider>

      <div className="flex h-screen w-full bg-neutral-50 overflow-hidden">

        {/* left sidebar div */}
        <AppSidebar />

        {/* Header div */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Header - sidebar opener + search bar + Add content button */}
          <header className="flex items-center gap-4 px-6 py-4 bg-white">

            <SidebarTrigger className="border-2 border-black rounded-lg p-1.5 hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />

            {/* contains Search Icon and Search Bar */}
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                placeholder="Search your brain..."
                className="w-full pl-9 pr-4 py-2 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Add Content Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-auto flex flex-row items-center gap-2 border-2 border-black rounded-xl px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-yellow-400 hover:bg-yellow-500 transition-all font-black text-sm "
            >
              <Plus className="w-4 h-4" />
              Add Content
            </motion.button>

          </header>

        </div>

        

      </div>

    </SidebarProvider>
  )
}
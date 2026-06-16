import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard(){
  return(
    <div>
      <SidebarProvider>
        <div>
          <AppSidebar />
        </div>
      </SidebarProvider>
    </div>
  )
}
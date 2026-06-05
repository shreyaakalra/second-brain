import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"



export default function AppSidebar() {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar()

    return (
        <SidebarProvider>
            <Sidebar variant="sidebar">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            Application
                        </SidebarGroupLabel>
                        <SidebarGroupAction>
                            <Plus /> <span className="sr-only">Add Project</span>
                        </SidebarGroupAction>
                        <SidebarGroupContent></SidebarGroupContent>
                        </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    )
}
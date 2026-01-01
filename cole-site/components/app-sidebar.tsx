import { ThemeToggle } from "./ui/theme-toggle"
import { Home, Settings, SquareActivity, FolderGit, Contact, Mail, Github, Linkedin, Phone } from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
  {
    title: "Recent Activity",
    url: "",
    icon: SquareActivity,
  },
  {
    title: "Projects",
    url: "",
    icon: FolderGit,
  },
  {
    title: "About Me!",
    url: "",
    icon: Contact,
  },
  {
    title: "Tutorials -> Coming Soon!",
    url: "",
    icon: Settings,
  },
]

const contactItems = [
  {
    title: "Email",
    url: "",
    icon: Mail
  },
  {
    title: "LinkedIn",
    url: "",
    icon: Linkedin
  },
  {
    title: "Github",
    url: "",
    icon: Github
  }
]

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <div className="flex flex-col gap-2 h-full p-2">
        {/* Top Section -> Navigation / buttons */}
        <div className="bg-sidebar border border-sidebar-border rounded-lg shadow-sm flex-1 overflow-hidden">
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="text-[#1c64b0] dark:text-white hover:text-[#1c64b0] dark:hover:text-white [&_svg]:text-[#1c64b0] [&_svg]:dark:text-white [&:hover_svg]:text-[#1c64b0] [&:hover_svg]:dark:text-white">
                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </div>
       {/* Bottom Section -> Contact Info */}
        <div className="bg-gradient-to-br from-[#2874c9] to-[#0f4178] border border-[#0f4178] rounded-lg shadow-sm">
            <SidebarFooter className="p-4 h-55 flex flex-col justify-between">
                <SidebarGroupContent>
                  <SidebarGroupLabel className="text-white">Contact Me</SidebarGroupLabel>
                  <SidebarMenu>
                    {contactItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className="text-white hover:text-[#1c64b0] hover:bg-white [&_svg]:text-white [&:hover_svg]:text-[#1c64b0]"
                        >
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                </SidebarGroupContent>
                <div className="flex justify-end">
                    <ThemeToggle className="text-white border-white/30 hover:bg-white/10 hover:border-white/50"/>
                </div>
            </SidebarFooter>
        </div>
      </div>
    </Sidebar>
  )
}
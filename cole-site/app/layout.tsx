import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from 'next/font/local';

const panchang = localFont({
  src: [
    {
      path: '../fonts/Panchang-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Panchang-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Panchang-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Panchang-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Panchang-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Panchang-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Panchang-Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-panchang',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={panchang.variable}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full bg-[#ddad0]">
            {/*<SidebarTrigger /> */}
            {children}
          </main>
        
        </ThemeProvider>
      </body>
    </html>
  )
}
"use client"
// import { usePathname } from "next/navigation";
import Navbar from '../components/Navbar';
import "@/plugins/fontawesome/css/all.min.css"
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div className="overflow-hidden">
          
          <div
          // key={pathname}
          // initial={{y: 500, opacity: 0 }}
          // animate={{y: 0, opacity: 1}}
          // exit={{y: 500, opacity: 0}}
          // transition={{ 
          //   type:'spring',
          //   damping:15,
          //   stiffness:120
          // }}
          >
            {children}
            <Navbar/>
          </div>  
        </div>
      </body>
    </html>
  );
}

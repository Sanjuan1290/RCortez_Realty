
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <Header isMobile={isMobile}/>
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}
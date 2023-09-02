import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Testimonials from "../components/Testimonials"
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {

    const [navbar, setNavbar] = useState(false)

    var scrollpos = window.scrollY;
    useEffect(()=>{
        window.addEventListener('scroll', function(){ 
            //Here you forgot to update the value
            scrollpos = window.scrollY;
        
            if(scrollpos > 100){
                setNavbar(true)
            }
            else {
                setNavbar(false)
                
            }
        })
        
    }, [])

  return (
    <div className=' bg-white min-h-screen h-[300vh]'>
        <Navbar navbar={navbar}/>
        <HeroSection/>
        <Testimonials/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home
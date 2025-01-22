import { useState } from "react"
import {motion,stagger, animate} from "motion/react"


export function Logo(){
    return <a href="/" className="flex items-center">
              <img src="/brandboy.jpg" className="w-[2rem] h-[2rem]" />
              <p className="font-medium font-lexend text-2xl">BRANDBOY</p>
            </a>
}

export function Navigation({pages=[]}){
    return <div className="flex w-[50%] justify-between">
                {
                    pages.map(function(aPage){
                        return <ANavLink title={aPage.title} link={aPage.link} key={aPage.title}/>
                    })
                }
            </div>
}

function ANavLink({title,link}){
    return <a href={link} className="no-underline font-lexend font-light text-sm">
             {title}
           </a>
}

export function Hamburger(){

    const [darkenBackground,setDarkenBackground] = useState(false);

    function handleHoverStart(){
        setDarkenBackground(()=>true);
        animate(".hamburger-line",{width:"100%",transition:{duration:0.5}},{delay:stagger(0.1)})
    }
    function handleHoverEnd(){
        setDarkenBackground(()=>false);
        animate(".hamburger-line",{width:"0%",transition:{duration:0.5}},{delay:stagger(0.1)})
    }

    return <motion.div  onHoverStart={()=>{handleHoverStart()}} onHoverEnd={()=>{handleHoverEnd()}} className="bg-white flex flex-col h-[3rem] justify-around p-4 relative">
                <motion.div initial={{width:"0%"}} animate={(darkenBackground?{width:"100%",opacity:1,transition:{duration:0.5}}:{width:"0%",opacity:0,transition:{duration:0.5}})} className="absolute z-0 h-full bg-black right-0"></motion.div>
                <OneHamburgerLine animate={darkenBackground}/>
                <OneHamburgerLine animate={darkenBackground}/>
                <OneHamburgerLine animate={darkenBackground}/>
           </motion.div>
}

function OneHamburgerLine(){
    return <motion.div className=" bg-black w-[1rem] h-[0.15rem] relative z-[1] ">
                <motion.div initial={{width:"0%"}}  className="hamburger-line bg-white h-full ">

                </motion.div>
            </motion.div>
}
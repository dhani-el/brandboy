import {  useEffect, useState } from "react"
import {motion,stagger, animate,useScroll,useMotionValue,useMotionValueEvent} from "motion/react"
import MenuImage from "../assets/Images/menuImage.jpg"
import landingVideo from "../assets/videos/video-cuisiniste-lyon-italian-kitchen.mp4"


export function Pinned({children,height}){

    return <div id="pinnedElement" style={{height}} className={` w-full flex justify-center `}>
                <div className="top-0 left-0 sticky h-[100vh] w-full">
                    {children}
                </div>

    </div>
}

export function Top(){

    return <Pinned height={"200vh"}>
            <Header/>
            <MenuComponent/>
            <Attraction/>
            <Hamburger/>
          </Pinned>
}

export function Header(){
    const [animateState,setanimateState] = useState("default")
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        switch(true){
            case latest > 100:{
                setanimateState("animateIn")
            }
            break;
            case latest < 100:{
                setanimateState("animateOut")
            }
        }
      })

      const animateIn = {height:"0px",opacity:0,transition:{ease:"easeIn",duration:0.5}}
      const animateOut = {height:"100%",opacity:1,transition:{ease:"easeIn",delay:0.5,duration:0.5}}
      const variants = {animateIn,animateOut}

    return <div id="header" className=" relative z-[1]  w-full flex items-center justify-center px-6 py-8">
                <motion.div initial={false} variants={variants} animate={animateState} id="header-bg" className="w-full h-full bg-slate-100 absolute top-0 left-0 ">
                </motion.div>
                <Logo/>
  </div>
}

export function Logo(){
    const [animateState,setanimateState] = useState("default")
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        switch(true){
            case latest > 100:{
                setanimateState("animateIn")
            }
            break;
            case latest < 100:{
                setanimateState("animateOut")
            }
        }
      })

      const animateIn = {opacity:0,transition:{ease:"easeIn",delay:0.5,duration:0.8}}
      const animateOut = {opacity:1,transition:{ease:"easeIn",duration:0.5}}
      const variants = {animateIn,animateOut}
    return <motion.a initial={false} variants={variants} animate={animateState} href="/" id="logo" className="flex items-center fixed top-[1rem] ">
              <img src="/brandboy.jpg" className="w-[2rem] h-[2rem]" />
              <p className="font-medium font-lexend md:text-2xl">BRANDBOY</p>
            </motion.a>
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
    const [openMenu,setOpenMenu] = useState(false);

    function handleHoverStart(){
        setDarkenBackground(()=>true);
        animate(".hamburger-line",{width:"100%",transition:{duration:0.5}},{delay:stagger(0.1)})
    }

    function handleHoverEnd(){
        setDarkenBackground(()=>false);
        animate(".hamburger-line",{width:"0%",transition:{duration:0.5}},{delay:stagger(0.1)})
    }

    function handleClick(){
        setOpenMenu(init=>!init)
    }

    function transitionToMenu(){
        animate("#line2",{opacity:0, transition:{duration:0.2}});
        animate("#line1",{y:"0.2rem",scaleX:1.2,scaleY:1.5, transition:{duration:0.5}});
        animate("#line3",{y:"-0.45rem",scaleX:1.2,scaleY:1.5, transition:{duration:0.5}});
        animate("#line1",{rotate:"140deg", transition:{duration:0.5}});
        animate("#line3",{rotate:"-140deg", transition:{duration:0.5}});
        animate("#menu",{display:"flex",opacity:1,height:"100vh", transition:{duration:0.5,ease:""}});
    }

    function transitionFromMenu(){
        animate("#line1",{y:"0rem",scaleX:1,scaleY:1, transition:{duration:0.5}})
        animate("#line3",{y:"0rem",scaleX:1,scaleY:1, transition:{duration:0.5}})
        animate("#line1",{rotate:"0deg", transition:{duration:0.5}})
        animate("#line3",{rotate:"0deg", transition:{duration:0.5}})
        animate("#line2",{opacity:1, transition:{duration:0.2}})
        animate("#menu",{display:"none",opacity:0,height:"0%", transition:{duration:0.5}})
    }

    useEffect(()=>{
        openMenu?transitionToMenu():transitionFromMenu()
    },[openMenu])

    return <motion.div onClick={handleClick}  onHoverStart={()=>{handleHoverStart()}} onHoverEnd={()=>{handleHoverEnd()}} className="fixed right-[2rem] top-[0.5rem] bg-white flex flex-col h-[3rem] justify-around p-4  z-10">
                <motion.div initial={{width:"0%"}} animate={(darkenBackground?{width:"100%",opacity:1,transition:{duration:0.5}}:{width:"0%",opacity:0,transition:{duration:0.5}})} className="absolute z-0 h-full bg-black right-0"></motion.div>
                <OneHamburgerLine id={"line1"}  animate={darkenBackground}/>
                <OneHamburgerLine id={"line2"} animate={darkenBackground}/>
                <OneHamburgerLine id={"line3"} animate={darkenBackground}/>
           </motion.div>
}

function OneHamburgerLine({id}){
    return <motion.div id={id} className=" bg-black w-[1rem] h-[0.15rem] relative z-[1] ">
                <motion.div initial={{width:"0%"}}  className="hamburger-line bg-white h-full ">

                </motion.div>
            </motion.div>
}

export function MenuComponent(){
    return <motion.div id="menu" initial={{display:"none",opacity:0,height:"0%"}} className="cursor-pointer w-screen fixed left-0 bottom-0 bg-white z-[2] p-16 justify-between items-center">
                <motion.div className="w-[25%] h-full overflow-hidden flex items-center justify-center ">
                    <motion.img src={MenuImage} className="h-full max-w-none"/>
                </motion.div>
                <motion.div className="w-[70%] flex items-center justify-around">
                    <motion.div className="">
                        <AMenuLinkItem text={"Welcome"}/>
                        <AMenuLinkItem text={"Acheivements"}/>
                        <AMenuLinkItem text={"Series"}/>
                        <AMenuLinkItem text={"Ambiances"}/>
                        <AMenuLinkItem text={"Contact"}/>
                    </motion.div>
                    <motion.div>
                        <div className="flex">
                            <motion.div className="border-l-[0.06rem] border-gray-300 border-solid">
                                <AMenuLinkItemSmall text={"About Us"} id={"About"}/>
                                <AMenuLinkItemSmall text={"Our Brands"} id={"Brands"}/>
                                <AMenuLinkItemSmall text={"Showroom"} id={"Showroom"}/>
                            </motion.div>
                            <motion.div className="border-l-[0.06rem] border-gray-300 border-solid">
                                <AMenuLinkItemSmall text={"Your Project"} id={"roject"}/>
                                <AMenuLinkItemSmall text={"Personalization"} id={"Personalization"}/>
                                <AMenuLinkItemSmall text={"Layout"} id={"Layout"}/>
                            </motion.div>
                            <motion.div className="border-l-[0.06rem] border-gray-300 border-solid">
                                <AMenuLinkItemSmall text={"Instagram"} id={"Instagram"}/>
                                <AMenuLinkItemSmall text={"Facebook"} id={"Facebook"}/>
                                <AMenuLinkItemSmall text={"Houzz"} id={"Houzz"}/>
                            </motion.div>
                        </div>
                        <p className="text-3xl text-red-500 font-lexend pt-4">Brandboy@gmail.com</p>
                    </motion.div>
                </motion.div>
            </motion.div>
}

function AMenuLinkItem({link,text}){
    const [hovering,setHovering] = useState(false);

    function handleHoverStart(){
        setHovering(()=>true);
    }
    function handleHoverEnd(){
        setHovering(()=>false);
    }

    useEffect(()=>{
        if (hovering) {
            animate(`#${text}`,{width:"100%",transition:{duration:0.5}})
        }else{
            animate(`#${text}`,{width:"0%",transition:{duration:0.5}})
        }
    },[hovering])

    return <motion.a onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} href={link} className="flex flex-col">
                <p className="text-2xl font-lexend font-light">{text}</p>
                <motion.hr id={text} className="h-[0.2rem] w-[0%] bg-red-500" />
           </motion.a>
}

function AMenuLinkItemSmall({link,text,id}){
    const [hovering,setHovering] = useState(false);

    function handleHoverStart(){
        setHovering(()=>true);
    }
    function handleHoverEnd(){
        setHovering(()=>false);
    }

    useEffect(()=>{
        if (hovering) {
            animate(`#${id}`,{width:"100%",transition:{duration:0.5}})
        }else{
            animate(`#${id}`,{width:"0%",transition:{duration:0.5}})
        }
    },[hovering])

    return <motion.a onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} href={link} className="flex flex-col px-4">
                <p className="text-sm font-lexend font-light">{text}</p>
                <motion.hr id={id} className="h-[0.1rem] w-[0%] bg-red-500" />
           </motion.a>
}

export function Attraction() {
    const [animateState,setanimateState] = useState("default")
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        switch(true){
            case latest > 100:{
                setanimateState("animateIn")
            }
            break;
            case latest < 100:{
                setanimateState("animateOut")
            }
        }
      })

      const animateIn = {opacity:0,transition:{ease:"easeIn",delay:0.5,duration:0.8}}
      const animateOut = {opacity:1,transition:{ease:"easeIn",duration:0.5}}
      const variants = {animateIn,animateOut}
    return <div className="absolute z-0 w-screen top-0 left-0 overflow-hidden">
                <video autoPlay muted loop  src={landingVideo} ></video>
            </div>
}
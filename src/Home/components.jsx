import {  useEffect, useRef, useState } from "react"
import {motion,stagger, animate,useScroll,useMotionValueEvent, useInView} from "motion/react"
import { Setting5,Home,Ruler, I3Dcube } from "iconsax-react"
import MenuImage from "../assets/Images/menuImage.jpg"
import landingVideo from "../assets/videos/video-cuisiniste-lyon-italian-kitchen.mp4"
import proof from "../assets/Images/proof.png"

import mini1 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-3-mini.jpg"
import mini2 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-22-mini.jpg"
import mini3 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-43-mini.jpg"
import mini4 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-cuisine-haut-de-gamme-1-mini.jpg"

import max1 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-3.jpg"
import max2 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-22.jpg"
import max3 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-43.jpg"
import max4 from "../assets/Images/A-Les-cuisines-d-arno-cuisiniste-Lyon-cuisine-haut-de-gamme-1.jpg"

import Actus1 from "../assets/Images/Actus-5-cuisine-elegance-blanche-haussmannien-Lyon.jpg"
import Actus2 from "../assets/Images/Actus-7-cuisine-Fenix-Lyon.jpg"
import Actus3 from "../assets/Images/Actus-8-cuisine-sur-mesure-Lyon.jpg"
import Actus4 from "../assets/Images/Actus-10-cuisine-sur-mesure-Lyon.jpg"
import Actus5 from "../assets/Images/Actus-12-cuisine-sur-mesure-Lyon.jpg"
import Actus6 from "../assets/Images/Actus-13-cuisine-sur-mesure-Lyon.jpg"
import Actus7 from "../assets/Images/Actus-14-cuisine-sur-mesure-Lyon.jpg"
import Actus8 from "../assets/Images/Actus-15-cuisine-sur-mesure-Lyon.jpg"

import Series1 from "../assets/Images/Series-cuisine-blanche-et-bois.jpg"
import Series2 from "../assets/Images/Series-cuisine-blanche-noire-et-bois.jpg"
import Series3 from "../assets/Images/Series-cuisine-bleue.jpg"
import Series4 from "../assets/Images/Series-cuisine-ciment.jpg"
import Series5 from "../assets/Images/Series-cuisine-intemporelle.jpg"
import Series6 from "../assets/Images/Series-cuisine-marbre.jpg"
import Series7 from "../assets/Images/Series-cuisine-noire-et-bois.jpg"
import Series8 from "../assets/Images/Series-cuisine-verriere.jpg"

import Brand1 from "../assets/Images/zecchinon-cuisines-italiennes.jpg"
import Brand2 from "../assets/Images/ronda-design.jpg"
import Brand3 from "../assets/Images/colico.jpg"
import Brand4 from "../assets/Images/aster.jpg"
import Brand5 from "../assets/Images/armony.jpg"

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
            <Attraction/>
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

    return <motion.div onClick={handleClick}  onHoverStart={()=>{handleHoverStart()}} onHoverEnd={()=>{handleHoverEnd()}} className="fixed right-[2rem] top-[0.5rem] bg-white flex flex-col h-[3rem] justify-around p-4  z-[100]">
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
    return <motion.div id="menu" initial={{display:"none",opacity:0,height:"0%"}} className="cursor-pointer w-screen fixed left-0 bottom-0 bg-white z-[99] p-16 justify-between items-center">
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

function AMenuLinkItemExt({link,text,id}){
    const ref = useRef(null);
    const isInView = useInView(ref)


    useEffect(()=>{
        if (isInView) {
            animate(`#${id}`,{width:"100%"},{duration:1})
        }else{
            animate(`#${id}`,{width:"0%"},{duration:1})
        }
    },[isInView])

    return <motion.a ref={ref} href={link} className="flex w-fit flex-col self-end">
                <p className="text-2xl font-lexend font-light">{text}</p>
                <motion.hr id={id} className="h-[0.2rem] w-[0%] bg-red-500" />
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
                <motion.hr id={id} className="h-[0.15rem] w-[0%] bg-red-500" />
           </motion.a>
}

function AMenuLinkItemSmallExt({link,text,id,hovering,colour}){


    useEffect(()=>{
        if (hovering) {
            animate(`#${id}`,{width:"100%",transition:{duration:0.5}})
        }else{
            animate(`#${id}`,{width:"0%",transition:{duration:0.5}})
        }
    },[hovering])

    return <motion.a  href={link} className="flex flex-col w-fit">
                <p className="text-[0.7rem] font-lexend font-light">{text}</p>
                <motion.hr style={{background:colour}} id={id} className="h-[0.15rem] w-[0%] bg-red-500" />
           </motion.a>
}

export function Attraction() {
    const screenHeight = window.innerHeight
    const [animateAttrState,setAnimateAttrState] = useState("default")
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        switch(true){
            case (latest < screenHeight * (20/100)):{
                setAnimateAttrState("stepOneRev")
            }
            break;
            case (latest > screenHeight * (35/100) && latest < screenHeight * (90/100)):{
                setAnimateAttrState("stepOne")
            }
            break;
            case (latest > screenHeight * (90/100)):{
                setAnimateAttrState("stepOneRev")
            }
            break;
        }
      })

    const stepOne = {width:"70%",transition:{ease:"easeOut",duration:0.5}}
    const stepOneRev = {width:"100%",transition:{ease:"easeInOut",duration:1}}
    const variants = {stepOne,stepOneRev}
    return <motion.div  className="absolute z-0 w-screen landscape:h-[100vh] top-0 left-0 flex items-center justify-center overflow-hidden">
                <motion.video initial={false} variants={variants} animate={animateAttrState} autoPlay muted loop  src={landingVideo} className="w-full" ></motion.video>
            </motion.div>
}

export function Body(){

    return <motion.div whileInView={{top:"-10%",transition:{duration:0.5}}}  className=" z-10 w-full relative left-0">
                    <Introduction/>
                    <Projects/>
                    <Acheivements/>
                    <Series/>
                    <RealSeries/>
                    <OurBrands/>
                    <Process/>
                    <Footer/>
    </motion.div>
}

function Introduction(){
    return <div className=" z-10 h-screen w-screen text-slate-950 flex font-lexend font-thin items-center justify-center">
                <div className="w-[45%] flex flex-col items-center justify-center">
                    <p className="font-medium text-black pb-1">BRANDBOY</p>
                    <p className="text-xs pb-14">Interior Designer Lagos</p>
                    <p className="text-center text-sm w-[90%]" >Italian Kitchen c’est avant tout la passion pour l’aménagement sans compromis. Des projets intemporels avec un accompagnement sur mesure. Nous sommes en challenge permanent pour vous proposer un choix unique, le meilleur des cuisines italiennes, une sélection en  adéquation avec vos envies et votre environnement.</p>
                    <img className="pt-8" src={proof}/>
                </div>
                <div></div>
    </div>
}

function Projects(){
    const miniImages = [{image:mini1,id:"img0",link:"",text:"Marble/verte"}
                    ,{image:mini2,id:"img1",link:"",text:"Marble/verte"}
                    ,{image:mini3,id:"img2",link:"",text:"Marble/verte"}
                    ,{image:mini4,id:"img3",link:"",text:"Marble/verte"
                }];
    const maxImages = [max1,max2,max3,max4];
    const [currentImage,setcurrentImage] = useState(0)
    return <div className="h-screen w-screen flex items-center justify-center">
                <div className="w-[75%] h-[90%]">
                    <p className="text-3xl font-lexend relative z-[1]">PROJECTS</p>
                    <motion.div whileInView={{top:"-12%",transition:{duration:1,ease:"easeIn"}}} className="z-[0] relative w-full h-full flex items-center justify-between">
                        <ShowCaseMaximizer pref={"project"} current={currentImage}  imageSrc={maxImages} />
                        <div className="w-[45%] grid grid-cols-2 grid-rows-2 gap-2   ">
                            {miniImages.map(function(anImage){
                                return <ShowCaser indicateCurrent={setcurrentImage} id={anImage.id} image={anImage.image} link={anImage.link} text={anImage.text} />
                            })}
                        </div>
                    </motion.div>
                </div>
    </div>
}

function ShowCaser({image,link,text,id,indicateCurrent}){

    const [hovering,setHovering] = useState(false);

    function handleHoverStart(){
        indicateCurrent(()=>id.at(-1))
        setHovering(()=>true);
    }
    function handleHoverEnd(){
        setHovering(()=>false);
    }

    const imgVariants = {
        animIn:{
            scale:1.4,
            transition:{
                duration:0.5,
                ease:"easeIn"
            }
        },
        animOut:{
            scale:1,
            transition:{
                duration:0.5,
                ease:"easeIn"
            }
        }
    }

    return <motion.div onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} className="">
                <div className="overflow-hidden">
                    <motion.img initial={false} variants={imgVariants} animate={hovering?"animIn":"animOut"} src={image} />
                </div>
                <AMenuLinkItemSmallExt hovering={hovering} id={id} link={link} text={text} />
    </motion.div>
}

function ShowCaseMaximizer({imageSrc,current,pref}){


    useEffect(()=>{
        animate(`.${pref}imageee`,{opacity:0,scale:1},{duration:1.5})
        animate(`#imagee${current}`,{opacity:1,scale:1.2},{duration:1,})
    },[current])

    return <div className="w-[52%] h-[80%] flex items-center justify-center overflow-hidden relative">
                <motion.img src={imageSrc[0]}  id="imagee0" className={`${pref}imageee absolute top-0 left-0`} />
                <motion.img src={imageSrc[1]}  id="imagee1" className={`${pref}imageee absolute top-0 left-0`} />
                <motion.img src={imageSrc[2]}  id="imagee2" className={`${pref}imageee absolute top-0 left-0`} />
                <motion.img src={imageSrc[3]}  id="imagee3" className={`${pref}imageee absolute top-0 left-0`} />
    </div>
}

function Acheivements(){
    const miniImages = [{image:mini1,id:"img0",link:"",text:"Marble/verte"}
                    ,{image:mini2,id:"img1",link:"",text:"Marble/verte"}
                    ,{image:mini3,id:"img2",link:"",text:"Marble/verte"}
                    ,{image:mini4,id:"img3",link:"",text:"Marble/verte"
                }];
    const maxImages = [max1,max2,max3,max4];
    const [currentImage,setcurrentImage] = useState(0)
    return <div className="h-screen w-screen flex flex-col items-center justify-center">
                <motion.div initial={{top:"5%"}} whileInView={{top:"-12%",transition:{duration:1,ease:"easeIn"}}} className="relative w-[75%] h-[90%] flex flex-col ">
                    <div className="w-[100%] h-[100%]">
                    <motion.div  className="z-[0] relative w-full h-full flex items-center justify-between">
                        <div className="w-[45%] grid grid-cols-2 grid-rows-2 gap-2   ">
                            {miniImages.map(function(anImage){
                                return <ShowCaser indicateCurrent={setcurrentImage} id={anImage.id} image={anImage.image} link={anImage.link} text={anImage.text} />
                            })}
                        </div>
                        <ShowCaseMaximizer pref={"news"} current={currentImage}  imageSrc={maxImages} />
                    </motion.div>
                    </div>
                    <AMenuLinkItemExt id={"acheivements"} text={"All Our Acheivements"}/>
                </motion.div>
    </div>
}

function Series(){
    return <div className="h-screen w-screen flex justify-center items-center">
                <div className="w-[70%] h-[80%]">
                    <p className="font-lexend font-bold text-3xl z-[1] relative">SERIES</p>
                    <Carousel />
                </div>
    </div>
}

function Carousel(){
    const images = [{text:"White Wood",link:"",img:Actus1},{text:"White Wood",link:"",img:Actus2},{text:"White Wood",link:"",img:Actus3},{text:"White Wood",link:"",img:Actus4},{text:"White Wood",link:"",img:Actus5},{text:"White Wood",link:"",img:Actus6},{text:"White Wood",link:"",img:Actus7},{text:"White Wood",link:"",img:Actus8}]
    const [currentImage,setCurrentImage] = useState(0);

    function handleNextClick(){
        if (currentImage < images.length -1) {
            setCurrentImage((init)=> init+1)
        }else{
            setCurrentImage(()=> 0)
        }
    }

    useEffect(function(){
        
        animate(".carouselImages",{opacity:0,left:0})
        if (currentImage > 0) {
            animate(`#carouselItem${currentImage-1}`,{opacity:0,left:"-5%"},{duration:1,ease:"easeIn"})
            animate(`#carouselItem${currentImage}`,{opacity:1},{delay:0.2,duration:1,ease:"easeIn"})
        }else if(currentImage == 0){
            animate(`#carouselItem0`,{opacity:1},{duration:1,ease:"easeIn"})
        }
    },[currentImage])

    return <motion.div initial={{top:"5%"}} whileInView={{top:"-4%",transition:{duration:1,ease:"easeIn"}}} className=" z-0 w-full h-full relative flex items-center ">
            <div onClick={handleNextClick} className="w-fit absolute right-[-4rem] cursor-pointer">
                <p className="font-lexend font-medium text-slate-400 text-[5rem]">&#10093;</p>
            </div>
            <div className="w-full h-full relative overflow-hidden">
                {images.map(function(image,index){
                    return <CarouselItem img={image.img} id={`carouselItem${index}`} text={image.text} link={image.link}/>
                })}
            </div>
    </motion.div>
}

function CarouselItem({img,text,link,id}){
    return <a href={link} id={id} className="carouselImages w-full h-full flex items-center justify-center cursor-pointer absolute top-0 left-0 ]">
                <img src={img}/>
                <div className="absolute w-fit p-6 bg-[rgba(255,255,255,0.78)] font-lexend flex flex-col justify-center items-center" >
                    <p className="font-medium">"{text}"</p>
                    <p className="font-thin text-xs">"{text}"</p>
                </div>
    </a>
}

function RealSeries(){
    const images = [{img:Series1,id:"seriesImg0",link:"",text:"Marble/verte"}
    ,{img:Series2,id:"seriesImg1",link:"",text:"Marble/verte"}
    ,{img:Series3,id:"seriesImg2",link:"",text:"Marble/verte"}
    ,{img:Series4,id:"seriesImg3",link:"",text:"Marble/verte"},
    ,{img:Series5,id:"seriesImg1",link:"",text:"Marble/verte"}
    ,{img:Series6,id:"seriesImg2",link:"",text:"Marble/verte"}
    ,{img:Series7,id:"seriesImg3",link:"",text:"Marble/verte"}
    ,{img:Series8,id:"seriesImg3",link:"",text:"Marble/verte"}
]
    return <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="w-[70%] ">
                    <p className="font-lexend font-bold text-3xl z-[1] relative self-start">REAL</p>
                    <motion.div initial={{top:"5%"}} whileInView={{top:"-2%",transition:{duration:1,ease:"easeIn"}}} className="relative grid grid-cols-4 gap-6 items-center justify-center w-full">
                        {images.map(function(image,index){
                            return <ShowCaser2 image={image.img} id={`RealSeries${index}`} text={image.text} link={image.link}  />
                        })}
                    </motion.div>
                </div>
    </div>
}

function ShowCaser2({image,link,text,id}){

    const [hovering,setHovering] = useState(false);

    function handleHoverStart(){
        setHovering(()=>true);
    }
    function handleHoverEnd(){
        setHovering(()=>false);
    }

    const imgVariants = {
        animIn:{
            scale:1.2,
            transition:{
                duration:0.5,
                ease:"easeIn"
            }
        },
        animOut:{
            scale:1,
            transition:{
                duration:0.5,
                ease:"easeIn"
            }
        }
    }

    return <motion.div whileInView={{top:"-1%"}} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} className="relative w-full h-full ">
                <div className="overflow-hidden w-full ">
                    <motion.img initial={false} variants={imgVariants} animate={hovering?"animIn":"animOut"} src={image} />
                </div>
                <AMenuLinkItemSmallExt hovering={hovering}  colour={"black"} id={id} link={link} text={text} />
    </motion.div>
}
function ShowCaser3({image,link}){

    const [hovering,setHovering] = useState(false);

    function handleHoverStart(){
        setHovering(()=>true);
    }
    function handleHoverEnd(){
        setHovering(()=>false);
    }

    const imgVariants = {
        animIn:{
            scale:1.2,
            transition:{
                duration:0.5,
                ease:"easeIn"
            }
        },
        animOut:{
            scale:1,
            transition:{
                duration:0.5,
                ease:"easeIn"
            }
        }
    }

    return <motion.div whileInView={{top:"-1%"}} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} className="relative w-full h-full overflow-hidden">
                <motion.div whileHover={{opacity:0,transition:{duration:1,ease:"easeIn"}}} className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.54)]">
                </motion.div>
                <a href={link} className="flex overflow-hidden w-full ">
                    <motion.img initial={false} variants={imgVariants} animate={hovering?"animIn":"animOut"} src={image} />
                </a>
    </motion.div>
}

function OurBrands(){

    return <div className="h-screen w-screen">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-[70%] flex flex-col items-center gap-[3rem] justify-center">
                            <p className="font-lexend font-medium text-3xl z-[1] relative ">OUR BRANDS</p>
                            <div className="w-[100%] flex justify-between">
                                <div className="relative w-[48%] overflow-hidden">
                                    {/* <motion.div whileHover={{opacity:0,transition:{duration:0.5}}} className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.54)]">

                                    </motion.div> */}
                                    <motion.img src={Brand1}  />
                                </div>
                                <div className="w-[48%] grid grid-rows-2 grid-cols-2">
                                    <ShowCaser3 image={Brand4} />
                                    <ShowCaser3 image={Brand5} />
                                    <ShowCaser3 image={Brand2} />
                                    <ShowCaser3 image={Brand3} />

                                </div>
                            </div>

                        </div>
                    </div>
    </div>
}

function Process(){
    const processLine = [{Icon:Setting5,title:"PROJECT DEFINITION",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur ut unde maiores consequatur exercitationem rem iure, accusantium pariatur ratione.`}
    ,{Icon:Home,title:"PROPOSALS & PLANS",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur ut unde maiores consequatur exercitationem rem iure, accusantium pariatur ratione.`}
    ,{Icon:Ruler,title:"REMOTE SAMPLES PROJECTS",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur ut unde maiores consequatur exercitationem rem iure, accusantium pariatur ratione.`}
    ,{Icon:I3Dcube,title:"CONSTRUCTION SITE MANAGEMENT",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur ut unde maiores consequatur exercitationem rem iure, accusantium pariatur ratione.`}
                        ]
    return <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-[70%]">
            <WordAnimator word={"PROCESS"}/>
            <div className="w-full pt-12">
                {processLine.map((aProcess,index)=>{
                    return <Aprocess description={aProcess.description} title={aProcess.title} Icon={<aProcess.Icon/>} index={index} />
                })}
                <HorizontalLine/>
            </div>
        </div>
    </div>
}

function Aprocess({Icon, title, description,index}){
    const ref = useRef(null)
    const component_is_in_view = useInView(ref);

    useEffect(()=>{
        if (component_is_in_view) {
            animate(`.processItem${index}`,{top:"0rem",opacity:1},{duration:0.5,delay:stagger(0.2)})
        }else{
            animate(`.processItem${index}`,{top:"2rem",opacity:0.4})
        }
    },[component_is_in_view])
    return <motion.div ref={ref} className="w-full h-min overflow-hidden">
                <HorizontalLine/>
                <div className="py-6 flex justify-between items-start font-lexend">
                    <motion.div className={`processItem${index} relative w-[9%]`}>
                        {Icon}
                    </motion.div>
                    <motion.p  className={`processItem${index} relative w-[30%]`}>{title}</motion.p>
                    <motion.p  className={`processItem${index} relative w-[60%] font-light text-xs`}>{description}</motion.p>
                </div>
            </motion.div>
}

function HorizontalLine(){
    return <motion.hr initial={{height:"0.25rem"}} whileInView={{backgroundColor:"rgba(71,85,105,0.64)",width:"100%",height:"0.1rem",transition:{duration:1}}} className="bg-[rgba(71,85,105,1)] w-[0%]" />
}

function WordAnimator({word=""}){
    const ref = useRef(null)
    const text_is_in_view = useInView(ref);

    useEffect(()=>{
        if (text_is_in_view) {
            animate(".letters",{top:"0rem"},{duration:0.5,delay:stagger(0.2)})
        }else{
            animate(".letters",{top:"2rem"})
        }
    },[text_is_in_view])

    return <motion.div ref={ref} className="h-min overflow-hidden" >
                {[...word].map(function(letter){
                    return <motion.p   className="text-3xl font-lexend font-medium letters inline top-[2rem] relative">{letter}</motion.p>
                })}
            </motion.div>
}

function Footer(){
    return <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-[70%] h-[80%] flex flex-col items-center justify-center">
            <FooterLogo/>
            <FooterBody/>
        </div>
    </div>
}

function FooterLogo(){
    return <motion.a  href="/" id="footerlogo" className="flex items-center relative  w-full justify-center">
                <img src="/brandboy.jpg" className="w-[2rem] h-[2rem]" />
                <p className="font-medium font-lexend md:text-2xl">BRANDBOY</p>
  </motion.a>
}

function FooterBody(){
    return <motion.div  className="cursor-pointer w-full left-0 bottom-0 bg-white z-[99] p-16 justify-between items-center">
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
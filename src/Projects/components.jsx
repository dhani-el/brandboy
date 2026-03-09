import {  useEffect, useRef, useState } from "react"
import {motion,stagger, animate,useScroll,useMotionValueEvent, useInView} from "motion/react"
import { useMedia } from "use-media"
import MenuImage from "../assets/Images/menuImage.jpg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Play } from "iconsax-react"
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function Logo(){
  return (
    <div className="flex">
              <img src="/brandboy.jpg" className="w-[2rem] h-[2rem]" />
              <p className="font-medium font-lexend md:text-2xl">BRANDBOY</p>
    </div>
  )
}

export function Header(){
  return (
    <div className="w-full flex items-center justify-center p-4 ">
      <Logo/>
      <Hamburger/>
      <MenuComponent/>
    </div>
  )
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
  return <motion.div id="menu" initial={{display:"none",opacity:0,height:"0%"}} className="cursor-pointer w-screen fixed left-0 bottom-0 bg-white z-[99] p-6 lg:p-16 justify-between items-center">
              <motion.div className="hidden  w-[25%] h-full overflow-hidden lg:flex items-center justify-center ">
                  <motion.img src={MenuImage} className="h-full max-w-none"/>
              </motion.div>
              <motion.div className=" w-full h-full pt-8 lg:pt-0 gap-4 lg:h-min lg:w-[70%] flex flex-col md:flex-row lg:items-center justify-center lg:justify-around">
                  <motion.div className="h-[35%] lg:h-min flex flex-col justify-between lg:block">
                      <AMenuLinkItem text={"Welcome"}/>
                      <AMenuLinkItem text={"Acheivements"}/>
                      <AMenuLinkItem text={"Series"}/>
                      <AMenuLinkItem text={"Ambiances"}/>
                      <AMenuLinkItem text={"Contact"}/>
                  </motion.div>
                  <motion.div className="h-[45%] lg:h-min ">
                      <div className="flex flex-col lg:flex-row h-[80%] justify-between lg:justify-start lg:h-min">
                          <motion.div className="h-[30%] flex flex-col lg:block lg:h-min justify-between  border-l-[0.06rem] border-gray-300 border-solid">
                              <AMenuLinkItemSmall text={"About Us"} id={"About"}/>
                              <AMenuLinkItemSmall text={"Our Brands"} id={"Brands"}/>
                              <AMenuLinkItemSmall text={"Showroom"} id={"Showroom"}/>
                          </motion.div>
                          <motion.div className="h-[30%] lg:h-min justify-between flex flex-col lg:block border-l-[0.06rem] border-gray-300 border-solid">
                              <AMenuLinkItemSmall text={"Your Project"} id={"roject"}/>
                              <AMenuLinkItemSmall text={"Personalization"} id={"Personalization"}/>
                              <AMenuLinkItemSmall text={"Layout"} id={"Layout"}/>
                          </motion.div>
                          <motion.div className="h-[30%] lg:h-min justify-between flex flex-col lg:block border-l-[0.06rem] border-gray-300 border-solid">
                              <AMenuLinkItemSmall text={"Instagram"} id={"Instagram"}/>
                              <AMenuLinkItemSmall text={"Facebook"} id={"Facebook"}/>
                              <AMenuLinkItemSmall text={"Houzz"} id={"Houzz"}/>
                          </motion.div>
                      </div>
                      <p className="text-2xl text-red-500 font-lexend pt-4">Brandboy@gmail.com</p>
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
              <motion.hr id={id} className="h-[0.15rem] w-[0%] bg-red-500" />
         </motion.a>
}

export function Body({projectTitle,projectDescription}){
  return (
    <div className="w-full p-4 flex flex-col">
      <ProjectTitle title={projectTitle} description={projectDescription} />
      <GsapPracticeComponent/>
    </div>
  )
}

function ProjectTitle({title,description}){
  return (
    <div className="w-full flex flex-col gap-6">
      <Underline color={"black"} thickness={"0.15rem"} width={"5%"} />
      <div className="font-lexend flex flex-col gap-6">
        <p className="font-semibold uppercase text-4xl">{title}</p>
        <p className="font-light text-slate-600">{description}</p>
      </div>
    </div>
  )
}


function Underline({thickness,width,color}){
  return <div style={{width:width,height:thickness,backgroundColor:color}} className=""></div>
}

export function GsapPracticeComponent(){
  const boxRef = useRef(null);
  const scrollRef = useRef()
      // const timeline = gsap.timeline({repeat:-1,yoyo:true,repeatDelay:1});
    useGSAP(()=>{
      gsap.to(boxRef.current,{x:"30vw",rotation:360,borderRadius:"100%",duration:2,stagger:0.5,
        scrollTrigger:{
          trigger:boxRef.current,
          start:"bottom bottom"
        }
      });
      // timeline.to(".box",{y:"-40%",x:"35vw",rotation:360,borderRadius:"100%",duration:0.5,ease:"power1",stagger:0.5});
      // timeline.to(".box",{y:"0%",x:"40vw",rotation:360,borderRadius:"100%",duration:0.5,ease:"power1",stagger:0.5});
      // timeline.to(".box",{
      //   x:"50vw",
      //   rotation:360,
      //   scale:1,
      //   duration:2,
      //   borderRadius:"100%"
      //   ,stagger:{
      //     amount:1,
      //     from:"center",
      //     axis:"x"
      //   }
      // });
    },[])
  return (
    <div style={{position:"relative"}}>
      <p>This is the gsap testing component</p>
      {/* <TestBox ref={boxRef}/> */}
      {/* <TestBox ref={boxRef}/>
      <TestBox ref={boxRef}/>
      <TestBox ref={boxRef}/> */}
      <div id="box" ref={boxRef} style={{backgroundColor:"purple",width:"150px",height:"150px", position:"relative",top:"500px"}}>
      </div>
      {/* <button onClick={()=>{
        if(timeline.paused()){
          timeline.play();
        }else{
          timeline.pause();
        }
      }}>Play/pause</button> */}
    </div>
  )
}

function TestBox({id}){
  return (
    <div className="box" id={`box-${id}`} style={{backgroundColor:"purple",width:"150px",height:"150px", }}>
      </div>
  )
}
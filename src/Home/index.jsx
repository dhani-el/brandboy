
import { Logo,Hamburger,MenuComponent } from "./components";

export default function Home(){
    return <div className="p-8 w-screen bg-white relative h-screen">
              <div className="w-full flex items-center justify-between">
                <div className="flex justify-center w-[90%]">
                    <Logo/>
                </div>
                <Hamburger/>
                <MenuComponent/>
              </div>
    </div>
}
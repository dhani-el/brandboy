
import { Logo,Hamburger } from "./components";

export default function Home(){
    return <div className="p-8 w-screen bg-[#f7f7f7]">
              <div className="w-full flex items-center justify-between">
                <div className="flex justify-center w-[90%]">
                    <Logo/>
                </div>
                <Hamburger/>
              </div>
    </div>
}
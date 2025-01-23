
import { Header,Attraction,MenuComponent,Hamburger } from "./components";

export default function Home(){
    return <div className="w-screen bg-white relative h-screen">
              <Header/>
              <MenuComponent/>
              <Attraction/>
              <Hamburger/>
    </div>
}
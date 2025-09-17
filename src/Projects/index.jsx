

import { useSearchParams } from "react-router-dom"
import { Header,Body } from "./components";

export default function Projects(){

  const [params] = useSearchParams();
  const selectedProject = params.get("p");

  return <div className="w-screen h-[300vh] bg-slate-100">
            <Header/>
            <Body projectTitle={"Marble/Green"} projectDescription={"Renovation of a Kitchen In Lagos"} />
          </div>
}
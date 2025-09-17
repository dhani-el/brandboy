

import { useSearchParams } from "react-router-dom"


export default function Projects(){

  const [params] = useSearchParams();
  const selectedProject = params.get("p");

  return <div className="w-full">
            <p>This is the project screen for project #{selectedProject}</p>
          </div>
}
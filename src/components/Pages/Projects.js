import MotionHoc from "./MotionHoc";
import Sidebar from "../Dashboard";

const ProjectsComponent = () => {
  return(
    <Sidebar/>
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
import MotionHoc from "./MotionHoc";
import Sidebar from "../Dashboard";
const TeamComponent = () => {
  return(
    <Sidebar/>
  );
};

const Team = MotionHoc(TeamComponent);

export default Team;
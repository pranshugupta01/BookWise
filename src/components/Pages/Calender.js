import MotionHoc from "./MotionHoc";
import Sidebar from "../Dashboard";
const CalenderComponent = () => {
  return (
    <Sidebar/>
  );
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;
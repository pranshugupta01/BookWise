import MotionHoc from "./MotionHoc";
import Sidebar from "../Dashboard";
const HomeComponent = () => {
  return (
  <Sidebar />);
};

const Dashboard = MotionHoc(HomeComponent);

export default Dashboard;
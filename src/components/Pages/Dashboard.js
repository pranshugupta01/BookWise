import MotionHoc from "./MotionHoc";

const HomeComponent = () => {
  return <h1>Home</h1>;
};

const Dashboard = MotionHoc(HomeComponent);

export default Dashboard;
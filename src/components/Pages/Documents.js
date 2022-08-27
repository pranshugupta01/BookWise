import MotionHoc from "./MotionHoc";
import Sidebar from "../Dashboard";

const DocumentsComponent = () => {
  return(
    <Sidebar/>
  );
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
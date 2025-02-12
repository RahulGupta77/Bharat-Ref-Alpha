import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <div className=" pt-[50px] pl-[20px] pr-[30px] lg:pl-[50px]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

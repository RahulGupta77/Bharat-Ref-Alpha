import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <div className=" pt-20 md:pt-24 pr-[30px] lg:pl-[50px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

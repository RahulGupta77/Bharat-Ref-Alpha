import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className=" min-h-screen flex flex-col bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Toaster />
      <Navbar />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

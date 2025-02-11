import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <div
        style={{
          paddingTop: "90px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;

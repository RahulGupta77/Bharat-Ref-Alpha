import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";

const competencies = [
  { title: "Central AC Systems", image: "/assets/centralized_ac.png" },
  { title: "Chiller AC Units", image: "/assets/water_chiller.png" },
  { title: "Air Handling Units (A.H.U)", image: "/assets/ahu.png" },
  { title: "Package AC Units", image: "/assets/package_ac.png" },
  { title: "Split AC Systems", image: "/assets/split_ac.png" },
  { title: "Plant Oil Chiller", image: "/assets/oil_chiller.png" },
  { title: "Plant Air Dryers", image: "/assets/air_dryer.png" },
  { title: "Panel AC Units", image: "/assets/panel_ac.png" },
];

export function CoreCompetencies() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="mt-10 flex justify-center">
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover
        pauseOnClick
        direction="left"
        className="w-[90vw] max-w-7xl"
      >
        {competencies.map(({ title, image }, index) => (
          <div
            key={index}
            className="mx-2 flex-shrink-0 w-[380px] md:w-[400px] lg:w-[480px]"
          >
            <Card className="relative overflow-hidden rounded-lg shadow-xl border-none bg-transparent cursor-pointer">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  filter: "brightness(0.85)",
                }}
                transition={{ duration: 0.3 }}
              >
                <CardContent className="overflow-hidden relative p-0 w-full">
                  <Drawer onOpenChange={setIsDrawerOpen}>
                    <DrawerTrigger asChild>
                      <div>
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={image}
                            alt={title}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 flex items-end justify-center">
                          <span className="text-white text-lg text-center bg-black bg-opacity-50 h-fit w-full font-semibold pt-2 pb-2">
                            {title}
                          </span>
                        </div>
                      </div>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-full">
                        <DrawerHeader>
                          <div className="flex flex-col items-center gap-y-4">
                            <DrawerTitle>{title}</DrawerTitle>
                          </div>
                        </DrawerHeader>
                        <div className="flex justify-center p-1">
                          <img
                            src={image}
                            alt={title}
                            className="sm:w-[90vw] sm:h-[30vh] md:w-[90vw] md:h-[50vh]  lg:w-[40vw] lg:h-[50vh] object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <div className="flex justify-center">
                            <Button className="w-fit px-5 py-2">Close</Button>
                          </div>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardContent>
              </motion.div>
            </Card>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const autoplayRef = useRef(null); // Ref to store autoplay instance
  const timeoutRef = useRef(null); // Ref to handle delayed autoplay restart

  useEffect(() => {
    if (autoplayRef.current) {
      if (isDrawerOpen) {
        autoplayRef.current.stop(); // Stop autoplay when drawer opens
        clearTimeout(timeoutRef.current); // Clear any pending timeouts
      } else {
        // Restart autoplay with a 500ms delay
        timeoutRef.current = setTimeout(() => {
          if (autoplayRef.current) autoplayRef.current.play();
        }, 500);
      }
    }

    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, [isDrawerOpen]);

  return (
    <div className="mt-10 flex justify-center">
      <Carousel
        className="w-[90vw] max-w-7xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: false,
            onInit: (autoplay) => (autoplayRef.current = autoplay),
          }),
        ]}
      >
        <CarouselContent>
          {competencies.map(({ title, image }, index) => (
            <CarouselItem
              key={index}
              className="basis-full overflow-hidden lg:basis-1/3"
            >
              <Card className="relative overflow-hidden rounded-lg shadow-xl border-none bg-transparent cursor-pointer">
                <motion.div
                  whileHover={{
                    scale: 1.05,
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
                            <span className="text-white text-lg bg-black bg-opacity-50 h-fit w-full font-semibold pt-2 pb-2">
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
                              {/* <DrawerDescription>
                                More details about {title}.
                              </DrawerDescription> */}
                            </div>
                          </DrawerHeader>
                          <div className="flex justify-center p-4">
                            <img
                              src={image}
                              alt={title}
                              className="w-[50vw] h-[50vh] object-cover rounded-lg"
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

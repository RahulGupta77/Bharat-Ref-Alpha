import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const compentencies = [
  "Central AC Systems",
  "Chiller AC Units",
  "Air Handling Units (A.H.U)",
  "Package AC Units",
  "Split AC Systems",
  "Plant Oil Coolers",
  "Plant Air Dryers",
  "Panel AC Units",
];

export function CoreCompetencies() {
  return (
    <div className="mt-10  flex justify-center">
      <Carousel
        className="w-full max-w-4xl mx-auto" // Increased max-width for larger screens
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {compentencies.map((ac_type, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/3" // Adjusted basis for responsiveness
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{ac_type}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
  <CarouselNext /> */}
      </Carousel>
    </div>
  );
}

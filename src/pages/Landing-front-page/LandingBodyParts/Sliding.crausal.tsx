import React from "react"
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"
export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-auto ">
                  <span className="w-full ">{index + 1}</span>
                  <img src="https://image.made-in-china.com/151f0j10FUYRCrNEsfWk/banner990X400-1753422027000.webp" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
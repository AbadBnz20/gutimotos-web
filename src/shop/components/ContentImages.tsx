import clsx from "clsx";
import type { Photo } from "../interfaces/DetailProduct.response";
import { ContentImg } from "./ContentImg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Props {
  photo: Photo[];
}

export const ContentImages = ({ photo }: Props) => {
  return (
    <>
      <ContentImagesMobile photo={photo} />
      <ContentImagesDesktop photo={photo} />
    </>
  );
};

export const ContentImagesMobile = ({ photo }: Props) => {
  return (
    <div className="block md:hidden">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {photo.map((img) => (
            <CarouselItem key={img.id}>
              <ContentImg
                source={img.photo}
                height={`w-full ${photo.length > 2 ? "h-[145px]" : "h-[300px]"}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export const ContentImagesDesktop = ({ photo }: Props) => {
  return (
    <div className="hidden md:block ">
      <div className=" grid grid-col-1 md:grid-cols-3 gap-2">
        <div
          className={clsx(
            "col-span-3",
            photo.length > 1 ? "md:col-span-2" : "md:col-span-3"
          )}
        >
          {photo.length > 0 && (
            <ContentImg
              source={photo[0].photo}
              height="w-full h-[170px]  md:h-[300px]"
            />
          )}
        </div>
        <div className="grid gap-2 col-span-3 md:col-span-1">
          {photo.length > 1 && (
            <ContentImg
              source={photo[1].photo}
              height={`w-full ${photo.length > 2 ? "h-[145px]" : "h-[300px]"}`}
            />
          )}
          {photo.length > 2 && (
            <ContentImg source={photo[2].photo} height=" w-full h-[145px]" />
          )}
        </div>
      </div>
      {photo.length > 3 && (
        <div>
          <ScrollArea className="w-[290px] md:w-[500px] lg:w-[700px] rounded-md  ">
            <div className="flex w-max space-x-2 py-4">
              {photo.slice(3, photo.length).map((img) => (
                <figure key={img.id} className="shrink-0">
                  <ContentImg
                    source={img.photo}
                    height="w-[200px]  h-[100px]"
                  />
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

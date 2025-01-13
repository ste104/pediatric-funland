import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClinicCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
  ];

  return (
    <div className="w-full px-4 py-8">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <img
                  src={image}
                  alt={`Imagem da clínica ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ClinicCarousel;
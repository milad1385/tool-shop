import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { PiMapPinFill } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import RegisterTitle from "./RegisterTitle";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

function LocationTracker({ setPosition }) {
  const map = useMapEvents({
    moveend() {
      const center = map.getCenter();
      setPosition([center.lat, center.lng]);
    },
  });

  return null;
}

const SellerLocation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [position, setPosition] = useState<[number, number]>([35.7, 51.39]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex h-96 items-center justify-center text-gray-600">
        در حال بارگذاری نقشه...
      </div>
    );
  }

  const saveLocation = () => {
    router.push(`${pathname}?step=3&subStep=1`);
  };

  return (
    <div>
      <RegisterTitle content="لوکیشن خود را در نقشه زیر انتخاب کنید" />
      <div className="max-w-4xl mx-auto p-5 mt-8 md:mt-10">
        <div className="relative h-[400px] border-2 border-gray-300 rounded-lg overflow-hidden">
          <MapContainer center={position} zoom={13} className="h-full w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationTracker setPosition={setPosition} />
          </MapContainer>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl z-[1000] pointer-events-none">
            <SiGooglemaps className="text-[50px] text-red-600" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <Button
          onClick={saveLocation}
          type="submit"
          className="!w-[200px] text-sm md:text-base"
        >
          ذخیره لوکیشن
        </Button>
        <Button
          onClick={() => router.back()}
          className="!w-[200px] !bg-red-500 text-sm md:text-base"
        >
          لغو
        </Button>
      </div>
    </div>
  );
};

export default SellerLocation;

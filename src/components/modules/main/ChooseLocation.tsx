import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SiGooglemaps } from "react-icons/si";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

if (typeof window !== "undefined") {
  const iconDefault = L.Icon.Default.prototype as any;

  if (iconDefault._getIconUrl) {
    delete iconDefault._getIconUrl;
  }

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

function LocationTracker({ setPosition }) {
  const map = useMapEvents({
    moveend() {
      const center = map.getCenter();
      setPosition([center.lat, center.lng]);
    },
  });

  return null;
}

function ChooseLocation({
  position,
  onPosition,
  isShow = false,
}: {
  position: [number, number];
  onPosition?: (pos: [number, number]) => void;
  isShow?: boolean;
}) {
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-6">
        <div
          className={`relative ${isShow ? "h-[200px]" : "h-[300px]"} border-2 border-gray-300 rounded-lg overflow-hidden`}
        >
          <MapContainer
            center={position}
            zoom={13}
            className="h-full w-full"
            dragging={!isShow}
            scrollWheelZoom={!isShow}
            touchZoom={!isShow}
            doubleClickZoom={!isShow}
            zoomControl={!isShow}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {isShow && <Marker position={position} />}

            {!isShow && <LocationTracker setPosition={onPosition} />}
          </MapContainer>

          {!isShow && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl z-[1000] pointer-events-none">
              <SiGooglemaps className="text-[50px] text-red-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChooseLocation;

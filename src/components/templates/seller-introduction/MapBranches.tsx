"use client";
import "leaflet/dist/leaflet.css";
import { TileLayer, MapContainer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import { branches } from "@/constants/data";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapBranches() {
  return (
    <div className="col-span-12 lg:col-span-7 bg-red-500 h-[450px]">
      <MapContainer center={[32.4279, 53.688]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {branches.map((branch) => (
          <Marker position={[branch.lat, branch.lng]} key={branch.id}>
            <Popup>
              <h2 className="font-dana text-right">استان : {branch.title}</h2>
              <h4 className="font-dana text-right mt-5">شهر : {branch.city}</h4>
              <p className="font-dana text-right leading-[26px]">توضیحات : {branch.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapBranches;

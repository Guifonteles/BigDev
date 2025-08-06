import React from "react";
import RestaurantCard from "../RestaurantCard";
import LocationCard from "../LocationCard/index";
import OfficialSitesCard from "../OfficialSitesCard/index";

const restaurants = [
  {
    image: "/images/peixes.jpg",
    name: "Blu Méditerranée",
    address: "R. Dr. Monte, 535 - Centro, Sobral - CE, 62011-200",
    hours: "11:30 AM - 11:00 PM",
    times: ["09:30", "10:00", "10:30"],
    activeTime: "09:30",
  },
  {
    image: "/images/bar.jpg",
    name: "PollGreen Irish Pub",
    address: "R. Domingos Olímpio, 219 - Centro, Sobral - CE, 62011-140",
    hours: "11:30 AM - 11:00 PM",
    times: ["09:30", "10:00", "10:30"],
    activeTime: "10:00",
  },
  {
    image: "/images/macarrao.jpg",
    name: "Blu Méditerranée",
    address: "R. Dr. Monte, 535 - Centro, Sobral - CE, 62011-200",
    hours: "11:30 AM - 11:00 PM",
    times: ["09:30", "10:00", "10:30"],
    activeTime: "09:30",
  },
  {
    image: "/images/frango.jpg",
    name: "PollGreen Irish Pub",
    address: "R. Domingos Olímpio, 219 - Centro, Sobral - CE, 62011-140",
    hours: "11:30 AM - 11:00 PM",
    times: ["09:30", "10:00", "10:30"],
    activeTime: "10:30",
  },
  {
    image: "/images/parmegiana.jpg",
    name: "São & Salvo Boteco",
    address: "R. Dr. João do Monte, 947 - Centro, Sobral - CE, 62010-220",
    hours: "11:30 AM - 11:00 PM",
    times: ["09:30", "10:00", "10:30"],
    activeTime: "09:30",
  },
  {
    image: "/images/carne.jpg",
    name: "São & Salvo Boteco",
    address: "R. Dr. João do Monte, 947 - Centro, Sobral - CE, 62010-220",
    hours: "11:30 AM - 11:00 PM",
    times: ["09:30", "10:00", "10:30"],
    activeTime: "10:30",
  },
];

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row gap-6 p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Coluna lateral com cartões extras */}
      <div className="flex flex-col gap-6 w-full md:w-1/3">
        <LocationCard />
        <OfficialSitesCard />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Nossos Restaurantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {restaurants.map((rest, index) => (
              <RestaurantCard key={index} {...rest} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

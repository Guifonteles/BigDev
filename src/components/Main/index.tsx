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
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Nossos Restaurantes</h1>

      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Coluna esquerda: cards dos restaurantes */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Exemplo de card de restaurante */}
          <div className="bg-white shadow rounded-xl p-4">
            <img src="/images/restaurante-1.jpg" alt="Blu Méditerranée" className="rounded-lg mb-2" />
            <h2 className="font-semibold">Blu Méditerranée</h2>
            <p className="text-sm text-gray-600">R. Dr. Monte, 551 - Centro, Sobral - CE</p>
            <p className="text-sm text-gray-600">11:30 AM - 11:00 PM</p>
            <div className="flex gap-2 mt-2">
              <button className="bg-gray-200 text-black px-3 py-1 rounded">09:30</button>
              <button className="bg-black text-white px-3 py-1 rounded">10:00</button>
              <button className="bg-gray-200 text-black px-3 py-1 rounded">10:30</button>
            </div>
          </div>

          {/* Replique mais cards conforme necessário... */}
        </div>

        {/* Coluna direita: cards auxiliares */}
        <div className="w-full lg:w-[300px] mt-6 lg:mt-0 flex flex-col gap-4">
          <LocationCard />
          <OfficialSitesCard />
        </div>
      </div>
    </main>
  );
}

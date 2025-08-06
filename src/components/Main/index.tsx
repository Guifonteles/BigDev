import React from "react";
import RestaurantCard from "../RestaurantCard";
import LocationCard from "../LocationCard/index";
import OfficialSitesCard from "../OfficialSitesCard/index";
import { restaurants } from "../../data/restaurants"; // Importe a lista daqui

export default function Main() {
  // A lista de restaurantes foi removida daqui
  return (
    <main className="flex flex-col md:flex-row gap-6 p-4 md:p-8 bg-gray-100">
      {/* Conteúdo principal */}
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Nossos Restaurantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((rest, index) => (
              <RestaurantCard key={index} {...rest} />
            ))}
          </div>
        </div>
      </div>

      {/* Coluna lateral com cartões extras */}
      <div className="flex flex-col gap-6 w-full md:w-1/3 lg:w-1/4">
        <LocationCard />
        <OfficialSitesCard />
      </div>
    </main>
  );
}
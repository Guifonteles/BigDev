import RestaurantCard from '../RestaurantCard';

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
    <main className="p-8">
      <h2 className="text-xl font-semibold mb-6">Nossos Restaurantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((rest, index) => (
          <RestaurantCard key={index} {...rest} />
        ))}
      </div>
    </main>
  );
}

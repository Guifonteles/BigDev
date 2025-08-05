type RestaurantCardProps = {
  image: string;
  name: string;
  address: string;
  hours: string;
  times: string[];
  activeTime: string;
};

export default function RestaurantCard({
  image,
  name,
  address,
  hours,
  times,
  activeTime,
}: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
      <img src={image} alt={name} className="rounded-md w-full h-36 object-cover mb-3" />
      <h3 className="text-md font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{address}</p>
      <p className="text-sm font-semibold text-black mt-1">{hours}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {times.map((time) => (
          <button
            key={time}
            className={`px-3 py-1 rounded font-semibold text-sm ${
              time === activeTime
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={time !== activeTime}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

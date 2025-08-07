import React, { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import LocationCard from "../../components/LocationCard";
import OfficialSitesCard from "../../components/OfficialSitesCard";
import Modal from "../../components/Modal";
import { restaurants } from "../../data/restaurants";
import { MapPin, Clock, Utensils, Send, Calendar, Users, ArrowLeft, Download, ChefHat, Check, Building } from "lucide-react";


export default function RestaurantPage() {
    const { name } = useParams();
    const restaurant = restaurants.find(r => r.name === name);
    
    // Estados dos Modais
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

    // Estado do Formulário do Modal
    const [bookingName, setBookingName] = useState('');
    const [bookingPhone, setBookingPhone] = useState('');
    const [bookingEmail, setBookingEmail] = useState('');

    // Estado dos Dados da Reserva
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedPeople, setSelectedPeople] = useState('');

    // Estado para controlar se a reserva foi feita
    const [isBooked, setIsBooked] = useState(false);


    const handleFindSlots = () => {
        // Validação simples e direta com um alerta claro.
        if (!selectedDate || !selectedTime || !selectedPeople) {
            alert("Por favor, selecione a Data, Hora e o número de Pessoas para continuar.");
            return; // Impede a execução do resto da função.
        }
        // Se tudo estiver preenchido, abre o modal.
        setIsBookingOpen(true);
    };

    const handleConfirmBooking = (event: React.FormEvent) => {
        event.preventDefault();
        setIsBookingOpen(false);
        setIsConfirmationOpen(true);
        setIsBooked(true);
    };

    const handleCancelBooking = () => {
        setIsBooked(false);
        setIsCancelModalOpen(false);
        setSelectedDate('');
        setSelectedTime('');
        setSelectedPeople('');
    };

    if (!restaurant) {
        return <div>Restaurante não encontrado.</div>;
    }

    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8 bg-gray-100">
                <div className="flex-1">
                    <RouterLink to="/" className="text-sm font-semibold mb-4 inline-block">&lt; Voltar</RouterLink>
                    
                    <div className="bg-white rounded-xl shadow p-6">
                        <img src={restaurant.mainImage || restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover rounded-md mb-4" />
                        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
                        <div className="space-y-3 text-gray-700">
                             <div className="flex items-start justify-between">
                                <div className="flex items-start">
                                    <MapPin size={20} className="mr-3 mt-1 text-gray-500"/>
                                    <p>{restaurant.address}</p>
                                </div>
                                <a href="#" className="flex items-center font-semibold text-sm whitespace-nowrap text-gray-800">
                                    <Send size={16} className="mr-2"/>
                                    Mostrar Localização
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Clock size={20} className="mr-3 text-gray-500"/>
                                <p className="font-semibold text-black">{restaurant.hours}</p>
                            </div>
                            <div className="flex items-center">
                                 <Utensils size={20} className="mr-3 text-gray-500"/>
                                 <button onClick={() => setIsMenuOpen(true)} className="underline cursor-pointer">Menu</button>
                            </div>
                        </div>
                        
                        <div className="border-t my-6"></div>

                        {isBooked ? (
                            <div className="flex items-center justify-between p-4 rounded-md border">
                                <div>
                                    <p className="font-bold">Sua reserva está confirmada!</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                                        <span className="flex items-center gap-2"><Calendar size={16}/> {selectedDate} | {selectedTime}</span>
                                        <span className="flex items-center gap-2"><Users size={16}/> {selectedPeople}</span>
                                    </div>
                                </div>
                                <button onClick={() => setIsCancelModalOpen(true)} className="font-semibold text-red-600 hover:underline">
                                    Cancelar Reserva
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-4 items-center">
                               <div className="relative flex-grow min-w-[120px]">
                                    <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <input 
                                        type="date" 
                                        className="w-full pl-10 pr-4 py-2 border rounded-md" 
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </div>
                                <div className="relative flex-grow min-w-[120px]">
                                    <Clock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <select 
                                        className="w-full pl-10 pr-4 py-2 border rounded-md appearance-none bg-white"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                    >
                                        <option value="" disabled>Hora</option>
                                        <option>19:00</option>
                                        <option>20:00</option>
                                        <option>21:00</option>
                                    </select>
                                </div>
                                <div className="relative flex-grow min-w-[120px]">
                                    <Users size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <select 
                                        className="w-full pl-10 pr-4 py-2 border rounded-md appearance-none bg-white"
                                        value={selectedPeople}
                                        onChange={(e) => setSelectedPeople(e.target.value)}
                                    >
                                        <option value="" disabled>Pessoas</option>
                                        <option>2 Pessoas</option>
                                        <option>3 Pessoas</option>
                                        <option>4 Pessoas</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="seating" value="dentro" defaultChecked />
                                        Dentro
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="seating" value="fora" />
                                        Fora
                                    </label>
                                </div>
                                <button onClick={handleFindSlots} className="bg-black text-white px-6 py-2 rounded-md font-semibold">Encontrar Vagas</button>
                            </div>
                        )}


                        <div className="border-t my-6"></div>
                        <div>
                            <h3 className="font-semibold mb-3">Horários disponíveis</h3>
                            <div className="flex flex-wrap gap-3">
                                {restaurant.times.map(time => (
                                    <button key={time} className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-300">
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="flex flex-col gap-6">
                        <LocationCard />
                        <OfficialSitesCard />
                    </div>
                </div>
            </div>

            {/* Modal do Menu */}
            <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                 <div className="flex flex-col">
                    <div className="flex items-center justify-between pb-3 border-b">
                        <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                            <ArrowLeft size={20} />
                        </button>
                        <h2 className="font-bold text-lg">{restaurant.name}</h2>
                        <div className="flex items-center gap-2">
                           <ChefHat size={20} />
                           <span className="font-semibold">Menu</span>
                        </div>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <Utensils size={24} className="text-gray-600"/>
                            <div>
                                <p className="font-semibold">Almoço (segunda a sexta 11am-4pm)</p>
                                <a href="#" className="flex items-center gap-1 text-sm text-blue-600 underline">
                                    <Download size={14}/> Download Menu
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Modal de Confirmação de Dados */}
            <Modal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)}>
                <div className="flex flex-col">
                    <div className="flex items-center pb-3 border-b mb-4">
                        <button onClick={() => setIsBookingOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                            <ArrowLeft size={20} />
                        </button>
                        <h2 className="font-bold text-lg mx-auto">{restaurant.name}</h2>
                    </div>
                    <div className="flex flex-col gap-2 border-b pb-4 mb-4">
                        <div className="flex items-center gap-4"><Calendar size={16}/> <span>{selectedDate} | {selectedTime}</span></div>
                        <div className="flex items-center gap-4"><Users size={16}/> <span>{selectedPeople}</span></div>
                    </div>
                    
                    <form onSubmit={handleConfirmBooking} className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm font-semibold">Telefone</label>
                            <div className="flex items-center border rounded-md mt-1">
                                <span className="px-3">🇧🇷</span>
                                <input 
                                    type="tel" 
                                    className="w-full p-2 outline-none" 
                                    value={bookingPhone} 
                                    onChange={(e) => {
                                        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                                        setBookingPhone(onlyNums);
                                    }} 
                                    required 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Nome Completo</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border rounded-md mt-1" 
                                value={bookingName} 
                                onChange={(e) => setBookingName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Email <span className="text-gray-500">(Opcional)</span></label>
                            <input 
                                type="email" 
                                className="w-full p-2 border rounded-md mt-1" 
                                value={bookingEmail} 
                                onChange={(e) => setBookingEmail(e.target.value)} 
                            />
                        </div>
                        <div className="border-t pt-4 mt-2">
                             <button type="submit" className="bg-black text-white w-full py-3 rounded-md font-semibold">Reservar Agora</button>
                        </div>
                    </form>
                </div>
            </Modal>

            {/* Modal de Sucesso */}
            <Modal isOpen={isConfirmationOpen} onClose={() => setIsConfirmationOpen(false)}>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Check size={40} className="text-black" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Mesa reservada com sucesso</h2>
                    <div className="border-t w-full my-4"></div>
                    <p className="font-semibold">{bookingName}    {bookingPhone}</p>
                    <div className="border-t w-full my-4"></div>
                    <div className="flex justify-between w-full text-sm text-gray-600 mb-6">
                        <span className="flex items-center gap-2"><Calendar size={16}/> {selectedDate} | {selectedTime}</span>
                        <span className="flex items-center gap-2"><Users size={16}/> {selectedPeople}</span>
                    </div>
                     <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 self-start">
                        <Building size={16}/> Interior
                    </div>
                    <button onClick={() => setIsConfirmationOpen(false)} className="bg-black text-white w-full py-2 rounded-md font-semibold">Pronto</button>
                    <p className="text-xs text-gray-500 mt-4">
                        Sua mesa está reservada! Como você reservou sua mesa com a Dime In Florida, receberá automaticamente 2% de desconto na sua conta ao pagar.
                    </p>
                </div>
            </Modal>

            {/* Modal de Confirmação de Cancelamento */}
             <Modal isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)}>
                <div className="flex flex-col items-center text-center p-4">
                    <h2 className="text-xl font-semibold mb-4">Tem certeza de que deseja cancelar a reserva?</h2>
                    
                    <div className="flex gap-4 w-full mb-4">
                        <button 
                            onClick={handleCancelBooking} 
                            className="flex-1 py-2 border border-gray-300 rounded-md font-semibold text-red-600 hover:bg-red-50"
                        >
                            Cancelar
                        </button>
                        <button 
                            onClick={() => setIsCancelModalOpen(false)} 
                            className="flex-1 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800"
                        >
                            Voltar
                        </button>
                    </div>
                    
                    <div className="border-t w-full pt-4">
                        <p className="text-sm text-gray-500 mb-2">Seus pontos usados não serão reembolsados</p>
                        <a href="#" className="text-sm text-blue-600 underline">Política de Cancelamento</a>
                    </div>
                </div>
            </Modal>
        </>
    );
}
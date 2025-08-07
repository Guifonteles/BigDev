import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dados mocados para o histórico de reservas
const bookingHistory = [
    { name: 'PollGreen Irish Pub', date: '25 Maio 2025 | 12:15 PM', people: '2 Pessoas', image: '/images/bar.jpg' },
    { name: 'São & Salvo Boteco', date: '17 Abril 2025 | 12:15 PM', people: '2 Pessoas', image: '/images/parmegiana.jpg' },
    { name: 'Blu Méditerranée', date: '14 Fevereiro 2025 | 12:15 PM', people: '2 Pessoas', image: '/images/peixes.jpg' },
];


export default function ProfilePage() {
    const [email, setEmail] = useState('seuemail@exemplo.com');
    const [name, setName] = useState('Seu Nome Completo');
    const [phone, setPhone] = useState('+55 99 99999-9999');

    return (
        <div className="bg-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Coluna Esquerda: Formulário do Perfil */}
                <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
                    {/* 1. Link corrigido para /homescreen */}
                    <Link to="/homescreen" className="text-sm font-semibold mb-6 inline-block">&lt; Meu Perfil</Link>
                    
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Telefone</label>
                            <input 
                                type="tel" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="flex gap-4 pt-4">
                            {/* 2. Botão "Voltar" também corrigido para /homescreen */}
                            <Link to="/homescreen" className="flex-1">
                                <button type="button" className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    Voltar
                                </button>
                            </Link>
                            <button type="submit" className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800">
                                Salvar Mudanças
                            </button>
                        </div>
                    </form>
                </div>

                {/* Coluna Direita: Histórico de Reservas */}
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4">Histórico de Reservas</h2>
                    <div className="space-y-4">
                        {bookingHistory.map((booking, index) => (
                            <div key={index} className="flex items-center border-b pb-4">
                                <img src={booking.image} alt={booking.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <h3 className="font-bold">{booking.name}</h3>
                                    <p className="text-sm text-gray-600">Reservado:</p>
                                    <p className="text-sm font-semibold">{booking.date}</p>
                                    <p className="text-sm font-semibold">{booking.people}</p>
                                </div>
                                <a href="#" className="text-sm text-red-600 font-semibold hover:underline">Cancelar</a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
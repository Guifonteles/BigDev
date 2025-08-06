import React, { useState } from 'react';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  return (
    <div className="flex min-h-screen">
      {/* LADO ESQUERDO: IMAGEM */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/sua-imagem.jpg')" }}></div>

      {/* LADO DIREITO: FORMULÁRIO */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Bem Vindo </h2>

          {/* Botões de alternância */}
          <div className="flex justify-center gap-2 mb-4">
            <button
              onClick={() => setLoginMethod('email')}
              className={`px-4 py-2 border rounded-md w-24 text-sm ${
                loginMethod === 'email' ? 'bg-black text-white' : 'bg-white text-black border-gray-300'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`px-4 py-2 border rounded-md w-24 text-sm ${
                loginMethod === 'phone' ? 'bg-black text-white' : 'bg-white text-black border-gray-300'
              }`}
            >
              Phone
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">
                {loginMethod === 'email' ? 'Email' : 'Telefone'}
              </label>
              <input
                type={loginMethod === 'email' ? 'email' : 'tel'}
                placeholder={loginMethod === 'email' ? 'SeuNome@email.com' : '(00) 00000-0000'}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <p className="text-red-500 text-sm mt-1">
                Insira um {loginMethod === 'email' ? 'e-mail' : 'número de telefone'} válido
              </p>
            </div>

            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" id="termos" />
              <label htmlFor="termos">Concordo com os Termos e Condições e a Política de Privacidade</label>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md font-semibold text-sm">
              Entrar
            </button>

            <div className="text-sm text-center">
              Não tem uma conta? <a href="#" className="font-semibold underline">Inscreva-se</a>
            </div>

            <div className="text-sm text-center">
              <a href="#" className="text-gray-700 underline">Continuar como convidado</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

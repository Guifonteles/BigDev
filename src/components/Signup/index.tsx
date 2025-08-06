import React, { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* LADO ESQUERDO: IMAGEM */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/sua-imagem.jpg')" }}
      ></div>

      {/* LADO DIREITO: FORMULÁRIO */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Vamos começar</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="seunome@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Telefone</label>
              <div className="flex">
                <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md text-sm text-gray-600 bg-gray-50">
                  🇧🇷 +55
                </span>
                <input
                  type="tel"
                  placeholder="6165415644"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Criar senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-sm text-gray-500"
                >
                  👁
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Confirme sua senha</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-sm text-gray-500"
                >
                  👁
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>A senha deve conter no mínimo 8 caracteres</p>
              <p>A senha deve conter pelo menos um símbolo, por exemplo @, !</p>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-semibold text-sm"
            >
              Enviar senha de uso único
            </button>

            <div className="text-sm text-center mt-2">
              Já tem uma conta?{' '}
              <a href="/login" className="font-semibold underline">
                Entrar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
